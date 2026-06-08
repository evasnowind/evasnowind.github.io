---
title: "安装JDK + Tomcat设置环境变量的方法"
date: "2015-12-09"
categories: [java]
source: "http://prayerlaputa.com/?p=117"
---

# 安装JDK + Tomcat设置环境变量的方法

初学java，对于环境变量的配置想来却总觉得不是很清楚，总结一下自己的理解，让头脑清楚一些。\
下载好的JDK是一个可执行安装程序，双击安装。将安装路径改为：C:\jdk1.6.0（当然其他路径也可以）。\
JDK安装完成之后我们来设置环境变量：\
我的电脑点右键，选择“属性”，选择“高级”标签，进入环境变量设置，分别设置如下三个环境变量：\
（1）设置好path变量，使得我们能够在系统中的任何地方运行java应用程序，比如 javac、java、javah等等,这就要找到我们安装JDK的目录，比如我们的JDK安装在C:\jdk1.6.0目录下,那么在C: \jdk1.6.0\bin目录下就是我们常用的java应用程序,我们就需要把C:\jdk1.6.0\bin这个目录加到path环境变量里面。\
在系统变量里找到path变量,选择->编辑；(里面已经有很多的变量值,是在变量值的最前面加上C:\jdk1.6.0\bin;)\
变量名: path\
变量值: C:\jdk1.6.0\bin;\
（2）classpath环境变量，是当我们在开发java程序时需要引用别人写好的类时，要让java解释器知道到哪里去找这个类。通常，sun为我们提供了一些额外的丰富的类包，一个是dt.jar，一个是tools.jar，这两个jar 包都位于C:\jdk1.6.0\lib目录下，所以通常我们都会把这两个jar包加到我们的classpath环境变量中set classpath=.;C:\jdk1.6.0\lib\tools.jar;C:\jdk1.6.0\lib\dt.jar。\
在系统环境变量那一栏中点->新建classpath\
变量名: classpath\
变量值: .;%JAVA\_HOME%\lib\tools.jar;%JAVA\_HOME%\lib\dt.jar;（注意，CLASSPATH最前面是有个 “.”的，表示当前目录，这样当我们运行java AClass的时候，系统就会先在当前目录寻找AClass文件了。）；\
（3）设置JAVA\_HOME:\
一是为了方便引用，比如，JDK安装在C:\jdk1.6.0目录里，则设置 JAVA\_HOME为该目录路径, 那么以后要使用这个路径的时候, 只需输入%JAVA\_HOME%即可, 避免每次引用都输入很长的路径串;\
二则是归一原则, 当JDK路径改变的时候, 仅需更改JAVA\_HOME的变量值即可, 否则,就要更改任何用绝对路径引用JDK目录的文档, 要是万一没有改全, 某个程序找不到JDK, 后果是可想而知的—-系统崩溃!\
三则是第三方软件会引用约定好的JAVA\_HOME变量, 不然, 你不能正常使用该软件.\
在系统环境变量那一栏中点->新建JAVA\_HOME （JAVA\_HOME指向的是JDK的安装路径）\
变量名： JAVA\_HOME\
变量值： C:\jdk1.6.0\
配置完成下面写一个简单的java程式来测试J2SDK是否已安装成功：\
public class HelloWorld{\
public static void main(String[] args){\
System.out.println(“Hello world!”);\
}\
}\
将程式保存为文档名为HelloWorld.java的文档。\
打开命令提示符窗口，进入到HelloWorld.java所在目录，键入下面的命令\
javac HelloWorld.java\
java HelloWorld\
此时若打印出来HelloWorld则安装成功，若没有打印出这句话，仔细检查以上配置是否正确。\
环境变量配置成功后你就可以着手学习java了。\
安装Tomcat后，在我的电脑->属性->高级->环境变量->系统变量中添加以下环境变量(假定你的tomcat安装在c:\tomcat)：\
CATALINA\_HOME=c:\tomcat\
CATALINA\_BASE=c:\tomcat\
然后修改环境变量中的classpath，把tomat安装目录下的common\lib下的(可以根据实际追加)servlet.jar追加到classpath中去，\
修改后的classpath如下：\
classpath=.;%JAVA\_HOME%\lib\dt.jar;%JAVA\_HOME%\lib\tools.jar;%CATALINA\_HOME%\common\lib\servlet.jar;\
接着可以启动tomcat，在IE中访问http://localhost:8080，如果看到tomcat的欢迎页面的话说明安装成功了。