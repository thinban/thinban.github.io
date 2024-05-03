import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.1eb6b028.js";const q=JSON.parse('{"title":"guava","description":"guava的使用场景","frontmatter":{"title":"guava","description":"guava的使用场景","date":"2024-05-03T00:00:00.000Z","tags":["guava","java"]},"headers":[],"relativePath":"posts/知识整理/20240503_guava.md","filePath":"posts/知识整理/20240503_guava.md"}'),l={name:"posts/知识整理/20240503_guava.md"},p=e(`<h1 id="guava" tabindex="-1">guava <a class="header-anchor" href="#guava" aria-label="Permalink to &quot;guava&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;com.google.guava&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;guava&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;30.1.1-jre&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.google.guava&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;guava&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;30.1.1-jre&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><h2 id="双键map" tabindex="-1">双键Map <a class="header-anchor" href="#双键map" aria-label="Permalink to &quot;双键Map&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Table&lt;String,String,Integer&gt; table= HashBasedTable.create();</span></span>
<span class="line"><span style="color:#e1e4e8;">//存放元素（写）</span></span>
<span class="line"><span style="color:#e1e4e8;">table.put(&quot;Hydra&quot;, &quot;Jan&quot;, 20);</span></span>
<span class="line"><span style="color:#e1e4e8;">table.put(&quot;Hydra&quot;, &quot;Feb&quot;, 28);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">table.put(&quot;Trunks&quot;, &quot;Jan&quot;, 28);</span></span>
<span class="line"><span style="color:#e1e4e8;">table.put(&quot;Trunks&quot;, &quot;Feb&quot;, 16);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//取出元素</span></span>
<span class="line"><span style="color:#e1e4e8;">Integer dayCount = table.get(&quot;Hydra&quot;, &quot;Feb&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//rowKey或columnKey的集合</span></span>
<span class="line"><span style="color:#e1e4e8;">Set&lt;String&gt; rowKeys = table.rowKeySet();  //[Hydra, Trunks]</span></span>
<span class="line"><span style="color:#e1e4e8;">Set&lt;String&gt; columnKeys = table.columnKeySet();  //[Jan, Feb]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//value集合</span></span>
<span class="line"><span style="color:#e1e4e8;">Collection&lt;Integer&gt; values = table.values();  //[20, 28, 28, 16]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//转为嵌套的Map，这个是真的牛逼</span></span>
<span class="line"><span style="color:#e1e4e8;">Map&lt;String, Map&lt;String, Integer&gt;&gt; rowMap = table.rowMap();  //{Hydra={Jan=20, Feb=28}, Trunks={Jan=28, Feb=16}}</span></span>
<span class="line"><span style="color:#e1e4e8;">Map&lt;String, Map&lt;String, Integer&gt;&gt; columnMap = table.columnMap();  //{Hydra={Jan=20, Feb=28}, Trunks={Jan=28, Feb=16}}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Table&lt;String,String,Integer&gt; table= HashBasedTable.create();</span></span>
<span class="line"><span style="color:#24292e;">//存放元素（写）</span></span>
<span class="line"><span style="color:#24292e;">table.put(&quot;Hydra&quot;, &quot;Jan&quot;, 20);</span></span>
<span class="line"><span style="color:#24292e;">table.put(&quot;Hydra&quot;, &quot;Feb&quot;, 28);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">table.put(&quot;Trunks&quot;, &quot;Jan&quot;, 28);</span></span>
<span class="line"><span style="color:#24292e;">table.put(&quot;Trunks&quot;, &quot;Feb&quot;, 16);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//取出元素</span></span>
<span class="line"><span style="color:#24292e;">Integer dayCount = table.get(&quot;Hydra&quot;, &quot;Feb&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//rowKey或columnKey的集合</span></span>
<span class="line"><span style="color:#24292e;">Set&lt;String&gt; rowKeys = table.rowKeySet();  //[Hydra, Trunks]</span></span>
<span class="line"><span style="color:#24292e;">Set&lt;String&gt; columnKeys = table.columnKeySet();  //[Jan, Feb]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//value集合</span></span>
<span class="line"><span style="color:#24292e;">Collection&lt;Integer&gt; values = table.values();  //[20, 28, 28, 16]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//转为嵌套的Map，这个是真的牛逼</span></span>
<span class="line"><span style="color:#24292e;">Map&lt;String, Map&lt;String, Integer&gt;&gt; rowMap = table.rowMap();  //{Hydra={Jan=20, Feb=28}, Trunks={Jan=28, Feb=16}}</span></span>
<span class="line"><span style="color:#24292e;">Map&lt;String, Map&lt;String, Integer&gt;&gt; columnMap = table.columnMap();  //{Hydra={Jan=20, Feb=28}, Trunks={Jan=28, Feb=16}}</span></span></code></pre></div><h2 id="双向map" tabindex="-1">双向Map <a class="header-anchor" href="#双向map" aria-label="Permalink to &quot;双向Map&quot;">​</a></h2><ul><li>value也是不允许重复</li><li>视图的关联。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">HashBiMap&lt;String, String&gt; biMap = HashBiMap.create();</span></span>
<span class="line"><span style="color:#e1e4e8;">biMap.put(&quot;Hydra&quot;,&quot;Programmer&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">biMap.put(&quot;Tony&quot;,&quot;IronMan&quot;); //注意key会被修改，inverse()是一种视图的关联。</span></span>
<span class="line"><span style="color:#e1e4e8;">biMap.put(&quot;Thanos&quot;,&quot;Titan&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">BiMap&lt;String, String&gt; inverse = biMap.inverse();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">inverse.put(&quot;IronMan&quot;,&quot;Stark&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(biMap);//{Hydra=Programmer, Thanos=Titan, Stark=IronMan}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">HashBiMap&lt;String, String&gt; biMap = HashBiMap.create();</span></span>
<span class="line"><span style="color:#24292e;">biMap.put(&quot;Hydra&quot;,&quot;Programmer&quot;);</span></span>
<span class="line"><span style="color:#24292e;">biMap.put(&quot;Tony&quot;,&quot;IronMan&quot;); //注意key会被修改，inverse()是一种视图的关联。</span></span>
<span class="line"><span style="color:#24292e;">biMap.put(&quot;Thanos&quot;,&quot;Titan&quot;);</span></span>
<span class="line"><span style="color:#24292e;">BiMap&lt;String, String&gt; inverse = biMap.inverse();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">inverse.put(&quot;IronMan&quot;,&quot;Stark&quot;);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(biMap);//{Hydra=Programmer, Thanos=Titan, Stark=IronMan}</span></span></code></pre></div><h2 id="多值map" tabindex="-1">多值Map <a class="header-anchor" href="#多值map" aria-label="Permalink to &quot;多值Map&quot;">​</a></h2><ul><li>ArrayListMultimap</li><li>HashMultimap</li><li>TreeMultimap</li><li>视图的关联。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Multimap&lt;String, Integer&gt; multimap = ArrayListMultimap.create();</span></span>
<span class="line"><span style="color:#e1e4e8;">multimap.put(&quot;day&quot;,1);</span></span>
<span class="line"><span style="color:#e1e4e8;">multimap.put(&quot;day&quot;,2);</span></span>
<span class="line"><span style="color:#e1e4e8;">multimap.put(&quot;day&quot;,8);</span></span>
<span class="line"><span style="color:#e1e4e8;">multimap.put(&quot;month&quot;,3);//{month=[3], day=[1, 2, 8]}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Collection&lt;Integer&gt; day = multimap.get(&quot;day&quot;); //[1, 2, 8]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//转换为map</span></span>
<span class="line"><span style="color:#e1e4e8;">Map&lt;String, Collection&lt;Integer&gt;&gt; map = multimap.asMap();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Multimap&lt;String, Integer&gt; multimap = ArrayListMultimap.create();</span></span>
<span class="line"><span style="color:#24292e;">multimap.put(&quot;day&quot;,1);</span></span>
<span class="line"><span style="color:#24292e;">multimap.put(&quot;day&quot;,2);</span></span>
<span class="line"><span style="color:#24292e;">multimap.put(&quot;day&quot;,8);</span></span>
<span class="line"><span style="color:#24292e;">multimap.put(&quot;month&quot;,3);//{month=[3], day=[1, 2, 8]}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Collection&lt;Integer&gt; day = multimap.get(&quot;day&quot;); //[1, 2, 8]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//转换为map</span></span>
<span class="line"><span style="color:#24292e;">Map&lt;String, Collection&lt;Integer&gt;&gt; map = multimap.asMap();</span></span></code></pre></div><h2 id="范围map" tabindex="-1">范围map <a class="header-anchor" href="#范围map" aria-label="Permalink to &quot;范围map&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">RangeMap&lt;Integer, String&gt; rangeMap = TreeRangeMap.create();</span></span>
<span class="line"><span style="color:#e1e4e8;">rangeMap.put(Range.closedOpen(0,60),&quot;fail&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">rangeMap.put(Range.closed(60,90),&quot;satisfactory&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">rangeMap.put(Range.openClosed(90,100),&quot;excellent&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(rangeMap.get(59));//fail</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">RangeMap&lt;Integer, String&gt; rangeMap = TreeRangeMap.create();</span></span>
<span class="line"><span style="color:#24292e;">rangeMap.put(Range.closedOpen(0,60),&quot;fail&quot;);</span></span>
<span class="line"><span style="color:#24292e;">rangeMap.put(Range.closed(60,90),&quot;satisfactory&quot;);</span></span>
<span class="line"><span style="color:#24292e;">rangeMap.put(Range.openClosed(90,100),&quot;excellent&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">System.out.println(rangeMap.get(59));//fail</span></span></code></pre></div><h2 id="实例map" tabindex="-1">实例Map <a class="header-anchor" href="#实例map" aria-label="Permalink to &quot;实例Map&quot;">​</a></h2><ul><li>取出对象时省去了复杂的强制类型转换</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ClassToInstanceMap&lt;Object&gt; instanceMap = MutableClassToInstanceMap.create();</span></span>
<span class="line"><span style="color:#e1e4e8;">User user=new User(&quot;Hydra&quot;,18);</span></span>
<span class="line"><span style="color:#e1e4e8;">Dept dept=new Dept(&quot;develop&quot;,200);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">instanceMap.putInstance(User.class,user);</span></span>
<span class="line"><span style="color:#e1e4e8;">instanceMap.putInstance(Dept.class,dept);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ClassToInstanceMap&lt;Object&gt; instanceMap = MutableClassToInstanceMap.create();</span></span>
<span class="line"><span style="color:#24292e;">User user=new User(&quot;Hydra&quot;,18);</span></span>
<span class="line"><span style="color:#24292e;">Dept dept=new Dept(&quot;develop&quot;,200);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">instanceMap.putInstance(User.class,user);</span></span>
<span class="line"><span style="color:#24292e;">instanceMap.putInstance(Dept.class,dept);</span></span></code></pre></div>`,15),t=[p];function o(c,r,i,u,g,y){return s(),n("div",null,t)}const m=a(l,[["render",o]]);export{q as __pageData,m as default};
