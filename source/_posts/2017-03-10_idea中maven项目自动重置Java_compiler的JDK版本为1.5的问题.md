---
title: "idea中maven项目自动重置Java compiler的JDK版本为1.5的问题"
date: "2017-03-10"
categories: [j2ee, java, web, 工具]
source: "http://prayerlaputa.com/?p=529"
---

# idea中maven项目自动重置Java compiler的JDK版本为1.5的问题

这几天给开发机重装系统后遇到的一个问题，maven什么的都是最新的版本（maven 3.5.2, jdk 1.8），然而用idea打开项目后，总是注解报错，然后追根溯源发现是目前版本的maven在构建时默认面向jdk 1.5……参见这里：\
http://maven.apache.org/plugins/maven-compiler-plugin/index.html

> Also note that at present the default source setting is 1.5 and the default target setting is 1.5, independently of the JDK you run Maven with. If you want to change these defaults, you should set source and target as described in [Setting the -source and -target of the Java Compiler](http://maven.apache.org/plugins/maven-compiler-plugin/examples/set-compiler-source-and-target.html).

\
这导致即便在idea中设置project structure中project/modules的jdk版本1.8, idea的compiler版本设置为1.8，重启后还是会报错（除了注解报错，编译项目时也会报错说java compiler版本有问题的错误信息，这个当时没截图……）。彻底解决这个问题需要制定maven编译时的版本，具体做法maven官网已给出：\
http://maven.apache.org/plugins/maven-compiler-plugin/examples/set-compiler-source-and-target.html

> <project>\
> […]\
> <properties>\
> <maven.compiler.source>1.8</maven.compiler.source>\
> <maven.compiler.target>1.8</maven.compiler.target>\
> </properties>\
> […]\
> </project>

或者

> <project>\
> […]\
> <build>\
> […]\
> <plugins>\
> <plugin>\
> <groupId>org.apache.maven.plugins</groupId>\
> <artifactId>maven-compiler-plugin</artifactId>\
> <version>3.7.0</version>\
> <configuration>\
> <source>1.8</source>\
> <target>1.8</target>\
> </configuration>\
> </plugin>\
> </plugins>\
> […]\
> </build>\
> […]\
> </project>