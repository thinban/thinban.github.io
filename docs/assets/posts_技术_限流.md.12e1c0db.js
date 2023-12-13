import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.7705da0e.js";const h=JSON.parse('{"title":"mermaid","description":"mermaid语法","frontmatter":{"title":"mermaid","description":"mermaid语法","date":"2023-12-14T00:00:00.000Z","tags":["小抄","计算机科学","算法"]},"headers":[],"relativePath":"posts/技术/限流.md","filePath":"posts/技术/限流.md"}'),l={name:"posts/技术/限流.md"},p=a(`<h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>限流：</p><p>阈值：QPS</p><p>拒绝策略：拒绝、排队</p><h2 id="算法" tabindex="-1">算法 <a class="header-anchor" href="#算法" aria-label="Permalink to &quot;算法&quot;">​</a></h2><h3 id="固定窗口" tabindex="-1">固定窗口 <a class="header-anchor" href="#固定窗口" aria-label="Permalink to &quot;固定窗口&quot;">​</a></h3><p>原理： 采用原子自增。 缺点： 时间窗口的临界突变时，如 1s 中的后 500 ms 和第 2s 的前 500ms 时，虽然是加起来是 1s 时间，却可以被请求 4 次。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 阈值</span></span>
<span class="line"><span style="color:#e1e4e8;">    private static Integer QPS = 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 时间窗口（毫秒）</span></span>
<span class="line"><span style="color:#e1e4e8;">    private static long TIME_WINDOWS = 1000;</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 计数器（核心）</span></span>
<span class="line"><span style="color:#e1e4e8;">    private static AtomicInteger REQ_COUNT = new AtomicInteger();</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    private static long START_TIME = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    public synchronized static boolean tryAcquire() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if ((System.currentTimeMillis() - START_TIME) &gt; TIME_WINDOWS) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            REQ_COUNT.set(0);</span></span>
<span class="line"><span style="color:#e1e4e8;">            START_TIME = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return REQ_COUNT.incrementAndGet() &lt;= QPS;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 阈值</span></span>
<span class="line"><span style="color:#24292e;">    private static Integer QPS = 2;</span></span>
<span class="line"><span style="color:#24292e;">    // 时间窗口（毫秒）</span></span>
<span class="line"><span style="color:#24292e;">    private static long TIME_WINDOWS = 1000;</span></span>
<span class="line"><span style="color:#24292e;">    // 计数器（核心）</span></span>
<span class="line"><span style="color:#24292e;">    private static AtomicInteger REQ_COUNT = new AtomicInteger();</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    private static long START_TIME = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    public synchronized static boolean tryAcquire() {</span></span>
<span class="line"><span style="color:#24292e;">        if ((System.currentTimeMillis() - START_TIME) &gt; TIME_WINDOWS) {</span></span>
<span class="line"><span style="color:#24292e;">            REQ_COUNT.set(0);</span></span>
<span class="line"><span style="color:#24292e;">            START_TIME = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return REQ_COUNT.incrementAndGet() &lt;= QPS;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><h4 id="redis" tabindex="-1">redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;redis&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public boolean acquire(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 当前秒数作为 key</span></span>
<span class="line"><span style="color:#e1e4e8;">        key = KEY_PREFIX + key + System.currentTimeMillis() / 1000;</span></span>
<span class="line"><span style="color:#e1e4e8;">        DefaultRedisScript&lt;Long&gt; redisScript = new DefaultRedisScript&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">        redisScript.setResultType(Long.class);</span></span>
<span class="line"><span style="color:#e1e4e8;">        //lua文件存放在resources目录下</span></span>
<span class="line"><span style="color:#e1e4e8;">        redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource(&quot;limiter.lua&quot;)));</span></span>
<span class="line"><span style="color:#e1e4e8;">        return stringRedisTemplate.execute(redisScript, Arrays.asList(key), QPS, EXPIRE_TIME) == 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"># limiter.lua</span></span>
<span class="line"><span style="color:#e1e4e8;">local count = redis.call(&quot;incr&quot;,KEYS[1])</span></span>
<span class="line"><span style="color:#e1e4e8;">if count == 1 then</span></span>
<span class="line"><span style="color:#e1e4e8;">redis.call(&#39;expire&#39;,KEYS[1],ARGV[2])</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;">if count &gt; tonumber(ARGV[1]) then</span></span>
<span class="line"><span style="color:#e1e4e8;">return 0</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span>
<span class="line"><span style="color:#e1e4e8;">return 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public boolean acquire(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        // 当前秒数作为 key</span></span>
<span class="line"><span style="color:#24292e;">        key = KEY_PREFIX + key + System.currentTimeMillis() / 1000;</span></span>
<span class="line"><span style="color:#24292e;">        DefaultRedisScript&lt;Long&gt; redisScript = new DefaultRedisScript&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        redisScript.setResultType(Long.class);</span></span>
<span class="line"><span style="color:#24292e;">        //lua文件存放在resources目录下</span></span>
<span class="line"><span style="color:#24292e;">        redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource(&quot;limiter.lua&quot;)));</span></span>
<span class="line"><span style="color:#24292e;">        return stringRedisTemplate.execute(redisScript, Arrays.asList(key), QPS, EXPIRE_TIME) == 1;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"># limiter.lua</span></span>
<span class="line"><span style="color:#24292e;">local count = redis.call(&quot;incr&quot;,KEYS[1])</span></span>
<span class="line"><span style="color:#24292e;">if count == 1 then</span></span>
<span class="line"><span style="color:#24292e;">redis.call(&#39;expire&#39;,KEYS[1],ARGV[2])</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;">if count &gt; tonumber(ARGV[1]) then</span></span>
<span class="line"><span style="color:#24292e;">return 0</span></span>
<span class="line"><span style="color:#24292e;">end</span></span>
<span class="line"><span style="color:#24292e;">return 1</span></span></code></pre></div><h3 id="滑动窗口" tabindex="-1">滑动窗口 <a class="header-anchor" href="#滑动窗口" aria-label="Permalink to &quot;滑动窗口&quot;">​</a></h3><h4 id="redis实现" tabindex="-1">redis实现 <a class="header-anchor" href="#redis实现" aria-label="Permalink to &quot;redis实现&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public boolean acquire(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        long now = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#e1e4e8;">        key = KEY_PREFIX + key;</span></span>
<span class="line"><span style="color:#e1e4e8;">        String oldest = String.valueOf(now - 1_000);</span></span>
<span class="line"><span style="color:#e1e4e8;">        String score = String.valueOf(now);</span></span>
<span class="line"><span style="color:#e1e4e8;">        String scoreValue = score;</span></span>
<span class="line"><span style="color:#e1e4e8;">        DefaultRedisScript&lt;Long&gt; redisScript = new DefaultRedisScript&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">        redisScript.setResultType(Long.class);</span></span>
<span class="line"><span style="color:#e1e4e8;">        //lua文件存放在resources目录下</span></span>
<span class="line"><span style="color:#e1e4e8;">        redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource(&quot;limiter2.lua&quot;)));</span></span>
<span class="line"><span style="color:#e1e4e8;">        return stringRedisTemplate.execute(redisScript, Arrays.asList(key), oldest, score, QPS, scoreValue) == 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># limiter2.lua</span></span>
<span class="line"><span style="color:#e1e4e8;">--KEYS[1]: 限流 key</span></span>
<span class="line"><span style="color:#e1e4e8;">--ARGV[1]: 时间戳 - 时间窗口</span></span>
<span class="line"><span style="color:#e1e4e8;">--ARGV[2]: 当前时间戳（作为score）</span></span>
<span class="line"><span style="color:#e1e4e8;">--ARGV[3]: 阈值</span></span>
<span class="line"><span style="color:#e1e4e8;">--ARGV[4]: score 对应的唯一value</span></span>
<span class="line"><span style="color:#e1e4e8;">-- 1. 移除时间窗口之前的数据([0,ARGV[1]]</span></span>
<span class="line"><span style="color:#e1e4e8;">redis.call(&#39;zremrangeByScore&#39;, KEYS[1], 0, ARGV[1])</span></span>
<span class="line"><span style="color:#e1e4e8;">-- 2. 统计当前元素数量</span></span>
<span class="line"><span style="color:#e1e4e8;">local res = redis.call(&#39;zcard&#39;, KEYS[1])</span></span>
<span class="line"><span style="color:#e1e4e8;">-- 3. 是否超过阈值</span></span>
<span class="line"><span style="color:#e1e4e8;">if (res == nil) or (res &lt; tonumber(ARGV[3])) then</span></span>
<span class="line"><span style="color:#e1e4e8;">    redis.call(&#39;zadd&#39;, KEYS[1], ARGV[2], ARGV[4])</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 1</span></span>
<span class="line"><span style="color:#e1e4e8;">else</span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public boolean acquire(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        long now = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#24292e;">        key = KEY_PREFIX + key;</span></span>
<span class="line"><span style="color:#24292e;">        String oldest = String.valueOf(now - 1_000);</span></span>
<span class="line"><span style="color:#24292e;">        String score = String.valueOf(now);</span></span>
<span class="line"><span style="color:#24292e;">        String scoreValue = score;</span></span>
<span class="line"><span style="color:#24292e;">        DefaultRedisScript&lt;Long&gt; redisScript = new DefaultRedisScript&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        redisScript.setResultType(Long.class);</span></span>
<span class="line"><span style="color:#24292e;">        //lua文件存放在resources目录下</span></span>
<span class="line"><span style="color:#24292e;">        redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource(&quot;limiter2.lua&quot;)));</span></span>
<span class="line"><span style="color:#24292e;">        return stringRedisTemplate.execute(redisScript, Arrays.asList(key), oldest, score, QPS, scoreValue) == 1;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># limiter2.lua</span></span>
<span class="line"><span style="color:#24292e;">--KEYS[1]: 限流 key</span></span>
<span class="line"><span style="color:#24292e;">--ARGV[1]: 时间戳 - 时间窗口</span></span>
<span class="line"><span style="color:#24292e;">--ARGV[2]: 当前时间戳（作为score）</span></span>
<span class="line"><span style="color:#24292e;">--ARGV[3]: 阈值</span></span>
<span class="line"><span style="color:#24292e;">--ARGV[4]: score 对应的唯一value</span></span>
<span class="line"><span style="color:#24292e;">-- 1. 移除时间窗口之前的数据([0,ARGV[1]]</span></span>
<span class="line"><span style="color:#24292e;">redis.call(&#39;zremrangeByScore&#39;, KEYS[1], 0, ARGV[1])</span></span>
<span class="line"><span style="color:#24292e;">-- 2. 统计当前元素数量</span></span>
<span class="line"><span style="color:#24292e;">local res = redis.call(&#39;zcard&#39;, KEYS[1])</span></span>
<span class="line"><span style="color:#24292e;">-- 3. 是否超过阈值</span></span>
<span class="line"><span style="color:#24292e;">if (res == nil) or (res &lt; tonumber(ARGV[3])) then</span></span>
<span class="line"><span style="color:#24292e;">    redis.call(&#39;zadd&#39;, KEYS[1], ARGV[2], ARGV[4])</span></span>
<span class="line"><span style="color:#24292e;">    return 1</span></span>
<span class="line"><span style="color:#24292e;">else</span></span>
<span class="line"><span style="color:#24292e;">    return 0</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><h3 id="漏洞算法" tabindex="-1">漏洞算法 <a class="header-anchor" href="#漏洞算法" aria-label="Permalink to &quot;漏洞算法&quot;">​</a></h3><p>队列、生产消费者</p><h3 id="令牌桶算法" tabindex="-1">令牌桶算法 <a class="header-anchor" href="#令牌桶算法" aria-label="Permalink to &quot;令牌桶算法&quot;">​</a></h3><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//guava</span></span>
<span class="line"><span style="color:#E1E4E8;">RateLimiter rateLimiter</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">RateLimiter.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        rateLimiter.</span><span style="color:#B392F0;">tryAcquire</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//guava</span></span>
<span class="line"><span style="color:#24292E;">RateLimiter rateLimiter</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">RateLimiter.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        rateLimiter.</span><span style="color:#6F42C1;">tryAcquire</span><span style="color:#24292E;">();</span></span></code></pre></div><h2 id="附录" tabindex="-1">附录 <a class="header-anchor" href="#附录" aria-label="Permalink to &quot;附录&quot;">​</a></h2><ul><li>Guava 的限流工具包</li><li>Sentinel</li><li>redisson，已经封装了基于 Redis 的限流。</li></ul>`,19),t=[p];function c(o,r,i,y,u,d){return e(),n("div",null,t)}const g=s(l,[["render",c]]);export{h as __pageData,g as default};
