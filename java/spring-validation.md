# spring-validation
## pom.xml
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
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

# 自定义校验注解
## Phone.java
```
@Documented
@Constraint(validatedBy = PhoneValidator.class)
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface Phone {
    String message() default "{phone}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
```

## PhoneValidator.java
```
public class PhoneValidator implements ConstraintValidator<Phone, String> {
    private static final String PHONE_REGEX = "^1[3-9]\\d{9}$";
    private static final Pattern PHONE_PATTERN = Pattern.compile(PHONE_REGEX);

    @Override
    public void initialize(Phone constraintAnnotation) {
        // 初始化方法，可用于获取注解的属性值
    }

    @Override
    public boolean isValid(String phone, ConstraintValidatorContext context) {
        if (phone == null || phone.isEmpty()) {
            return false; // 如果允许空值，返回 true；否则可以返回 false
        }
        return PHONE_PATTERN.matcher(phone).matches();
    }
}
```

# 全局捕获异常
## GlobalExceptionHandler.java
```
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
//    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Map handleGeneralException(Exception e) {
        Map errorResponse = new HashMap();
        errorResponse.put("error", e.getMessage());
        errorResponse.put("code", "0");
        return errorResponse;
    }
}
```