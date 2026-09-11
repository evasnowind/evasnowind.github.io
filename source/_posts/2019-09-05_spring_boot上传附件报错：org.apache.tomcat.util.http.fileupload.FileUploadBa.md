---
title: "Spring Boot 上传附件报错：org.apache.tomcat.util.http.fileupload.FileUploadBase$SizeLimitExceededException【转载 + 整理】"
date: "2019-09-05"
categories: ["中间件"]
tags: ["Spring Boot", "Tomcat"]
source: "http://prayerlaputa.com/?p=645"
description: "记录 Spring Boot / Spring Cloud 场景下上传附件超限时的报错现象与解决办法。"
---

## 问题现象

在 Spring Boot + Spring Cloud 项目中，上传附件时遇到如下错误：

```
org.springframework.web.multipart.MultipartException: Could not parse multipart servlet request; nested exception is java.lang.IllegalStateException: org.apache.tomcat.util.http.fileupload.FileUploadBase$SizeLimitExceededException: the request was rejected because its size (11963927) exceeds the configured maximum (10485760)
```

从报错信息来看，本质上是上传文件大小超过了 Tomcat 默认限制（默认 1MB）。

## 解决方案

### 方案一：在配置文件中直接调整上传大小

在配置文件（`application.properties` 或 `application.yml`）中加入如下配置：

<!-- more -->

```
spring.http.multipart.maxFileSize = 10Mb
spring.http.multipart.maxRequestSize=100Mb
```

### 方案二：通过代码方式配置上传限制

把如下代码放在启动类上，并在类上加入 `@Configuration`：

```
  /**
     * 文件上传配置
     * 
     * @return
     */
    @Bean
    public MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        //  单个数据大小
        factory.setMaxFileSize("10240KB"); // KB,MB
        /// 总上传数据大小
        factory.setMaxRequestSize("102400KB");
        return factory.createMultipartConfig();
    }
```

我这里最终只修改了配置参数，就解决了问题。

## 参考资料

- [spring boot上传附件报错：org.apache.tomcat.util.http.fileupload.FileUploadBase$SizeLimitExceededException](https://blog.csdn.net/fxj0720/article/details/80255651)