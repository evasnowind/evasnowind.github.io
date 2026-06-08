---
title: "ubuntu如何更新hostname"
date: "2015-12-04"
categories: [linux, 工具]
source: "http://prayerlaputa.com/?p=73"
---

# ubuntu如何更新hostname

新装的ubuntu server，安装的过程中没太留意hostname的设置，等到安完后才想起hostname是命令行中“用户名@”后面的那个东西，于是想重新换一个hostname，很简单，使用vim编辑/etc/hostname，将里面的内容修改你想要的新的hostname（我修改为ubuntu），重启，但此时还没完，这时如果使用sudo来执行某些特权指令，虽然也能执行，但会出现“sudo unable to solve host XXX”（我这里是我的hostname“ubuntu”），此时还需要编辑/etc/hosts文件，将“127.0.1.1 YYY”中的修改为新的hostname即可。\