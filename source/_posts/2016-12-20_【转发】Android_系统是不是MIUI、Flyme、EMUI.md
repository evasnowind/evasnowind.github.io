---
title: "【转发】Android 系统是不是MIUI、Flyme、EMUI"
date: "2016-12-20"
categories: [android, java]
source: "http://prayerlaputa.com/?p=227"
---

# 【转发】Android 系统是不是MIUI、Flyme、EMUI

工作中遇到“判断android手机的rom是哪一个版本”这样的问题，搜到如下解决方案，具体出自哪里不确定（网上转载太多，也没标注出处……），我是在这里看到的：<http://mojijs.com/2015/10/211671/index.html> 代码复制下来即可用，我已经验证过，O(∩\_∩)O~\
\

```
//读取系统配置信息build.prop类
import android.os.Environment;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Collection;
import java.util.Enumeration;
import java.util.Map.Entry;
import java.util.Properties;
import java.util.Set;
public class BuildProperties {
    private final Properties properties;
    private BuildProperties() throws IOException {
        properties = new Properties();
        properties.load(new FileInputStream(new File(Environment.getRootDirectory(), "build.prop")));
    }
    public boolean containsKey(final Object key) {
        return properties.containsKey(key);
    }
    public boolean containsValue(final Object value) {
        return properties.containsValue(value);
    }
    public Set<Entry<Object, Object>> entrySet() {
        return properties.entrySet();
    }
    public String getProperty(final String name) {
        return properties.getProperty(name);
    }
    public String getProperty(final String name, final String defaultValue) {
        return properties.getProperty(name, defaultValue);
    }
    public boolean isEmpty() {
        return properties.isEmpty();
    }
    public Enumeration<Object> keys() {
        return properties.keys();
    }
    public Set<Object> keySet() {
        return properties.keySet();
    }
    public int size() {
        return properties.size();
    }
    public Collection<Object> values() {
        return properties.values();
    }
    public static BuildProperties newInstance() throws IOException {
        return new BuildProperties();
    }
}
import android.os.Build;
import java.io.IOException;
import java.lang.reflect.Method;
/**
 * 判断系统是不是miui，flyme，emui
 */
public class OSUtils {
    private static final String KEY_EMUI_VERSION_CODE = "ro.build.version.emui";
    private static final String KEY_MIUI_VERSION_CODE = "ro.miui.ui.version.code";
    private static final String KEY_MIUI_VERSION_NAME = "ro.miui.ui.version.name";
    private static final String KEY_MIUI_INTERNAL_STORAGE = "ro.miui.internal.storage";
    private static boolean isPropertiesExist(String... keys) {
        try {
            BuildProperties prop = BuildProperties.newInstance();
            for (String key : keys) {
                String str = prop.getProperty(key);
                if (str == null)
                    return false;
            }
            return true;
        } catch (IOException e) {
            return false;
        }
    }
    public static boolean isEMUI() {
        return isPropertiesExist(KEY_EMUI_VERSION_CODE);
    }
    public static boolean isMIUI() {
        return isPropertiesExist(KEY_MIUI_VERSION_CODE, KEY_MIUI_VERSION_NAME, KEY_MIUI_INTERNAL_STORAGE);
    }
    public static boolean isFlyme() {
        try {
            final Method method = Build.class.getMethod("hasSmartBar");
            return method != null;
        } catch (final Exception e) {
            return false;
        }
    }
}
```

\