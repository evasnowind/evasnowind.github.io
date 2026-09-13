---
title: "Spring Boot 启动失败且不输出日志"
date: "2020-03-14"
categories: ["Java", "Spring Boot"]
tags: ["Spring Boot"]
source: "http://prayerlaputa.com/?p=782"
description: "记录 Spring Boot 启动失败但几乎没有日志输出时的几个常见排查方向。"
---

Spring Boot 启动失败，但几乎没有有效日志输出，只能看到下面这类提示：
![](/images/spring_boot_start_fail-300x170_d4c13e5e.png)

下面是几个比较常见的排查方向：

<!-- more -->

### 1. 日志配置文件没有配好

解决：修改日志等级，找到logback-boot.xml文件，找到`<root level="INFO"> </root>`，修改日志等级，添加标准输出

```
<root level="INFO">
    <appender-ref ref="STDOUT"/>
</root>
```

如果自己没有写日志配置，可能是被其他jar包中的log配置文件覆盖了你本地的默认的日志。
解决办法：编写自己的日志配置文件或者排除一下资源文件。

### 2. Jar 冲突

### 3. IDEA 本地缓存导致的问题

这是我自己实际遇到的一种情况：前一天还运行正常，第二天突然就无法启动，日志里几乎没有任何有用信息，只剩下下面这张图。
![](/images/spring_boot_start_fail-300x170_d4c13e5e.png)

**此时可以尝试执行`mvn clean`命令，清除target目录下的之前打好的jar包或者是war包。**

当然，也可以尝试这样，然后重新build。
![](/images/idea_clean_cache-170x300_5c104837.png)

## 参考资料

- [spring boot启动没有日志](https://blog.csdn.net/monica1_1/article/details/85335197)
- [springboot 启动不输出日志](https://blog.csdn.net/yl_hahha/article/details/83476330)
- [再谈springboot启动为什么不打印日志?](https://blog.csdn.net/yl_hahha/article/details/98471364)