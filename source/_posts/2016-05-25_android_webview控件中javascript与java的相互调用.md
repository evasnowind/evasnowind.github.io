---
title: "android webview控件中javascript与java的相互调用"
date: "2016-05-25"
categories: [android, java, web]
source: "http://prayerlaputa.com/?p=211"
---

# android webview控件中javascript与java的相互调用

首先说明下，本帖主要是为了给出思路，不会给出特别细的教学代码，详细的API使用网上搜就好了。\
先给出一个对于webview的帖子：[有关webview中js与java互调的帖子](http://ju.outofmemory.cn/entry/223084)\
***javascript调用java***\
也就是说通过webview所访问的web站点，希望通过js调用android本身的接口实现某些功能。这种情况下可以用webview控件的addJavascriptInterface接口注册一个js接口，然后web站点中调用这个接口即可，可以参考这个例子：[传送门](http://www.cnblogs.com/lee0oo0/archive/2012/08/01/2617953.html)。\
必须说明的是，在android 4.2（API<17）版本之前的WebView，addJavascriptInterface存在漏洞，所以使用一定要慎重。参考如下帖子：[传送门](http://ju.outofmemory.cn/entry/223084)。也因为这个漏洞，貌似addJavascriptInterface这个接口实际用的貌似并不多。\
***java调用javascript***\
这个相对简单，有两种方式，对于android 4.4之前，在JS中定义好即将提供给Native的方法javaCallJS()，然后用webview.loadUrl(“javascript:javaCallJS()”)即可。当然，也可以直接拼好一个字符串（如“javascript:function test(){alert(‘test’);} test();”），然后直接传给loadUrl。但需要说明，使用loadUrl方式执行js是在UI线程中进行的，因此如果需要运行较长时间的js，最好不要用loadUrl。\
android 4.4之后，webview新提供了一个evaluateJavascript接口用于执行js，此接口异步执行js。内部实现机制见此帖：[传送门](http://stackoverflow.com/questions/19788294/how-does-evaluatejavascript-work)。使用上与loadUrl类似，直接将“javascript:function test(){alert(‘test’);} test();”这样的字符串传给该接口即可。\
那么，对于android 4.4之前的webview，如果真出现了不能用loadUrl调用js的情况，应该如何呢？笔者就遇到这么个问题：为了在web站点的js中获取软键盘高度，需要在键盘弹出时由webview调用一个js将高度传给web页面，可是某款手机（其他几款测试手机没问题，唉……）在loadUrl执行js函数时，居然发现软键盘弹出后立马闪退了，原因就是在弹出键盘、调用js后，看上去js的执行重新刷了页面，导致键盘又隐藏了。为解决这问题，我和同事一起钻研了好长时间，发现还有JSBridge这么个好东西，具体原理与使用参考这个帖子：[JSBridge的原理与实现](http://android.jobbole.com/82507/)。具体使用此处不再给出。GitHub上可以参考这个项目：[JSBridge](https://github.com/lzyzsd/JsBridge)。\
 \