---
title: "git使用技巧- cherry-pick挑选某个commit应用到当前分支"
date: "2019-11-17"
categories: [git]
source: "http://prayerlaputa.com/?p=705"
---

# git使用技巧- cherry-pick挑选某个commit应用到当前分支

git cherry-pick可以挑选某个分支的一个或多个commit，将其应用到当前分支上。

```
git cherry-pick <commit id>
```

查询commit id 的查询可以使用`git log`查询（查询版本的历史），最简单的语法如下：

```
git log
```

如果想查找已经被删除的某次commit，则可以用

```
git reflog
```