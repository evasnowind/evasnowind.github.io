---
title: "gconf-editor简介【转载】"
date: "2011-02-04"
categories: [linux]
source: "http://prayerlaputa.com/?p=397"
---

# gconf-editor简介【转载】

来自：

http://www.cnblogs.com/rivers/archive/2010/10/19/1855357.html

\
 \
gconf-editor是一款类似于注册表的软件，但是远远比改注册表简单，更改里面的配置实际上是修改了硬盘上的文本文档。主要是为了方便对桌面环境及一些软件做一些较多修改──假如一个一个改文本，就太麻烦了。\
\
\
下面简单介绍几则gconf-editor的使用技巧（比如去掉桌面上的挂载盘符）：\
\
在终端下打gconf-editor打开“配置编辑器”（中文名），然后开始吧！\
\
1、去掉桌面上的已挂载盘符和加上“电脑”等图标\
\
定 位到“/apps/nautilus/desktop”，勾上 “Computer\_icon\_visible” “Home\_icon\_visible”“Network\_icon\_visible”，这样桌面上就有“电脑”“主目录”“网络服务器”三个图标了，再 把“Volumes\_visible”的勾去掉，这样桌面上的已挂载的图标就会消失，以后需要再进“电脑”里找就OK了！\
\
2、去掉“Bug报告”\
\
有时候在Gnome下难免会碰到应用程式崩溃，这时Bug报告就会出来。假如您觉得比较讨厌，就能够通过gconf-editor去掉他。定位到“/apps/bug-buddy”，把右侧“run\_on\_crash”勾掉，就再也不会跑出来烦人了。\
\
3、让截图有阴影效果\
\
这 招能让您用Alt+PrintScreen键截图后，让图片有各种效果。定位到 “/apps/gnome-screenshot”，在右侧，boder\_effect的值改一下，默认是none，改成“shadow”就是有阴影效果 了，black-line的话，截图周围就有黑线了。\
\
\
以上只是抛砖引玉讲三点，gconf-editor这个东西很不错，谁都会改，因为每个键值下都有注释呢。\