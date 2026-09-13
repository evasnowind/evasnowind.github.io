---
title: "MyBatis XML 常用写法：传入数组 / List"
date: "2019-10-19"
categories: ["Java", "MyBatis"]
tags: ["MyBatis", "集合"]
source: "http://prayerlaputa.com/?p=677"
description: "记录在 MyBatis XML 中传入数组或 List 参数并拼接 in 查询的常见写法。"
---

## 场景

假设查询 `person` 表，参数类型为 `XXXVo`，其中包含一个 `List` 对象保存状态列表，此时可以参考下面的写法：

<!-- more -->

```
<select id="queryXXX" parameterType="XXXVo"
			resultMap="XXXResult">
		select *
		from person
		 WHERE 1=1
		<if test="statusFilter != null and statusFilter.size() > 0">
            and status in
            <foreach collection="statusFilter" item="statusId" index="i" open="(" close=")" separator=",">
                #{statusId}
            </foreach>
        </if>
		 ORDER BY DEPTID
	</select>
```

## 通过Map对象传递参数给xml

参数同样可以通过Map对象传递到xml这个层面，此时这样写即可：
java代码：

```
map.put(statusFilter, 列表实例对象);
```

xml代码：

```
<select id="queryXXX" parameterType="java.util.HashMap"
			resultMap="XXXResult">
		select *
		from person
		 WHERE 1=1
		<if test="statusFilter != null and statusFilter.size() > 0">
            and status in
            <foreach collection="statusFilter" item="statusId" index="i" open="(" close=")" separator=",">
                #{statusId}
            </foreach>
        </if>
		 ORDER BY DEPTID
	</select>
```

# 参考文章

- [myBatis的xml映射文件中传入list集合与数组做条件](https://blog.csdn.net/qq_15204179/article/details/1000425509)