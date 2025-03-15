# springdoc
## pom.xml
```
   <!-- SpringDoc OpenAPI for Spring Boot 3 -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>2.8.5</version>
        </dependency>
```


## OpenAPIConfig.java
```
/**
 * http://localhost:8080/swagger-ui/index.html
 */
@Configuration
public class OpenAPIConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI().info(new Info().title("Spring Boot 3 API").version("1.0.0").description("API documentation for Spring Boot 3 application"));
    }
}
```


## UserController.java
```
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @Data
    @Schema(name = "LoginDto", description = "登录请求数据传输对象")
    static class LoginDto {
        @Phone
        @Schema(description = "手机号", example = "13800138000")
        private String phone;

        @NotBlank(message = "验证码不能为空")
        @Schema(description = "验证码", example = "123456")
        private String code;

        @NotBlank(message = "滑块 ID 不能为空")
        @Schema(description = "滑块 ID", example = "abc123")
        private String codeId;
    }

    @Operation(summary = "手机号注册或登录", description = "响应token")
    @PostMapping("login")
    public ResponseEntity login(@RequestBody @Valid LoginDto dto) {
        //TODO 验证码校验
        User one = userService.getOne(new LambdaQueryWrapper<User>().eq(User::getPhone, dto.getPhone()));
        if (one == null) {
            one = User.builder().phone(dto.getPhone()).name("随机名称").build();
            Assert.isTrue(userService.save(one), cst.fail);
            return ResponseEntity.ok(su.token(one.getId()));
        }
        Assert.isTrue(one.getStatus() == 1, cst.fail);
        return ResponseEntity.ok(su.token(one.getId()));
    }

    @Operation(summary = "获取登录用户信息", description = "获取登录用户信息")
    @GetMapping("user")
    public ResponseEntity<User> user() {
        User user = userService.getById(su.uid());
        Assert.notNull(user, cst.fail);
        Assert.notNull(user.getStatus() == 1, cst.fail);
        return ResponseEntity.ok(user);
    }
}
```