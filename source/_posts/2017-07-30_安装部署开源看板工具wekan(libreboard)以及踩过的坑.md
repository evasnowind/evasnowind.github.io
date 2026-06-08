---
title: "安装部署开源看板工具wekan(libreboard)以及踩过的坑"
date: "2017-07-30"
categories: [java, web, 开源]
source: "http://prayerlaputa.com/?p=534"
---

# 安装部署开源看板工具wekan(libreboard)以及踩过的坑

一直很想使用看板工具来管理工作任务，市面上trello/teambition等有很多有用的工具，方便更新工作状态。然而，由于公司内网没法连外网，只能自己部署一套了。幸好目前这类实现比较多，我选用了wekan，之前叫做libreboard，http://github.com/wekan/wekan  。东西不错，跟trello很类似，但github上的wiki安装说明很滞后，有些地方说的也不是很清楚，我自己部署过程中也踩了几个坑，记录一下。\
首先是安装方式，wekan的wiki写的还是很多的，有各种安装方式，我发帖咨询后感觉目前作者一直主要在维护的是docker版本，其他的版本可能滞后一些，所以建议大家直接使用docker安装吧。

### **docker安装方式**

最简单的方法就是直接下载、运行wekan给出的docker脚本，参见<https://github.com/wekan/wekan-mongodb> 。

### **snap安装方式**

ubuntu上用这种会比较简单，直接几条命令搞定，参考：<https://github.com/wekan/wekan-snap/wiki/Install>\
注意，用这种方式安装时，如果之前从未使用过snap，会先下载一个ubuntu-core的包，然后才会去下载wekan的包。\
我个人是选用这种方式，个人经验是，安装完ubuntu-core之后，如果立即安装wekan包容易出问题。所以建议先使用

> snap install hello-world

安装hello w0rld应用，然后调用

> /snap/hello-world/current/bin/echo

验证snap可用(显示hello-world字符串)，然后再去使用如下命令安装wekan

> snap install wekan

这样不容易出问题。

### **其他安装方式**

大家自行按照wekan的github wiki说明来做吧。

## 配置

安装其实还好，但配置方面wekan的wiki有几个地方没明确说，简单汇总一下我遇到的坑：

- 安装后，如果不做任何配置，虽然能登录、注册、创建card，但点击card时报错
  - wekan站点默认监听的是8080端口，但点击一个card时默认是80端口，因此必须配置wekan的port以及root\_url配置项。具体修改github wiki。
- ubuntu虚拟机中用snap安装了wekan，配置root-url=”localhost:xxx”，我访问宿主机ip，没问题，但点击card后，域名由宿主机ip/…变成了localhost/…..
  - root\_url没配置好，我是将虚拟机部署在宿主机上，用virtualbox做了端口映射，但一开始root\_url还是配置成localhost:xxx 实践证明wekan是将这个参数作为点击card时的根域名。因此我重新配置root\_url为宿主机ip:xxx，然后就好使了