---
title: "Linux虚拟机安装VMware Tool"
date: "2010-07-19"
categories: [虚拟化]
source: "http://prayerlaputa.com/?p=414"
---

# Linux虚拟机安装VMware Tool

转自：http://robert-liu.javaeye.com/blog/534051\
 \
 \
在虚拟机上安装完系统，可能会遇到一些使用不方便的问题，比如 鼠标切入切出，刚安装的系统分辨率低等等。\
     这个时候，我们可以安装VMware Tool来解决这些问题。

- 启动系统后，鼠标切出，点击“VM—>Settings”，
- 在弹出的对话框里选择“CD-Rom”，在右边的框中选择“Use ISO image”，并设置其值，在VMware的安装路径下，如D:Program FilesVMwareVMware Workstationlinux.iso。（根据你安装的虚拟系统，选择不同的image，这些是VMWare自带的。）
- 然后关闭，再单击“VM—>Install VMware Tools”。

      这时，虚拟机系统中会弹文件选择对话框，就是我们导入的VMware Tools。\
      接下来在系统中操作。\
以root身份执行：\
cd /media/cdrom \
cp VMwareTools-5.5.1-19175.tar.gz /tmp\
cd /tmp \
tar zxpf VMwareTools-5.5.1-19175.tar.gz\
cd vmware-tools-distrib\
./vmware-install.pl  \
接下来一路回车就可以了。\
安装成功后，重启系统，之前遇到的问题，就能解决了。\
 \