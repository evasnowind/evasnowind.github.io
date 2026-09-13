---
title: "Git 使用技巧：cherry-pick 挑选某个 commit 应用到当前分支"
date: "2019-11-17"
categories: ["工具", "Git"]
tags: ["Git"]
source: "http://prayerlaputa.com/?p=705"
description: "记录如何使用 git cherry-pick 将某个分支上的一个或多个 commit 应用到当前分支。"
---

`git cherry-pick` 可以把某个分支上的一个或多个 commit 应用到当前分支。

```
git cherry-pick <commit id>
```

如果需要先查找 commit id，可以使用 `git log` 查看版本历史，最简单的命令如下：

<!-- more -->

```
git log
```

如果想查找已经被删除的某次 commit，可以使用：

```
git reflog
```