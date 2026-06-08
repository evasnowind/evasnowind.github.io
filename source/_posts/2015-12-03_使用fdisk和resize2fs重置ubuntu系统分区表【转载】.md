---
title: "使用fdisk和resize2fs重置ubuntu系统分区表【转载】"
date: "2015-12-03"
categories: [linux, 学习, 工具]
source: "http://prayerlaputa.com/?p=53"
---

# 使用fdisk和resize2fs重置ubuntu系统分区表【转载】

我只是个搬运工，刚好碰到虚拟机中ubuntu空间不够、需要扩大虚拟机磁盘，vmware怎么扩展网上帖子很多，不说了，但vmware扩展虚拟机磁盘后，文件系统中并没有反应处理，就需要我们来更新分区表啥的。然后这个我查了好多帖子，终于找到比较靠谱的帖子，遂转载一下，做个记录（话说度娘真搜不出东西啊，还是google还是……）\
原帖地址：<http://askubuntu.com/questions/24027/how-can-i-resize-an-ext-root-partition-at-runtime>\
另一个类似的帖子也贴出来：<https://www.rootusers.com/how-to-increase-the-size-of-a-linux-lvm-by-expanding-the-virtual-machine-disk/>\
vmware倒是给出了修改RedHat/CentOS的修改方式：<http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1006371>\
以下是帖子正文：\
How can I increase the size of the root partition of a system at runtime?\
I have a partition that is not allocated after the root partition (which is also ext4), how can I add that unallocated space to the space allocated to the root partition without having to shutdown the server?\
 \
There are two steps to this: First, the partition must be resized. If you’re using LVM, it’s easy; if you’re using classic partitions, it’s a bit more complicated, and might require a reboot (though you never have to boot another system or live CD).\
One fragile but feasible approach (worked for me) is to use `fdisk` by first deleting the partition, then carefully recreating it with a larger size at the same position. You can do this while the partition is mounted, but you will need to reboot for the kernel to notice the changed partition table.\
Example:

```
$ sudo fdisk /dev/sda
Command (m for help): p
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     9437183     4717568   83  Linux
Command (m for help): d
Selected partition 1
Command (m for help): p
   Device Boot      Start         End      Blocks   Id  System
Command (m for help): n
Command action
   e   extended
   p   primary partition (1-4)
p
Partition number (1-4, default 1): 1
First sector (2048-10485759, default 2048):
Using default value 2048
Last sector, +sectors or +size{K,M,G} (2048-10485759, default 10485759):
Using default value 10485759
Command (m for help): p
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1            2048    10485759     5241856   83  Linux
Command (m for help): w
The partition table has been altered!
Calling ioctl() to re-read partition table.
WARNING: Re-reading the partition table failed with error 16: Device or resource busy.
The kernel still uses the old table. The new table will be used at
the next reboot or after you run partprobe(8) or kpartx(8)
Syncing disks.
```

Again, it is critical that the new partition starts at the same block as the old. The Id should also match (83 for Linux systems). Be prepared to lose all your data at the slightest typo.\
Remember to add the boot flag again, if necessary.\
By now it should be apparent why people recommend using a live CD. 😉\
However, once the partition is resized (and the system rebooted, if necessary), it’s a simple matter of running `resize2fs` on the file system, and you can do this even when it’s mounted as the root partition.\
Example:

```
$ sudo resize2fs /dev/sda1
```