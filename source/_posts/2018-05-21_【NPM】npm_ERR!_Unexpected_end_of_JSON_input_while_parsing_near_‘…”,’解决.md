---
title: "【NPM】npm ERR! Unexpected end of JSON input while parsing near ‘…”,’解决方案【转载】"
date: "2018-05-21"
categories: [web]
source: "http://prayerlaputa.com/?p=621"
---

# 【NPM】npm ERR! Unexpected end of JSON input while parsing near ‘…”,’解决方案【转载】

## 问题描述

今天安装项目依赖npm install 的时候出现错误：

```
npm ERR! Unexpected end of JSON input while parsing near '...e":"^23.5.0","listr":'
```

方案一：

第一步：

```
npm cache clean --force
```

第二步：（再安装）

```
npm install --registry=https://registry.npm.taobao.org

方案二
执行以上操作依然没解决问题。最后切换为官方镜像后解决了，具体原因不详。
第一步：
```

```
npm cache clean --force
```

第二步：（再安装）

```
npm set registry https://registry.npmjs.org/
```

作者：[GeniusLyzh](http://www.cnblogs.com/GeniusLyzh/)\
出处：<http://www.cnblogs.com/GeniusLyzh/>\
本文链接：https://www.cnblogs.com/GeniusLyzh/p/9773440.html\
本文版权归作者和博客园共有，欢迎转载，须保留此段声明，并给出原文链接，谢谢！\
如果阅读了本文章，觉得有帮助，欢迎点击右下角推荐