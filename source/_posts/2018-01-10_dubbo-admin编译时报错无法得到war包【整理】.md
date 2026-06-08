---
title: "dubbo-admin编译时报错无法得到war包【整理】"
date: "2018-01-10"
categories: [j2ee, java, linux, web, 工具, 软件]
source: "http://prayerlaputa.com/?p=538"
---

# dubbo-admin编译时报错无法得到war包【整理】

整理笔记本时发现一些以前做过的笔记，整理一下，在博客里留个记录，省的以后忘记。\
问题是这样的：dubbo在部署时需要用到dubbo-admin，但dubbo-admin需要自己编译，网上各种下载的war包可能并不适合自己的开发环境、有极大概率是没法用的。\
编译dubbo-admin很简单，在编译环境中准备好jdk、maven（jdk maven配置过程就没必要说了，网上n多教程），从github上下载dubbo源代码，准备工作就这些。\
我的编译环境如下：

- MacOSX High Sierra
- Oracle JDK 1.8
- apache maven 3.5.2

编译步骤:\
在shell里进入dubbo-admin文件夹，然后输入如下命令

> mvn package -Dmaven.skip.test=true

看到这个结果说明编译成功。

> [INFO] Building war: /Users/xxx/yourpath/dubbo/dubbo-admin/target/dubbo-admin-2.5.8.war\
> [INFO] WEB-INF/web.xml already added, skipping\
> [INFO] ————————————————————————\
> [INFO] BUILD SUCCESS\
> [INFO] ————————————————————————\
> [INFO] Total time: 04:17 min\
> [INFO] Finished at: 2017-10-09T20:47:05+08:00\
> [INFO] Final Memory: 16M/150M\
> [INFO] ————————————————————————

然而，如果编译过程中报错，可以根据maven输出的错误信息一步步调试。我当时遇到的问题比较奇怪，完整错误信息如下：

> [INFO] Error stacktraces are turned on.\
> [INFO] Scanning for projects…\
> [WARNING]\
> [WARNING] Some problems were encountered while building the effective model for com.alibaba:dubbo-admin:war:2.5.8\
> [WARNING] ‘build.plugins.plugin.version’ for org.apache.maven.plugins:maven-compiler-plugin is missing. @ com.alibaba:dubbo-parent:2.5.8, /Users/xxx/Documents/PrayerData/GitRepo/dubbo/pom.xml, line 465, column 21\
> [WARNING] ‘build.plugins.plugin.version’ for org.apache.maven.plugins:maven-surefire-plugin is missing. @ com.alibaba:dubbo-parent:2.5.8, /Users/xxx/Documents/PrayerData/GitRepo/dubbo/pom.xml, line 388, column 21\
> [WARNING] ‘build.plugins.plugin.version’ for org.apache.maven.plugins:maven-jar-plugin is missing. @ com.alibaba:dubbo-parent:2.5.8, /Users/xxx/Documents/PrayerData/GitRepo/dubbo/pom.xml, line 374, column 21\
> [WARNING] ‘build.plugins.plugin.version’ for org.apache.maven.plugins:maven-source-plugin is missing. @ com.alibaba:dubbo-parent:2.5.8, /Users/xxx/Documents/PrayerData/GitRepo/dubbo/pom.xml, line 475, column 21\
> [WARNING] ‘build.plugins.plugin.version’ for org.apache.maven.plugins:maven-deploy-plugin is missing. @ com.alibaba:dubbo-parent:2.5.8, /Users/xxx/Documents/PrayerData/GitRepo/dubbo/pom.xml, line 458, column 21\
> [WARNING]\
> [WARNING] It is highly recommended to fix these problems because they threaten the stability of your build.\
> [WARNING]\
> [WARNING] For this reason, future Maven versions might no longer support building such malformed projects.\
> [WARNING]\
> [INFO]\
> [INFO] ————————————————————————\
> [INFO] Building dubbo-admin 2.5.8\
> [INFO] ————————————————————————\
> [WARNING] The POM for io.netty:netty:jar:3.10.5.Final is invalid, transitive dependencies (if any) will not be available, enable debug logging for more details\
> [INFO]\
> [INFO] — maven-resources-plugin:2.6:resources (default-resources) @ dubbo-admin —\
> [INFO] Using ‘UTF-8’ encoding to copy filtered resources.\
> [INFO] Copying 1 resource\
> [INFO]\
> [INFO] — maven-compiler-plugin:3.1:compile (default-compile) @ dubbo-admin —\
> [INFO] Changes detected – recompiling the module!\
> [INFO] Compiling 130 source files to /Users/xxx/Documents/PrayerData/GitRepo/dubbo/dubbo-admin/target/classes\
> [INFO] ————————————————————————\
> [INFO] BUILD FAILURE\
> [INFO] ————————————————————————\
> [INFO] Total time: 1.799 s\
> [INFO] Finished at: 2017-06-09T19:24:06+08:00\
> [INFO] Final Memory: 12M/155M\
> [INFO] ————————————————————————\
> [ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile (default-compile) on project dubbo-admin: Compilation failure -> [Help 1]\
> org.apache.maven.lifecycle.LifecycleExecutionException: Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile (default-compile) on project dubbo-admin: Compilation failure\
> at org.apache.maven.lifecycle.internal.MojoExecutor.execute (MojoExecutor.java:213)\
> at org.apache.maven.lifecycle.internal.MojoExecutor.execute (MojoExecutor.java:154)\
> at org.apache.maven.lifecycle.internal.MojoExecutor.execute (MojoExecutor.java:146)\
> at org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject (LifecycleModuleBuilder.java:117)\
> at org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject (LifecycleModuleBuilder.java:81)\
> at org.apache.maven.lifecycle.internal.builder.singlethreaded.SingleThreadedBuilder.build (SingleThreadedBuilder.java:51)\
> at org.apache.maven.lifecycle.internal.LifecycleStarter.execute (LifecycleStarter.java:128)\
> at org.apache.maven.DefaultMaven.doExecute (DefaultMaven.java:309)\
> at org.apache.maven.DefaultMaven.doExecute (DefaultMaven.java:194)\
> at org.apache.maven.DefaultMaven.execute (DefaultMaven.java:107)\
> at org.apache.maven.cli.MavenCli.execute (MavenCli.java:955)\
> at org.apache.maven.cli.MavenCli.doMain (MavenCli.java:290)\
> at org.apache.maven.cli.MavenCli.main (MavenCli.java:194)\
> at sun.reflect.NativeMethodAccessorImpl.invoke0 (Native Method)\
> at sun.reflect.NativeMethodAccessorImpl.invoke (NativeMethodAccessorImpl.java:62)\
> at sun.reflect.DelegatingMethodAccessorImpl.invoke (DelegatingMethodAccessorImpl.java:43)\
> at java.lang.reflect.Method.invoke (Method.java:498)\
> at org.codehaus.plexus.classworlds.launcher.Launcher.launchEnhanced (Launcher.java:289)\
> at org.codehaus.plexus.classworlds.launcher.Launcher.launch (Launcher.java:229)\
> at org.codehaus.plexus.classworlds.launcher.Launcher.mainWithExitCode (Launcher.java:415)\
> at org.codehaus.plexus.classworlds.launcher.Launcher.main (Launcher.java:356)\
> Caused by: org.apache.maven.plugin.compiler.CompilationFailureException: Compilation failure\
> at org.apache.maven.plugin.compiler.AbstractCompilerMojo.execute (AbstractCompilerMojo.java:862)\
> at org.apache.maven.plugin.compiler.CompilerMojo.execute (CompilerMojo.java:129)\
> at org.apache.maven.plugin.DefaultBuildPluginManager.executeMojo (DefaultBuildPluginManager.java:134)\
> at org.apache.maven.lifecycle.internal.MojoExecutor.execute (MojoExecutor.java:208)\
> at org.apache.maven.lifecycle.internal.MojoExecutor.execute (MojoExecutor.java:154)\
> at org.apache.maven.lifecycle.internal.MojoExecutor.execute (MojoExecutor.java:146)\
> at org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject (LifecycleModuleBuilder.java:117)\
> at org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject (LifecycleModuleBuilder.java:81)\
> at org.apache.maven.lifecycle.internal.builder.singlethreaded.SingleThreadedBuilder.build (SingleThreadedBuilder.java:51)\
> at org.apache.maven.lifecycle.internal.LifecycleStarter.execute (LifecycleStarter.java:128)\
> at org.apache.maven.DefaultMaven.doExecute (DefaultMaven.java:309)\
> at org.apache.maven.DefaultMaven.doExecute (DefaultMaven.java:194)\
> at org.apache.maven.DefaultMaven.execute (DefaultMaven.java:107)\
> at org.apache.maven.cli.MavenCli.execute (MavenCli.java:955)\
> at org.apache.maven.cli.MavenCli.doMain (MavenCli.java:290)\
> at org.apache.maven.cli.MavenCli.main (MavenCli.java:194)\
> at sun.reflect.NativeMethodAccessorImpl.invoke0 (Native Method)\
> at sun.reflect.NativeMethodAccessorImpl.invoke (NativeMethodAccessorImpl.java:62)\
> at sun.reflect.DelegatingMethodAccessorImpl.invoke (DelegatingMethodAccessorImpl.java:43)\
> at java.lang.reflect.Method.invoke (Method.java:498)\
> at org.codehaus.plexus.classworlds.launcher.Launcher.launchEnhanced (Launcher.java:289)\
> at org.codehaus.plexus.classworlds.launcher.Launcher.launch (Launcher.java:229)\
> at org.codehaus.plexus.classworlds.launcher.Launcher.mainWithExitCode (Launcher.java:415)\
> at org.codehaus.plexus.classworlds.launcher.Launcher.main (Launcher.java:356)\
> [ERROR]\
> [ERROR] Re-run Maven using the -X switch to enable full debug logging.\
> [ERROR]\
> [ERROR] For more information about the errors and possible solutions, please read the following articles:\
> [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException

网上搜确实有相关的报错，有如下修改方案：\
1、说JDK 1.8编译不好使，换1.7就OK\
2、缺少maven插件，在dubbo-admin的pom.xml中添加如下配置项

> <plugin>\
> <groupId>org.apache.maven.plugins</groupId>\
> <artifactId>maven-surefire-plugin</artifactId>\
> <version>2.19.1</version>\
> <configuration>\
> <testFailureIgnore>true</testFailureIgnore>\
> </configuration>\
> </plugin>

或是

> <plugin>\
> <groupId>org.apache.maven.plugins</groupId>\
> <artifactId>maven-compiler-plugin</artifactId>\
> <version>3.5.2</version>\
> <configuration>\
> <source>1.8</source>\
> <target>1.8</target>\
> </configuration>\
> </plugin>

或是properties中添加

> <maven.compiler.source>1.8</maven.compiler.source>\
> <maven.compiler.target>1.8</maven.compiler.target>

3、调用mvn clean install -DskipTests 命令，跳过单元测试\
但这些对我都不管用。最后还是在stackoverflow上偶然看到一个回答（https://stackoverflow.com/questions/29700576/failed-to-execute-goal-org-apache-maven-pluginsmaven-compiler-plugin-default-c/29700727），说**清空一下$HOME/.m2里的所有内容**，这才编译成功。所以原因就在于，可能在maven下载包时一些包冲突了（it looks some of apache plugin artifacts corrupted in your local repository）。\
所以啊，童鞋们：

### **用maven编译包时，如果什么时候实在找不到原因，可以试试清空maven本地repository试试。**

顺手整理一下其他网友编译dubbo时遇到的坑以及解决办法：\
dubbo源码编译 https://www.jianshu.com/p/0dde591f21d0\
dubbo源代码编译打包错误解决 https://www.cnblogs.com/bruceChan0018/p/5786044.html\
【DUBBO】实践之dubbo-admin编译不能出war包问题 http://blog.csdn.net/lsttoy/article/details/53219989