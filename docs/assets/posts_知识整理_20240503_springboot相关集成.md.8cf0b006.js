import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.1eb6b028.js";const w=JSON.parse('{"title":"springboot相关集成","description":"20240503_springboot相关集成","frontmatter":{"title":"springboot相关集成","description":"20240503_springboot相关集成","date":"2024-05-03T00:00:00.000Z","tags":["springboot集成"]},"headers":[],"relativePath":"posts/知识整理/20240503_springboot相关集成.md","filePath":"posts/知识整理/20240503_springboot相关集成.md"}'),p={name:"posts/知识整理/20240503_springboot相关集成.md"},l=a(`<h1 id="springboot优雅地定制json" tabindex="-1">SpringBoot优雅地定制JSON <a class="header-anchor" href="#springboot优雅地定制json" aria-label="Permalink to &quot;SpringBoot优雅地定制JSON&quot;">​</a></h1><p>*原理: Jackson库的@JsonView注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public interface UserView {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 展示基本信息</span></span>
<span class="line"><span style="color:#e1e4e8;">  public interface Basic {}</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 没有密码</span></span>
<span class="line"><span style="color:#e1e4e8;">  public interface WithoutPassword extends Basic {}</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 展示所有的信息（包括敏感信息）</span></span>
<span class="line"><span style="color:#e1e4e8;">  public interface Full extends Basic {}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class User {</span></span>
<span class="line"><span style="color:#e1e4e8;">  @JsonView(UserView.Basic.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  private Long id ;</span></span>
<span class="line"><span style="color:#e1e4e8;">  @JsonView(UserView.Basic.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  private String username ;</span></span>
<span class="line"><span style="color:#e1e4e8;">  @JsonView(UserView.Full.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  private String password ;</span></span>
<span class="line"><span style="color:#e1e4e8;">  @JsonView({UserView.WithoutPassword.class, UserView.Full.class})</span></span>
<span class="line"><span style="color:#e1e4e8;">  private String idNo ;</span></span>
<span class="line"><span style="color:#e1e4e8;">  // getter, setter</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@RestController</span></span>
<span class="line"><span style="color:#e1e4e8;">@RequestMapping(&quot;/jsonview&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class JsonViewController {</span></span>
<span class="line"><span style="color:#e1e4e8;">  @GetMapping(&quot;/user/basic&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  @JsonView(UserView.Basic.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">  public User userWithout() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    User user = new User(1L, &quot;pack&quot;, &quot;123123&quot;, &quot;110101199001014294&quot;) ;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return user  ;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public interface UserView {</span></span>
<span class="line"><span style="color:#24292e;">  // 展示基本信息</span></span>
<span class="line"><span style="color:#24292e;">  public interface Basic {}</span></span>
<span class="line"><span style="color:#24292e;">  // 没有密码</span></span>
<span class="line"><span style="color:#24292e;">  public interface WithoutPassword extends Basic {}</span></span>
<span class="line"><span style="color:#24292e;">  // 展示所有的信息（包括敏感信息）</span></span>
<span class="line"><span style="color:#24292e;">  public interface Full extends Basic {}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class User {</span></span>
<span class="line"><span style="color:#24292e;">  @JsonView(UserView.Basic.class)</span></span>
<span class="line"><span style="color:#24292e;">  private Long id ;</span></span>
<span class="line"><span style="color:#24292e;">  @JsonView(UserView.Basic.class)</span></span>
<span class="line"><span style="color:#24292e;">  private String username ;</span></span>
<span class="line"><span style="color:#24292e;">  @JsonView(UserView.Full.class)</span></span>
<span class="line"><span style="color:#24292e;">  private String password ;</span></span>
<span class="line"><span style="color:#24292e;">  @JsonView({UserView.WithoutPassword.class, UserView.Full.class})</span></span>
<span class="line"><span style="color:#24292e;">  private String idNo ;</span></span>
<span class="line"><span style="color:#24292e;">  // getter, setter</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@RestController</span></span>
<span class="line"><span style="color:#24292e;">@RequestMapping(&quot;/jsonview&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class JsonViewController {</span></span>
<span class="line"><span style="color:#24292e;">  @GetMapping(&quot;/user/basic&quot;)</span></span>
<span class="line"><span style="color:#24292e;">  @JsonView(UserView.Basic.class)</span></span>
<span class="line"><span style="color:#24292e;">  public User userWithout() {</span></span>
<span class="line"><span style="color:#24292e;">    User user = new User(1L, &quot;pack&quot;, &quot;123123&quot;, &quot;110101199001014294&quot;) ;</span></span>
<span class="line"><span style="color:#24292e;">    return user  ;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,3),o=[l];function c(t,i,r,u,y,d){return n(),e("div",null,o)}const g=s(p,[["render",c]]);export{w as __pageData,g as default};
