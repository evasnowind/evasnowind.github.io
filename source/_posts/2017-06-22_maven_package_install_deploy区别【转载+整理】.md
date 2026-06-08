---
title: "maven package install deploy区别【转载+整理】"
date: "2017-06-22"
categories: [工具, 软件]
source: "http://prayerlaputa.com/?p=537"
---

# maven package install deploy区别【转载+整理】

稍微留下个笔记，省的以后再搜了。本文内容来自以下两篇文章：\
[maven package install deploy区别](http://blog.csdn.net/yhj19920417/article/details/72627227)\
[添加jar包到本地Maven仓库](http://www.cnblogs.com/zeng1994/p/7486330.html)\
首先，说下package install deploy区别\
**1、maven package：**打包到本项目，一般是在项目target目录下。\
如果a项目依赖于b项目，打包b项目时，只会打包到b项目下target下，编译a项目时就会报错，因为找不到所依赖的b项目，说明a项目在本地仓库是没有找到它所依赖的b项目。\
**2、maven install：**打包会安装到本地的maven仓库中，如果没有设置过maven本地仓库，一般在用户/.m2目录下。\
如果a项目依赖于b项目，那么install b项目时，会在本地仓库同时生成pom文件和jar文件，\
可以看install b的日志:\
[INFO] — maven-install-plugin:2.5.2:install (default-install) @ b —\
[INFO]Installing D:\Java\workspace\b\target\b-2.7.4.RELEASE.jar to\
C:\mavenRepository\com\*\*\b\2.7.4.RELEASE\b-2.7.4.RELEASE.jar [INFO]\
Installing D:\java\workspace\b\pom.xml to\
C:\mavenRepository\com\*\*\b\2.7.4.RELEASE\b-2.7.4.RELEASE.pom\
说明b项目已安装到本地仓库了,并且是jar和pom同时安装的. 这时候去compile a项目，编译通过.\
**总结：**\
**A、maven package：打包（jar等）到本项目的target下。**\
**B、maven install：把target下打的包（jar等）安装到本地仓库，可以供其他项目使用。**\
**3、maven deploy：**将打包的文件发布到远程参考,提供其他人员进行下载依赖。\
然后呢，对于**mvn install**命令，格式如下：

> 安装指定文件到本地仓库命令：\
> mvn install:install-file\
> -DgroupId=<groupId> : 设置项目代码的包名(一般用组织名)\
> -DartifactId=<artifactId> : 设置项目名或模块名\
> -Dversion=1.0.0 : 版本号\
> -Dpackaging=jar : 什么类型的文件(jar包)\
> -Dfile=<myfile.jar> : 指定jar文件路径与文件名(同目录只需文件名)

举个栗子：

```
mvn install:install-file -Dfile=apollo-core-0.10.0-SNAPSHOT.jar -DgroupId=com.ctrip.framework.apollo -DartifactId=apollo-core -Dversion=0.10.0-SNAPSHOT -Dpackaging=jar
```

注意version中并不一定只能是0.10.0这种数字，也可以是0.10.0-SNAPSHOT这种。我在编译携程apollo-client时，apollo-client依赖的就是**apollo-core 0.10.0-SNAPSHOT。**\