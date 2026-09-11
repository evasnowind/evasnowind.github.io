---
title: "Java 中方法参数为父类 List 时传入子类 List 的处理【转载】"
date: "2017-05-10"
categories: ["Java"]
tags: ["Java", "集合"]
source: "http://prayerlaputa.com/?p=648"
description: "记录 Java 泛型场景下，方法参数为父类 List 时如何处理子类 List。"
---

原文链接：<https://blog.csdn.net/u014463137/article/details/75570656>

# 父类

```
public class FatherA {
 
    private String a;
 
 
    public String getA() {
        return a;
    }
 
    public void setA(String a) {
        this.a = a;
    }
 
}
```

# 子类

```
public class Children extends FatherA {
 
    private String b;
 
    public String getB() {
        return b;
    }
 
    public void setB(String b) {
        this.b = b;
    }
    
}
```

# 实现

`List<FatherA>` 和 `List<Children>` 是两种不同的泛型类型。

```
public class Test {
    public static void main(String[] args) {
        Children cl = new Children();
        cl.setB("1");
        cl.setA("2");
        List<Children> list = new ArrayList<Children>();
        list.add(cl);
        getA(list);
        System.out.println(cl.getA());
    }
 
    private static <T extends FatherA> void getA(List<T> list) {
        for (int i = 0; i < list.size(); i++) {
            list.get(i).setA("3");
        }
    }
}
```

<!-- more -->

