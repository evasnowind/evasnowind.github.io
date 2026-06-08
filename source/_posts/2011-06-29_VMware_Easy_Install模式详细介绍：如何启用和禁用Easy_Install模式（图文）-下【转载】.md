---
title: "VMware Easy Install模式详细介绍：如何启用和禁用Easy Install模式（图文）-下【转载】"
date: "2011-06-29"
categories: [虚拟化]
source: "http://prayerlaputa.com/?p=393"
---

# VMware Easy Install模式详细介绍：如何启用和禁用Easy Install模式（图文）-下【转载】

转载地址：

http://hi.baidu.com/i\_coolboy/blog/item/4ccaf44a965cf42e08f7ef8b.html

接上：[VMware Easy Install模式详细介绍：如何启用和禁用Easy Install模式（图文）-上](http://hi.baidu.com.sixxs.org/i_coolboy/blog/item/433149d3f33aa0d2a8ec9a69.html)\
到这里我们对Vmware的Easy Install模式已经有了认识，所以是否启用Easy Install模式完全取决于我们了。\
所以禁用Easy Install模式的最好办法就是在进行虚拟机安装之前把Floppy设置成Use physical drive:Auto detect，或者Use floppy image file中加载一个不是名为autoinst.flp的镜像，启动后便开始自定义安装了，只是你之前在安装向导中填写的信息就白填了。\
\
只要Use floppy image file中加载一个名为autoinst.flp的镜像，不管这个镜像是否匹配，都将进行Easy Install模式安装。如果不匹配将会出现上文中安装DOS时不可预知的错误；如果你加载了一个不是VMware生成的autoinst.flp即假 的，则会出现系统不能启动，安装不能进行的现象。\
You must install an operating system manually if you did not specify the easy install feature or were unable to use it when you completed the New Virtual Machine wizard.所以说启用Easy Install模式只能在完成创建虚拟机向导之前，系统根据你指定光盘或镜像及输入的必要信息生成并加载autoinst.flp软盘镜像以便进行简易安 装。如果你选择I will install the operating system later，那么向导将不会收集Easy Install模式安装所需要的信息。在完成向导后，你放入光盘或镜像，VMware不会侦测系统及版本，也不会要求输入Easy Install所需要的信息，所以接下来只能手工进行安装。这就是网上最常见的禁用Easy Install模式的方法。当然如果你在这时复制并加载一个在相同版本虚拟系统下生成的autoinst.flp镜像，同样可以进行Easy Install模式的安装。\
Easy install feature also installs VMware Tools in the guest operating system. After installation is finished, VMware Tools isautomatically installed.意思是 Easy Install 安装过程包括安装VMware Tools，但通常Vmware没有自动安装VMware Tools，并且手动进行安装VMware Tools时出错，提示：VMware Tools installation cannot be started manually while Easy Install is in progress。意思Easy Install模式安装正在进行中，不可以手动安装VMware Tools。这可能是由于镜像以及版本的原因，Easy Install没有成功安装VMware Tools，并且Easy Install还未完成。\
所以手动安装VMware Tools，必须结束Easy Install模式。Easy Install由autoinst.flp控制，因此只要不加载autoinst.flp镜像，系统就可以结束Easy Install模式。这就是网上常用的VMware Tools安装失败的解决方案，即更改Floppy设置成Use physical drive:Auto detect。\
希望这篇文章对大家的学习能够有所帮助。