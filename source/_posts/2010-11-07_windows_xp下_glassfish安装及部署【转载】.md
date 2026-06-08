---
title: "windows xp下 glassfish安装及部署【转载】"
date: "2010-11-07"
categories: [java]
source: "http://prayerlaputa.com/?p=413"
---

# windows xp下 glassfish安装及部署【转载】

转自：http://www.blogjava.net/ann/articles/260260.html\
 \
一. 下载解压glassfish\
1. 下载地址:\
<https://glassfish.dev.java.net/public/downloadsindex.html>\
2. 解压glassfish :\
java -Xmx256m -jar glassfish-installer-v2.1-b57-windows.jar（只要配置好java环境都可以执行）\
注意: 必须将协议滚动条从上拖到下，接受按钮就可以点击了。\
你的目录下面将会有个glassfish目录。\
3. 安装glassfish。\
1）. 修改配置:  ………./glassfish/setup.xml(在解压后的glassfish目录下面有setup.xml)，不修改也可以。\
2）. 执行命令:  ant -f setup.xml\
4.启动glassfish server\
asadmin start-domain domain1 这个是默认的domain\
5. 测试是否正常启动： 在浏览器里输入：[http://localhost:8080](http://localhost:8080/)\
看看是否能正常显示\
6. 创建domain\
执行命令asadmin create-domain –adminport 4849 customerCenter\
二. 部署\
1. 直接把war或者ear 文件 放在 glassfish/domain/domain1/autodeploy下面，系统会自动部署。\
2. 是通过命令asadmin deploy部署应用, 另外 asadmin updeploy 卸载应用\
通过asadmin deploy –help 和 asadmin undeploy –help 获得更多帮助\
3. 通过glassfish管理控制台\
http://localhost：4848\
4. 目录部属方式：直接把WEB应用目录直接copy到glassfish/domains/domain1/applications/下\
然后通过命令：glassfish/bin/asadmin deploydir full\_path/applications/your\_app