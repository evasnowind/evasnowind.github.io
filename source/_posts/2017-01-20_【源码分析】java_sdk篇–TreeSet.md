---
title: "【源码分析】java sdk篇–TreeSet"
date: "2017-01-20"
categories: [java, 学习, 源码剖析]
source: "http://prayerlaputa.com/?p=276"
---

# 【源码分析】java sdk篇–TreeSet

今天刷leetcode时需要用到TreeSet，简单看了下源代码，在此做下学习笔记：

## 概念

TreeSet与TreeMap类似，能够创建有序的集合。

## 基本操作

TreeSet的实现基于TreeMap（TreeMap源码比较复杂，参考这篇文章：[Java提高篇（二七）—–TreeMap](http://blog.csdn.net/chenssy/article/details/26668941) ），内部使用

```
private transient NavigableMap<E,Object> m;
```

这个NavigableMap保存数据，而实际上这个m就是一个TreeMap对象，而在进行add(E)操作时，实际上是进行了如下操作：

```
m.put(E, dummyObject);
```

由于基于TreeMap，TreeSet的add/remove/contains等基本操作的时间复杂度同样为log(n)。

## 同步

与TreeMap一样，TreeSet的基本操作并没有做线程安全处理，因此需要多线程访问同一个TreeSet对象、并且至少有一个线程需要修改该对象时，需要手动加上同步语句，比如使用synchronized关键字，除此之外还可以在创建TreeSet对象时使用Collections.synchronizedSortedSet方法来保证同步安全：

```
SortedSet s = Collections.synchronizedSortedSet(new TreeSet(...));
```

此外，TreeSet所返回的iterator是fail-fast的，源码中解释如下：

> The iterators returned by this class’s iterator method are fail-fast: if the set is modified at any time after the iterator is created, in any way except through the iterator’s own remove method, the iterator will throw a ConcurrentModificationException. Thus, in the face of concurrent modification, the iterator fails quickly and cleanly, rather than risking arbitrary, non-deterministic behavior at an undetermined time in the future.\
> Note that the fail-fast behavior of an iterator cannot be guaranteed as it is, generally speaking, impossible to make any hard guarantees in the presence of unsynchronized concurrent modification. Fail-fast iterators throw ConcurrentModificationException on a best-effort basis. Therefore, it would be wrong to write a program that depended on this exception for its correctness: the fail-fast behavior of iterators should be used only to detect bugs.

有关fail-fast，可以参考这篇文章：[Java提高篇（三四）—–fail-fast机制](http://blog.csdn.net/chenssy/article/details/38151189)\
有关TreeSet更详细的介绍，可以参考这篇文章：[Java 集合系列17之 TreeSet详细介绍(源码解析)和使用示例](http://www.cnblogs.com/skywang12345/p/3311268.html)