# 方案 C 操作清单（仅清单，不改内容）


> 生成时间：2026-09-03 Asia/Shanghai
> 作用：汇总当前仓库中需人工判断的坏链类问题，仅提供处置建议，不直接修改文章内容。

## 总览

- `file:///...` 本地临时图片：**19** 条，分布于 **4** 篇文章
- `prayerlaputa.com` 旧站外链图片：**22** 条，分布于 **8** 篇文章
- 当前仓库内未发现可按文件名直接自动替换的同名本地图片，因此本阶段不做自动修复。

## 建议处置顺序

1. 先清理“确定垃圾项”（明显无价值的 `file:///...` 临时图）
2. 再修复关键教程图（优先补图/替图，不建议直接删除）
3. 再处理高价值旧站外链图（建议本地化）
4. 最后处理可后置的展示类截图

## A. 建议直接删除的 `file:///...` 临时图

### source/_posts/2010-02-04_Firefox常用web开发插件.md
- 建议动作：**直接删除**
- 原因：段落中已存在预览图/替代图，这些 `file:///...` 明显是迁移时混入的临时截图。

| 行号 | 链接 |
|---|---|
| 42 | `file:///C:/DOCUME%7E1/ADMINI%7E1/LOCALS%7E1/Temp/moz-screenshot.png` |
| 42 | `file:///C:/DOCUME%7E1/ADMINI%7E1/LOCALS%7E1/Temp/moz-screenshot-1.png` |
| 43 | `file:///C:/DOCUME%7E1/ADMINI%7E1/LOCALS%7E1/Temp/moz-screenshot-2.png` |
| 48 | `file:///C:/Users/Prayer/AppData/Local/Temp/moz-screenshot-1.png` |
| 49 | `file:///C:/Users/Prayer/AppData/Local/Temp/moz-screenshot.png` |

### source/_posts/2010-02-28_Yahoo!团队实践分享：网站性能优化的35条黄金守则.md
- 建议动作：**不保留图片，改回字面文本或删除图片标记**
- 原因：图片并非实际配图，而是把 `<img>` / 标签说明误替换成了本地临时图。

| 行号 | 链接 |
|---|---|
| 271 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif` |

### source/_posts/2015-12-09_Yahoo!团队实践分享：网站性能优化的34条黄金守则【转载】.md
- 建议动作：**不保留图片，改回字面文本或删除图片标记**
- 原因：图片并非实际配图，而是把 `<img>` / 标签说明误替换成了本地临时图。

| 行号 | 链接 |
|---|---|
| 271 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif` |

## B. 建议优先补图/替图的关键教程图

### source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md
- 建议动作：**不要直接删除，优先补图/替图**
- 原因：这些图片位于 Eclipse/JRE/JVM 参数配置步骤中，删除后会明显影响教程可读性。
- 替代线索：优先对照同主题文章 `source/_posts/2011-08-14_could_not_find_the_main_class(eclipse不能运行类)【转载】.md` 中已有本地图片尝试映射替换。

| 行号 | 链接 | 备注 |
|---|---|---|
| 5 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 21 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 27 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image006.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 27 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image008.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 31 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image010.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 32 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image012.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 33 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image012.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 35 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image014.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 37 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image016.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 38 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image018.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 39 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image020.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |
| 40 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image022.jpg` | 可能需要与 2011-08-14 同主题文章中的本地图逐一比对 |

## C. 建议高优先级本地化的旧站外链图

### source/_posts/2015-11-27_使用vps+lnmp+wordpress搭建个人博客.md
- 建议动作：**优先本地化下载并改为仓库内图片引用**
- 原因：这些多为核心说明图/结构图/配置截图，失效会明显影响文章理解。

| 行号 | alt | 外链 |
|---|---|---|
| 45 | `godaddy_set_dns` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/godaddy_set_dns-287x300.png` |

### source/_posts/2015-12-04_BCEL简明教程.md
- 建议动作：**优先本地化下载并改为仓库内图片引用**
- 原因：这些多为核心说明图/结构图/配置截图，失效会明显影响文章理解。

| 行号 | alt | 外链 |
|---|---|---|
| 12 | `JVM` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/JVM-300x152.png` |
| 30 | `classfile` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/classfile-300x265.gif` |
| 122 | `javaclass` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/javaclass-300x168.gif` |
| 143 | `classgen` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/classgen-300x191.gif` |

### source/_posts/2015-12-09_vs2010下libxml2的配置【转载+修正】.md
- 建议动作：**优先本地化下载并改为仓库内图片引用**
- 原因：这些多为核心说明图/结构图/配置截图，失效会明显影响文章理解。

| 行号 | alt | 外链 |
|---|---|---|
| 10 | `20110607_01` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/20110607_01-300x244.jpg` |
| 12 | `20110607_02` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/20110607_02-300x80.jpg` |

### source/_posts/2015-12-24_Windows环境下docker安装、使用mysql镜像.md
- 建议动作：**优先本地化下载并改为仓库内图片引用**
- 原因：这些多为核心说明图/结构图/配置截图，失效会明显影响文章理解。

| 行号 | alt | 外链 |
|---|---|---|
| 10 | `win_docker_host` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/win_docker_host-236x300.png` |

### source/_posts/2016-12-22_【转发】Android中SQLite应用详解.md
- 建议动作：**优先本地化下载并改为仓库内图片引用**
- 原因：这些多为核心说明图/结构图/配置截图，失效会明显影响文章理解。

| 行号 | alt | 外链 |
|---|---|---|
| 504 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2016/12/1-200x300.png` |
| 511 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2016/12/2-300x119.png` |

### source/_posts/2017-01-12_【整理】使用ant和jenkins自动化编译android项目（windows环境）.md
- 建议动作：**优先本地化下载并改为仓库内图片引用**
- 原因：这些多为核心说明图/结构图/配置截图，失效会明显影响文章理解。

| 行号 | alt | 外链 |
|---|---|---|
| 38 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2017/01/jenkins-android-config-300x107.png` |

### source/_posts/2017-02-22_【源码分析】java_sdk篇–Java_Collection_Framework.md
- 建议动作：**优先本地化下载并改为仓库内图片引用**
- 原因：这些多为核心说明图/结构图/配置截图，失效会明显影响文章理解。

| 行号 | alt | 外链 |
|---|---|---|
| 8 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2017/02/JCF详细图-300x296.jpg` |
| 14 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2017/02/JCF详细图2-300x285.gif` |
| 62 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2017/02/HashMap实现-300x108.jpg` |

## D. 建议中优先级处理的旧站外链图

### source/_posts/2015-11-29_可提高生产力的实用工具集锦.md
- 建议动作：**可本地化，也可后置处理**
- 原因：这类多为工具推荐/展示类截图，影响阅读完整性，但不至于阻断正文理解。

| 行号 | alt | 外链 |
|---|---|---|
| 10 | `flux` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/flux-300x152.png` |
| 24 | `everything` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/everything.png` |
| 33 | `tc` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/tc-300x225.png` |
| 47 | `redmine` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/redmine-300x144.png` |
| 53 | `trello` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/trello-300x181.png` |
| 69 | `tmux` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/tmux-300x143.png` |
| 85 | `sublime` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/sublime-300x181.png` |
| 95 | `fiddler` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/fiddler-300x173.jpg` |

## E. 全量明细（供后续逐项勾选）

### E1. `file:///...` 本地临时图全量

| 文章 | 行号 | URL | 建议 |
|---|---:|---|---|
| `source/_posts/2010-02-04_Firefox常用web开发插件.md` | 42 | `file:///C:/DOCUME%7E1/ADMINI%7E1/LOCALS%7E1/Temp/moz-screenshot.png` | 删除/改回文本 |
| `source/_posts/2010-02-04_Firefox常用web开发插件.md` | 42 | `file:///C:/DOCUME%7E1/ADMINI%7E1/LOCALS%7E1/Temp/moz-screenshot-1.png` | 删除/改回文本 |
| `source/_posts/2010-02-04_Firefox常用web开发插件.md` | 43 | `file:///C:/DOCUME%7E1/ADMINI%7E1/LOCALS%7E1/Temp/moz-screenshot-2.png` | 删除/改回文本 |
| `source/_posts/2010-02-04_Firefox常用web开发插件.md` | 48 | `file:///C:/Users/Prayer/AppData/Local/Temp/moz-screenshot-1.png` | 删除/改回文本 |
| `source/_posts/2010-02-04_Firefox常用web开发插件.md` | 49 | `file:///C:/Users/Prayer/AppData/Local/Temp/moz-screenshot.png` | 删除/改回文本 |
| `source/_posts/2010-02-28_Yahoo!团队实践分享：网站性能优化的35条黄金守则.md` | 271 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif` | 删除/改回文本 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 5 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 21 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 27 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image006.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 27 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image008.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 31 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image010.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 32 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image012.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 33 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image012.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 35 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image014.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 37 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image016.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 38 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image018.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 39 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image020.jpg` | 补图/替图 |
| `source/_posts/2011-06-29_could_not_find_the_main_class(eclipse不能运行类)_-解决方法【转载】.md` | 40 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image022.jpg` | 补图/替图 |
| `source/_posts/2015-12-09_Yahoo!团队实践分享：网站性能优化的34条黄金守则【转载】.md` | 271 | `file:///C:/Users/Prayer/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif` | 删除/改回文本 |

### E2. `prayerlaputa.com` 旧站外链图全量

| 文章 | 行号 | alt | URL | 建议 |
|---|---:|---|---|---|
| `source/_posts/2015-11-27_使用vps+lnmp+wordpress搭建个人博客.md` | 45 | `godaddy_set_dns` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/godaddy_set_dns-287x300.png` | 高优先本地化 |
| `source/_posts/2015-11-29_可提高生产力的实用工具集锦.md` | 10 | `flux` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/flux-300x152.png` | 中优先/可后置 |
| `source/_posts/2015-11-29_可提高生产力的实用工具集锦.md` | 24 | `everything` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/everything.png` | 中优先/可后置 |
| `source/_posts/2015-11-29_可提高生产力的实用工具集锦.md` | 33 | `tc` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/tc-300x225.png` | 中优先/可后置 |
| `source/_posts/2015-11-29_可提高生产力的实用工具集锦.md` | 47 | `redmine` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/redmine-300x144.png` | 中优先/可后置 |
| `source/_posts/2015-11-29_可提高生产力的实用工具集锦.md` | 53 | `trello` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/trello-300x181.png` | 中优先/可后置 |
| `source/_posts/2015-11-29_可提高生产力的实用工具集锦.md` | 69 | `tmux` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/tmux-300x143.png` | 中优先/可后置 |
| `source/_posts/2015-11-29_可提高生产力的实用工具集锦.md` | 85 | `sublime` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/sublime-300x181.png` | 中优先/可后置 |
| `source/_posts/2015-11-29_可提高生产力的实用工具集锦.md` | 95 | `fiddler` | `http://www.prayerlaputa.com/wp-content/uploads/2015/11/fiddler-300x173.jpg` | 中优先/可后置 |
| `source/_posts/2015-12-04_BCEL简明教程.md` | 12 | `JVM` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/JVM-300x152.png` | 高优先本地化 |
| `source/_posts/2015-12-04_BCEL简明教程.md` | 30 | `classfile` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/classfile-300x265.gif` | 高优先本地化 |
| `source/_posts/2015-12-04_BCEL简明教程.md` | 122 | `javaclass` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/javaclass-300x168.gif` | 高优先本地化 |
| `source/_posts/2015-12-04_BCEL简明教程.md` | 143 | `classgen` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/classgen-300x191.gif` | 高优先本地化 |
| `source/_posts/2015-12-09_vs2010下libxml2的配置【转载+修正】.md` | 10 | `20110607_01` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/20110607_01-300x244.jpg` | 高优先本地化 |
| `source/_posts/2015-12-09_vs2010下libxml2的配置【转载+修正】.md` | 12 | `20110607_02` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/20110607_02-300x80.jpg` | 高优先本地化 |
| `source/_posts/2015-12-24_Windows环境下docker安装、使用mysql镜像.md` | 10 | `win_docker_host` | `http://www.prayerlaputa.com/wp-content/uploads/2015/12/win_docker_host-236x300.png` | 高优先本地化 |
| `source/_posts/2016-12-22_【转发】Android中SQLite应用详解.md` | 504 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2016/12/1-200x300.png` | 高优先本地化 |
| `source/_posts/2016-12-22_【转发】Android中SQLite应用详解.md` | 511 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2016/12/2-300x119.png` | 高优先本地化 |
| `source/_posts/2017-01-12_【整理】使用ant和jenkins自动化编译android项目（windows环境）.md` | 38 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2017/01/jenkins-android-config-300x107.png` | 高优先本地化 |
| `source/_posts/2017-02-22_【源码分析】java_sdk篇–Java_Collection_Framework.md` | 8 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2017/02/JCF详细图-300x296.jpg` | 高优先本地化 |
| `source/_posts/2017-02-22_【源码分析】java_sdk篇–Java_Collection_Framework.md` | 14 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2017/02/JCF详细图2-300x285.gif` | 高优先本地化 |
| `source/_posts/2017-02-22_【源码分析】java_sdk篇–Java_Collection_Framework.md` | 62 | `` | `http://www.prayerlaputa.com/wp-content/uploads/2017/02/HashMap实现-300x108.jpg` | 高优先本地化 |

## 后续执行建议

- 若进入下一步执行，建议先处理 A 类，再处理 B 类，再处理 C 类。
- 旧站外链图若需本地化，优先下载外链目标的大图，不只保存 `-300x...` 缩略图。
- 执行阶段建议分批提交，避免一次性改动过大，不利于回滚。

