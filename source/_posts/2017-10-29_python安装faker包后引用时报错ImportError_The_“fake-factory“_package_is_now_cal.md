---
title: "python安装faker包后引用时报错ImportError The “fake-factory“ package is now called “Faker“"
date: "2017-10-29"
categories: [python, 大数据, 工作, 数据分析]
source: "http://prayerlaputa.com/?p=491"
---

# python安装faker包后引用时报错ImportError The “fake-factory“ package is now called “Faker“

Faker是一个可以让你生成伪造数据的Python包。当你需要初始化数据库，创建美观的XML文档，不断产生数据来进行压力测试或者想从生产服务器上拉取匿名数据的时候，Faker将是你最棒的选择。\
Faker的安装过程可以参考[Faker：Python的伪造数据生成器](http://hao.jobbole.com/python-faker/) 这篇文章，其实就是用pip一条命令：

```
pip install fake-factory
```

安装后记得验证，在python命令行下输入：

```
from faker import Factory
```

如果安装正常，按下Enter键后不会出现任何异常信息。我在ubuntu server 16.04上安装后，验证时报如下错误：

```
 import factory
 File "/venv/lib64/python3.5/site-packages/factory/__init__.py", line 46, in &amp;amp;lt;module&amp;amp;gt;
 from .faker import Faker
 File "/venv/lib64/python3.5/site-packages/factory/faker.py", line 41, in &amp;amp;lt;module&amp;amp;gt;
 import faker
 File "/venv/lib64/python3.5/site-packages/faker/__init__.py", line 7, in &amp;amp;lt;module&amp;amp;gt;
 raise ImportError(error)
ImportError: The ``fake-factory`` package is now called ``Faker``.
```

搜索后发现这个问题很多人都遇到过，参见 <https://github.com/FactoryBoy/factory_boy/issues/334> 。问题原因与解决方案在这帖子里都有。简单来说，就是fake-factory所依赖的一个包factory\_boy在安装特定版本时会下载的内容有问题。我使用帖子里说的一个办法解决了这个ImportError问题，即使用requirements.txt来指定所要装的python包版本。\
有关python中requirements.txt的使用可参考此文章：[python笔记—需求文件requirements.txt的创建及使用](http://blog.csdn.net/loyachen/article/details/52028825)\
在python 虚拟环境中，先使用

```
pip freeze >requirements.txt
```

获取现有环境中的python包，然后在requirements.txt中追加如下内容：

```
fake-factory==0.7.4
factory-boy==2.7.0
```

然后调用下面这条命令，等待安装完成即可。

```
pip install -r requirements.txt
```

顺便提一句，需要创建这个虚拟环境的完全副本时，可以创建一个新的虚拟环境，并在其上运行上面这条命令即可。