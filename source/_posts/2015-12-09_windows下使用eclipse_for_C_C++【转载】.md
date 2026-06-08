---
title: "windows下使用eclipse for C/C++【转载】"
date: "2015-12-09"
categories: [c/c++, java, 工具]
source: "http://prayerlaputa.com/?p=101"
---

# windows下使用eclipse for C/C++【转载】

经过网上搜索资料加上本人测试，以下方法可行：\
1，先装好JDK\
2，装好Eclipse3.32+MinGW1\
3，打开CDT包把plugins和features拷到Eclipse相应的目录里\
4，把Eclipse的configuration目录下的org.eclipse.update删了\
5，启动Eclipse，现在可以建立C/C++工程了\
6，现在建立你的C/C++工程\
7，编写好你的源代码\
8，在Project的Properties新建一个Builder(Project→Properties选择Builder标签→New，双击Program)\
9，在MAIN标签（不用点击，默认第一个就是）的LOCATION输入你MINGW的MAKE路径，如C:\MinGW\bin\mingw32-make.exe\
在WORKING DIRECTORY输入你PROJECT的MAKEFILE文件所在的目录，如D:\workspace\test\
点APPLY更新进去，一直点OK退回编辑界面\
10，建立文件makefile，不用加后缀名，输入\
all(你设置的标签名):\
gcc -o 你的程序名 你的源代码名.c\
注意：g++前面是用tab而不能用空格。上面编译的是C，编译C++要用g++ -o Hello Hello.cpp\
设定Make Targets，Windows->Show View->Make Targets。在Make Targets视窗中按下右鍵，选择Add Build Target，Target Name输入：编译，Make Target输入:all(你设置的标签名)。双击编译即可完成编译。\
11，现在Run你的工程吧！\
8～10为重点所在，请大家注意！\
PS：个人觉得，在你安装好MinGW后，写一个C程序，记得按住Ctrl+b先build一下，或者是直接ctrl+F11直接build并运行。