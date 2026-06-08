---
title: "git tag及推送tag到远端服务器的命令"
date: "2019-02-24"
categories: [git]
source: "http://prayerlaputa.com/?p=688"
---

# git tag及推送tag到远端服务器的命令

查看tag\
git show\
git tag -l “v1.5” //加上筛选条件

创建tag\
git tag 版本号\
git tag -a v1.5 -m “my version 1.5” //加上备注信息\
git tag -a v1.5 //会打开默认文本编辑器\
git tag -s v1.5 -m ‘my signed 1.5 tag’ //用 GPG 来签署标签

推送到远端\
git push origin [tagname] //push单个tag\
git push [origin] –tags //push所有tag