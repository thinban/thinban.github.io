import{_ as s,c as a,o as n,a1 as p}from"./chunks/framework.C46D9NsM.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"java/javacode.md","filePath":"java/javacode.md"}'),e={name:"java/javacode.md"},l=p(`<h2 id="mybatisplus反射构建查询" tabindex="-1">mybatisplus反射构建查询 <a class="header-anchor" href="#mybatisplus反射构建查询" aria-label="Permalink to &quot;mybatisplus反射构建查询&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  public static String camelToSnakeCase(String camelCase) {</span></span>
<span class="line"><span>        return camelCase.replaceAll(&quot;([a-z])([A-Z]+)&quot;, &quot;$1_$2&quot;).toLowerCase();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public static void buildQry(QueryWrapper q, Class&lt;?&gt; cls, Object obj) throws IllegalAccessException {</span></span>
<span class="line"><span>        if (q == null || cls == null || obj == null) return;</span></span>
<span class="line"><span>        Field[] declaredFields = cls.getDeclaredFields();</span></span>
<span class="line"><span>        for (Field declaredField : declaredFields) {</span></span>
<span class="line"><span>            String name = declaredField.getName();</span></span>
<span class="line"><span>            Class type = declaredField.getType();</span></span>
<span class="line"><span>            declaredField.setAccessible(true);</span></span>
<span class="line"><span>            Object val = declaredField.get(obj);</span></span>
<span class="line"><span>            if (Arrays.asList(&quot;serialVersionUID&quot;).contains(name) || val == null) continue;</span></span>
<span class="line"><span>//            System.out.println(name);</span></span>
<span class="line"><span>//            System.out.println(val);</span></span>
<span class="line"><span>//            System.out.println(type);</span></span>
<span class="line"><span>//            System.out.println();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            name = camelToSnakeCase(name);</span></span>
<span class="line"><span>            boolean boolDigit = type == Integer.class || type == int.class || type == Long.class || type == long.class || type == Double.class || type == double.class || type == Float.class || type == float.class;</span></span>
<span class="line"><span>            if (boolDigit) {</span></span>
<span class="line"><span>                q.eq(name, val);</span></span>
<span class="line"><span>            } else if (type == Date.class) {</span></span>
<span class="line"><span>                LocalDateTime localDateTime = LocalDateTime.ofInstant(((Date) val).toInstant(), ZoneId.systemDefault());</span></span>
<span class="line"><span>                LocalDateTime startOfDay = localDateTime.toLocalDate().atStartOfDay();</span></span>
<span class="line"><span>                LocalDateTime nextDayStart = startOfDay.plusDays(1).minusSeconds(1);</span></span>
<span class="line"><span>                q.between(name, startOfDay, nextDayStart);</span></span>
<span class="line"><span>            } else if (type == LocalDateTime.class) {</span></span>
<span class="line"><span>                LocalDateTime localDateTime = (LocalDateTime) val;</span></span>
<span class="line"><span>                LocalDateTime startOfDay = localDateTime.toLocalDate().atStartOfDay();</span></span>
<span class="line"><span>                LocalDateTime nextDayStart = startOfDay.plusDays(1).minusSeconds(1);</span></span>
<span class="line"><span>                q.between(name, startOfDay, nextDayStart);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                q.like(name, val);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="mybatisplus单表增删改查" tabindex="-1">mybatisplus单表增删改查 <a class="header-anchor" href="#mybatisplus单表增删改查" aria-label="Permalink to &quot;mybatisplus单表增删改查&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;</span></span>
<span class="line"><span>import com.baomidou.mybatisplus.core.metadata.IPage;</span></span>
<span class="line"><span>import com.baomidou.mybatisplus.extension.plugins.pagination.Page;</span></span>
<span class="line"><span>import com.example.mybatisplus.domain.XhsUser;</span></span>
<span class="line"><span>import com.example.mybatisplus.service.XhsUserService;</span></span>
<span class="line"><span>import jakarta.annotation.Resource;</span></span>
<span class="line"><span>import org.springframework.http.HttpStatus;</span></span>
<span class="line"><span>import org.springframework.http.ResponseEntity;</span></span>
<span class="line"><span>import org.springframework.util.Assert;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.lang.reflect.Field;</span></span>
<span class="line"><span>import java.time.LocalDateTime;</span></span>
<span class="line"><span>import java.time.ZoneId;</span></span>
<span class="line"><span>import java.util.Arrays;</span></span>
<span class="line"><span>import java.util.Date;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;XhsUser&quot;)</span></span>
<span class="line"><span>public class XhsUserController {</span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    XhsUserService service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //?current=1&amp;size=1</span></span>
<span class="line"><span>    //需要额外参数支持： 排序，范围查询</span></span>
<span class="line"><span>    @GetMapping(&quot;page&quot;)</span></span>
<span class="line"><span>    public ResponseEntity&lt;IPage&lt;XhsUser&gt;&gt; page(Page p, XhsUser m) throws IllegalAccessException {</span></span>
<span class="line"><span>        QueryWrapper q = new QueryWrapper&lt;XhsUser&gt;();</span></span>
<span class="line"><span>        buildQry(q, XhsUser.class, m);</span></span>
<span class="line"><span>        Page page = service.page(p, q);</span></span>
<span class="line"><span>        return ResponseEntity.ok(page);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping(&quot;add&quot;)</span></span>
<span class="line"><span>    public ResponseEntity add(@RequestBody XhsUser m) {</span></span>
<span class="line"><span>        return service.save(m) ? ResponseEntity.ok(m) : ResponseEntity.status(HttpStatus.BAD_REQUEST).body(&quot;操作失败&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PutMapping(&quot;edit&quot;)</span></span>
<span class="line"><span>    public ResponseEntity edit(@RequestBody XhsUser m) {</span></span>
<span class="line"><span>        Assert.isTrue(m.getId() &gt; 0, &quot;参数错误&quot;);</span></span>
<span class="line"><span>        return service.updateById(m) ? ResponseEntity.ok(m) : ResponseEntity.status(HttpStatus.BAD_REQUEST).body(&quot;操作失败&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @DeleteMapping(&quot;del&quot;)</span></span>
<span class="line"><span>    public ResponseEntity del(String[] ids) {</span></span>
<span class="line"><span>        Assert.isTrue(ids != null &amp;&amp; ids.length &gt; 0, &quot;参数错误&quot;);</span></span>
<span class="line"><span>        return service.removeBatchByIds(Arrays.asList(ids)) ? ResponseEntity.ok(null) : ResponseEntity.status(HttpStatus.BAD_REQUEST).body(&quot;操作失败&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void buildQry(QueryWrapper q, Class&lt;?&gt; cls, Object obj) throws IllegalAccessException {</span></span>
<span class="line"><span>        if (q == null || cls == null || obj == null) return;</span></span>
<span class="line"><span>        Field[] declaredFields = cls.getDeclaredFields();</span></span>
<span class="line"><span>        for (Field declaredField : declaredFields) {</span></span>
<span class="line"><span>            String name = declaredField.getName();</span></span>
<span class="line"><span>            Class type = declaredField.getType();</span></span>
<span class="line"><span>            declaredField.setAccessible(true);</span></span>
<span class="line"><span>            Object val = declaredField.get(obj);</span></span>
<span class="line"><span>            if (Arrays.asList(&quot;serialVersionUID&quot;).contains(name) || val == null) continue;</span></span>
<span class="line"><span>            name = camelToSnakeCase(name);</span></span>
<span class="line"><span>            boolean boolDigit = type == Integer.class || type == int.class || type == Long.class || type == long.class || type == Double.class || type == double.class || type == Float.class || type == float.class;</span></span>
<span class="line"><span>            if (boolDigit) {</span></span>
<span class="line"><span>                q.eq(name, val);</span></span>
<span class="line"><span>            } else if (type == Date.class) {</span></span>
<span class="line"><span>                LocalDateTime localDateTime = LocalDateTime.ofInstant(((Date) val).toInstant(), ZoneId.systemDefault());</span></span>
<span class="line"><span>                LocalDateTime startOfDay = localDateTime.toLocalDate().atStartOfDay();</span></span>
<span class="line"><span>                LocalDateTime nextDayStart = startOfDay.plusDays(1).minusSeconds(1);</span></span>
<span class="line"><span>                q.between(name, startOfDay, nextDayStart);</span></span>
<span class="line"><span>            } else if (type == LocalDateTime.class) {</span></span>
<span class="line"><span>                LocalDateTime localDateTime = (LocalDateTime) val;</span></span>
<span class="line"><span>                LocalDateTime startOfDay = localDateTime.toLocalDate().atStartOfDay();</span></span>
<span class="line"><span>                LocalDateTime nextDayStart = startOfDay.plusDays(1).minusSeconds(1);</span></span>
<span class="line"><span>                q.between(name, startOfDay, nextDayStart);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                q.like(name, val);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static String camelToSnakeCase(String camelCase) {</span></span>
<span class="line"><span>        return camelCase.replaceAll(&quot;([a-z])([A-Z]+)&quot;, &quot;$1_$2&quot;).toLowerCase();</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,4),t=[l];function i(c,o,r,u,m,d){return n(),a("div",null,t)}const g=s(e,[["render",i]]);export{D as __pageData,g as default};
