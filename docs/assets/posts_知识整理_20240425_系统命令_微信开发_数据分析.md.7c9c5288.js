import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.1eb6b028.js";const l="/assets/image.0fb738ef.png",p="/assets/image-1.880efdee.png",o="/assets/image-2.c4c62722.png",t="/assets/image-3.f5f54a4d.png",w=JSON.parse('{"title":"20240425_系统命令_微信开发_数据分析","description":"20240425_系统命令_微信开发_数据分析","frontmatter":{"title":"20240425_系统命令_微信开发_数据分析","description":"20240425_系统命令_微信开发_数据分析","date":"2024-04-25T00:00:00.000Z","tags":["技术"]},"headers":[],"relativePath":"posts/知识整理/20240425_系统命令_微信开发_数据分析.md","filePath":"posts/知识整理/20240425_系统命令_微信开发_数据分析.md"}'),c={name:"posts/知识整理/20240425_系统命令_微信开发_数据分析.md"},i=e(`<h2 id="windows" tabindex="-1">windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;windows&quot;">​</a></h2><p>dxdiag 诊断工具</p><h1 id="linux" tabindex="-1">linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;linux&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">crontab -e </span></span>
<span class="line"><span style="color:#e1e4e8;">   *系统级：编辑 /etc/crontab 或 /etc/cron.d/</span></span>
<span class="line"><span style="color:#e1e4e8;">   *用户的作业调度表保存在内存，编辑时是临时文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">   *编辑指定用户: crontab -u username -e</span></span>
<span class="line"><span style="color:#e1e4e8;">   每分钟执行一次：* * * * * /path/to/command</span></span>
<span class="line"><span style="color:#e1e4e8;">   每小时的第5分钟执行：5 * * * * /path/to/command</span></span>
<span class="line"><span style="color:#e1e4e8;">   每天的午夜12点执行：0 0 * * * /path/to/command</span></span>
<span class="line"><span style="color:#e1e4e8;">   每周一的午夜12点执行：0 0 * * 1 /path/to/command</span></span>
<span class="line"><span style="color:#e1e4e8;">   每天的21:30执行：30 21 * * * /path/to/command</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">crontab -e </span></span>
<span class="line"><span style="color:#24292e;">   *系统级：编辑 /etc/crontab 或 /etc/cron.d/</span></span>
<span class="line"><span style="color:#24292e;">   *用户的作业调度表保存在内存，编辑时是临时文件。</span></span>
<span class="line"><span style="color:#24292e;">   *编辑指定用户: crontab -u username -e</span></span>
<span class="line"><span style="color:#24292e;">   每分钟执行一次：* * * * * /path/to/command</span></span>
<span class="line"><span style="color:#24292e;">   每小时的第5分钟执行：5 * * * * /path/to/command</span></span>
<span class="line"><span style="color:#24292e;">   每天的午夜12点执行：0 0 * * * /path/to/command</span></span>
<span class="line"><span style="color:#24292e;">   每周一的午夜12点执行：0 0 * * 1 /path/to/command</span></span>
<span class="line"><span style="color:#24292e;">   每天的21:30执行：30 21 * * * /path/to/command</span></span></code></pre></div><h1 id="微信开发" tabindex="-1">微信开发 <a class="header-anchor" href="#微信开发" aria-label="Permalink to &quot;微信开发&quot;">​</a></h1><p><a href="https://developers.weixin.qq.com/doc/" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/doc/</a></p><h1 id="数据分析指标与术语" tabindex="-1">数据分析指标与术语 <a class="header-anchor" href="#数据分析指标与术语" aria-label="Permalink to &quot;数据分析指标与术语&quot;">​</a></h1><p><a href="https://mp.weixin.qq.com/s/V2JMC3ora81pPrYvjjOoKg" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/V2JMC3ora81pPrYvjjOoKg</a></p><h2 id="用户访问类指标-13个" tabindex="-1">用户访问类指标(13个) <a class="header-anchor" href="#用户访问类指标-13个" aria-label="Permalink to &quot;用户访问类指标(13个)&quot;">​</a></h2><p><img src="`+l+'" alt="alt text"></p><h2 id="用户转化类指标-15个" tabindex="-1">用户转化类指标（15个） <a class="header-anchor" href="#用户转化类指标-15个" aria-label="Permalink to &quot;用户转化类指标（15个）&quot;">​</a></h2><p><img src="'+p+'" alt="alt text"></p><h2 id="用户留存类指标共有15个" tabindex="-1">用户留存类指标共有15个 <a class="header-anchor" href="#用户留存类指标共有15个" aria-label="Permalink to &quot;用户留存类指标共有15个&quot;">​</a></h2><p><img src="'+o+'" alt="alt text"></p><h2 id="用户社交类指标共有8个" tabindex="-1">用户社交类指标共有8个 <a class="header-anchor" href="#用户社交类指标共有8个" aria-label="Permalink to &quot;用户社交类指标共有8个&quot;">​</a></h2><p><img src="'+t+`" alt="alt text"></p><h1 id="springboot优雅地定制json" tabindex="-1">SpringBoot优雅地定制JSON <a class="header-anchor" href="#springboot优雅地定制json" aria-label="Permalink to &quot;SpringBoot优雅地定制JSON&quot;">​</a></h1><p>*原理: Jackson库的@JsonView注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public interface UserView {</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,19),r=[i];function d(u,h,y,_,m,b){return a(),n("div",null,r)}const q=s(c,[["render",d]]);export{w as __pageData,q as default};
