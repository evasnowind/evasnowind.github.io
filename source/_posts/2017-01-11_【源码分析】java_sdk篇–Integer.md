---
title: "【源码分析】java sdk篇–Integer"
date: "2017-01-11"
categories: [java, 源码剖析]
source: "http://prayerlaputa.com/?p=258"
---

# 【源码分析】java sdk篇–Integer

今天用到了Java中Integer.highestOneBit方法，之前还真没注意Integer中还有位运算相关的方法，这里简单列举一下，方便后续查：\
a. highestOneBit(i)\
如果一个数是0, 则返回0\
如果是负数, 则返回 -2147483648 1000,0000,0000,0000,0000,0000,0000,0000(二进制表示的数)\
如果是正数, 返回的则是跟它最靠近的比它小的2的N次方\
正数、0好解释，至于负数，由于计算机中的数字都是采用补码表示，即反码+1，并且最高位是一个1、表示负数，因此这个符号位作为最终结果返回。\
该方法内部实现很简单，具体分析可以参考这篇文章：[Java Integer.highestOneBit(i)代码品读](http://blog.csdn.net/jessenpan/article/details/9617749) （这文章里顺便复习了一下有关位运算的知识，需要的童鞋可以看看）\
b. lowestOneBit(i)\
API说明看着有点绕，但其实很简单，就是和上面的highestOneBit相反，返回一个数，这个数最多只包含i二进制表示中最低位的1\
内部实现如下：

```
public static int lowestOneBit(int i) {
  return i &amp;amp;amp;amp; -i;
 }
```

仍然是利用了原码、补码、反码的知识：\
i=0则返回0；\
i不等于0，那么i和-i中一个是原码、一个是反码+1，假定-i是那个反码+1的数，i的二进制表示中最低位是从右往左的第m位，那么i和-i从第m+1位开始，由于分别是正码以及对应的反码，进行安慰与操作后直接变为0，第m位则由于反码加了1的缘故，保留下来，即得结果。\
c.int numberOfLeadingZeros(int i)\
在指定 int 值的二进制补码表示形式中最高位（最左边）的 1 位之前，零位的数量。（注：从JDK 1.5才有该接口）\
d. int numberOfTrailingZeros(int i)\
返回指定的 int 值的二进制补码表示形式中最低（“最右边”）的为 1 的位后面的零位个数。（注：从JDK 1.5才有该接口）\
e.int bitCount(int i)\
返回指定 int 值的二进制表示形式的 1 位的数量。（注：从JDK 1.5才有该接口）\
该方法实现看上去有点莫名其妙，分析可以参考这篇文章：[求二进制数中1的个数](http://15838341661-139-com.iteye.com/blog/1642525)\
f.String toBinaryString(int i)\
返回二进制表示的字符串\
g. String toHexString(int i)\
返回十六进制表示的字符串\
h.String toOctalString(int i)\
返回八进制表示的字符串\
i. String toUnsignedString(int i)\
返回i对应的unsigned int数字的字符串表示（注：从JDK 1.8才有该接口）\
j. String toUnsignedString(int i, int radix)\
返回i对应的unsigned int数字的字符串表示，并且根据radix进制进行输出（注：从JDK 1.8才有该接口）。\
注意，看源代码可以发现，目前JDK 1.8中的该方法参数radix实现仅支持2~36，radix大于36则按照radix=10进行计算，这一点需要注意。\
 \
列一下感觉平时没怎么用过、但可能比较有用的方法，其他方法常用就没必要再列举了，就酱紫。