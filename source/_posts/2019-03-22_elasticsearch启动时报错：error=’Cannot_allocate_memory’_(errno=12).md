---
title: "Elasticsearch 启动报错：Cannot allocate memory (errno=12)"
date: "2019-03-22"
categories: ["中间件"]
tags: ["Elasticsearch"]
source: "http://prayerlaputa.com/?p=683"
description: "记录 Elasticsearch 启动时报 `Cannot allocate memory (errno=12)` 的原因，以及通过调整 JVM 内存参数进行处理的方法。"
---

Elasticsearch 启动时报错如下：

```

Java HotSpot™ 64-Bit Server VM warning: INFO: os::commit_memory(0x00000000e5330000, 449642496, 0) failed; error='Cannot allocate memory' (errno=12)

There is insufficient memory for the Java Runtime Environment to continue.
Native memory allocation (mmap) failed to map 449642496 bytes for committing reserved memory.
An error report file with more information is saved as:
/opt/elasticsearch/hs_err_pidxxx.log
```

原因很直接：当前机器可供 JRE 使用的内存不足。
解决思路也比较直接：调整 Elasticsearch 的 JVM 内存参数。

```

vim config/jvm.options
```

修改JVM参数，将其改小即可：

```


-Xms512m  
-Xmx512m 
```

<!-- more -->
