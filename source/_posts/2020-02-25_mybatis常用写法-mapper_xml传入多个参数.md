---
title: "mybatis常用写法-mapper xml传入多个参数"
date: "2020-02-25"
categories: [mybatis]
source: "http://prayerlaputa.com/?p=769"
---

# mybatis常用写法-mapper xml传入多个参数

mapper xml文件中：

```
<resultMap id="XxxResultMap" type="com.xxx.xxxx">
    <id column="id" property="id" jdbcType="INTEGER" />
    ...
</resultMap>

<select id="selectXXXX" resultMap="XxxResultMap">
    SELECT id, title, type, release_id , ...
    FROM test
    WHERE release_id = ${id} and type = ${type}
</select>  
```

mapper接口中：

```
xxx selectXXXX(@Param(value = "id") String id,@Param(value = "type") String type);
```

# 参考资料

- [mybatis传递参数到mapping.xml](https://www.cnblogs.com/zhuawang/p/5927851.html)