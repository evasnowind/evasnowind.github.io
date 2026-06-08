---
title: "在Glassfish上部署web实际运用【转】"
date: "2010-11-07"
categories: [java]
source: "http://prayerlaputa.com/?p=412"
---

# 在Glassfish上部署web实际运用【转】

转自：http://www.verybc.com/a/hulianwang/2009/1124/9298.html\
 \

本文介绍了在Glassfish上部署Web应用的操作流程。这个教程中使用的配置是Netbeans5.5.1以及Glassfish V2。

本文介绍了在Glassfish上部署Web实际运用的操作程序。那个教程中应用的配置是Netbeans5.5.1以及Glassfish V2。\
本文介绍如何在Glassfish上部署web实际运用。\
**一，开发道具的选取**\
Java EE，或者是JSF实际运用开发，Netbeans和Glassfish是最好的搭配选取，前者对于后者有非比寻常好的支持。但要留意netbeans的 版本，5.5是不支持glassfish v2的。而netbeans6还很不稳定，所以现阶段最好的版本是netbeans5.5.1。\
涉及Netbeans下开发Java EE实际运用，官方有文档介绍：Java EE 实际运用程序有关教程，那里主要介绍一下生产环境中web实际运用在glassfish下的部署和配置

**二，下载安装Glassfish V2**

1)下载并解压缩。下载完毕後，运行以下命令：

java -Xmx256m -jar glassfish\_filetitle.jar

点击接受弹出的规则后（那里sun较量无聊啊，所有软件 都是，明明一个的普通压缩包，非压成jar让你看一下规则才行），glassfish会解压到一个的名为glassfish的列表里。\
2) 改正端口

glassfish是经过ant来安装的，安装脚本在setup.xml下，在里面没成绩改正一些配置，比如端口等等。在setup.xml中主要有以下设置：

xml 源代码

|  |
| --- |
| ﹤property title=”domain.title” value=”domain1″/﹥  域名  ﹤property title=”instance.title” value=”server”/﹥  ﹤property title=”admin.user” value=”admin”/﹥ 编程用户名  ﹤property title=”admin.passexpress” value=”adminadmin”/﹥ 编程密码  ﹤property title=”admin.port” value=”4848″/﹥ 管理平台端口  ﹤property title=”instance.port” value=”8080″/﹥ 举例端口，也那是经过那个端口来访问web实际运用  ﹤property title=”orb.port” value=”3700″/﹥  ﹤property title=”imq.port” value=”7676″/﹥  ﹤property title=”https.port” value=”8181″/﹥ https端口 |

根据需求改正以上设置，运行：ant -f setup.xml，假如系统没有安装ant，在glassfishlibant下有一个的ant1.6版。安装结束后，进入glassfish/bin下，在控制台运行下面命令启动glassfish：

asadmin start-domain domain1     // domain1是上面设置的domain.title，系统默认domain1

启动结束后，进入测试也许已经正确启动

asadmin stop-domain domain1  //停止服务器\
**三，部署web实际运用**

有三种方法，没成绩直接将war或ear放在glassfish/domain/autodeploy列表 下，glassfish启动后会自动部署。第二是经过命令asadmin deploy部署实际运用, 另外 asadmin updeploy 卸载实际运用。经过asadmin deploy –help 和 asadmin undeploy –help 获得更多帮助。

第三是经过我推荐的方法，经过glassfish管理控制台进入，默认用户admin，密码adminadmin。打开後看到如下界面：

进入左边菜单, Applications -> Web Applications，在列表中没成绩看到已经部署的实际运用，如要部署新实际运用，点击deploy按钮，选取本地的war，设定好context path，点击OK，无论部署胜利或失败，都会看到相应的消息提示

注：经过这种方法，没成绩停止远程部署，只要打开目的服务器上的管理控制台，选取一个的本地的war，就没成绩快速的部署到远程服务器上，非比寻常方便，这也是推荐的理由。对于EJB实际运用，在Enterprise Applications下部署，窍门同上

**四，配置jdbc数据源**

对于Java EE实际运用，经常需求事先设定数据源，否则部署时会报javax.naming.NameNotFoundException

配置窍门是进入Resources -> JDBC，会看到JDBC Resources和Connection pools

先设定Connection pools，以MySql为例，点击New，命名为MySqlPools，ResourceType选取 javax.sql.ConnectionPoolDataSource，Database vendor肯定选取mysql，然后点击beside进入下一页面。最主要的是设定Additional Properties，也那是jdbc连接配置，设定好url, user, passexpress，更多相关的保持默认value，也没成绩根据需求自己添加属性。设定好连接池后，接着设定JDBC Resources，新建一个的JDBC，名称要和你的web实际运用里的持久化单元采用的数据源的名称一致。\
然后再次部署web实际运用，就会正常运行了。

\