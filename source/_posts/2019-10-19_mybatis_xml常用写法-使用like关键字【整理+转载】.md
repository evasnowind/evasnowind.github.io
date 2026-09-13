---
title: "MyBatis XML 常用写法：使用 like 关键字【整理 + 转载】"
date: "2019-10-19"
categories: ["Java", "MyBatis"]
tags: ["MyBatis"]
source: "http://prayerlaputa.com/?p=679"
description: "记录在 MyBatis XML 中拼接 like 查询条件的常见写法。"
---

## 场景

## 方法1：concat

```
<where>
    <trim  suffixOverrides="," >
        <if test="id != null and id != ''" >
            and id =  #{id}
        </if>
        <if test="name != null and name != ''" >
            and name like concat('%',#{name},'%')
        </if>
    </trim>
</where>
```

## 方法2：${}

```
<if test="examTypeName!=null and examTypeName!=''">
    and exam_type_name like '%${examTypeName}%'
</if>
```

## 方法3：#{}

```
<if test="examTypeName!=null and examTypeName!=''">
    and exam_type_name like "%"#{examTypeName}"%"
</if>
```

# 参考文章

- [mybatis中xml开发like的几种写法](https://blog.csdn.net/xzj80927/article/details/90038411)

<!-- more -->

