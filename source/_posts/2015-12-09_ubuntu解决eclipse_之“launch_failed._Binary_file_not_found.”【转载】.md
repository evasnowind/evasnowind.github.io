---
title: "ubuntu解决eclipse 之“launch failed. Binary file not found.”【转载】"
date: "2015-12-09"
categories: [c/c++, linux, 工具]
source: "http://prayerlaputa.com/?p=103"
---

# ubuntu解决eclipse 之“launch failed. Binary file not found.”【转载】

当敲完代码后，直接按project > run，系统提示错误：” launch failed. Binary file not found.” 后来查完资料后才知道原来在linux下必须build 完后才可以运行，所以每次要运行project时，必須先按ctrl + b，build时会提示有无错误。build 成功后程序才可以运行。\
PS：也可以直接按 ctrl+F11，这个是build和运行一起。