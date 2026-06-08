---
title: "Android GridView控件第一个item不响应或显示不正常"
date: "2015-12-03"
categories: [android]
source: "http://prayerlaputa.com/?p=56"
---

# Android GridView控件第一个item不响应或显示不正常

在使用Android的GridView控件时，很多人都会碰到这么个奇怪的问题：整个GridView中，所有item的响应都没问题，只有第一个item不响应，或是显示不正常，或是点完第一个item后不响应但再点其他的item后其他item会响应、同时第一个item也响应了（超诡异的现象……），stackoverflow上有不少帖子，如下面的帖子：\
<http://stackoverflow.com/questions/11778228/onclicklistener-not-working-for-first-item-in-gridview>\
<http://www.cnblogs.com/over140/p/3999815.html>\
至少就我所看到的，出现第一个item有问题的情况，一般都有使用BaseAdapter，而出问题的地方一般都是getView的书写有问题，稍微整理归纳一下可能的解决方法，供大家参考：

1. 检查getView方法中是否有动态设置LayoutParams的操作，如果有，那么**注意不能new 一个新的LayoutParams，而应该调用getLayoutParams获取已有的LayoutParams**。参见该帖中的最佳答案：<http://www.4byte.cn/question/337904/android-gridview-checkbox-of-the-first-item-not-work-when-i-recycled-convertview.html>  。如果getLayoutParams返回为空或是返回的LayoutParams不是AbsListView.LayoutParams，那就在getView之前用setLayoutParams方法设置一下。
2. listener响应有问题：尝试使用GridView的onItemClickListener，如果是onItemClickListener响应有问题，检查setOnItemClickListener是否在setAdapter之后。尽量不要采用给每个item的View加onClickListener的方式，如果必须使用该方式，并且采用了ViewHolder的写法复用View，那么需要注意加onClickListener的位置，是加在convertVew==null的地方还是外面我就记不清了，我没试过，只看到有一个帖子说过这个。
3. 如果还有问题，我看到的可能的解决方法有（没试过，不确定是否可行，但有人在相关帖子里提到的各种方法）：（1）不用ViewHolder写法，每次getView都重新创建新的View    （2）GriView设置背景色为透明

\
但就我感觉，想要动态设置GridView的item宽、高，但直接new LayoutParams导致出问题的出现次数比较多，大家注意一下，具体为啥会这样就没细究了，有兴趣的童鞋欢迎讨论一下。