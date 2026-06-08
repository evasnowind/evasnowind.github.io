---
title: "ubuntu下Firefox 的安装【转载】"
date: "2011-08-04"
categories: [linux, web, 软件]
source: "http://prayerlaputa.com/?p=383"
---

# ubuntu下Firefox 的安装【转载】

转载地址：[http://forum.ubuntu.org.cn/viewtopic.php?f=73&t=337166](http://forum.ubuntu.org.cn/viewtopic.php?f=73&t=337166 "http://forum.ubuntu.org.cn/viewtopic.php?f=73&t=337166")\
看到好多人在版上问怎么安装 firefox 5，有必要介绍一下了：\
和 Chrome 与 Opera 不同，Mozilla 的官方网站提供的 Firefox for Linux 并不是 deb 或 rpm 这样的安装包，而是一个 tar.bz2 的压缩文档。许多人看到 tar.bz2或 tar.gz 这样结尾的文件，自然而然地会以为这又是什么“源代码编译安装”？太痛苦了！其实不是，把它下载下来，解压缩，你会在里面找到一个名字叫做 firefox 的文件（其实是一个可执行的 shell 脚本），没错，它就是真正的 firefox 可执行文件！直接双击它（一般情况下系统会弹出一个对话框问你：firefox 是一个可执行的文本文件，你是要运行 firefox 还是显示它的内容？那么你就选择“运行”），新版的 firefox 就启动了。\
这很像以前常说的“绿色软件”：你可以直接把它拷在优盘里随身携带！ \
如果你真的想把 Firefox “整合” 到系统里，这样双击桌面上的图标，或者点击一个链接能直接使用 firefox 打开，那也是很简单的，这么做就行了：\
（1）把解压后的 firefox 目录重命名为 firefox5，移动到 /opt 目录，这是为了安全起见，免得你无意中把它删除了。当然你需要有系统管理员权限才能移动。\
（2）先删除 /usr/bin/firefox 文件，再新建一个链接 /usr/bin/firefox ，链接到 /opt/firefox5/firefox 即可。这也是需要系统管理员权限的，你可以使用命令来操作：\
**代码:**\
sudo rm /usr/bin/firefox\
sudo ln -s /opt/firefox5/firefox /usr/bin/firefox\
注意第二句话不要写反掉了，ln 的第一个参数是“目标”，第二个参数是“快捷方式的名称”。\
如果你实在不想打命令，也可以手工操作：在 /opt/firefox5/ 这个文件夹里，右键点击 firefox ，选择“创建链接”，然后把新生成的链接移到 /usr/bin/ 里面，重命名为 firefox ，就 OK 了。当然所有这些操作都得以管理员身份进行，请千万小心。\
网上提供的许多方法是添加 ppa 源：ppa:mozillateam/firefox-stable\
相比之下本文介绍的方法至少有三个优点：\
（1）下载速度快。firefox 软件包大约有15M左右，ppa 蜗牛般的网速足以让你失去耐心。\
（2）中文界面。通过 ppa 安装的 firefox 一定是英文的，你还得找中文语言包。\
（3）不会覆盖老版本。通过 ppa 安装 firefox 肯定会把之前的版本覆盖掉。但本文的方法就没有这个问题，你可以在 /opt 目录下同时放 firefox4 和 firefox5 等文件夹，唯一要做的就是更改 /usr/bin/firefox 链接的目标。\
最后提供 firefox 下载页面：\
中文官方网站：http://firefox.com.cn/\
英文官方网站：http://www.mozilla.com/en-US/firefox/all.html\
两者区别在于：中文网站下载的 firefox 会打上 “北京谋智技术网络有限公司”的标签，还会预先安装一堆扩展（当然你可以拒绝安装），英文网站下载的应该不会有这个问题。