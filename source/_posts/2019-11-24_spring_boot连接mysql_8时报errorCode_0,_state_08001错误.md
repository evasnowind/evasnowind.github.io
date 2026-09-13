---
title: "Spring Boot 连接 MySQL 8 报 errorCode 0、state 08001 错误"
date: "2019-11-24"
categories: ["数据库"]
tags: ["Spring Boot", "MySQL"]
source: "http://prayerlaputa.com/?p=715"
description: "记录 Spring Boot 连接 MySQL 8 时出现 errorCode 0、state 08001 的常见原因，包括驱动版本与连接参数配置问题。"
---

## 问题现象

Spring Boot 启动时，连接 MySQL 8 数据库报错 `errorCode 0, state 08001`。

## 原因分析

### 1. `pom.xml` 中配置的 MySQL 驱动版本与 MySQL 数据库版本不一致

<!-- more -->

这种情况下，修改 `pom.xml` 中的驱动版本即可，例如：

```
……
<groupId>mysql
<artifactId>mysql-connector-java</artifactId>
<version>8.0.11</version>
……
```

同时，`yml` 文件中的 MySQL 驱动类也建议改为：

```
……
driver-class-name: com.mysql.cj.jdbc.Driver
……
```

### 2. 连接参数配置需要调整

如果修改驱动后问题仍然存在，可以进一步调整连接参数，例如：

```
……
url: jdbc:mysql://ip地址:3306/数据库名称?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Hongkong
……
```

这里没有继续深挖底层细节，但大概率与认证方式、编码设置或时区参数有关。

## 参考资料

- [springboot-mybatis-mysql-errorCode 0, state 08001](https://www.jianshu.com/p/d703af3ad81a)
- [springboot 连接 mysql 报错记录](https://blog.csdn.net/Sunshine_Cui001/article/details/80903540)
- [有关IDEA连接MySQL数据库时报08001错误的解决方法](https://blog.csdn.net/qq_41541732/article/details/88380660)