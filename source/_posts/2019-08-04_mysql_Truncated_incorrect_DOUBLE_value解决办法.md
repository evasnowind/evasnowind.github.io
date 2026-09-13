---
title: "MySQL 报错 Truncated incorrect DOUBLE value 的解决办法"
date: "2019-08-04"
categories: ["数据库"]
tags: ["MySQL"]
source: "http://prayerlaputa.com/?p=576"
description: "记录 MySQL 报错 `Truncated incorrect DOUBLE value` 时最常见的原因，以及排查字段类型与条件写法的思路。"
---

出现 `Truncated incorrect DOUBLE value` 这个报错时，最常见的原因是查询条件里的字段类型和实际比较值不匹配。比如字段明明是字符串，却按数字去比较；或者本该写成 `a='23'`，却直接写成了 `a=23`。

<!-- more -->

解决：字段改成对应类型即可。

参考：https://zhidao.baidu.com/question/693223458186942564.html