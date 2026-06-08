---
title: "windows 7 重装后引导ubuntu（使用Grub4Dos）"
date: "2015-12-09"
categories: [linux]
source: "http://prayerlaputa.com/?p=110"
---

# windows 7 重装后引导ubuntu（使用Grub4Dos）

本来机器上是windows 7和ubuntu，重装win 7后，ubuntu不见了，为了将其引导出来，我和同学翻了一下网上的教程，发现基本步骤相同，总结如下：\
1、书写一个boot.ini,放入C盘，内容如下\
[boot loader]\
timeout=0\
default=c:\g2ldr.mbr\
[operating systems]\
C:\g2ldr.mbr=”Grub4Dos”\
2、下载一个Grub4Dos，将下载包中的grldr、grldr.mbr两文件拷贝到C盘根目录。重启后，点击“Grub4Dos”即可。\
这里需要特别说明的是，有些win 7是采用刷BIOS方式激活的，这种情况下不能直接使用Grub4Dos中的grldr、grldr.mbr，需要对其进行修改，万幸的是ubuntu论坛里已然有大神改好了——[grldr下载](http://www.prayerlaputa.com/wp-content/uploads/2015/12/grldr.tar)\
详情请点击这里：[ubuntu论坛相关帖子](http://forum.ubuntu.org.cn/viewtopic.php?f=139&t=229387 "ubuntu论坛相关帖子")