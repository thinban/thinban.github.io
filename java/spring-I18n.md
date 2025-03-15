# spring-i118n
## I18nConfig.java
- MessageSource的API用法： messageSource.getMessage("user.code.notblank", null, Locale.getDefault());
- 注解用法：@Phone(message = "{phone}") ,默认就是{phone}.
```
@Configuration
public class I18nConfig {

    /**
     * API用法： messageSource.getMessage("user.code.notblank", null, Locale.getDefault());
     *
     * @return
     */
    @Bean
    public MessageSource messageSource() {
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        messageSource.setBasename("messages");
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }

    @Bean
    public LocaleResolver localeResolver() {
        AcceptHeaderLocaleResolver localeResolver = new AcceptHeaderLocaleResolver();
        localeResolver.setDefaultLocale(Locale.SIMPLIFIED_CHINESE);
        return localeResolver;
    }
}
```


## messages_zh_CN.properties
```
user.code.notblank=验证码不能为空。
user.codeId.notblank=验证码ID不能为空。
phone=手机号不能为空
```

## messages_en.properties
```
user.code.notblank=Code cannot be blank.
user.codeId.notblank=Code ID cannot be blank.
phone=Invalid phone number
```

## 其他国家
https://blog.csdn.net/u012562943/article/details/88290492