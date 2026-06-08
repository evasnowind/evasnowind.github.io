---
title: "Windows环境下docker安装、使用mysql镜像"
date: "2015-12-24"
categories: [linux, 虚拟化, 软件]
source: "http://prayerlaputa.com/?p=177"
---

# Windows环境下docker安装、使用mysql镜像

这些天在研究docker的使用，平时开发用惯了windows，遂也尝试用windows下的Docker Toolbox，结果发现到底还是没Linux环境下便捷啊。\
言归正传，安装好Docker Toolbox后，docker pull 各种镜像一般没啥问题（当然，天朝的墙可能会让你拉不下来，我个人感觉是，docker官网直接访问很慢……），但我在安装完毕、启动一个mysql容器时，注意一定要按照mysql镜像官方指导中给出的参数启动、设置好名称和root密码等信息，否则第一次没成功、可能导致后续再重新启动容器时会有问题，建议如果遇到我说的这种情况（此时用docker ps -a可以看到已经有mysql容器在运行），直接删掉docker中已经运行这些mysql容器。\
mysql容器启动成功后，用navicat连接mysql容器，却遇到一个10038的问题，网上说一般是端口没打开或是没配置好（比如防火墙直接屏蔽该端口等），如果是linux环境下直接安装docker，估计方便很多，但windows有些蛋疼的地方在于：docker实际是运行在一个linux虚拟机中，各种容器又运行在docker中，如下图（来自官网）\
[![win_docker_host](http://www.prayerlaputa.com/wp-content/uploads/2015/12/win_docker_host-236x300.png)](http://www.prayerlaputa.com/wp-content/uploads/2015/12/win_docker_host.png)\
在window环境下，这就导致：如果在启动容器时，用docker run -p hostPort:port 的方式指定端口映射，那这个映射实际上只是指定了 **linux虚拟机hostPort端口 -> 该容器port端口** 的映射，而我的连接是在windows中发出的，**windows某端口 –> linux虚拟机hostPort端口** 也需要设置啊，否则必然连不通啊亲，o(╯□╰)o\
这个设置也比较简单，直接启动virtual box虚拟机，设置default虚拟机的网络端口转发规则，这个就不截图了，很好找的，自己动手加上一个新的规则，将本地某端口（windows下的某端口）映射到linux的hostPort端口即可。\