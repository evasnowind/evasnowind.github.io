---
title: "win7下配置PHP+apache+mysql【转载 + 补充】"
date: "2015-12-09"
categories: [工具, 软件]
source: "http://prayerlaputa.com/?p=123"
---

# win7下配置PHP+apache+mysql【转载 + 补充】

本帖参考了如下帖子：\
http://apachewin7.jiaogen.com/2010/04/21/win7%E4%B8%8Bphp5-3apache2-2%E9%85%8D%E7%BD%AE/\
http://www.umgr.com/Blog/PostView.aspx?bpId=67938\
http://www.cnblogs.com/good\_hans/archive/2010/04/01/1702059.html\
（1）安装并配置Apache（安装到D:\MyPrograms\Apache）\
安装时默认安装，Network Domain, Server Name 如果没有的话可以使用localhost，Administrator’s Email Address区域填你的邮件地址。以后可以在httpd.conf文件中修改这些信息。\
Apache启动后，用http://localhost/或http://127.0.0.1测试是否成功。成功的话屏幕会有个It works!\
有关Apache的配置见下面内容。\
（2）配置PHP（解压PHP压缩包到D:\MyPrograms\php\）\
首先，对于PHP版本的说明： PHP版本：php-5.3.2-Win32-VC6-x86，VC9是专门为IIS定制的，VC6 是为了其他WEB服务软件提供的，如 Apache。\
将PHP解压到一个非中文且不带空格的路径下（我用的是D:\MyPrograms\php\），详细的安装步骤在安装文档install.txt文件中，由于是全E文的而且非常详细，估计很多人不太有耐心将其看完，但是它真的很有用，本文后面会拿其做参考。\
If you are installing PHP 5, extract to C:\php as the zip file doesn’t expand as in PHP 4. You may choose a different location but do not have spaces in the path (like C:\Program Files\PHP) as some web servers will crash if you do.\
所以请再次确认解压路径不包含空格。\
根据网上和大多数教材的说法需要将所有的dll文件复制到系统文件夹（%systemroot%\system32），我个人不是很喜欢这个做法。在install.txt中有这么一段描述：\
To make php5ts.dll available you have three options: copy the file to the Windows system directory, copy the file to the web server’s directory, or add your PHP directory, C:\php to the PATH. For better maintenance, we advise you to follow the last option, add C:\php to the PATH, because it will be simpler to upgrade PHP in the future. Read more about how to add your PHP directory to PATH in the corresponding FAQ entry (and then don’t forget to restart the computer – logoff isn’t enough).\
所以为了今后升级和维护的方便，最好的方法是将PHP的解压路径（如D:\MyPrograms\php\）加入PATH环境变量，然后reboot。\
PHP在解压路径存放有两个文件 php.ini-development 和 php.ini-production，虽然install.txt强烈建议标准服务器使用后者，但是对于开发而言还是适合使用php.ini- development，将其备份后改名为php.ini，用文本编辑器将其打开。\
首先查找extension\_dir，它用于指定PHP扩展dll的位置，根据注释可以将On windows下的那一行改成\
extension\_dir = “D:\MyPrograms\php\ext”\
然后查找doc\_root，它用于指定Web服务器的根路径， 将其改成\
doc\_root = “D:\MyPrograms\php\Apache\htdocs” ; 如果之后要改变根路径则可以填入新的根路径\
之后选择运行一些PHP必须的扩展，查找extension，将下面几个extension前的注释分号去掉\
extension=php\_gd2.dll\
extension=php\_imap.dll\
extension=php\_mysql.dll ; 使用MySQL必需\
extension=php\_mysqli.dll ; 使用MySQL必需\
然后保存，关闭php.ini。\
==== 配置 Apache ====\
首先检查PHP解压路径下有没有一个php5apache2\_2.dll文件（如果没有则表明你选错了php压缩包的版本），然后在Apache的安装目录下的conf目录中用文本编辑器打开httpd.conf文件，查找一下LoadModule下是否已经有下面的 几句，如果没有，在所有LoadModule的下面加入以下几句\
LoadModule php5\_module D:/MyPrograms/PHP/php5apache2\_2.dll # 载入php模块\
PHPIniDir “D:/MyPrograms/PHP” # 指定php.ini的路径\
AddType application/x-httpd-php .php # 允许php语法在.php文件中使用\
AddType application/x-httpd-php .html # 允许php语法在.html文件中使用，此处，“你可以使用任何扩展名，有些用户使用PHP时喜欢用.html扩展名，要记住，这样最终会导致一个后果，每次请求HTML文件时都会把文件交由PHP解析。“（引自《PHP与MySQL5程序设计》），因此不建议把这句也加上。\
（以上#和后面的提示有时候会引起apache服务不能启动的问题，最好吧注释去掉。）\
如果需要改变Web根路径，可以查找DocumentRoot，将相关行修改：\
DocumentRoot “D:/MyPrograms/Apache/htdocs”\
同时必须在以下地方进行相应修改：\
接下查找DirectoryIndex，此处用于指定url为一目录时默认载入文件的顺序，通常为index.php,index.html, 等等，针对php可以采用如下的设置：\
DirectoryIndex index.php index.html default.php default.html\
注意文件名的中间用空格隔开。\
如果需要修改端口，查找listen 修改后边的数值\
保存并关闭httpd.conf，双击Apache的托盘图标打开界面，点击Restart重启Apache。\
之后我们就可以测试PHP是否正常工作了，在Web根路径（默认为Apache安装目录的htdocs）下新建一个test.php文件，添加以下一行内容\
保存退出。在浏览器输入http://localhost/test.php，如果有详细php的配置信息显示，说明配置成功