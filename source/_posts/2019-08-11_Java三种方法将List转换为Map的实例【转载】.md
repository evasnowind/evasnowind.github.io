---
title: "Java三种方法将List转换为Map的实例【转载】"
date: "2019-08-11"
categories: [java]
source: "http://prayerlaputa.com/?p=598"
---

# Java三种方法将List转换为Map的实例【转载】

原文链接：https://www.jb51.net/article/149605.htm

# Java三种方法将List转换为Map的实例

1.for循环

```

<pre class="brush:java;">import com.google.common.base.Function;
import com.google.common.collect.Maps;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
public class ListToMap {
  public static void main(String[] args) {
    List<User> userList = new ArrayList<>();
    User user1 = new User();
    user1.setId(1L);
    user1.setAge("12");
    User user2 = new User();
    user2.setId(2L);
    user2.setAge("13");
    userList.add(user1);
    userList.add(user2);
    Map<Long, User> maps = new HashMap<>();
    for (User user : userList) {
      maps.put(user.getId(), user);
    }
    System.out.println(maps);
  }
  public static class User {
    private Long id;
    private String age;
    public Long getId() {
      return id;
    }
    public void setId(Long id) {
      this.id = id;
    }
    public String getAge() {
      return age;
    }
    public void setAge(String age) {
      this.age = age;
    }
    @Override
    public String toString() {
      return "User{" +
          "id=" + id +
          ", age='" + age + '\'' +
          '}';
    }
  }
}</pre>
```

2.使用guava

```

<pre class="brush:java;">Map<Long, User> maps = Maps.uniqueIndex(userList, new Function<User, Long>() {
      @Override
      public Long apply(User user) {
        return user.getId();
      }
});
```

3.使用JDK1.8 **lambda表达式**

```

<div class="jb51code">
<pre class="brush:java;">Map<Long, User> maps = userList.stream().collect(Collectors.toMap(User::getId, user -> user));</pre>
</div>
```