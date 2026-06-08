---
title: "【整理】使用ant和jenkins自动化编译android项目（windows环境）"
date: "2017-01-12"
categories: [android, java, 工具]
source: "http://prayerlaputa.com/?p=268"
---

# 【整理】使用ant和jenkins自动化编译android项目（windows环境）

平时工作经常需要编译不同的android测试包，对这种重复劳动着实无感，趁着这几天工作不是很忙，尝试部署了jenkins来自动编译，下面记录一下过程（以下主要讨论在windows环境下的操作）。

### 第一步

使用ant编译android项目。如果是使用eclipse开发android，应该对ADT打包速度颇为无语，使用ant的速度要快很多。第一步要做的就是保证ant能够正常build项目，这样后面jenkins就可以启动一个ant编译任务进行android打包。ant编译android项目需要做如下工作：

- 配置android环境变量
- 配置ant环境变量

配置这两个变量是为了方便后续操作，配置好之后的步骤如下：

- 生成build脚本
- 使用ant debug或是ant release生成apk文件，测试是否正常。

详细说明可以参考这两篇文章：[Ant自动编译打包&发布 android项目](http://www.cnblogs.com/yaozhongxiao/p/3523061.html)  [Ant自动编译打包android项目](http://blog.csdn.net/sbvfhp/article/details/38586771)

### 第二步

配置jenkins。jenkins安装很简单，从官网下了war包之后，直接命令行中使用

```
java -jar jenkins.war
```

即可启动，然后访问ip:8080即可看到jenkins站点。如果8080端口被占用，在启动时输入端口号即可，即：

```
java -jar jenkins.war --httpPort=新的端口号
```

然后新建一个Freestyle Project，逐步配置即可（每个配置项后面的问号都有详细说明，如果还不懂可以去看官网文档），可以参考这篇文章：[用jenkins搭建android自动打包环境](https://my.oschina.net/u/930967/blog/299058)。需要注意的是“Build”（中文版的话应该是叫“构建”）选项的配置，[用jenkins搭建android自动打包环境](https://my.oschina.net/u/930967/blog/299058) 这篇文章没细说，截图也不是正确的，我们需要在”build”选项下的“targets”选择中输入“clean release”或是“clean debug”，按照需求可能还需要添加build参数，如下图所示（截图来自：[Android 自动build + jenkins配置](http://blog.csdn.net/linshutao/article/details/21157287) ）\
[![](http://www.prayerlaputa.com/wp-content/uploads/2017/01/jenkins-android-config-300x107.png)](http://www.prayerlaputa.com/wp-content/uploads/2017/01/jenkins-android-config.png)\
配置完后即可按照[用jenkins搭建android自动打包环境](https://my.oschina.net/u/930967/blog/299058)  所说的步骤进行构建。\
另外，还可以使用jenkins插件在build出新的apk之后进行装机测试，可以参考这篇文章：[（jenkins）hudson平台搭建android项目持续化集成以及基于NativeDriver的UI自动化测试环境](http://qa.blog.163.com/blog/static/190147002201111162565117/)\
参考：\
[Ant自动编译打包&发布 android项目](http://www.cnblogs.com/yaozhongxiao/p/3523061.html)\
[Ant自动编译打包android项目](http://blog.csdn.net/sbvfhp/article/details/38586771)\
[用jenkins搭建android自动打包环境](https://my.oschina.net/u/930967/blog/299058)\
[Android 自动build + jenkins配置](http://blog.csdn.net/linshutao/article/details/21157287)\
[（jenkins）hudson平台搭建android项目持续化集成以及基于NativeDriver的UI自动化测试环境](http://qa.blog.163.com/blog/static/190147002201111162565117/)