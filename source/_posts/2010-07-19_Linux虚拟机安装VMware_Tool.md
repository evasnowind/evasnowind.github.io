---
title: "Linux 虚拟机安装 VMware Tools"
date: "2010-07-19"
categories: ["Linux"]
tags: ["Linux"]
source: "http://prayerlaputa.com/?p=414"
description: "这时，虚拟机系统中会弹文件选择对话框，就是我们导入的VMware Tools。 接下来在系统中操作。"
---

原文链接：<http://robert-liu.javaeye.com/blog/534051>
 
 
在虚拟机中安装完系统后，常会遇到一些使用不便的问题，比如鼠标切换不顺畅、分辨率过低等。这时可以通过安装 VMware Tools 来改善体验。

<!-- more -->

- 启动系统后，鼠标切出，点击 `VM -> Settings`，
- 在弹出的对话框里选择 `CD-Rom`，在右边选择 `Use ISO image`，并将其路径设置到 VMware 的安装目录下，例如 `D:\Program Files\VMware\VMware Workstation\linux.iso`。（根据你安装的虚拟系统，选择不同的 image，这些是 VMware 自带的。）
- 然后关闭，再单击 `VM -> Install VMware Tools`。

这时，虚拟机系统中会弹出文件选择对话框，也就是我们导入的 VMware Tools。接下来在系统中继续操作。

以 root 身份执行：
cd /media/cdrom 
cp VMwareTools-5.5.1-19175.tar.gz /tmp
cd /tmp 
tar zxpf VMwareTools-5.5.1-19175.tar.gz
cd vmware-tools-distrib
./vmware-install.pl  
接下来一路回车就可以了。
安装成功后，重启系统，之前遇到的问题，就能解决了。
 