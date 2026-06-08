---
title: "elasticsearch启动时报错：error=’Cannot allocate memory’ (errno=12)"
date: "2019-03-22"
categories: [分布式, 搜索]
source: "http://prayerlaputa.com/?p=683"
---

# elasticsearch启动时报错：error=’Cannot allocate memory’ (errno=12)

elasticsearch启动时报错：

```

Java HotSpot™ 64-Bit Server VM warning: INFO: os::commit_memory(0x00000000e5330000, 449642496, 0) failed; error=‘Cannot allocate memory’ (errno=12)

There is insufficient memory for the Java Runtime Environment to continue.
Native memory allocation (mmap) failed to map 449642496 bytes for committing reserved memory.
An error report file with more information is saved as:
/opt/elasticsearch/hs_err_pidxxx.log
```

原因：没有足够的内存供JRE运行\
解决：修改es配置参数

```

vim config/jvm.options
```

修改JVM参数，将其改小即可：

```


-Xms512m  
-Xmx512m 
```