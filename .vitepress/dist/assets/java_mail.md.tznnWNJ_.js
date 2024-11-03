import{_ as s,c as a,o as n,a1 as p}from"./chunks/framework.C46D9NsM.js";const h=JSON.parse('{"title":"集成springboot-mail","description":"","frontmatter":{},"headers":[],"relativePath":"java/mail.md","filePath":"java/mail.md"}'),e={name:"java/mail.md"},l=p(`<h1 id="集成springboot-mail" tabindex="-1">集成springboot-mail <a class="header-anchor" href="#集成springboot-mail" aria-label="Permalink to &quot;集成springboot-mail&quot;">​</a></h1><p>-- <a href="https://www.ityouknow.com/springboot/2017/05/06/spring-boot-mail.html" target="_blank" rel="noreferrer">https://www.ityouknow.com/springboot/2017/05/06/spring-boot-mail.html</a></p><h2 id="pom-and-properties" tabindex="-1">pom and properties <a class="header-anchor" href="#pom-and-properties" aria-label="Permalink to &quot;pom and properties&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-boot-starter-mail&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-boot-starter-thymeleaf&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>spring.application.name=mail</span></span>
<span class="line"><span>spring.mail.host=smtp.163.com</span></span>
<span class="line"><span>spring.mail.username=xxx@163.com</span></span>
<span class="line"><span>spring.mail.password=xxx</span></span>
<span class="line"><span>spring.mail.default-encoding=UTF-8</span></span>
<span class="line"><span>spring.mail.properties.mail.smtp.auth=true</span></span>
<span class="line"><span>spring.mail.properties.mail.smtp.starttls.enable=true</span></span>
<span class="line"><span>spring.mail.properties.mail.smtp.starttls.required=true</span></span></code></pre></div><h2 id="java" tabindex="-1">java <a class="header-anchor" href="#java" aria-label="Permalink to &quot;java&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.example.mail;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import jakarta.mail.internet.MimeMessage;</span></span>
<span class="line"><span>import org.junit.jupiter.api.Test;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.boot.autoconfigure.mail.MailProperties;</span></span>
<span class="line"><span>import org.springframework.boot.test.context.SpringBootTest;</span></span>
<span class="line"><span>import org.springframework.mail.SimpleMailMessage;</span></span>
<span class="line"><span>import org.springframework.mail.javamail.JavaMailSender;</span></span>
<span class="line"><span>import org.springframework.mail.javamail.MimeMessageHelper;</span></span>
<span class="line"><span>import org.thymeleaf.TemplateEngine;</span></span>
<span class="line"><span>import org.thymeleaf.context.Context;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@SpringBootTest</span></span>
<span class="line"><span>class MailApplicationTests {</span></span>
<span class="line"><span>    String to = &quot;xxx@gmail.com&quot;;</span></span>
<span class="line"><span>    String subject = &quot;测试邮件&quot;;</span></span>
<span class="line"><span>    String text = &quot;测试邮件了啦&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    MailProperties mailProperties;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private JavaMailSender javaMailSender;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    TemplateEngine templateEngine;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    void simpleMailMessage() {</span></span>
<span class="line"><span>        SimpleMailMessage message = new SimpleMailMessage();</span></span>
<span class="line"><span>        message.setFrom(mailProperties.getUsername());</span></span>
<span class="line"><span>        message.setTo(to);</span></span>
<span class="line"><span>        message.setSubject(subject);</span></span>
<span class="line"><span>        message.setText(text);</span></span>
<span class="line"><span>        javaMailSender.send(message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Test</span></span>
<span class="line"><span>    void mimeMessage() throws Exception {</span></span>
<span class="line"><span>        MimeMessage message = javaMailSender.createMimeMessage();</span></span>
<span class="line"><span>        MimeMessageHelper helper = new MimeMessageHelper(message, true);</span></span>
<span class="line"><span>        helper.setFrom(mailProperties.getUsername());</span></span>
<span class="line"><span>        helper.setTo(to);</span></span>
<span class="line"><span>        helper.setSubject(subject);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //创建邮件正文</span></span>
<span class="line"><span>        Context context = new Context();</span></span>
<span class="line"><span>//        context.setVariable(&quot;id&quot;, &quot;006&quot;);</span></span>
<span class="line"><span>        String text2 = templateEngine.process(&quot;mail_register&quot;, context);</span></span>
<span class="line"><span>        System.out.println(text2);</span></span>
<span class="line"><span>        helper.setText(text2, true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//        //附件</span></span>
<span class="line"><span>//        FileSystemResource file = new FileSystemResource(new File(filePath));</span></span>
<span class="line"><span>//        String fileName = filePath.substring(filePath.lastIndexOf(File.separator));</span></span>
<span class="line"><span>//        helper.addAttachment(fileName, file);</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>//        //内容包含图片</span></span>
<span class="line"><span>//        FileSystemResource res = new FileSystemResource(new File(rscPath));</span></span>
<span class="line"><span>//        helper.addInline(rscId, res);</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>        javaMailSender.send(message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="resources-templates-mail-register-html" tabindex="-1">resources/templates/mail_register.html <a class="header-anchor" href="#resources-templates-mail-register-html" aria-label="Permalink to &quot;resources/templates/mail_register.html&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;注册验证码&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        body {</span></span>
<span class="line"><span>            font-family: Arial, sans-serif;</span></span>
<span class="line"><span>            background-color: #f4f4f4;</span></span>
<span class="line"><span>            padding: 20px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .container {</span></span>
<span class="line"><span>            background-color: #fff;</span></span>
<span class="line"><span>            max-width: 600px;</span></span>
<span class="line"><span>            margin: 0 auto;</span></span>
<span class="line"><span>            padding: 20px;</span></span>
<span class="line"><span>            border-radius: 8px;</span></span>
<span class="line"><span>            box-shadow: 0 2px 4px rgba(0,0,0,0.1);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        h1 {</span></span>
<span class="line"><span>            color: #333;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        p {</span></span>
<span class="line"><span>            color: #666;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .verification-code {</span></span>
<span class="line"><span>            font-size: 24px;</span></span>
<span class="line"><span>            font-weight: bold;</span></span>
<span class="line"><span>            color: #e74c3c;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>        &lt;h1&gt;欢迎注册我们的服务！&lt;/h1&gt;</span></span>
<span class="line"><span>        &lt;p&gt;您的注册验证码如下，请在注册页面输入以完成注册：&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;verification-code&quot;&gt;1234-5678&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;p&gt;验证码有效期为30分钟，请尽快使用。&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;p&gt;如果这不是您本人的操作，请忽略这封邮件。&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div>`,8),t=[l];function i(r,o,c,m,g,d){return n(),a("div",null,t)}const b=s(e,[["render",i]]);export{h as __pageData,b as default};
