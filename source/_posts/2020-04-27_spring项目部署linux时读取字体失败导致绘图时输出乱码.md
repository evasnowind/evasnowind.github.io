---
title: "Spring 项目部署 Linux 时读取字体失败导致绘图输出乱码"
date: "2020-04-27"
categories: ["Linux"]
tags: ["Linux"]
source: "http://prayerlaputa.com/?p=810"
description: "记录 Spring 项目部署到 Linux 后因字体读取失败而导致绘图输出乱码的问题与处理思路。"
---

## 问题现象

Spring 项目部署到 Linux 后，如果绘图逻辑依赖特定字体，例如调用 `Graphics2D graphic` 绘图时需要使用中文字体，就可能出现输出乱码。

## 原因分析

最常见的原因是字体文件找不到。比如开发环境是 Windows，本地使用“微软雅黑”等系统字体没有问题，但部署到线上（通常是 Linux）后，这些字体往往并不存在，于是就会出现乱码。

<!-- more -->

## 解决思路

### 方案一：把项目所需字体上传到 Linux 服务器，并放到指定位置

先说结论：**我个人不太推荐这种做法。**

比如说这篇帖子中说的（我没试验，网上搜到顺手转给大家）：
[java jdk-awt.font在centos上中文乱码的问题, 安装中文字体](https://blog.csdn.net/weixin_33772645/article/details/859430219)

之所以不推荐，是因为这样做，线上部署时增加了依赖关系，增加了维护成本。

### 方案二：把字体文件直接打包进项目，一起部署到线上环境

我个人更推荐这种方式，因为它不依赖外部环境，部署时只需要读取项目自带的字体文件即可。
当然，这里埋着几个坑，分享下：

#### （1）整个项目（资源文件、依赖包等）打成1个jar包部署时，注意读取文件的方式

由于文件都已经保存到了一个jar包中，直接调用

```
File file = ResourceUtils.getFile("classpath:excelTemplate/test.xlsx");
InputStream inputStream = new FileInputStream(file);
```

这种方式可能读取不到文件，需要使用Classloader去读取，具体参考上篇文章[spring-boot以jar包方式时读取resource或是template文件](http://prayerlaputa.com/?p=806#more-806)

#### （2）读取字体文件、创建Font对象时，可能存在不断创建临时文件的问题

这个问题我在网上搜时频繁出现，我自己没遇到，贴出来供大家参考。

- [java引入自定义字体的方法](https://blog.csdn.net/shuchongqu/article/details/84791122)
- [Java引用外部字体即自定义字体文件](https://blog.csdn.net/nahancy/article/details/75482418)

不会创建临时文件的代码：

```
	//filepath字体文件的路径
	private static java.awt.Font getSelfDefinedFont(String filepath){
        java.awt.Font font = null;
        File file = new File(filepath);
        try{
            font = java.awt.Font.createFont(java.awt.Font.TRUETYPE_FONT, file);
            font = font.deriveFont(java.awt.Font.PLAIN, 40);
        }catch (FontFormatException e){
            return null;
        }catch (FileNotFoundException e){
            return null;
        }catch (IOException e){
            return null;
        }
        return font;
    }

```

# 参考资料

- [java引入自定义字体的方法](https://blog.csdn.net/shuchongqu/article/details/84791122)
- [Java引用外部字体即自定义字体文件](https://blog.csdn.net/nahancy/article/details/75482418)
- [java jdk-awt.font在centos上中文乱码的问题, 安装中文字体](https://blog.csdn.net/weixin_33772645/article/details/859430219)
- [spring-boot以jar包方式时读取resource或是template文件](http://prayerlaputa.com/?p=806#more-806)