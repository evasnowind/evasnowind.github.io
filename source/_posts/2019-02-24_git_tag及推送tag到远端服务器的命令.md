---
title: "Git tag 及推送 tag 到远端服务器的命令"
date: "2019-02-24"
categories: ["工具", "Git"]
tags: ["Git"]
source: "http://prayerlaputa.com/?p=688"
description: "整理 Git 中查看、创建与推送 tag 到远端的常用命令，适合作为发布流程中的备忘清单。"
---

这篇文章整理 Git 中查看、创建和推送 tag 的常用命令，平时发版时查起来会更方便。

查看 tag
git show
git tag -l "v1.5" //加上筛选条件

创建 tag
git tag 版本号
git tag -a v1.5 -m "my version 1.5" //加上备注信息
git tag -a v1.5 //会打开默认文本编辑器
git tag -s v1.5 -m 'my signed 1.5 tag' //用 GPG 来签署标签

<!-- more -->

推送到远端
git push origin [tagname] //push单个tag
git push [origin] --tags //push所有tag
