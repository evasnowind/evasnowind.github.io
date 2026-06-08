---
title: "lnmp安装wordpress后不带www的域名无法访问"
date: "2015-12-21"
categories: [linux, web, wordpress, 工具, 网络]
source: "http://prayerlaputa.com/?p=157"
---

# lnmp安装wordpress后不带www的域名无法访问

在VPS上装了wordpress有一段时间了，今天才发现有个小问题：尼玛用www.prayerlaputa.com完整域名访问没问题，用不带www的域名访问就会访问到lnmp的index页面，搜了一下发现是nginx中配置域名重定向有问题，原本内容大致如下：

> server\
> {\
> listen 80;\
> #listen [::]:80;\
> server\_name www.prayerlaputa.com;\
> index index.html index.htm index.php default.html default.htm default.php;\
> root /home/wwwroot/www.prayerlaputa.com;\
> include wordpress.conf;\
> include other.conf;\
> #error\_page 404 /404.html;\
> location ~ [^/]\.php(/|$)\
> {\
> # comment try\_files $uri =404; to enable pathinfo\
> try\_files $uri =404;\
> fastcgi\_pass unix:/tmp/php-cgi.sock;\
> fastcgi\_index index.php;\
> include fastcgi.conf;\
> #include pathinfo.conf;\
> }\
> location ~ .\*\.(gif|jpg|jpeg|png|bmp|swf)$\
> {\
> expires 30d;\
> }\
> location ~ .\*\.(js|css)?$\
> {\
> expires 12h;\
> }\
> access\_log /home/wwwlogs/www.prayerlaputa.com.log access;\
> }

我的问题主要出在server\_name那一行，只写了一个www.prayerlaputa.com，导致不带www的域名解析不正常，为此我修改为

> server\_name www.prayerlaputa.com prayerlaputa.com;

之后，重启lnmp（lnmp restart），试了试，ok了。不过网上也有很多人并非这么配置的，如下文：[VPS LNMP下带www与不带www的301重定向设置方法](http://ju.outofmemory.cn/entry/53830)  贴出来给大家参考一下