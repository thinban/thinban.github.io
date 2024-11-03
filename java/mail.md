# 集成springboot-mail
-- https://www.ityouknow.com/springboot/2017/05/06/spring-boot-mail.html

## pom and properties
```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-mail</artifactId>
</dependency>

<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>

spring.application.name=mail
spring.mail.host=smtp.163.com
spring.mail.username=xxx@163.com
spring.mail.password=xxx
spring.mail.default-encoding=UTF-8
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.starttls.required=true
```

## java
```
package com.example.mail;

import jakarta.mail.internet.MimeMessage;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@SpringBootTest
class MailApplicationTests {
    String to = "xxx@gmail.com";
    String subject = "测试邮件";
    String text = "测试邮件了啦";

    @Autowired
    MailProperties mailProperties;
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    TemplateEngine templateEngine;

    @Test
    void simpleMailMessage() {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(mailProperties.getUsername());
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        javaMailSender.send(message);
    }

    @Test
    void mimeMessage() throws Exception {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setFrom(mailProperties.getUsername());
        helper.setTo(to);
        helper.setSubject(subject);

        //创建邮件正文
        Context context = new Context();
//        context.setVariable("id", "006");
        String text2 = templateEngine.process("mail_register", context);
        System.out.println(text2);
        helper.setText(text2, true);

//        //附件
//        FileSystemResource file = new FileSystemResource(new File(filePath));
//        String fileName = filePath.substring(filePath.lastIndexOf(File.separator));
//        helper.addAttachment(fileName, file);
//
//        //内容包含图片
//        FileSystemResource res = new FileSystemResource(new File(rscPath));
//        helper.addInline(rscId, res);
//
        javaMailSender.send(message);
    }
}
```

## resources/templates/mail_register.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>注册验证码</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .container {
            background-color: #fff;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        .verification-code {
            font-size: 24px;
            font-weight: bold;
            color: #e74c3c;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>欢迎注册我们的服务！</h1>
        <p>您的注册验证码如下，请在注册页面输入以完成注册：</p>
        <div class="verification-code">1234-5678</div>
        <p>验证码有效期为30分钟，请尽快使用。</p>
        <p>如果这不是您本人的操作，请忽略这封邮件。</p>
    </div>
</body>
</html>
```