---
title: "使用vps+lnmp+wordpress搭建个人博客"
date: "2015-11-27"
categories: [wordpress, 工具]
source: "http://prayerlaputa.com/?p=526"
---

# 使用vps+lnmp+wordpress搭建个人博客

购买VPS用于科学上网后，打算将个人博客移到VPS上，遂折腾了一下，遇到一些坑，整理一下给大家看看。\
版权声明：我这篇文章主要是根据“[vps+lnmp+wordpress搭建个人博客](http://www.railgun.top/blog/?p=19)” 这篇文章，以及自己搜索到的一些帖子整理所得，算是一个all in one的版本，大家勤动手肯定都能查到。\
搭建博客主要分为以下几个大的步骤：

1. VPS设置
2. lnmp设置
3. 域名解析设置
4. 搭建wordpress
5. 安装wordpress后可能遇到的问题

so, 开始详细说明：\
**1****、****VPS****设置**\
现在VPS选择很多，这里不一一列举，大家随意，看自己情况选适合自己的就好。我用的是搬瓦工（bandwagonhost.com）最便宜的套餐（256MB内存，12G硬盘，500G流量），一年100多软妹币，本是搭梯子用（科学上网速度还是可以的），打算wordpress后访问博客速度感觉尚可。\
**2****、****lnmp****设置**\
有了VPS就需要开始假设web服务器了，搜了一下发现大家用lnmp（linux、nginx、mysql、php）比较多，所以我也就选这个啦，一键安装过程参见http://lnmp.org/install.html ，写的很细，一步步按教程来就好，教程里有提到创建虚拟主机这个步骤，一开始说实话我对这个概念不是很清楚，不过之前提过的“[vps+lnmp+wordpress搭建个人博客](http://www.railgun.top/blog/?p=32)” 里面说的挺清楚的，摘抄一下给大家看看：

> lnmp环境搭建好后，需要设置虚拟主机。首先区分几个概念服务器，vps，虚拟主机。\
> 服务器：一般理解就是一台电脑，有主板硬盘内存CPU的东西；\
> vps（Virtual Private Server 虚拟专用服务器）：一台服务器通过软件划分成几台vps，每台vps在客户看来都是独立的服务器，其实是跑在一台物理机器上的；\
> 虚拟主机：虚拟主机一般是针对网站说的，一个网站跑在一台虚拟主机上，也就是apache服务器 wwwroot/下面的一个文件夹，就是一个虚拟主机，比如  wwwroot/aaa  是个虚拟主机，wwwroot/bbb 是另外一个虚拟主机，是web服务器区分不同网站时的提法。\
> 可以看到，从大到小，依次是服务器＞vps＞虚拟主机。\
> 弄清楚了什么是虚拟主机，就明白了为什么要配置虚拟主机了，因为我们的vps上不是就跑一个网站，有可能要搭好几个网站（土豪自行忽略掉这句话），比如搭个博客，搭个下载站，等等很多。不过，一个ip地址最多解析5个顶级域名，所以最多就5个网站（二级域名不算）。\
> 搭建虚拟主机教程  http://lnmp.org/faq/lnmp-vhost-add-howto.html

上面这段话说的挺清楚的，理解这些概念对后续操作很有帮助，认真看。\
另外，lnmp已经安装了phpmyadmin，后续有数据库操作可以用这个。\
**3****、域名解析设置**\
安装好lnmp环境后，接下来就该设置DNS域名解析了，购买域名的地方也有很多，不再赘述。我在godaddy上买的，顺便说句godaddy坑爹的地方，我之前的域名续费了两年，今年忘记续费，再去看时发现购买价格翻了3倍，原本每年100RMB左右，重新购买居然要300多RMB，真是坑爹啊~\_~  ，而且最近貌似.io的域名价格一直很贵，本想买个.io提高下逼格，结果还是放弃了……扯远了，回归正题，购买域名后，需要配置域名解析，配置一下域名到IP的映射，这里再进行一下摘抄（来源如下：<http://www.railgun.top/blog/?p=19>），主要是给大家看一下解析类型：

> A记录：将域名指向一个IPv4地址（例如：10.10.10.10），需要增加A记录。网站最基本的解析就是A记录 ，把域名解析到你自己的服务器ipv4地址，如138.xxx.xxx.xxx ，如果不添加主机记录www，就不能访问www.railgun.top，只能访问railgun.top\
> CNAME记录：如果将域名指向一个域名，实现与被指向域名相同的访问效果，需要增加CNAME记录。如果想设置二级域名就要添加CNAME记录，比如blog.railgun.top ，参照上图设置，主机记录是blog，记录值就是你的主域名www.railgun.top\
> MX记录：建立电子邮箱服务，将指向邮件服务器地址，需要设置MX记录\
> NS记录：域名解析服务器记录，如果要将子域名指定某个域名服务器来解析，需要设置NS记录\
> TXT记录：可任意填写（可为空），通常用做SPF记录（反垃圾邮件）使用\
> AAAA记录：将主机名（或域名）指向一个IPv6地址（例如：ff03:0:0:0:0:0:0:c1），需要添加AAAA记录\
> SRV记录：记录了哪台计算机提供了哪个服务。格式为：服务的名字.协议的类型（例如：\_example-server.\_tcp）\
> 显性URL：将域名指向一个http（s)协议地址，访问域名时，自动跳转至目标地址（例如：将www.net.cn显性转发到www.hichina.com后，访问www.net.cn时，地址栏显示的地址为：www.hichina.com）。\
> 隐性URL：与显性URL类似，但隐性转发会隐藏真实的目标地址（例如：将www.net.cn隐性转发到www.hichina.com后，访问www.net.cn时，地址栏显示的地址仍然为：www.net.cn）。

godaddy上需要设置DNS Zone File，如下图所示，在Points to的位置填上VPS的地址，如下图所示：\
[![godaddy_set_dns](http://www.prayerlaputa.com/wp-content/uploads/2015/11/godaddy_set_dns-287x300.png)](http://www.prayerlaputa.com/wp-content/uploads/2015/11/godaddy_set_dns.png)\
填写完、确认后，需要等一段时间DNS解析才能生效，可以过十来分钟之后ping 你的域名，能ping通即可。\
**4****、搭建****wordpress**\
域名解析设置好后，接下来就是安装wordpress，这一步相对简单，参考wordpress官网给出的步骤即可，写的很清楚，地址：[wordpress安装过程](http://codex.wordpress.org.cn/WordPress%E7%9A%84%E5%AE%89%E8%A3%85%E8%BF%87%E7%A8%8B) 注意，解压wordpress安装包后，记得给wordpress整个文件夹赋予读写权限，用chmod a+wr -R /wordpress 即可。\
lnmp已安装了phpmyadmin，如果想用“域名/phpmyadmin”这种形式使用phpmyadmin，在/home/wwwroot/default文件夹下找到phpmyadmin文件夹，将该文件夹拷贝一份到你在lnmp中所设置的虚拟主机目录（和你的域名一样的那个目录，一般是/home/wwwroot/域名）下，即可使用。\
**5****、安装****wordpress****后可能遇到的问题**\
按照官方教程安装完wordpress之后，可能遇到的问题以及解决方法如下（参考了如下帖子：[搬瓦工VPS:LNMP环境下安装wordpress常遇到的问题及解决方法](http://www.banwagong.com/111.html)  ）：

- **后台只显示一个主题**：主要是和scandir函数有关，解决方法也比较简单，修改\
  /usr/local/php/etc/php.ini 。可以通过VI命令修改，或者下载到本地进行修改，找到disable\_functions 后面的scandir删除掉这个函数。然后重启PHP即可。
  - ini路径 /usr/local/php/etc/php.ini
  - 重启命令：/etc/init.d/php-fpm restart
- **后台安装插件或主题都提示需要输入****FTP****信息**：出现这个问题，是因为文件目录权限问题。解决方法，SSH登录VPS，执行以下两条命令即可
  - chmod -R 755 /home/wwwroot
  - chown -R www /home/wwwroot
- **安装后过了一段时间****VPS****硬盘爆满**：lnmp安装时，mysql日志默认没有关闭，可能是这个原因（参考如下帖子：<http://www.banwagong.com/176.html>），修改一下**/etc/my.cnf**文件。找到**log-bin=mysql-bin**和**binlog\_format=mixed**两行，在这两条的前面加一个**#**号 ，将这两条语句注释掉即可。然后重启mysql   **/etc/init.d/mysql restart**

建议大家用上述方式建站后，去“[搬瓦工VPS](http://www.banwagong.com/145.html)”这个网站上看看，列出了很多需要注意的事项，我就参考了好多帖子，推荐一下。\
 \
以上。\