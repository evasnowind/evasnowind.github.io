---
title: "【源码分析】java sdk篇–Java Collection Framework"
date: "2017-02-22"
categories: [java, 学习, 源码剖析]
source: "http://prayerlaputa.com/?p=316"
---

# 【源码分析】java sdk篇–Java Collection Framework

本文就是想学习、简单总结一下JDK里的JCF，并且制定一下自己后续阅读源码的范围——先学习一下JCF中重要的一些类，后续学习Java其他一些东西，给自己定个路线图，O(∩\_∩)O~\
本文参考了多篇文章，如有引用但没标注的地方，请及时联系我，这文章本意是想记录一下，相当于读书笔记。

## 一、概述

JCF，即Java Collection Framework，是JDK中已经封装好容器类，类结构如下：\
[![](http://www.prayerlaputa.com/wp-content/uploads/2017/02/JCF详细图-300x296.jpg)](http://www.prayerlaputa.com/wp-content/uploads/2017/02/JCF详细图.jpg)\
网上常见的是这张图，但其实少了一个Queue，看下面这张图更清楚一些：[\](http://www.prayerlaputa.com/wp-content/uploads/2017/02/JCF详细图2.gif)\
[![](http://www.prayerlaputa.com/wp-content/uploads/2017/02/JCF详细图2-300x285.gif)](http://www.prayerlaputa.com/wp-content/uploads/2017/02/JCF详细图2.gif)\
 \
看着很复杂，其实按照我们日常用到的类，可以按照如下分类（仅列出常见的具体实现类，上图那些抽象类就不一一讨论了）：\
1、Collection

- List
  - ArrayList
  - LinkedList
- Set
  - HashSet
  - TreeSet
  - LinkedHashSet
- Queue
  - ArrayDeque
  - LinkedList
  - 以及Deque（如ArrayQueue/LinkedList/…）

2、Map

- HashMap/TreeMap/Hashtable/…

## 二、具体实现

以下分别讨论一下：

### 1、List

“[List接口扩展自Collection，它可以定义一个允许重复的有序集合，从List接口中的方法来看，List接口主要是增加了面向位置的操作，允许在指定位置上操作元素，同时增加了一个能够双向遍历线性表的新列表迭代器ListIterator。AbstractList类提供了List接口的部分实现，AbstractSequentialList扩展自AbstractList，主要是提供对链表的支持。](http://www.jianshu.com/p/63e76826e852)”常用实现ArrayList/LinkedList就没必要讨论了，网上很多，实际编程过程中时刻谨记一个数组实现一个链表实现。

### 2、Set

[Set接口扩展自Collection，它与List的不同之处在于，规定Set的实例不包含重复的元素。在一个规则集内，一定不存在两个相等的元素。AbstractSet是一个实现Set接口的抽象类，Set接口有三个具体实现类，分别是散列集HashSet、链式散列集LinkedHashSet和树形集TreeSet。](http://www.jianshu.com/p/63e76826e852)\
HashSet在创建对象时可以指定集合初始容量、负载因子（load factor），当元素个数超过容量\*负载因子时集合将自动扩展容量。HashSet内部实际是用了一个key是传入值、val值为一个固定值的HashMap来实现。

[LinkedHashSet是用一个链表实现来扩展HashSet类，它支持对规则集内的元素排序。HashSet中的元素是没有被排序的，而LinkedHashSet中的元素可以按照它们插入规则集的顺序提取。](http://www.jianshu.com/p/63e76826e852)

[TreeSet扩展自AbstractSet，并实现了NavigableSet，AbstractSet扩展自AbstractCollection，树形集是一个有序的Set，其底层是一颗树，这样就能从Set里面提取一个有序序列了。在实例化TreeSet时，我们可以给TreeSet指定一个比较器Comparator来指定树形集中的元素顺序。树形集中提供了很多便捷的方法。](http://blog.csdn.net/stefanie860624/article/details/7245873)

### 3、Queue

[队列是一种先进先出的数据结构，元素在队列末尾添加，在队列头部删除。Queue接口扩展自Collection，并提供插入、提取、检验等操作。方法offer表示向队列添加一个元素，poll()与remove()方法都是移除队列头部的元素，两者的区别在于如果队列为空，那么poll()返回的是null，而remove()会抛出一个异常。方法element()与peek()主要是获取头部元素，不删除。](http://www.jianshu.com/p/63e76826e852)\
[接口Deque，是一个扩展自Queue的双端队列，它支持在两端插入和删除元素，因为LinkedList类实现了Deque接口，所以通常我们可以使用LinkedList来创建一个队列。](http://www.jianshu.com/p/63e76826e852)\
[PriorityQueue类实现了一个优先队列，优先队列中元素被赋予优先级，拥有高优先级的先被删除。](http://www.jianshu.com/p/63e76826e852)

### 4、Map

Map，图，是一种存储键值对映射的容器类，在Map中键可以是任意类型的对象，但不能有重复的键，每个键都对应一个值，真正存储在图中的是键值构成的条目。\
[HashMap是基于哈希表的Map接口的非同步实现，继承自AbstractMap，AbstractMap是部分实现Map接口的抽象类。](http://www.jianshu.com/p/63e76826e852)\
[![](http://www.prayerlaputa.com/wp-content/uploads/2017/02/HashMap实现-300x108.jpg)](http://www.prayerlaputa.com/wp-content/uploads/2017/02/HashMap实现.jpg)\
[在之前的版本中，HashMap采用数组+链表实现，即使用链表处理冲突，同一hash值的链表都存储在一个链表里。但是当链表中的元素较多，即hash值相等的元素较多时，通过key值依次查找的效率较低。而JDK1.8中，HashMap采用数组+链表+红黑树实现，当链表长度超过阈值（8）时，将链表转换为红黑树，这样大大减少了查找时间。](http://www.jianshu.com/p/63e76826e852) 也就是说JDK 1.8开始用数组+链表+红黑树是实现。具体分析参考此文章：[Java – 集合框架完全解析](http://www.jianshu.com/p/63e76826e852)  以及本博客后续文章。\
[在HashMap中要找到某个元素，需要根据key的hash值来求得对应数组中的位置。对于任意给定的对象，只要它的hashCode()返回值相同，那么程序调用hash(int h)方法所计算得到的hash码值总是相同的。我们首先想到的就是把hash值对数组长度取模运算，这样一来，元素的分布相对来说是比较均匀的。但是，“模”运算的消耗还是比较大的，在HashMap中，**(n – 1) & hash**用于计算对象应该保存在table数组的哪个索引处。HashMap底层数组的长度总是2的n次方，当数组长度为2的n次幂的时候，**(n – 1) & hash** 算得的index相同的几率较小，数据在数组上分布就比较均匀，也就是说碰撞的几率小，相对的，查询的时候就不用遍历某个位置上的链表，这样查询效率也就较高了。](http://www.jianshu.com/p/63e76826e852)\
TreeMap基于红黑树数据结构的实现，键值可以使用Comparable或Comparator接口来排序。TreeMap继承自AbstractMap，同时实现了接口NavigableMap，而接口NavigableMap则继承自SortedMap。SortedMap是Map的子接口，使用它可以确保图中的条目是排好序的。\
在实际使用中，如果更新Map时不需要保持图中元素的顺序，就使用HashMap，如果需要保持Map中元素的插入顺序或者访问顺序，就使用LinkedHashMap，如果需要使Map按照键值排序，就使用TreeMap。

### 5、其他

> ##### 1.Vector
>
> 前面我们已经提到，Java设计者们在对之前的容器类进行重新设计时保留了一些数据结构，其中就有Vector。用法上，Vector与ArrayList基本一致，不同之处在于Vector使用了关键字synchronized将访问和修改向量的方法都变成同步的了，所以对于不需要同步的应用程序来说，类ArrayList比类Vector更高效。
>
> Vector非常类似ArrayList，但是Vector是同步的。由Vector创建的Iterator，虽然和ArrayList创建的 Iterator是同一接口，但是，因为Vector是同步的，当一个Iterator被创建而且正在被使用，另一个线程改变了Vector的状态（例如，添加或删除了一些元素），这时调用Iterator的方法时将抛出ConcurrentModificationException，因此必须捕获该异常。**通过使用capacity和ensurecapacity操作以及capacityIncrement域可以优化存储操作，这个前面讲过**，（**Vector的Iterator和listIterator方法翻译的迭代器支持fail-fast机制，因此如果在使用迭代器的过程中有其他线程修改了map，那么将抛出ConcurrentModificationException，这就是所谓fail-fast策略。官方对此的说明是**  java.util 包中的集合类都返回 fail-fast迭代器，这意味着它们假设线程在集合内容中进行迭代时，集合不会更改它的内容。如果 fail-fast迭代器检测到在迭代过程中进行了更改操作，那么它会抛出 ConcurrentModificationException，这是不可控异常。）
>
> ##### 2.Stack
>
> Stack，栈类，是Java2之前引入的，继承自类Vector。
>
> ##### 3.HashTable
>
> HashTable和前面介绍的HashMap很类似，它也是一个散列表，存储的内容是键值对映射，不同之处在于，HashTable是继承自Dictionary的，HashTable中的函数都是同步的，这意味着它也是线程安全的，另外，HashTable中key和value都不可以为null。\
> 上面的三个集合类都是在Java2之前推出的容器类，可以看到，尽管在使用中效率比较低，但是它们都是线程安全的。下面介绍两个特殊的集合类。
>
> ##### 4.ConcurrentHashMap
>
> Concurrent，并发，从名字就可以看出来ConcurrentHashMap是HashMap的线程安全版。同HashMap相比，ConcurrentHashMap不仅保证了访问的线程安全性，而且在效率上与HashTable相比，也有较大的提高。关于ConcurrentHashMap的设计，我将会在下一篇关于并发编程的博客中介绍，敬请关注。
>
> ##### 5.CopyOnWriteArrayList
>
> CopyOnWriteArrayList，是一个线程安全的List接口的实现，它使用了ReentrantLock锁来保证在并发情况下提供高性能的并发读取。

另外，Collections类中有大量与容器类相关的工具方法可以使用，比如查找元素、找最值、逆序、shuffle等。

## 三、线程同步

上述提到的容器类除了Vector/Stack/HashTable这些上古遗留代码，以及ConcurrentHashMap/CopyOnWrite容器这些专门针对并发情况的容器，基本都是非同步的（unsynchronized），如需多线程访问需要自己加上同步相关代码。\
在java.util.concurrent包中定义的CopyOnWriteArrayList提供了线程安全的Arraylist，但是当进行add和set等变化操作时它是通过为底层数组创建新的副本实现的，所以比较耗费资源。可以参考 [JAVA中的COPYONWRITE容器](http://coolshell.cn/articles/11175.html)

## 参考

[Java – 集合框架完全解析](http://www.jianshu.com/p/63e76826e852)\
[java的集合框架最全详解（图）](http://www.cnblogs.com/davidIsOK/p/3916574.html)\