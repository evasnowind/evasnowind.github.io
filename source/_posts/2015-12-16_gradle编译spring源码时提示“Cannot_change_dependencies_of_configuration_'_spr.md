---
title: "gradle编译spring源码时提示“Cannot change dependencies of configuration ':spring-orm-hibernate4…..”"
date: "2015-12-16"
categories: [java, web, 学习, 工具, 源码剖析]
source: "http://prayerlaputa.com/?p=151"
---

# gradle编译spring源码时提示“Cannot change dependencies of configuration ':spring-orm-hibernate4…..”

闲来无事，想学习一下spring源代码，结果按照网上说的教程从git下载spring framework(版本：3.2.4)源码、用gradle（版本：2.9） 转换成eclipse项目时遇到一个诡异问题，提示信息如下：

> :buildSrc:test UP-TO-DATE\
> :buildSrc:check UP-TO-DATE\
> :buildSrc:build UP-TO-DATE\
> FAILURE: Build failed with an exception.\
> \* What went wrong:\
> A problem occurred configuring project ‘:spring-orm-hibernate4’.\
> > Cannot change dependencies of configuration ‘:spring-orm-hibernate4:runtimeMer\
> ge’ after it has been resolved.\
> \* Try:\
> Run with –stacktrace option to get the stack trace. Run with –info or –debug\
> option to get more log output.\
> BUILD FAILED

\
搜了一下，终于在<http://segmentfault.com/q/1010000002721774> 看到了答案：是因为JDK版本与spring framework源码的版本不太匹配，一开始我用JDK 8去build，就出现上述异常，然后改用JDK 7,还是不行，索性换了***最新版的spring framework***（版本：4.x）,此时编译即可顺利通过。\
PS：spring framework相关简介、依赖等内容可参考如下链接：

- <http://projects.spring.io/spring-framework/>
- <http://docs.spring.io/spring-framework/docs/current/spring-framework-reference/html/overview.html#dependency-management>