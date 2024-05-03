---
title: springboot相关集成
description: 20240503_springboot相关集成
date: 2024-05-03
tags:
  - springboot集成
---

# SpringBoot优雅地定制JSON
*原理: Jackson库的@JsonView注解
```
public interface UserView {
  // 展示基本信息
  public interface Basic {}
  // 没有密码
  public interface WithoutPassword extends Basic {}
  // 展示所有的信息（包括敏感信息）
  public interface Full extends Basic {}
}

public class User {
  @JsonView(UserView.Basic.class)
  private Long id ;
  @JsonView(UserView.Basic.class)
  private String username ;
  @JsonView(UserView.Full.class)
  private String password ;
  @JsonView({UserView.WithoutPassword.class, UserView.Full.class})
  private String idNo ;
  // getter, setter
}


@RestController
@RequestMapping("/jsonview")
public class JsonViewController {
  @GetMapping("/user/basic")
  @JsonView(UserView.Basic.class)
  public User userWithout() {
    User user = new User(1L, "pack", "123123", "110101199001014294") ;
    return user  ;
  }
}
```