---
title: "【源码分析】java sdk篇–CopyOnWrite容器"
date: "2017-01-11"
categories: [java, 源码剖析, 读书笔记]
source: "http://prayerlaputa.com/?p=262"
---

# 【源码分析】java sdk篇–CopyOnWrite容器

工作中遇到CopyOnWriteArrayList这个类，略好奇，简单学习了一下，这里做个笔记。

## 一、概念

CopyOnWrite容器是在JDK 1.5 的java.uti.concurrent包中出现的，目前只有两个类

- CopyOnWriteArrayList
- CopyOnWriteSet

\
这些容器类与平时用到的ArrayList/Set的区别之处在于：

> CopyOnWrite容器即写时复制的容器。通俗的理解是当我们往一个容器添加元素的时候，不直接往当前容器添加，而是先将当前容器进行Copy，复制出一个新的容器，然后新的容器里添加元素，添加完元素之后，再将原容器的引用指向新的容器。这样做的好处是我们可以对CopyOnWrite容器进行并发的读，而不需要加锁，因为当前容器不会添加任何元素。所以CopyOnWrite容器也是一种读写分离的思想，读和写不同的容器。

## 二、源码分析

与ArrayList类似，CopyOnWriteArrayList内部同样是基于数组实现，如下：

```
/** The array, accessed only via getArray/setArray. */
private transient volatile Object[] array;
```

array数组被transient关键字修饰，保证该数组不能使用Serializable接口自动序列化；被volatile修饰，保证了多线程访问时的可见性，即保证每次读取的是最新的值，但是没保证对变量的操作的原子性（有关volatile关键的分析，参见：[Java并发编程：volatile关键字解析](http://www.cnblogs.com/dolphin0520/p/3920373.html)）。与ArrayList相比，CopyOnWriteArrayList多出了volatile关键字。\
而CopyOnWriteArrayList区别于ArrayList的主要地方在于add/set/remove等涉及到写数据的方法：

```
public E set(int index, E element) {
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            Object[] elements = getArray();
            E oldValue = get(elements, index);
            if (oldValue != element) {
                int len = elements.length;
                Object[] newElements = Arrays.copyOf(elements, len);
                newElements[index] = element;
                setArray(newElements);
            } else {
                // Not quite a no-op; ensures volatile write semantics
                setArray(elements);
            }
            return oldValue;
        } finally {
            lock.unlock();
        }
    }
public boolean add(E e) {
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            Object[] elements = getArray();
            int len = elements.length;
            Object[] newElements = Arrays.copyOf(elements, len + 1);
            newElements[len] = e;
            setArray(newElements);
            return true;
        } finally {
            lock.unlock();
        }
    }
public E remove(int index) {
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            Object[] elements = getArray();
            int len = elements.length;
            E oldValue = get(elements, index);
            int numMoved = len - index - 1;
            if (numMoved == 0)
                setArray(Arrays.copyOf(elements, len - 1));
            else {
                Object[] newElements = new Object[len - 1];
                System.arraycopy(elements, 0, newElements, 0, index);
                System.arraycopy(elements, index + 1, newElements, index,
                                 numMoved);
                setArray(newElements);
            }
            return oldValue;
        } finally {
            lock.unlock();
        }
    }
```

ArrayList在add/set/remove时，只需要考虑内部的数组就可以，不用考虑并发。而CopyOnWriteArrayList则采用可重入锁，避免多线程写操作，并且写的时候是重新拷贝一个新的数组，等拷贝结束、将修改引用后再释放锁。因此，CopyOnWriteArrayList若保存对象较大、占用内存较多时可能造成JVM频繁进行gc。另外，CopyOnWriteArrayList只保证了数据的最终一致性，并没有保证数据的实时一致性。

## 三、场景应用常见

> CopyOnWrite并发容器用于读多写少的并发场景。比如白名单，黑名单，商品类目的访问和更新场景

## 四、参考

[JAVA中的COPYONWRITE容器](http://coolshell.cn/articles/11175.html)\
[CopyOnWriteArrayList源码解析](http://www.cnblogs.com/java-zhao/p/5121944.html)