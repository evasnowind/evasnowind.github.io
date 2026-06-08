---
title: "ubuntu下vsftpd的安装与配置"
date: "2015-12-09"
categories: [工具, 软件]
source: "http://prayerlaputa.com/?p=92"
---

# ubuntu下vsftpd的安装与配置

ubuntu下安装软件一般都很简单，FTP也是如此，貌似vsftpd用的比较多，因此前两天也在一台机器上试验了一下，过程如下：\
1、安装vsftpd：在终端中输入sudo apt-get install vsftpd。\
2、配置vsftpd：安装成功后，要对vsftpd进行配置，vsftpd的配置文件为/etc/vsftpd.conf，使用sudo vim /etc/vsftpd.conf就可以进入编辑状态了，当然如果读者安装的ubuntu有图形界面（个人使用的桌面版），那也可以使用sudo gedit /etc/vsftpd.conf来进行编辑，这样更舒服一些。\
好了，言归正传，继续我们的配置工作——vsftpd.conf的修改。这个文件中有很多被注释掉的内容，需要视自己的使用情况进行修改，如果需要某种服务，删掉“#”即可，当然有些地方可能还需要你额外写6一些东西，比如说chroot\_list\_file（如果你需要额外添加一些账户连接FTP）。如果修改的不合适，FTP是没法正常使用的。下面是我的配置文件内容：\
`\
　　listen = YES\
anonymous_enable = NO\
local_enable = YES\
write_enalbe = YES\
local_umask = 022\
user_localtime = YES\
xferlog_enable = YES\
connect_from_port_20 = YES\
xferlog_std_format = YES\
chroot_local_user = YES\
secure_chroot_dir = /var/run/vsftpd/empty\
pam_service_name = vsftpd\
rsa_cert_file = /etc/ssl/private/vsftpd.pem\`\
每一行具体的代表什么含义我就不详细说了，可以参考[Ubuntu下Vsftpd服务器配置指南](http://www.prayer-laputa.com/blog/wp-content/uploads/2012/02/Ubuntu%E4%B8%8BVsftpd%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.pdf)这篇来自ubunut wiki的文章。\
需要说明的是，网上说vsftpd服务开始、停止、重启的命令都是 sudo /etc/init.d/vsftpd start(或者是stop、restart)，我在ubuntu 11.04上试验都不行（桌面版，并非服务器版），会提示“Rather than invoking init scripts through /etc/init.d, use the service(8) utility, e.g. service vsftpd start. ….”，其实就是提示用终端中使用service vsftpd start命令来启动vsftpd服务（当然，前面要加sudo），这个网上查没什么有用结果，只能先这样几下了，在刚刚给出的那本[Ubuntu下Vsftpd服务器配置指南](http://www.prayer-laputa.com/blog/wp-content/uploads/2012/02/Ubuntu%E4%B8%8BVsftpd%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97.pdf)中，也是使用这种命令，而不是sudo /etc/init.d/vsftpd start，这个不是很理解，先这样记下吧。\
另外，需要说明的是，貌似chroot\_local\_user = YES是必须开的，否则会出现可以连接到FTP，但是无法将文件传到FTP服务器上的情况，这个也不知道是为啥，可能是vsftpd本身要求限制用户对其他文件夹的使用吧。