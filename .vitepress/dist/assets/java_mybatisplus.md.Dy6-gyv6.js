import{_ as s,c as a,o as n,a1 as p}from"./chunks/framework.C46D9NsM.js";const b=JSON.parse('{"title":"mybatisplus","description":"","frontmatter":{},"headers":[],"relativePath":"java/mybatisplus.md","filePath":"java/mybatisplus.md"}'),l={name:"java/mybatisplus.md"},e=p(`<h1 id="mybatisplus" tabindex="-1">mybatisplus <a class="header-anchor" href="#mybatisplus" aria-label="Permalink to &quot;mybatisplus&quot;">​</a></h1><ul><li><a href="https://baomidou.com/getting-started/" target="_blank" rel="noreferrer">https://baomidou.com/getting-started/</a></li></ul><h2 id="pom-xml" tabindex="-1">pom.xml <a class="header-anchor" href="#pom-xml" aria-label="Permalink to &quot;pom.xml&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mybatis-plus-spring-boot3-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;3.5.7&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;mysql-connector-j&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;scope&gt;runtime&lt;/scope&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h2 id="application-yml" tabindex="-1">application.yml <a class="header-anchor" href="#application-yml" aria-label="Permalink to &quot;application.yml&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>  jackson:</span></span>
<span class="line"><span>    date-format: yyyy-MM-dd HH:mm:ss</span></span>
<span class="line"><span>    time-zone: GMT+8</span></span>
<span class="line"><span>  datasource:</span></span>
<span class="line"><span>    url: jdbc:mysql://mysql.lab.io:3306/mp0614</span></span>
<span class="line"><span>    username: root</span></span>
<span class="line"><span>    password: root</span></span>
<span class="line"><span>    driver-class-name: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span>  main:</span></span>
<span class="line"><span>    allow-circular-references: true</span></span>
<span class="line"><span>mybatis-plus:</span></span>
<span class="line"><span>  configuration:</span></span>
<span class="line"><span>    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl</span></span>
<span class="line"><span>  global-config:</span></span>
<span class="line"><span>    db-config:</span></span>
<span class="line"><span>      logic-delete-field: boolDel</span></span>
<span class="line"><span>      logic-delete-value: 1</span></span>
<span class="line"><span>      logic-not-delete-value: 0</span></span></code></pre></div><ul><li>java</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@MapperScan(&quot;com.example.mybatisplus.mapper&quot;)</span></span>
<span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class MybatisplusApplication {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(MybatisplusApplication.class, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 添加分页插件</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public MybatisPlusInterceptor mybatisPlusInterceptor() {</span></span>
<span class="line"><span>        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();</span></span>
<span class="line"><span>        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL)); // 如果配置多个插件, 切记分页最后添加</span></span>
<span class="line"><span>        // 如果有多数据源可以不配具体类型, 否则都建议配上具体的 DbType</span></span>
<span class="line"><span>        return interceptor;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,8),t=[e];function i(c,o,r,d,u,m){return n(),a("div",null,t)}const h=s(l,[["render",i]]);export{b as __pageData,h as default};
