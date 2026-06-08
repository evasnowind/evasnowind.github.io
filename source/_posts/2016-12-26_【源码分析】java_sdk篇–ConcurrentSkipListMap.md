---
title: "【源码分析】java sdk篇–ConcurrentSkipListMap"
date: "2016-12-26"
categories: [java, 源码剖析, 算法]
source: "http://prayerlaputa.com/?p=247"
---

# 【源码分析】java sdk篇–ConcurrentSkipListMap

最近开始看jdk源代码，先分享一个挺好的博客：<http://blog.csdn.net/chenssy>  chenssy 有关JDK源码的博文写的很细，我就参考他的博文写写其他的内容，已经被chenssy写过的内容我就不再重复啦，估计也没他写的细。另外，如果网上已有相关分析，我可能直接给出链接、做做补充，毕竟本系列属于读书笔记性质，留下个记录免得自己忘记，并不打算写的特别全或是全部原创。下面就开始【源码分析】系列的第一篇：ConcurrentSkipListMap\
声明：本博客内容一般采集自互联网，若引用了其他文章或是博客的内容，我会尽量注明出处。如果有转载、未注明出处，或是有侵权的情况，请及时与我沟通（evasnowind@sina.com），我会及时删除。转载请注明本文出处，谢谢。\
在java中，\
如果我们需要快速存取键值对，可以用HashMap；\
如果要求多线程并发存取键值对，可以用ConcurrentHashMap；\
如果要求快速存取键值对，并要求键值对按照某种顺序排序，可以用TreeMap；\
如果，我们需要快速存取键值对，支持多线程并发存取，还要求数据有序，是否有现成的数据结构？\
答案是肯定，那就是ConcurrentSkipListMap。

## 一、概述

**JDK 1.6**中引入了ConcurrentSkipListMap这一数据结构，JDK文档描述如下：

> A scalable concurrent `ConcurrentNavigableMap` implementation. The map is sorted according to the [natural ordering](eclipse-javadoc:%E2%98%82=HMSExample/D:%5C/DevTools%5C/android-sdk-windows%5C/platforms%5C/android-23%5C/android.jar%3Cjava.util.concurrent(ConcurrentSkipListMap.class%E2%98%83ConcurrentSkipListMap%E2%98%82Comparable) of its keys, or by a `Comparator` provided at map creation time, depending on which constructor is used.\
> This class implements a concurrent variant of [SkipLists](http://en.wikipedia.org/wiki/Skip_list) providing expected average *log(n)* time cost for the `containsKey`, `get`, `put` and `remove` operations and their variants. Insertion, removal, update, and access operations safely execute concurrently by multiple threads. Iterators are *weakly consistent*, returning elements reflecting the state of the map at some point at or since the creation of the iterator. They do *not* throw `ConcurrentModificationException`, and may proceed concurrently with other operations. Ascending key ordered views and their iterators are faster than descending ones.\
> All `Map.Entry` pairs returned by methods in this class and its views represent snapshots of mappings at the time they were produced. They do *not* support the `Entry.setValue` method. (Note however that it is possible to change mappings in the associated map using `put`, `putIfAbsent`, or `replace`, depending on exactly which effect you need.)\
> Beware that, unlike in most collections, the `size` method is *not* a constant-time operation. Because of the asynchronous nature of these maps, determining the current number of elements requires a traversal of the elements, and so may report inaccurate results if this collection is modified during traversal. Additionally, the bulk operations `putAll`, `equals`, `toArray`, `containsValue`, and `clear` are *not* guaranteed to be performed atomically. For example, an iterator operating concurrently with a `putAll` operation might view only some of the added elements.\
> This class and its views and iterators implement all of the *optional* methods of the `Map` and `Iterator` interfaces. Like most other concurrent collections, this class does *not* permit the use of `null` keys or values because some null return values cannot be reliably distinguished from the absence of elements.

简单概括下关键点：

- 常用操作，如containsKey/get/put/remove/..，平均时间复杂度为*log(n)*
- CURD等操作是线程安全的，可以被多个线程并发执行
- Iterator是弱一致的
- Map.Entry反映的是Entry被创建时的数据（我个人理解：由于支持多线程，Entry被创建后Map的数据可能会改变），不支持Entry.setValue方法
- size()方法不是一个常量时间操作，每次调用都会进行一次遍历来计算当前Map内元素的个数
- `putAll`, `equals`, `toArray`, `containsValue`, and `clear这些方法并不是原子性的操作`
- key和value都不能是null

## 二、使用建议

> 在非多线程的情况下，应当尽量使用TreeMap。此外对于并发性相对较低的并行程序可以使用Collections.synchronizedSortedMap将TreeMap进行包装，也可以提供较好的效率。对于高并发程序，应当使用ConcurrentSkipListMap，能够提供更高的并发度。\
> 所以在多线程程序中，如果需要对Map的键值进行排序时，请尽量使用ConcurrentSkipListMap，可能得到更好的并发度。\
> 注意，调用ConcurrentSkipListMap的size时，由于多个线程可以同时对映射表进行操作，所以映射表需要遍历整个链表才能返回元素个数，这个操作是个O(log(n))的操作。\
> 引自：[Java多线程（四）之ConcurrentSkipListMap深入分析](http://www.2cto.com/kf/201212/175026.html)

## 三、代码分析

ConcurrentSkipListMap内部实现采用了跳跃表，有关跳跃表的分析参见：[SkipList 跳表](http://kenby.iteye.com/blog/1187303)\
有关更详细的分析参见：\
[跳表（SkipList）及ConcurrentSkipListMap源码解析](http://blog.csdn.net/sunxianghuang/article/details/52221913)\
[Java多线程系列–“JUC集合”05之 ConcurrentSkipListMap](http://www.cnblogs.com/skywang12345/p/3498556.html)