---
title: "Java中的Overload Overwrite Override【转载】"
date: "2015-12-09"
categories: [java, 读书]
source: "http://prayerlaputa.com/?p=144"
---

# Java中的Overload Overwrite Override【转载】

一直比较模糊下面几个概念,今天在网上看到,摘录如下:

overload （重载）关键 字： 无

1.使用的地方：同一类里。（其实是同一类里同一名称的方法不同版本的一种叫法）

2. 要重载的方法和被重载的方法要求：参数列表不同或返回类型不同或二者都不同

overwrite （重写）关键字：new

用来是从父类继承的与是由了new关键字的方法的方法名一样的所以方法无效，就像父类里不存在这些方法一样。只要去方法名一样别的没要求。

override （覆写）关键字： override

1.override的方法必须父类的(直接父类或间接父类(就是向上n层的父类))虚方法或抽象方法其中抽象方法是必须覆写的。\
2.要求3处相同\
相同的方法名称称；\
相同的参数列表；\
相同的返回类型。\
 \
而百度知道一位仁兄写到：\

```
overload  完全新的方法，参数和原方法不同。
override  覆盖继承到的那个方法，那个方法仍然没有放弃。
overwrite 重写继承到的那个方法的代码，原方法被放弃。
```