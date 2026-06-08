---
title: "ubuntu下配置tmux"
date: "2015-12-03"
categories: [linux, 工具]
source: "http://prayerlaputa.com/?p=60"
---

# ubuntu下配置tmux

参考如下技术帖：\
http://www.haogongju.net/art/1767128  http://linuxtoy.org/archives/alias.html  http://forum.ubuntu.org.cn/viewtopic.php?f=122&t=297928  https://wiki.archlinux.org/index.php/Tmux\
http://blog.sina.com.cn/s/blog\_8ea8e9d50101efb9.html  http://blog.csdn.net/yjj1s/article/details/6413172\
http://blog.sina.com.cn/s/blog\_6fb9802f0106an1u.html  http://jack-boy.iteye.com/blog/1586908\
http://blog.csdn.net/yjj1s/article/details/6413172\
tmux可以称得上为终端多窗口管理神器。tmux是一个可以在终端里开启多窗口的工具，它由 OpenBSD 团队基于C语言开发并维护的，是 OpenBSD 的基础系统软件之一，基于 BSD 许可证发布，可以称之为 GNU screen 的 BSD 替代版。除了 OpenBSD 外，它也可运行于 Linux 、Freebsd、AIX、IRIX,Opensolaris 等 OS 之上。目前的最新版为1.7.在这里就不做过多介绍，这里主要将如何配置，其实配置起来很简单，只要在/etc/tmux.conf和~/.tmux.conf文件中按照规则写上配置信息即可，但需要注意的是，有时可能碰到命名在~/.tmux.conf中写了配置信息，但配置不生效的情况，此时可以重启tmux或者在命令模式（按PREFIX : ，即按下ctrl+b,再输入一个“：”)输入\
source-file ~/.tmux.conf\
即可使配置生效。\
我的配置其实挺简单，就是要将窗口分为3个部分，方便编程（一个文本编辑、一个编译运行查看运行结果、一个浏览文件系统）.\
我的配置信息如下：

> ```
> #打开utf8 支持
> set -g status-utf8 on
> setw -g utf8 on
> # statusbar 自定义，具体可以查看man 文档，非常详细
> set -g display-time 3000
> set -g status-fg blue
> new  -s work # 创建一个叫work的seesion（附带有一个window）
> neww ranger #在当前session再创建一个window运行ranger
> selectw -t 0 # 选择第一window
> splitw -h -p 50 -t 0 # 水平切割第一个pane，百分比是50
> splitw -v -p 50 -t 1 # 垂直切割第二个pane，百分比是50
> selectp -t 0 # 选择第一个pane
> ```

这样配置后，只需要在命令行中运行“tmux attach -t work”即可进入到已经在配置信息中定义好的3窗口的界面。不过为了避免每次都输入“tmux attach -t work”，可以为这条命令起一个别名：

> alias tmux2work=”tmux attach -t work”

之后直接输入tmux2work就可以了。