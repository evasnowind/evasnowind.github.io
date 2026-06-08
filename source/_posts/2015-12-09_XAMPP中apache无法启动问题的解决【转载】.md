---
title: "XAMPP中apache无法启动问题的解决【转载】"
date: "2015-12-09"
categories: [linux, 工具]
source: "http://prayerlaputa.com/?p=88"
---

# XAMPP中apache无法启动问题的解决【转载】

XAMPP中apache无法启动问题的解决\
转载地址：http://www.yange.org/?p=141\
xampp启动时默认需要80和用于https服务的443端口。一般不能启动都是因为这两个端口被占用。\
检查方法就是用 netstat -ano 查看80和443端口使用情况，按占用该端口的PID到任务管理器中查找对应pid的进程名称并采取相应措施即可解决。\
80端口被占用的情况好解决，禁用占用80端口的程序，或者修改xampp\apache\conf\httpd.conf 的配置，改用其他端口。\
如果安装了vmware，特别是新版的vmware 8，很有可能导致443端口被占用，我的xampp启动不了就是因为vmware 8 的vmware-hostd.exe进程占用了443端口。可以到vmware的设置中禁用Shared VMs功能，或者在windows的服务中禁用VMeare Workstation Serveice服务。或者修改 xampp\apache\conf\extra\httpd-ssl.conf配置443端口为其他数字或者禁用该服务。