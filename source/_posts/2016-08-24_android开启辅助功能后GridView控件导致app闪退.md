---
title: "android开启辅助功能后GridView控件导致app闪退"
date: "2016-08-24"
categories: [android, java]
source: "http://prayerlaputa.com/?p=218"
---

# android开启辅助功能后GridView控件导致app闪退

app上线前遇到一个很诡异的问题，同一款型号的手机，一台手机没问题，另一台手机则在显示首页后假死、然后直接闪退。经过排查，确定是自定义GridView惹的祸，异常信息如下：

```
 java.lang.IllegalArgumentException: parameter must be a descendant of this view
 at android.view.ViewGroup.offsetRectBetweenParentAndChild(ViewGroup.java:5353)
 at android.view.ViewGroup.offsetDescendantRectToMyCoords(ViewGroup.java:5282)
 at android.view.ViewGroup$ViewLocationHolder.init(ViewGroup.java:7755)
 at android.view.ViewGroup$ViewLocationHolder.obtain(ViewGroup.java:7689)
 at android.view.ViewGroup$ChildListForAccessibility.init(ViewGroup.java:7624)
 at android.view.ViewGroup$ChildListForAccessibility.obtain(ViewGroup.java:7592)
 at android.view.ViewGroup.addChildrenForAccessibility(ViewGroup.java:1927)
 at android.view.ViewGroup.onInitializeAccessibilityNodeInfoInternal(ViewGroup.java:2982)
 at android.widget.AdapterView.onInitializeAccessibilityNodeInfoInternal(AdapterView.java:983)
 at android.widget.AbsListView.onInitializeAccessibilityNodeInfoInternal(AbsListView.java:1509)
 at android.widget.GridView.onInitializeAccessibilityNodeInfoInternal(GridView.java:2361)
 at android.view.View.onInitializeAccessibilityNodeInfo(View.java:6151)
 at android.view.View.createAccessibilityNodeInfoInternal(View.java:6110)
 at android.view.View.createAccessibilityNodeInfo(View.java:6095)
 at android.view.accessibility.AccessibilityRecord.setSource(AccessibilityRecord.java:145)
 at android.view.accessibility.AccessibilityRecord.setSource(AccessibilityRecord.java:119)
 at android.view.View.onInitializeAccessibilityEventInternal(View.java:6047)
 at android.widget.AdapterView.onInitializeAccessibilityEventInternal(AdapterView.java:994)
 at android.view.View.onInitializeAccessibilityEvent(View.java:6035)
 at android.view.View.sendAccessibilityEventUncheckedInternal(View.java:5896)
 at android.view.View.sendAccessibilityEventUnchecked(View.java:5881)
 at android.view.View$SendViewStateChangedAccessibilityEvent.run(View.java:22468)
 at android.os.Handler.handleCallback(Handler.java:743)
 at android.os.Handler.dispatchMessage(Handler.java:95)
 at android.os.Looper.loop(Looper.java:150)
 at android.app.ActivityThread.main(ActivityThread.java:5546)
 at java.lang.reflect.Method.invoke(Native Method)
 at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:794)
 at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:684)
```

\
直接在网上搜这个异常信息，会出来类似的问题，比如[这个帖子](http://stackoverflow.com/questions/26752161/illegalargumentexception-parameter-must-be-a-descendant-of-this-view-at-viewgrou)，这些帖子给出的异常信息相似，最后给出的解决方案也类似，都是说焦点问题，只要调用clearFocus就可以了（这个清楚焦点的操作可以在多个地方进行），但我都试过，发现这些方法都没法解决我遇到的问题。后来通过同事试用app反馈，发现只要打开android系统的辅助功能（android accessibility 比如开关控制、放大手势之类的，不同手机菜单名可能不一样，比如MIUI中是在“无障碍”中的那些功能），就会出现这个问题。然后重新搜，发现是“检测窗口内容（检查您正与其他互动的窗口的内容）”这个功能导致的，在React项目也存在该问题，参考如下链接 [传送门](https://github.com/facebook/react-native/commit/57c40d9a6f5a901cf108b72ab18f4bae9fc246e2#diff-6453d554bf967fe816a1aa3735c9fe62)  以我的使用场景为例，在我修改GridView后，添加view似乎并不是像其他控件那样，把新添加的View加到整个ViewTree中，而使用辅助功能时，需要从ViewTree的根遍历到所有叶子View，到GridView这一层没法往下走，才导致了上述问题。实际上，看异常也可以看到是在涉及accessibility相关方法时出错，所以只要在GridView中添加如下代码即可解决：

```
 @Override
 public void addChildrenForAccessibility(ArrayList<View> outChildren) {
 // Explicitly override this to prevent accessibility events being passed down to children
 // Those will be handled by the mHostView which lives in the dialog
 }
```