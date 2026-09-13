---
title: "MyBatis-Plus 常见用法：不用 XML 实现自定义查询"
date: "2020-02-01"
categories: ["Java", "MyBatis"]
tags: ["MyBatis"]
source: "http://prayerlaputa.com/?p=754"
description: "整理 MyBatis-Plus 在不编写 XML 的情况下实现自定义查询的常见方式，适合简单查询场景快速落地。"
---

如果只是少量自定义查询，不一定非要再写一份 XML。这里整理两种相对常见、落地也比较快的做法：
1、采用mybatis注解的方式
参见：[MyBatis Plus 自定义查询语句](https://blog.csdn.net/weixin_31058701/article/details/102834031)
DAO层：

```
@Select("select b.bomName, " +
		"b.bomProductType, b.bomMaterial, " +
		"o.customerID AS bomID, " +
		"o.ordersDataNo AS qrCode, " +
		"s.deliveryDate AS barCode, " +
		"s.mainType AS workshop " +
		"FROM mes_order_bom b " +
		"LEFT JOIN mes_order_ordersdata o ON b.ordersID = o.id " +
		"LEFT JOIN mes_order_soncontract s ON o.sonContractID = s.id " +
		"WHERE o.ordersDataNo IN (#{orderNoList})")
List<MesOrderBom> getBomAndOrderCodeNumber(@Param("orderNoList")List<String> orderNoList);
```

Service层：

```
List<MesOrderBom> getBomAndOrderCodeNumber(List<String> orderNoList);
```

Service实现类:

```
@Override
public List<MesOrderBom> getBomAndOrderCodeNumber(List<String> orderNoList) {
	return this.baseMapper.getBomAndOrderCodeNumber(orderNoList);
}
```

2、自定义实现
[结合mybatis-plus 实现无XML多表联查询](https://cloud.tencent.com/developer/article/1492870)
项目地址：[multipleselect](https://github.com/yangaijun/multipleselect)
java 结合mybatis-plus 实现非手写sql多表查询

<!-- more -->

## 参考资料

- [MyBatis Plus 自定义查询语句](https://blog.csdn.net/weixin_31058701/article/details/102834031)
- [结合mybatis-plus 实现无XML多表联查询](https://cloud.tencent.com/developer/article/1492870)