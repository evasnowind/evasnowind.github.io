---
title: "spring源码分析笔记-（1）Bean解析、提取与注册"
date: "2015-12-22"
categories: [j2ee, java, 学习, 源码剖析, 读书笔记]
source: "http://prayerlaputa.com/?p=161"
---

# spring源码分析笔记-（1）Bean解析、提取与注册

大家都说，阅读spring的源代码是个不错的学习方式，现在开始学习一下，头一次阅读开源代码，不知道怎么看，先随便记些笔记，记录一下，希望也能帮助别人吧。\
目前我看代码的方式是阅读《spring源码深度解析》，按照上面的例子一步步阅读源代码，感觉这样难度降低不少，有书、有实际例子带着终归要容易一些。我所阅读的是spring framework 4.2的代码，从github上拉取的，拉取时间2015年11月份。\
闲话少说，开始！\
首先看的部分是spring读取配置文件、实例化各种bean的流程，例如，要执行如下语句：

```
BeanFactory bf = new XmlBeanFactory(new ClassPathResource("beanFactoryTest.xml"));
```

该语句首先会创建一个Resource对象，Resource类属于spring中的类，而这个类可以取到InputStream（JDK中的类），因此实际应用中可以用spring的Resource类加载所有资源文件，这样可以利用Resource及其子类为我们封装好的诸多特性。如下例子：

```
Resource resource = new ClassPathResource("beanFactoryTest.xml");
InputStream inputStream = resource.getInputStream();
```

获取Resource对象没啥特别的，重要的是后续跟进Resource对象读取xml文件、加载bean的过程。这个过程中用到了spring中非常核心的两个类：

- DefaultListableBeanFactory
  - 该类是加载bean的核心部分，给出了spring注册、加载bean的默认实现。XmlBeanFactory继承了该类，但使用了自定义的XML读取器XmlBeanDefinitionReader
- XmlBeanDefinitionReader
  - XML文件解析、读取

为了方便记录（主要是懒得画图）流程，直接通过文字描述出层级结构吧：

- XmlBeanFactory
  - XmlBeanDefinitionReader.loadBeanDefinitions(resource)
    - doLoadBeanDefinitions
      - Document doc = doLoadDocument(inputSource, resource);//获取Document对象
        - DefaultDocumentLoader.loadDocument(inputResource)
          - createDocumentBuilderFactory –> createDocumentBuilder –> DocumentBuilder.parse(inputResource) （返回Document对象）
      - registerBeanDefinitions(doc, resource);//解析、注册Bean
        - BeanDefinitionDocumentReader.registerBeanDefinitions
          - DefaultBeanDefinitionDocumentReader.doRegisterBeanDefinitions
            - preProcessXml(root);\
              parseBeanDefinitions(root, this.delegate);//解析XML\
              postProcessXml(root);//模板方法模式，若想修改在XML解析前、后做些操作，继承DefaultBeanDefinitionDocumentReader、重写preProcessXml和postProcessXml即可