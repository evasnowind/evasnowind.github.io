---
title: "离线环境下安装配置android studio"
date: "2017-09-26"
categories: [android, java, 工作, 工具, 软件]
source: "http://prayerlaputa.com/?p=372"
---

# 离线环境下安装配置android studio

公司项目迁移到android studio上已经有一段时间，之前光是配置android studio就花了一些时间——因为公司内网环境不能访问外网（内心吐槽过无数次了……工作本不能上外网给我们做开发的带来很多问题，唉……）……\
本文主要想总结一下android studio在离线环境下如何配置。\
jdk/android sdk的下载、配置再次不再赘述。\
其实，android studio（以下简称as）在离线环境下的安装，关键在于配置gradle。as采用了gradle进行编译，安装jdk/android sdk后，如果下载as后直接启动as，则as检测是否已经安装了gradle，如果没有则as自行去官网下载对应的gradle。离线环境下，并不是我们自己去随便下个gradle、装上就可以了，首先gradle的版本要与as版本对应。这里就要先说明，as中包含有一个android gradle plugin，用于调用gradle进行编译，上面说的“**gradle的版本要与as版本对应**”其实就是指android gradle plugin的版本要和gradle的版本对应。android官网上给出了对应关系如下：\
注：表格来自<https://developer.android.com/studio/releases/gradle-plugin.html#updating-gradle>

| Plugin version | Required Gradle version |
| --- | --- |
| 1.0.0 – 1.1.3 | 2.2.1 – 2.3 |
| 1.2.0 – 1.3.1 | 2.2.1 – 2.9 |
| 1.5.0 | 2.2.1 – 2.13 |
| 2.0.0 – 2.1.2 | 2.10 – 2.13 |
| 2.1.3 – 2.2.3 | 2.14.1+ |
| 2.3.0+ | 3.3+ |

我下载了as 2.3.3稳定版，as 2.3.3在自行下载gradle时默认就是下载gradle 3.3，并且会在操作系统如下路径保存、解压gradle：\
Windows系统：C:\Users\XXX\.gradle\wrapper\dists\gradle-3.3-all\55gk2rcmfc6p2dg9u9ohc3hw9\
因此，在离线环境下，配置好jdk/android sdk，下载as（以最新的2.3.3为例）、下载对应版本的gradle（下载gradle-3.3-all.zip）之后，然后，依次进行如下操作：\
1、修改android-studio/bin/idea.properties，在文件底部添加

> #———————————————————————–\
> # 启动不检查更新\
> #———————————————————————–\
> disable.android.first.run=true

2、启动as，此时会报错，因为没有配置gradle、也没法下载\
3、关闭as，此时操作系统中应该已经有生成有如下路径：\
Windows系统下：C:\Users\XXX\.gradle\wrapper\dists\gradle-3.3-all\55gk2rcmfc6p2dg9u9ohc3hw9\
4、将gradle-3.3-all.zip放到上述路径中，不用解压\
印象里还需要自行创建两个文件：gradle-3.3-all.zip.lck、gradle-3.3-all.zip.ok，直接创建文件、改下名字就行，不需要添加任何内容。这个大家可以去自己的操作系统中看看。55gk2rcmfc6p2dg9u9ohc3hw9这个是跟gradle版本有关，不同gradle文件夹名不一样。大家第一次启动as后看看as对应哪个版本gradle，下对应版本就行了。\
注意，**不用事先在环境变量中配置gradle，直接把gradle放到默认文件夹就行**——我就是因为这个小细节，折腾了好久……心累……\
5、重新启动gradle，此时应该就能正常启动as、进行编译。\
 \
 \