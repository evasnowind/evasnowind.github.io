---
title: "MySQL 中使用 REPLACE 与 REGEXP 实现匹配和替换"
date: "2020-02-18"
categories: ["数据库"]
tags: ["MySQL"]
source: "http://prayerlaputa.com/?p=765"
description: "整理 MySQL 中用 REGEXP 做正则匹配、用 REPLACE 做字符串替换的几种常见写法。"
---

MySQL 里这类需求通常分成两类：一类是用 `REGEXP` 做匹配筛选，另一类是用 `REPLACE` 做普通字符串替换。下面把几种常见写法整理在一起，方便查阅。

例如：
`UPDATE myTable SET HTML=REPLACE(HTML,'<br>','') WHERE HTML REGEXP '(<br */*>\s*){2,}'`

更多例子如下：

为了找出以“d”开头的名字，使用“^”匹配名字的开始：

SELECT \* FROM master\_data.md\_employee WHERE name REGEXP ‘^d’;

为了找出以“love”结尾的名字，使用“$”匹配名字的结尾：

SELECT id,name FROM master\_data.md\_employee WHERE name REGEXP ‘love$’;

为了找出包含一个“w”的名字，使用以下查询：

SELECT id,name FROM master\_data.md\_employee WHERE name REGEXP ‘w’;

为了找出包含正好5个字符的名字，使用“^”和“$”匹配名字的开始和结尾，和5个“.”实例在两者之间：

SELECT id,name FROM master\_data.md\_employee WHERE name REGEXP ‘^…..$’;

或者：

SELECT id,name FROM master\_data.md\_employee WHERE name REGEXP ‘^.{5}$’;

参考资料：

<!-- more -->

#### [MySQL中使用replace、regexp进行正则表达式替换的用法分析](https://www.jb51.net/article/108007.htm)

#### [MySQL如何实现正则查找替换？](https://segmentfault.com/q/1010000000151235)