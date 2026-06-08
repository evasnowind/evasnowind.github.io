---
title: "Android中Handler使用postDelayed方法不生效"
date: "2016-01-20"
categories: [android, java, 学习]
source: "http://prayerlaputa.com/?p=185"
---

# Android中Handler使用postDelayed方法不生效

今天遇到一个比较奇怪的问题，在我们所用的客户端框架中，使用Handler执行一个任务，基本用法如下，但调试时发现并没有执行mRunnable。

```
private Handler mHandler = new Handler();
……
public boolean dispatchTouchEvent(){
……
mHandler.postDelayed(mRunnable, 500);
……
}
```

\
但是，当我修改一下，将mHandler修改为局部变量，如下，却发现mRunnable正常执行了。

```
……
public boolean  dispatchTouchEvent(){
 ……
 Handler mHandler = new Handler();
 mHandler.postDelayed(mRunnable, 500);
 ……
}
```

请教了下大牛，然后才发现我这个控件并没有运行在UI线程中，而查看Handler源代码，就会发现Handler能正常运行需要一个Looper，而Handler()这个构造方法通过Looper.myLooper()方法获取一个Looper对象，以便将消息传递给相应的目标。在上面的写法中，如果我将其作为类变量，Handler创建时**并未在主线程中**，没有合适的Looper对象，导致虽然我使用postDelayed方法发送了一个任务，但这个任务并未被执行。有关Handler和Looper的详细说明可以参考这篇文章：[Android Looper和Handler](http://www.cnblogs.com/tt_mc/archive/2012/01/30/2331876.html) 。既然是Looper导致的，可以修改一下创建Handler对象的方式，传入一个Looper对象，如下，即传入主线程的Looper，即可解决该问题

```
<pre>private Handler mHandler = new Handler(Looper.getMainLooper());
……
public boolean dispatchTouchEvent(){
……
mHandler.postDelayed(mRunnable, 500);
……
}</pre>
```