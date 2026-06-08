---
title: "mac os x上执行shell脚本时，如何隐藏终端窗口？"
date: "2019-07-27"
categories: [linux, 工具]
source: "http://prayerlaputa.com/?p=573"
---

# mac os x上执行shell脚本时，如何隐藏终端窗口？

默认情况下，如果在mac终端中执行shell脚本，会弹出窗口展示脚本执行输出。

工作中需求：执行shell脚本，不能展示输出。

解决：

问了下谷歌，搜索出如下答案，亲测可用。

- 打开mac上的**Automator**程序，选择应用程序（application），选择shell脚本选项，将脚本放到界面中（用引号括起来），或是直接将文件拖拽到界面中
- 执行，测试没问题即可保存。

原文：

> Open Automator, choose Application, add a Run Shell Script action and put in your Shell command between quotes (if you have a file, you can just drag and drop it).
>
> Other than playing it, now you can save it (as an app anywhere) and even set the icon.

参考资料：

[Run a shell script on OS X without having a terminal window appear?](https://superuser.com/questions/360247/run-a-shell-script-on-os-x-without-having-a-terminal-window-appear)

其他参考资料：

- [mac 开机执行 shell 后，怎么能自动隐藏终端窗口？](https://www.v2ex.com/t/298494)
- [How do I hide a running terminal script in the background?](https://www.reddit.com/r/osx/comments/5xv7oj/how_do_i_hide_a_running_terminal_script_in_the/)