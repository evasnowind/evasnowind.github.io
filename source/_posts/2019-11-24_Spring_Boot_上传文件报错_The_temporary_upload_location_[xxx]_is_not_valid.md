---
title: "Spring Boot 上传文件报错：The temporary upload location [xxx] is not valid"
date: "2019-11-24"
categories: ["Java", "Spring Boot"]
tags: ["Spring Boot"]
source: "http://prayerlaputa.com/?p=712"
description: "记录 Spring Boot 上传文件时报 The temporary upload location [xxx] is not valid 的原因与解决办法。"
---

## 问题现象

导入 Excel 文件时，偶发如下错误：

```
org.springframework.web.multipart.MultipartException: Could not parse multipart servlet request; nested exception is java.io.IOException: The temporary upload location [C:\Users\AppData\Local\Temp\tomcat.4266029690466887869.8037\work\Tomcat\localhost\ROOT] is not valid
	at org.springframework.web.multipart.support.StandardMultipartHttpServletRequest.parseRequest(StandardMultipartHttpServletRequest.java:112)
	at org.springframework.web.multipart.support.StandardMultipartHttpServletRequest.<init>(StandardMultipartHttpServletRequest.java:86)
	at org.springframework.web.multipart.support.StandardServletMultipartResolver.resolveMultipart(StandardServletMultipartResolver.java:79)
	at org.springframework.web.servlet.DispatcherServlet.checkMultipart(DispatcherServlet.java:1104)
	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:936)
	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:901)
	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:970)
	at org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:872)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:661)
	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:846)
```

## 原因分析

问题的直接原因是：Spring Boot 上传文件时使用的临时目录不存在。

之所以表现为“偶发”，是因为 Spring Boot 启动后会在 Temp 目录下创建若干临时文件夹，而操作系统可能会定期清理这些目录。Linux 环境下也有类似的自动清理机制，参见这篇文章：[CentOS7 的 /tmp 目录自动清理规则](https://blog.51cto.com/kusorz/2051877)。

<!-- more -->



源码层面的分析可参见：[Spring Boot 文件上传异常之提示 The temporary upload location xxx is not valid](https://www.cnblogs.com/yihuihui/p/10372887.html)

## 解决方案

手动指定临时文件的存储路径，并在程序启动时确保该目录已创建，从而保证上传路径始终有效。

```
@Configuration
public class MultipartConfig {

    /**
     * 文件上传临时路径
     */
    @Bean
    MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        String location = System.getProperty("user.dir") + "/data/tmp";
        File tmpFile = new File(location);
        if (!tmpFile.exists()) {
            tmpFile.mkdirs();
        }
        factory.setLocation(location);
        return factory.createMultipartConfig();
    }
}
```

## 参考资料

- [SpringBoot文件上传异常之提示The temporary upload location xxx is not valid](https://www.cnblogs.com/yihuihui/p/10372887.html)
- [CentOS7的/tmp目录自动清理规则](https://blog.51cto.com/kusorz/2051877)
- [SpringBoot项目的The temporary upload location \*\*\*is not valid 问题](https://blog.csdn.net/llibin1024530411/article/details/79474953)