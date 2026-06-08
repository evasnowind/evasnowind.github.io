---
title: "xx is not in the sudoers file 问题解决【转载】"
date: "2015-12-09"
categories: [linux]
source: "http://prayerlaputa.com/?p=113"
---

# xx is not in the sudoers file 问题解决【转载】

原帖地址：http://blog.sina.com.cn/s/blog\_4ef045ab0100j59t.html\
我用的是redhat5.4，在一般用户下执行sudo命令提示llhtiger is not in the sudoers file. This incident will be reported.解决方法：\
一、$whereis sudoers －－－－－－－找出文件所在的位置，默认都是/etc/sudoers\
二、 #chmod u+w /etc/sudoers 以超级用户登录su -root ，修改文件权限即添加文件拥有这的写权限 限，ls -al /etc/sudoers 可以查看原文件的权限。 \
三、vim /etc/sudoers 编辑文件，在root ALL=(ALL)ALL行下添加XXX ALL=(ALL)ALL，XXX为你的用户名。添加方法：找到root行，按下”i“键进入编辑模式添加即可！编辑好后esc键进入一般模式，“：wq”保存退出！\
最后， #chmod u－w /etc/sudoers 回到文件的原权限！\
下面这个稍微详细一点：\
在ubuntu中由于禁用了root用户，默认情况下会把安装系统时建立的用户添加到sudoers中。但在redhat和centos中并没有把任何root用户之外的用户默认的添加到sudoers之中。这样我们在执行sudo 命令时就会出现xxx is not in the sudoers file. This incident will be reported.这样的错误输出。现在为了安全起见比较提倡使用普通用户做日常操作，而在需要超级用户的时候使用sudo 来做，这样，我们就有必要把一些用户添加到sudoers之中。\
其实把用户添加到sudoers之中很简单。\
首先利用whereis 命令查找sudoers配置文件的目录（默认会在/etc/sudoers)\
[root@localhost xiaofei]# whereis sudoers\
sudoers: /etc/sudoers /etc/sudoers.bak /usr/share/man/man5/sudoers.5.gz\
然后需要切换到root用户，更改/etc/sudoers的权限\
[root@localhost xiaofei]# chmod u+w /etc/sudoers\
然后就可以利用vi编辑器来把用户添加到sudoers之中\
[root@localhost xiaofei]# vi /etc/sudoers\
然后找到root ALL=(ALL) ALL所在的位置，把所要添加的用户添加到文件之中，\
顺便提一下vi编辑器的用法。刚进入vi编辑器的时候牌命令行模式，这时可以通过方向键来移动光标，找到要编辑的位置之后按下“i”，然后就进入了插入模 式，这时候你可以输入或删除字符。编辑完成之后按“esc”键退出插入模式，进入命令行模式，这时候按“：”可以进入末行模式，输入“wq”保存并退出。\
下面是添加完的结果。\
## Allow root to run any commands anywhere\
root ALL=(ALL) ALL\
xiaofei ALL=(ALL) ALL （这一行是添加的内容，xiaofei是我的用户名）\
然后需要把sudoers 的写权限去掉（否则系统不允许执行suoders文件）：\
[root@localhost xiaofei]# chmod u-w /etc/sudoers\
至此，在退出root用户之后就可以利用sudo命令来执行超级用户的权限了。