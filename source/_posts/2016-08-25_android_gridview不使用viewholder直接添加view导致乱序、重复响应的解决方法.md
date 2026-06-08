---
title: "android gridview不使用viewholder直接添加view导致乱序、重复响应的解决方法"
date: "2016-08-25"
categories: [android, java, 源码剖析]
source: "http://prayerlaputa.com/?p=221"
---

# android gridview不使用viewholder直接添加view导致乱序、重复响应的解决方法

要实现可拖动的九宫格，网上搜了下，搜到比较靠谱的是[这个版本](http://blog.csdn.net/xiaanming/article/details/17718579)，原理、实现都写的很清楚，但有个问题，用到GridView时，写adapter时一般都会使用ViewHolder的方式，即adapter使用BaseAdapter，adapter中保存数据，而调用getView方法时，若是第一次调用则将可复用的数据保存到一个ViewHolder类中，后续就不用再重新创建View；或者，adapter中每次根据数据创建view。\
由于公司所用的客户端框架限制，我在实现可拖动的九宫格时，在getView方法中，拿到的数据就是一个个已经创建好的View对象，但按照上面提到的[xiaanming](http://blog.csdn.net/xiaanming/article/details/17718579)的拖动实现方式，我将这些已有的View对象在getView中返回、加入到GridView后，发现显示没问题，但是拖动之后，View的显示顺序会乱掉，而且会出现第一次点击某个View时对应回调方法没有响应，但第二次点击时则会响应第一次点击、第二次点击两个回调方法。\
为解决这问题，在github上发现如下[可拖动九宫格的另一种实现](https://github.com/askerov/DynamicGrid)，尝试重写adapter类后解决了该问题，发现这个跟stableid有关。我一开始写的adapter大概样子如下；

```
public class GridAdapter extends BaseAdapter{
List<View> viewList;
...//init opertation
@Override
public int getCount() {
// TODO Auto-generated method stub
return viewList.size();
}
@Override
public Object getItem(int position) {
// TODO Auto-generated method stub
return viewList.get(position);
}
@Override
public long getItemId(int position) {
// TODO Auto-generated method stub
return position;
}
@Override
public View getView(int position, View convertView, ViewGroup parent) {
// TODO Auto-generated method stub
return viewList.get(position);
}
public void reorder(){
//reorder view list
}
```

这种写法对于ViewHolder方式或是每次创建新View放的方式实现adapter来说，没有任何问题，但由于我直接使用现有的View对象，而GridView本身又有缓存机制，导致GridView重用View对象时View的顺序和我已经创建的viewList不一致，为解决这一问题，就得说下getItemId(int pos)方法和hasStableIds()方法，可以参考[这个帖子](http://blog.csdn.net/heng615975867/article/details/16944343)，引用一下人家的话：

> getItemId是干嘛用的？在调用 invalidateView()时，ListView会刷新显示内容。如果内容的id是有效的，系统会跟据id来确定当前显示哪条内容，也就是firstVisibleChild的位置。id是否有效通过hasStableIds()确定。

我的理解是，在BaseAdapter中，hasStableIds()方法默认返回false，意思是每个item元素的id不稳定，会根据item位置来确定id；如果返回true，表示每个item元素的id是稳定的，即相同的id引用相同的对象。这是因为默认id不稳定，导致我上面写的adapter在进行拖拽操作后，item元素（view对象）位置变了，但其id并没有与我在重排列viewList时一致，导致很古怪的乱序或是重复响应问题。参考[可拖动九宫格的另一种实现](https://github.com/askerov/DynamicGrid) 后，修改adapter实现如下：

```
private HashMap<Object, Integer> mIdMap = new HashMap<Object, Integer>();
private ArrayList<Object> mItems = new ArrayList<Object>();
public ArrayList<Object> getItemList(){
return mItems;
}
@Override
public final boolean hasStableIds() {
return true;
}
/**
* creates stable id for object
* @param item
*/
protected void addStableId(Object item) {
mIdMap.put(item, nextStableId++);
}
/**
* create stable ids for list
* @param items
*/
protected void addAllStableId(List<?> items) {
for (Object item : items) {
addStableId(item);
}
}
/**
* clear stable id map.
* should called when clear adapter data.
*/
protected void clearStableIdMap() {
mIdMap.clear();
}
/**
* remove stable id for item.
* should called on remove data item from adapter.
* @param item
*/
protected void removeStableID(Object item) {
mIdMap.remove(item);
}
private void init(List<?> items) {
addAllStableId(items);
this.mItems.addAll(items);
}
public void set(List<?> items) {
clear();
init(items);
notifyDataSetChanged();
}
public void clear() {
clearStableIdMap();
mItems.clear();
notifyDataSetChanged();
}
public void add(Object item) {
addStableId(item);
mItems.add(item);
notifyDataSetChanged();
}
public void add(int position, Object item) {
addStableId(item);
mItems.add(position, item);
notifyDataSetChanged();
}
public void add(List<?> items) {
addAllStableId(items);
this.mItems.addAll(items);
notifyDataSetChanged();
}
public void remove(Object item) {
mItems.remove(item);
removeStableID(item);
notifyDataSetChanged();
}
public GridViewAdapter(List<?> elements) {
init(elements);
}
@Override
public int getCount() {
return mItems.size();
}
@Override
public Object getItem(int position) {
return mItems.get(position);
}
/**
* get id for position
*
* @param position
* @return
*/
@Override
public final long getItemId(int position) {
if (position < 0 || position >= mIdMap.size()) {
return -1;
}
Object item = getItem(position);
return mIdMap.get(item);
}
@Override
public View getView(int position, View convertView, ViewGroup parent) {
View view =(View) getItem(position);
return view;
}
}
```

说实话，这问题很诡异，和同事一起找，找到GitHub上的九宫格不同实现，看人家代码、做尝试才解决这问题，GridView这控件太复杂，之前还遇到过GridView第一个item不响应的问题（stackoverflow上一堆相关问题），有时间再细说。上面有关BaseAdapter的分析仅仅是我参考网上帖子做的一些推断，如有错误或是疏漏欢迎大家指正。