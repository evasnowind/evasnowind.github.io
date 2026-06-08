---
title: "spring boot上传附件报错：org.apache.tomcat.util.http.fileupload.FileUploadBase$SizeLimitExceededException【转载+整理】"
date: "2019-09-05"
categories: [java, spring, spring boot]
source: "http://prayerlaputa.com/?p=645"
---

# spring boot上传附件报错：org.apache.tomcat.util.http.fileupload.FileUploadBase$SizeLimitExceededException【转载+整理】

# 问题

spring boot + spring cloud，上传附件时遇到如下错误：

```
org.springframework.web.multipart.MultipartException: Could not parse multipart servlet request; nested exception is java.lang.IllegalStateException: org.apache.tomcat.util.http.fileupload.FileUploadBase$SizeLimitExceededException: the request was rejected because its size (11963927) exceeds the configured maximum (10485760)
```

错误信息表示上传附件报超出自带tomacat限制大小（默认1M）\

# 解决

1. 在配置文件（application.properties或是application.yml）加入如下代码

```
spring.http.multipart.maxFileSize = 10Mb
spring.http.multipart.maxRequestSize=100Mb
```

2. 把如下代码放在启动类上，并在类上加入@Configuration

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

我这里选择只修改配置参数，就修复了问题。

# 参考资料

- [spring boot上传附件报错：org.apache.tomcat.util.http.fileupload.FileUploadBase$SizeLimitExceededException](https://blog.csdn.net/fxj0720/article/details/80255651)