---
title: "java List的中 方法参数是父类对象的list。传入子类对象时的处理【转载】"
date: "2017-05-10"
categories: [java]
source: "http://prayerlaputa.com/?p=648"
---

# java List的中 方法参数是父类对象的list。传入子类对象时的处理【转载】

# java List的中 方法参数是父类对象的list。传入子类对象时的处理

本文转载自：\
<https://blog.csdn.net/u014463137/article/details/75570656>

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

ArrayList和ArrayList是两个不同的泛型

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