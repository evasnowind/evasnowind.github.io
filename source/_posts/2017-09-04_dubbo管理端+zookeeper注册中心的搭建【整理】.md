---
title: "dubbo管理端+zookeeper注册中心的搭建【整理】"
date: "2017-09-04"
categories: [java, web, 架构, 软件]
source: "http://prayerlaputa.com/?p=531"
---

# dubbo管理端+zookeeper注册中心的搭建【整理】

类似的文章网上很多，不打算重复写人家写过的东西，大家参考这两篇文章应该就够了，今天写这文章纯粹为了整理一下留个记录——\
http://blog.csdn.net/evankaka/article/details/47858707 [Dubbo-Admin管理平台和Zookeeper注册中心的搭建](http://blog.csdn.net/evankaka/article/details/47858707)\
http://www.cnblogs.com/zihanxing/p/7359727.html [ZooKeeper 集群的安装、配置—Dubbo 注册中心](http://www.cnblogs.com/zihanxing/p/7359727.html)\
需要注意的是：\
1、zookeeper集群大家时需要我们自己写myid文件。\
2、dubbo-admin配置文件里，如果要连zookeeper集群，编写格式如下：

`zookeeper://10.20.153.10:2181?backup=10.20.153.11:2181,10.20.153.12:2181`\
并不是以逗号分隔，大家注意一下就好。