---
title: "could not find the main class(eclipse不能运行类) -解决方法【转载】"
date: "2011-06-29"
categories: ["工具", "IDE"]
tags: ["Eclipse"]
source: "http://prayerlaputa.com/?p=392"
description: "最近做项目把JDK的版本升到了1.6，但是问题也就随之而来。 首先，在eclipse中启动Tomcat服务器，始终不能启动。"
---

转载地址：

http://wenku.baidu.com/view/fa749e737fd5360cba1adbdd.html

最近做项目把JDK的版本升到了1.6，但是问题也就随之而来。\
首先，在eclipse中启动Tomcat服务器，始终不能启动

<!-- more -->

[![clip_image002](/images/201108141347089996_b4c9aedb.jpg)](/images/201108141347089996_b4c9aedb.jpg)

java.lang.NoClassDefFoundError: jdk1/6/0/10\
 \
\
开始以为是版本不兼容，但是直接发布在Tomcat目录下，直接点击Tomcat的StartUp.bat是可以启动的，运行正常。\
于是写了一个测试类，在eclipse中运行这个类，只是输出几个字符，居然也不可以，报错信息一样。\
Google了些信息出来，无非是说设置path，classpath等，按照这个照做后，很遗憾，报错信息依旧，而且我原来用1.5版本时也没有配置这些变量。\
整整一个下午的时间，头晕脑胀，却一无所获。\
 \
其实是一个地方的配置写错了。大家注意了：\
[![clip_image004](/images/201108141347274950_7cac4ff0.jpg)](/images/201108141347274950_7cac4ff0.jpg)\
红色框起来的地方，这里本来是输入vm参数的，结果我copy/paste，当成了jre的名字，这个参数jre当然不会识别了，但是 jre 给出的提示信息也有点误导，你要是直接提示“vm 参数错误”就好找了，偏偏显示的是 java.lang.NoClassDefFoundError: jdk1/6/0/10。\
下面总结一下：\
在用eclipse时无需在环境变量中配置path、classpath等。\
在eclipse中配置jre\
[![clip_image006](/images/20110814134733419_92084d5d.jpg)](/images/20110814134733419_92084d5d.jpg)\
[![clip_image008](/images/20110814134857665_3a2da0f1.jpg)](/images/20110814134857665_3a2da0f1.jpg)\
[![clip_image010](/images/201108141349159895_37673536.jpg)](/images/201108141349159895_37673536.jpg)\
配置编译选项\
[![clip_image012](/images/20110814134928984_24fb6ee2.jpg)](/images/20110814134928984_24fb6ee2.jpg)\
再针对具体工程设置\
[![clip_image012[1]](/images/201108141349417056_c0bf4f02.jpg)](/images/201108141349417056_c0bf4f02.jpg)\
[![clip_image014](/images/201108141349583354_e968be63.jpg)](/images/201108141349583354_e968be63.jpg)\
[![clip_image016](/images/201108141350088676_14fdecdf.jpg)](/images/201108141350088676_14fdecdf.jpg)\
[![clip_image018](/images/201108141350415483_beac7448.jpg)](/images/201108141350415483_beac7448.jpg)\
运行时类配置\
[![clip_image020](/images/201108141350495463_8f43673e.jpg)](/images/201108141350495463_8f43673e.jpg)\
[![clip_image022](/images/20110814135103979_1d41625b.jpg)](/images/20110814135103979_1d41625b.jpg)\
好了，完结。\
希望对大家有帮助。