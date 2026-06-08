---
title: "google guava使用教程系列（1）-String相关"
date: "2019-04-14"
categories: [guava, java]
source: "http://prayerlaputa.com/?p=662"
---

# google guava使用教程系列（1）-String相关

**注意：本文档基于google guava 28 wiki**

# Joiner

连接器

### 将字符串拼接

```
Joiner joiner = Joiner.on("; ").skipNulls();
return joiner.join("Harry", null, "Ron", "Hermione");
```

返回`Harry; Ron; Hermione`\
skipNulls()方法是直接忽略null，使用useForNull(String)方法可以给定某个字符串来替换null，即

```
Joiner joiner = Joiner.on("; ").useForNull("替换字符串");
```

### 连接对象类型

Joiner也可以用来连接对象类型，在这种情况下，它会把对象的toString()值连接起来。

```
Joiner.on(",").join(Arrays.asList(1, 5, 7)); // returns "1,5,7"
```

## 注意

joiner实例总是不可变的。用来定义joiner目标语义的配置方法总会返回一个新的joiner实例。这使得joiner实例都是线程安全的，你可以将其定义为static final常量。

# Splitter

字符串拆分工具\
JDK提供的String.split方法 一些奇怪的地方，例如：会丢弃掉尾部分隔符。\
例子：

```
",a,,b,".split(",")  
```

返回结果是：

```
"", "a", "", "b"
```

Splitter则提供了更清晰的接口：

```
Splitter.on(',')
    .trimResults()
    .omitEmptyStrings()
    .split("foo,bar,,   qux");
```

返回结果为`"foo", "bar", "qux"`

### Splitter工厂

| 方法 | 描述 | 示例 |
| --- | --- | --- |
| Splitter.on(char) | 按单个字符拆分 | Splitter.on(‘;’) |
| Splitter.on(CharMatcher) | 按字符匹配器拆分 | Splitter.on(CharMatcher.BREAKING\_WHITESPACE) |
| Splitter.on(String) | 按字符串拆分 | Splitter.on(“, “) |
| Splitter.on(Pattern)  Splitter.onPattern(String) | 按正则表达式拆分 | Splitter.onPattern(“\r?\n”) |
| Splitter.fixedLength(int) | 按固定长度拆分；最后一段可能比给定长度短，但不会为空 | Splitter.fixedLength(3) |

### Splitter修饰符

| 方法 | 描述 |
| --- | --- |
| omitEmptyStrings() | 从结果中自动忽略空字符串 |
| trimResults() | 移除结果字符串的前导空白和尾部空白 |
| trimResults(CharMatcher) | 给定匹配器，移除结果字符串的前导匹配字符和尾部匹配字符 |
| limit(int) | 限制拆分出的字符串数量 |

**注：如果需要返回List而不是数组，则调用`splitToList()`、而不是`split()`**

## 注意

splitter实例总是不可变的。用来定义splitter目标语义的配置方法总会返回一个新的splitter实例。这使得splitter实例都是线程安全的，你可以将其定义为static final常量。

## Map Splitter

可以通过`withKeyValueSeparator()`指定第二个分隔符，用于从字符串中反序列出一个map，将会返回一个Map<String, String>\
例如：`对url中的查询字符串"id=123&name=green"进行分割`

```
final Map<String, String> join = Splitter.on("&").withKeyValueSeparator("=").split("id=123&name=green");
```

## Map Joinner

例如：`生产一个查询id: 123,name: green的学生信息的url。`

```
Joiner.on("&").withKeyValueSeparator("=").join(ImmutableMap.of("id", "123", "name", "green"));
```

# CharMatcher

CharMatcher实例首先代表概念1：怎么才算匹配字符？然后它还提供了很多操作概念2：如何处理这些匹配字符？

```
String noControl = CharMatcher.JAVA_ISO_CONTROL.removeFrom(string); //移除control字符
String theDigits = CharMatcher.DIGIT.retainFrom(string); //只保留数字字符
String spaced = CharMatcher.WHITESPACE.trimAndCollapseFrom(string, ' ');//去除两端的空格，并把中间的连续空格替换成单个空格
String noDigits = CharMatcher.JAVA_DIGIT.replaceFrom(string, "*"); //用*号替换所有数字
String lowerAndDigit = CharMatcher.JAVA_DIGIT.or(CharMatcher.JAVA_LOWER_CASE).retainFrom(string);// 只保留数字和小写字母
```

注意：CharMatcher只处理char类型代表的字符；它不能理解0x10000到0x10FFFF的Unicode 增补字符。这些逻辑字符以代理对[surrogate pairs]的形式编码进字符串，而CharMatcher只能将这种逻辑字符看待成两个独立的字符。

### CharMatcher工厂方法

```
any()
none()
whitespace()
breakingWhitespace()
invisible()
digit()
javaLetter()
javaDigit()
javaLetterOrDigit()
javaIsoControl()
javaLowerCase()
javaUpperCase()
ascii()
singleWidth()
```

其他：

| 方法 | 描述 |
| --- | --- |
| anyOf(CharSequence) | 枚举匹配字符。如CharMatcher.anyOf(“aeiou”)匹配小写英语元音 |
| is(char) | 给定单一字符匹配。 |
| inRange(char, char) | 给定字符范围匹配，如CharMatcher.inRange(‘a’, ‘z’) |

此外，CharMatcher还有negate()、and(CharMatcher)和or(CharMatcher)方法。

### 使用CharMatchers

| 方法 | 描述 |
| --- | --- |
| collapseFrom(CharSequence, char) | 把每组连续的匹配字符替换为特定字符。如WHITESPACE.collapseFrom(string, ‘ ‘) |
| matchesAllOf(CharSequence) | 测试是否字符序列中的所有字符都匹配。 |
| removeFrom(CharSequence) | 从字符序列中移除所有匹配字符。 |
| retainFrom(CharSequence) | 在字符序列中保留匹配字符，移除其他字符。 |
| trimFrom(CharSequence) | 移除字符序列的前导匹配字符和尾部匹配字符。 |
| replaceFrom(CharSequence, CharSequence) | 用特定字符序列替代匹配字符。 |

所有这些方法返回String，除了matchesAllOf返回的是boolean。

# Charsets

获取字符集时，不要这样：

```
try {
  bytes = string.getBytes("UTF-8");
} catch (UnsupportedEncodingException e) {
  // how can this possibly happen?
  throw new AssertionError(e);
}
```

而是应该：

```
bytes = string.getBytes(Charsets.UTF_8);
```

Charsets针对所有Java平台都要保证支持的六种字符集提供了常量引用。尝试使用这些常量，而不是通过名称获取字符集实例。

# CaseFormat

CaseFormat被用来方便地在各种ASCII大小写规范间转换字符串——比如，编程语言的命名规范。CaseFormat支持的格式如下：

| 格式 | 范例 |
| --- | --- |
| LOWER\_CAMEL | lowerCamel |
| LOWER\_HYPHEN | lower-hyphen |
| LOWER\_UNDERSCORE | lower\_underscore |
| UPPER\_CAMEL | UpperCamel |
| UPPER\_UNDERSCORE | UPPER\_UNDERSCORE |

# 参考文档

- [guava之Joiner 和 Splitter](https://www.cnblogs.com/whitewolf/p/4214749.html)
- [google guava wiki](https://github.com/google/guava/wiki/StringsExplained)
- [[Google Guava] 6-字符串处理：分割，连接，填充](http://ifeve.com/google-guava-strings/)