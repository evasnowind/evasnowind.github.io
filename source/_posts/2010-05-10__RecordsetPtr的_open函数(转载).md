---
title: "_RecordsetPtr的 open函数(转载)"
date: "2010-05-10"
categories: [c/c++]
source: "http://prayerlaputa.com/?p=419"
---

# _RecordsetPtr的 open函数(转载)

转自：http://hi.baidu.com/ruiqing\_2008/blog/item/50381334c10183bbd1a2d369.html\
\_RecordsetPtr m\_pRecordset;//创建一个\_RecordsetPtr m\_pRecordset.CreateInstance(“ADODB.Recordset”); //创建一个实例 try {      m\_pRecordset->Open(\
“SELECT \* FROM duty”,                                               //sql查询语句\
m\_pConnection.GetInterfacePtr(),                               //得到sql连接的指针\
//Const **adOpenDynamic** = 2 ‘动态游标功能最强，但耗资源也最多。用户对记录说做的修改，增加或删除记录都将反映到记录集中。支持全功能浏览(ACCESS不支持)。\
adOpenDynamic,\
\
//Const adLockOptimistic = 3 ‘只有在调用Update方法时才锁定记录集，而在此前的其他操作仍可对当前记录进行更改、插入和删除 等\
adLockOptimistic,\
//**AdCmdText** 将 CommandText 作为命令或存储过程调用的文本化定义进行计算。\
adCmdText);\
}\
catch(\_com\_error e)\
{\
//cout<<e->ErrorMessage()<<endl;\
AfxMessageBox(“Create Instance failed!”);\
return;\
}

**内容一：**\
‘定义数据库连接的一些常量\
Const adOpenForwardOnly = 0 ‘(默认值)游标只向前浏览记录，不支持分页、Recordset、BookMark\
Const adOpenKeyset = 1 ‘键集游标，其他用户对记录说做的修改将反映到记录集中，但其他用户增加或删除记录不会反映到记录集中。支持分页、Recordset、BookMark\
Const **adOpenDynamic** = 2 ‘动态游标功能最强，但耗资源也最多。用户对记录说做的修改，增加或删除记录都将反映到记录集中。支持全功能浏览(ACCESS不支持)。\
Const adOpenStatic = 3 ‘静态游标，只是数据的一个快照，用户对记录说做的修改，增加或删除记录都不会反映到记录集中。支持向前或向后移动\
Const adLockReadOnly = 1 ‘(默认值)锁定类型，默认的，只读，不能作任何修改\
Const adLockPessimistic = 2 ‘当编辑时立即锁定记录，最安全的方式\
Const adLockOptimistic = 3 ‘只有在调用Update方法时才锁定记录集，而在此前的其他操作仍可对当前记录进行更改、插入和删除等\
Const adLockBatchOptimistic = 4 ‘当编辑时记录不会被锁定，而更改、插入和删除是在批处理方式下完成的\
Const adCmdText = &H0001\
Const adCmdTable = &H0002\
%>\
Open 方法 (ADO Recordset)\
打开游标。\
语法\
recordset.Open Source, ActiveConnection, CursorType, LockType, Options\
**内容二：**\
CommandType 属性\
指示 Command 对象的类型。\
设置和返回值\
设置或返回以下某个 CommandTypeEnum 值。\
常量 说明\
**AdCmdText** 将 CommandText 作为命令或存储过程调用的文本化定义进行计算。\
AdCmdTable 将 CommandText 作为其列全部由内部生成的 SQL 查询返回的表格的名称进行计算。\
AdCmdTableDirect 将 CommandText 作为其列全部返回的表格的名称进行计算。\
AdCmdStoredProc 将 CommandText 作为存储过程名进行计算。\
AdCmdUnknown 默认值。CommandText 属性中的命令类型未知。\
adCmdFile 将 CommandText 作为持久 Recordset 文件名进行计算。\
AdExecuteNoRecords 指示 CommandText 为不返回行的命令或存储过程（例如，插入数据的命令）。如果检索任意行，则将丢弃这些行且并不返回。它总是与 **adCmdText** 或 adCmdStoredProc 进行组合。\
说明\
使用 CommandType 属性可优化 CommandText 属性的计算。\
如果 CommandType 属性的值等于 adCmdUnknown（默认值），系统的性能将会降低，因为 ADO 必须调用提供者以确定 CommandText 属性是 SQL 语句、还是存储过程或表格名称。如果知道正在使用的命令的类型，可通过设置 CommandType 属性指令 ADO 直接转到相关代码。如果 CommandType 属性与 CommandText 属性中的命令类型不匹配，调用 Execute 方法时将产生错误。\
adExecuteNoRecords 常量通过最小化内部处理来提高性能。该常量不独立使用，它总是与 **adCmdText** 或 adCmdStoredProc 组合（如 **adCmdText**+adExecuteNoRecords） 一起使用。如果与 Recordset.Open 一起使用 adExecuteNoRecords，或者该方法使用 Command 对象都将产生错误。