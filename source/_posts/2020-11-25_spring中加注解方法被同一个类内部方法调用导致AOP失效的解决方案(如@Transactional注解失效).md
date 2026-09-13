---
title: "Spring 中同类内部调用导致 AOP 失效的解决方案（如 @Transactional 失效）"
date: "2020-11-25"
categories: ["Java", "Spring"]
tags: ["Spring"]
source: "http://prayerlaputa.com/?p=913"
description: "解释为什么同一个类内部方法互调会绕过 Spring 代理，从而导致 @Transactional 等 AOP 注解失效，并给出常见解决方案。"
---

这是 Spring 项目里非常常见、也很容易误判的一个坑：注解明明加了，但放到同类内部调用时却不生效。

## 现象

示例：

```
public class A {
    //......
    
    @Transactional
    public void serviceA() {
        ......
    }
    
    public void serviceB() {
        ......
        serviceA()
        ......
    }
}
```

这个问题在事务、缓存、权限校验等场景里都很常见。以上面代码为例，如果在 Controller 层直接调用 `serviceA()`，事务通常可以正常生效；但如果在同一个类的 `serviceB()` 内部直接调用 `serviceA()`，且 `serviceB()` 本身没有开启事务，那么此时 `serviceA()` 上的 `@Transactional` 实际上往往不会生效。

<!-- more -->

## 原因

想讲清这个问题就必须了解spring AOP的内部实现原理。

在spring中经常使用自定义注解或是spring已封装好的注解，通过AOP的方式复用代码、避免重复劳动。而spring实现AOP是通过动态代理来实现的，默认有接口的情况使用JDK的动态代理（也可以通过配置proxyTargetClass来指定使用CGLIB）、没有接口的情况使用CGLIB。

但无论是哪一种代理，都是在原有方法的外面包一层、在方法外的代理层来实现AOP的逻辑。以上面为例，在代理后会在serviceA()外层增加事务相关逻辑：

```
//原始代码
serviceA() {
......
}

//加上注解后
serviceAProxy() {
//AOP执行前逻辑
......
serviceA()
//AOP执行后逻辑
......
}
```

但这个前提就是spring直接调用加了注解的方法才会调用代理方法，如果serviceA被同一个类内部其他方法调用，那servcieA()就只是一段普通代码、AOP相关的信息不会被spring看到，那自然就无法执行AOP的逻辑。

## 解决

知道原理后，自然也就好解决了。

AOP的逻辑在代理后的方法中，那么我们就去执行spring生成的代理后的方法。获取方法如下：

### 方法1：通过当前类对象获取

这个有点取巧。还是以上面serviceB()为例，我们如果调用this.serviceA()，this指向对象本身、不会指向代理后的对象，因此肯定不可以，但我们可以让spring提供给我们代理后的对象：

```
public class A{

    //通过spring将代理后对象注入到self变量
    @Autowired
    private A self;

    public void serviceB() {
            ......
            //此处调用的就是代理后的方法
            self.serviceA()
            ......
    }
}
```

### 方法2 从ApplicationContext中直接获取

获取ApplicationContext有多种方法：

#### 方法2.1 使用AopContext.currentProxy()

```
public class A {
    public void serviceB() {
            ......
            //此处调用的就是代理后的方法
            ((A)AopContext.currentProxy()).serviceA();
            ......
    }
}
```

使用AopContext.currentProxy()注意必须在程序启动时开启EnableAspectJAutoProxy注解，设置代理暴露方式为true，如下面所示：

```
/**
 * EnableAspectJAutoProxy注解两个参数作用分别为：
 *
 * 一个是控制aop的具体实现方式,为true的话使用cglib,为false的话使用java的Proxy，默认为false。
 * 第二个参数控制代理的暴露方式,解决内部调用不能使用代理的场景，默认为false。
 *
 *
 */
@EnableAspectJAutoProxy(proxyTargetClass = true, exposeProxy = true)
@SpringBootApplication
public class SpringAopApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringAopApplication.class, args);
    }
}
```

#### 方法2.2 使用ApplicationContextAware

通过spring生命周期，直接将ApplicationContext注入进来：

```
public class A implements ApplicationContextAware {
private ApplicationContext applicationContext;
    
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
    
    
    public void serviceB() {
            ......
            //此处调用的就是代理后的方法
            applicationContext.getBean(A.class).serviceA();
            ......
    }
}
```
