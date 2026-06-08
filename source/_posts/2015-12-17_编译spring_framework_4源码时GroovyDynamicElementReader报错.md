---
title: "编译spring framework 4源码时GroovyDynamicElementReader报错"
date: "2015-12-17"
categories: [j2ee, java, 源码剖析]
source: "http://prayerlaputa.com/?p=153"
---

# 编译spring framework 4源码时GroovyDynamicElementReader报错

为了阅读spring源代码，用gradle重新build了spring framework 4，但发现有个项目死活过不去，spring-beans-groovy用gradle cleanidea eclipse命令build后总是出问题，直接导入eclipse中也会报错，查了一下，在 <http://bbs.csdn.net/topics/390993197> 发现问题原因：eclipse尚未安装Groovy插件，so，插件装起，eclipse Help –> install new software，添加Groovy插件地址，<https://github.com/groovy/groovy-eclipse/wiki>此处有各种eclipse版本对应的groovy插件下载地址（注意eclipse的版本），安装插件后重新clean一下spring-beans-groovy这个项目就可以了。\
以上