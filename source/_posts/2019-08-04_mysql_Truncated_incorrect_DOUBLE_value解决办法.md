---
title: "mysql Truncated incorrect DOUBLE value解决办法"
date: "2019-08-04"
categories: [mysql]
source: "http://prayerlaputa.com/?p=576"
---

# mysql Truncated incorrect DOUBLE value解决办法

出现该错误“Truncated incorrect DOUBLE value”时，极有可能是你写的mysql查询语句中所提供的字段，与表中字段类型不匹配。比如字段为字符型的，与数字进行比较，数字两侧没加引号；比如表中字段明明是字符串，但在where语句中偏偏直接写成了a=23而不是a=’23’。

解决：字段改成对应类型即可。

参考：https://zhidao.baidu.com/question/693223458186942564.html