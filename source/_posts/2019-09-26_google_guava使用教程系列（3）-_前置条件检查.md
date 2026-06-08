---
title: "google guava使用教程系列（3）- 前置条件检查"
date: "2019-09-26"
categories: [guava, java, 工具]
source: "http://prayerlaputa.com/?p=674"
---

# google guava使用教程系列（3）- 前置条件检查

google guava使用教程系列（3）- 前置条件检查

原文地址:[<https://github.com/google/guava/wiki/PreconditionsExplained>])(<https://github.com/google/guava/wiki/PreconditionsExplained>)

简而言之，guava提供了一系列检查参数的方案，个人感觉一般，实际业务场景中对于参数判断自己写可能比这种封装更方便。

官方举的例子：

```
checkArgument(i >= 0, "Argument was %s but expected nonnegative", i);
checkArgument(i < j, "Expected i < j, but %s >= %s", i, j);
```

大致有如下几类：

- checkArgument(boolean)
- checkNotNull(T)
- checkState(boolean)
- checkElementIndex(int index, int size)
- checkPositionIndex(int index, int size)
- checkPositionIndexes(int start, int end, int size)

<http://ifeve.com/google-guava-preconditions/>有翻译，但翻译不全，建议github上的原版wiki。看名字基本能猜到方法用途，看个人喜好吧，我个人倒是更喜欢apache commons里的校验方法，比如StringUtils.isEmpty()