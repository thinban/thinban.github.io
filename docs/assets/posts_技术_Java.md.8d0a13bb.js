import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.7705da0e.js";const b=JSON.parse('{"title":"mermaid示例","description":"流程图、时序图、甘特图等","frontmatter":{"title":"mermaid示例","description":"流程图、时序图、甘特图等","date":"2023-12-14T00:00:00.000Z","tags":["复习"]},"headers":[],"relativePath":"posts/技术/Java.md","filePath":"posts/技术/Java.md"}'),l={name:"posts/技术/Java.md"},p=n(`<h2 id="hashmap" tabindex="-1">HashMap <a class="header-anchor" href="#hashmap" aria-label="Permalink to &quot;HashMap&quot;">​</a></h2><p>本质: 数组+链表/红黑树。key/value可以为null。</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Node&lt;K,V&gt;[] tab</span></span>
<span class="line"><span style="color:#e1e4e8;">    final int hash;</span></span>
<span class="line"><span style="color:#e1e4e8;">    final K key;</span></span>
<span class="line"><span style="color:#e1e4e8;">    V value;</span></span>
<span class="line"><span style="color:#e1e4e8;">    Node&lt;K,V&gt; next;</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">cap=tab.length</span></span>
<span class="line"><span style="color:#e1e4e8;">bincount=链表长度/树节点数</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Node&lt;K,V&gt;[] tab</span></span>
<span class="line"><span style="color:#24292e;">    final int hash;</span></span>
<span class="line"><span style="color:#24292e;">    final K key;</span></span>
<span class="line"><span style="color:#24292e;">    V value;</span></span>
<span class="line"><span style="color:#24292e;">    Node&lt;K,V&gt; next;</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">cap=tab.length</span></span>
<span class="line"><span style="color:#24292e;">bincount=链表长度/树节点数</span></span></code></pre></div><h3 id="putval" tabindex="-1">putval <a class="header-anchor" href="#putval" aria-label="Permalink to &quot;putval&quot;">​</a></h3><ol><li>初始化cap,threadhold(=0.75cap)</li><li>hash(key)计算，拿到头结点。</li><li>尾插法。（链表大于8）(jdk1.8前采用头插法，可能导致循环？)</li><li>链表大于8时，触发treeifyBin(tab, hash)操作。</li><li>由于cap&lt;64，会先double数组容量，直到cap&gt;=64，才会真正进行树化。</li><li>当树结点个数&lt;=6时，会退化成链表。</li></ol><h3 id="resize" tabindex="-1">resize <a class="header-anchor" href="#resize" aria-label="Permalink to &quot;resize&quot;">​</a></h3><ol><li>cap,threadhold=16,12</li><li>size&gt;threshold时两倍增长</li><li>bincount&gt;8&amp;&amp;cap&lt;64时，double扩容</li></ol><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">LinkedHashMap</span></span>
<span class="line"><span style="color:#e1e4e8;">    afterNodeAccess（eg.move to last）</span></span>
<span class="line"><span style="color:#e1e4e8;">    afterNodeInsert(eg.remove eldest)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">LinkedHashMap</span></span>
<span class="line"><span style="color:#24292e;">    afterNodeAccess（eg.move to last）</span></span>
<span class="line"><span style="color:#24292e;">    afterNodeInsert(eg.remove eldest)</span></span></code></pre></div><h2 id="hashtable" tabindex="-1">HashTable <a class="header-anchor" href="#hashtable" aria-label="Permalink to &quot;HashTable&quot;">​</a></h2><p>扩容：(oldCapacity &lt;&lt; 1) + 1</p><p>线程安全：public synchronized V put(K key, V value) {};</p><h2 id="concurrenthashmap" tabindex="-1">ConcurrentHashMap <a class="header-anchor" href="#concurrenthashmap" aria-label="Permalink to &quot;ConcurrentHashMap&quot;">​</a></h2><p>数据结构：同HashMap(1.8)</p><p>线程安全：乐观锁+Synchronized;哈希桶为空时，线程通过unsafe.compareAndSwapObject比较版本，如果一致则结束线程自旋；哈希桶有值时，则通过Synchronized来保证线程安全。</p><h2 id="arraylist-和-copyonwritearraylist" tabindex="-1">ArrayList 和 CopyOnWriteArrayList <a class="header-anchor" href="#arraylist-和-copyonwritearraylist" aria-label="Permalink to &quot;ArrayList 和 CopyOnWriteArrayList&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ArrayList </span></span>
<span class="line"><span style="color:#e1e4e8;">扩容（初始值10）： oldCapacity + (oldCapacity &gt;&gt; 1)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">CopyOnWriteArrayList</span></span>
<span class="line"><span style="color:#e1e4e8;">线程安全： 使用ReentrantLock，写时复制一个新数组。</span></span>
<span class="line"><span style="color:#e1e4e8;">其他： 初始值0，无需扩容。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ArrayList </span></span>
<span class="line"><span style="color:#24292e;">扩容（初始值10）： oldCapacity + (oldCapacity &gt;&gt; 1)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">CopyOnWriteArrayList</span></span>
<span class="line"><span style="color:#24292e;">线程安全： 使用ReentrantLock，写时复制一个新数组。</span></span>
<span class="line"><span style="color:#24292e;">其他： 初始值0，无需扩容。</span></span></code></pre></div><h2 id="线程池" tabindex="-1">线程池 <a class="header-anchor" href="#线程池" aria-label="Permalink to &quot;线程池&quot;">​</a></h2><p>CPU密集型一般分配 CPU核数+1个线程，IO密集型的则一般分配2*CPU核数</p><h3 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h3><p>newCachedThreadPool (0，max,60,second,SynchronousQueue)</p><p>newFixedThreadPool （n,n,0,mill,LinkedBlockingQueue）</p><p>newScheduledThreadPool（n,max,0,nano,DelayedWorkQueue)</p><p>newSingleThreadExecutor（1,1,0,mill,LinkedBlockingQueue）</p><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li>线程复用</li><li>控制并发</li><li>线程管理</li><li>避免new thread导致的：缺乏管理、性能不佳</li></ul><h3 id="threadpoolexecutor-java" tabindex="-1">ThreadPoolExecutor.java <a class="header-anchor" href="#threadpoolexecutor-java" aria-label="Permalink to &quot;ThreadPoolExecutor.java&quot;">​</a></h3><p>原理：corePoolSize-&gt;queuefull-&gt;maximumPoolSize-&gt;handler</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">参数：</span></span>
<span class="line"><span style="color:#e1e4e8;">int corePoolSize,</span></span>
<span class="line"><span style="color:#e1e4e8;">int maximumPoolSize,</span></span>
<span class="line"><span style="color:#e1e4e8;">long keepAliveTime,</span></span>
<span class="line"><span style="color:#e1e4e8;">TimeUnit unit,</span></span>
<span class="line"><span style="color:#e1e4e8;">BlockingQueue&lt;Runnable&gt; workQueue,</span></span>
<span class="line"><span style="color:#e1e4e8;">ThreadFactory threadFactory,</span></span>
<span class="line"><span style="color:#e1e4e8;">RejectedExecutionHandler handler</span></span>
<span class="line"><span style="color:#e1e4e8;">    AbortPolicy</span></span>
<span class="line"><span style="color:#e1e4e8;">    DiscardPolicy</span></span>
<span class="line"><span style="color:#e1e4e8;">    DiscardOldestPolicy</span></span>
<span class="line"><span style="color:#e1e4e8;">    CallerRunsPolicy</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">参数：</span></span>
<span class="line"><span style="color:#24292e;">int corePoolSize,</span></span>
<span class="line"><span style="color:#24292e;">int maximumPoolSize,</span></span>
<span class="line"><span style="color:#24292e;">long keepAliveTime,</span></span>
<span class="line"><span style="color:#24292e;">TimeUnit unit,</span></span>
<span class="line"><span style="color:#24292e;">BlockingQueue&lt;Runnable&gt; workQueue,</span></span>
<span class="line"><span style="color:#24292e;">ThreadFactory threadFactory,</span></span>
<span class="line"><span style="color:#24292e;">RejectedExecutionHandler handler</span></span>
<span class="line"><span style="color:#24292e;">    AbortPolicy</span></span>
<span class="line"><span style="color:#24292e;">    DiscardPolicy</span></span>
<span class="line"><span style="color:#24292e;">    DiscardOldestPolicy</span></span>
<span class="line"><span style="color:#24292e;">    CallerRunsPolicy</span></span></code></pre></div><h2 id="spring" tabindex="-1">spring <a class="header-anchor" href="#spring" aria-label="Permalink to &quot;spring&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">生命周期</span></span>
<span class="line"><span style="color:#e1e4e8;">    装配：BeanDefinitionMap[beanName]BeanDefinition</span></span>
<span class="line"><span style="color:#e1e4e8;">    自定义：BeanFactoryPostProcessor</span></span>
<span class="line"><span style="color:#e1e4e8;">    实例化：初始化</span></span>
<span class="line"><span style="color:#e1e4e8;">    填充资源：Aware</span></span>
<span class="line"><span style="color:#e1e4e8;">    自定义：BeanPostProcessor</span></span>
<span class="line"><span style="color:#e1e4e8;">    使用、销毁</span></span>
<span class="line"><span style="color:#e1e4e8;">scope</span></span>
<span class="line"><span style="color:#e1e4e8;">    Singleton：一个Spring容器中只有一个bean的实例，此为Spring的默认配置，全容器共享一个实例。</span></span>
<span class="line"><span style="color:#e1e4e8;">    Prototype：每次调用新建一个Bean的实例。</span></span>
<span class="line"><span style="color:#e1e4e8;">    Request：Web项目中，给每个http request新建一个Bean实例。</span></span>
<span class="line"><span style="color:#e1e4e8;">    Session：Web项目中，为每个http session新建一个Bean实例。</span></span>
<span class="line"><span style="color:#e1e4e8;">    GlobalSession：只在portal应用中有用，给每个global http session新建一个Bean实例。</span></span>
<span class="line"><span style="color:#e1e4e8;">aop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">生命周期</span></span>
<span class="line"><span style="color:#24292e;">    装配：BeanDefinitionMap[beanName]BeanDefinition</span></span>
<span class="line"><span style="color:#24292e;">    自定义：BeanFactoryPostProcessor</span></span>
<span class="line"><span style="color:#24292e;">    实例化：初始化</span></span>
<span class="line"><span style="color:#24292e;">    填充资源：Aware</span></span>
<span class="line"><span style="color:#24292e;">    自定义：BeanPostProcessor</span></span>
<span class="line"><span style="color:#24292e;">    使用、销毁</span></span>
<span class="line"><span style="color:#24292e;">scope</span></span>
<span class="line"><span style="color:#24292e;">    Singleton：一个Spring容器中只有一个bean的实例，此为Spring的默认配置，全容器共享一个实例。</span></span>
<span class="line"><span style="color:#24292e;">    Prototype：每次调用新建一个Bean的实例。</span></span>
<span class="line"><span style="color:#24292e;">    Request：Web项目中，给每个http request新建一个Bean实例。</span></span>
<span class="line"><span style="color:#24292e;">    Session：Web项目中，为每个http session新建一个Bean实例。</span></span>
<span class="line"><span style="color:#24292e;">    GlobalSession：只在portal应用中有用，给每个global http session新建一个Bean实例。</span></span>
<span class="line"><span style="color:#24292e;">aop</span></span></code></pre></div><h2 id="springboot" tabindex="-1">springboot <a class="header-anchor" href="#springboot" aria-label="Permalink to &quot;springboot&quot;">​</a></h2><p>优点</p><p>原理</p><p>启动 <a href="https://blog.csdn.net/zsh2050/article/details/124514882" target="_blank" rel="noreferrer">https://blog.csdn.net/zsh2050/article/details/124514882</a></p><h2 id="spring-cloud" tabindex="-1">spring cloud <a class="header-anchor" href="#spring-cloud" aria-label="Permalink to &quot;spring cloud&quot;">​</a></h2><p>Eureka Feign Ribbon Hystrix GateWay</p><h2 id="cas" tabindex="-1">CAS <a class="header-anchor" href="#cas" aria-label="Permalink to &quot;CAS&quot;">​</a></h2><p>CAS底层原理 各种实现：锁 sun.misc.Unsafe#compareAndSwapObject</p><h2 id="synchronized" tabindex="-1">synchronized <a class="header-anchor" href="#synchronized" aria-label="Permalink to &quot;synchronized&quot;">​</a></h2><p>方法：字节码层面ACC_SYNCHRONIZE标志，线程访问这个方法时，会尝试获取objectMonitor对象锁。</p><p>代码块：出口和入口添加monitor-enter和monitor-exit指令，线程遇到monitor-enter时，会尝试获取objectMonitor对象锁。</p><p>特性：原子性、有序性（不能禁止指令重排序，但单线程结果不会被改变）、可见性（最新值刷新到主内存）、可重入、不可中断（Lock的tryLock就可以） 锁粗化（编译阶段：锁被连续操作或者出现在循环里，同步范围扩大）、锁消除（编译阶段：经逃逸分析，会把不必要的锁消除）、锁升级</p><p>逃逸分析：分析对象的动态作用范围，比如一个方法里创建一个对象，这个对象作为参数传递到其他方法里（方法逃逸），或者被其他线程访问（线程逃逸）</p><p>锁升级:</p><h3 id="objectmonitor对象锁" tabindex="-1">ObjectMonitor对象锁 <a class="header-anchor" href="#objectmonitor对象锁" aria-label="Permalink to &quot;ObjectMonitor对象锁&quot;">​</a></h3><p>对象头Mark Word中的重量级锁指针指向的monitor对象,该对象是在HotSpot底层C++语言编写的(openjdk里面看)</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//结构体如下</span></span>
<span class="line"><span style="color:#e1e4e8;">ObjectMonitor::ObjectMonitor() {  </span></span>
<span class="line"><span style="color:#e1e4e8;">  _header       = NULL;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  _count       = 0;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  _waiters      = 0,  </span></span>
<span class="line"><span style="color:#e1e4e8;">  _recursions   = 0;       //线程的重入次数</span></span>
<span class="line"><span style="color:#e1e4e8;">  _object       = NULL;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  _owner        = NULL;    //标识拥有该monitor的线程</span></span>
<span class="line"><span style="color:#e1e4e8;">  _WaitSet      = NULL;    //等待线程组成的双向循环链表，_WaitSet是第一个节点</span></span>
<span class="line"><span style="color:#e1e4e8;">  _WaitSetLock  = 0 ;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  _Responsible  = NULL ;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  _succ         = NULL ;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  _cxq          = NULL ;    //多线程竞争锁进入时的单向链表</span></span>
<span class="line"><span style="color:#e1e4e8;">  FreeNext      = NULL ;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  _EntryList    = NULL ;    //_owner从该双向循环链表中唤醒线程结点，_EntryList是第一个节点</span></span>
<span class="line"><span style="color:#e1e4e8;">  _SpinFreq     = 0 ;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  _SpinClock    = 0 ;  </span></span>
<span class="line"><span style="color:#e1e4e8;">  OwnerIsThread = 0 ;  </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//结构体如下</span></span>
<span class="line"><span style="color:#24292e;">ObjectMonitor::ObjectMonitor() {  </span></span>
<span class="line"><span style="color:#24292e;">  _header       = NULL;  </span></span>
<span class="line"><span style="color:#24292e;">  _count       = 0;  </span></span>
<span class="line"><span style="color:#24292e;">  _waiters      = 0,  </span></span>
<span class="line"><span style="color:#24292e;">  _recursions   = 0;       //线程的重入次数</span></span>
<span class="line"><span style="color:#24292e;">  _object       = NULL;  </span></span>
<span class="line"><span style="color:#24292e;">  _owner        = NULL;    //标识拥有该monitor的线程</span></span>
<span class="line"><span style="color:#24292e;">  _WaitSet      = NULL;    //等待线程组成的双向循环链表，_WaitSet是第一个节点</span></span>
<span class="line"><span style="color:#24292e;">  _WaitSetLock  = 0 ;  </span></span>
<span class="line"><span style="color:#24292e;">  _Responsible  = NULL ;  </span></span>
<span class="line"><span style="color:#24292e;">  _succ         = NULL ;  </span></span>
<span class="line"><span style="color:#24292e;">  _cxq          = NULL ;    //多线程竞争锁进入时的单向链表</span></span>
<span class="line"><span style="color:#24292e;">  FreeNext      = NULL ;  </span></span>
<span class="line"><span style="color:#24292e;">  _EntryList    = NULL ;    //_owner从该双向循环链表中唤醒线程结点，_EntryList是第一个节点</span></span>
<span class="line"><span style="color:#24292e;">  _SpinFreq     = 0 ;  </span></span>
<span class="line"><span style="color:#24292e;">  _SpinClock    = 0 ;  </span></span>
<span class="line"><span style="color:#24292e;">  OwnerIsThread = 0 ;  </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="对象头" tabindex="-1">对象头 <a class="header-anchor" href="#对象头" aria-label="Permalink to &quot;对象头&quot;">​</a></h4><p>（HotSpot虚拟机）对象在内存：对象头、实例数据和对齐填充（被8b整除）。</p><p>64位jvm中，对象头一般需要2个机器码（2*8byte，压缩后对象头markword占12b），数组对象需要3个机器码。</p><p>使用ClassLayout打印的对象头是反过来的。</p><p>-XX:+UseCompressedOops 开启指针压缩：全局静态变量/对象头/引用类型/数组类型会被压缩。jvm默认开启 -XX:-UseCompressedOops</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//打印对象头</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.openjdk.jol&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;jol-core&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;0.10&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(ClassLayout.parseInstance(main).toPrintable());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//打印对象头</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.openjdk.jol&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;jol-core&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;0.10&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">System.out.println(ClassLayout.parseInstance(main).toPrintable());</span></span></code></pre></div><h4 id="拓展" tabindex="-1">拓展 <a class="header-anchor" href="#拓展" aria-label="Permalink to &quot;拓展&quot;">​</a></h4><p>对象内存分配： 1. 指针碰撞（内存规整，临界指针移动申请内存） 2. 空闲列表（不规整时，jvm维护的内存分配列表，按需分配）</p><p>对象访问：1. 直接指针访问（直接存对象地址）。 2. 句柄访问（jvm堆独立开辟一块句柄池，句柄池维护和对象的链接，其他引用指向句柄池的地址）。</p><h2 id="volatile" tabindex="-1">volatile <a class="header-anchor" href="#volatile" aria-label="Permalink to &quot;volatile&quot;">​</a></h2><ol><li>确保变量对所有线程的可见性。</li><li>禁止指令重排序。</li></ol><p>【内存屏障指令lock#】： 确保变量最新的值会被写回内存，并且禁止编译器和cpu对程序进行指令重排.</p><h2 id="jvm" tabindex="-1">JVM <a class="header-anchor" href="#jvm" aria-label="Permalink to &quot;JVM&quot;">​</a></h2><h3 id="内存结构" tabindex="-1">内存结构 <a class="header-anchor" href="#内存结构" aria-label="Permalink to &quot;内存结构&quot;">​</a></h3><h3 id="调优" tabindex="-1">调优 <a class="header-anchor" href="#调优" aria-label="Permalink to &quot;调优&quot;">​</a></h3>`,63),o=[p];function t(c,i,r,d,h,y){return a(),e("div",null,o)}const g=s(l,[["render",t]]);export{b as __pageData,g as default};
