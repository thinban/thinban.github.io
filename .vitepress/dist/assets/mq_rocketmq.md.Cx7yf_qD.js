import{_ as s,c as a,o as n,a1 as p}from"./chunks/framework.C46D9NsM.js";const q=JSON.parse('{"title":"RocketMQ","description":"","frontmatter":{},"headers":[],"relativePath":"mq/rocketmq.md","filePath":"mq/rocketmq.md"}'),e={name:"mq/rocketmq.md"},l=p(`<h1 id="rocketmq" tabindex="-1">RocketMQ <a class="header-anchor" href="#rocketmq" aria-label="Permalink to &quot;RocketMQ&quot;">​</a></h1><ul><li><a href="https://rocketmq.apache.org/zh/docs/quickStart/01quickstart" target="_blank" rel="noreferrer">https://rocketmq.apache.org/zh/docs/quickStart/01quickstart</a> #官方文档</li><li><a href="https://github.com/apache/rocketmq-spring.git" target="_blank" rel="noreferrer">https://github.com/apache/rocketmq-spring.git</a> #官方demo</li></ul><h2 id="官方docker-compose-yml" tabindex="-1">官方docker-compose.yml <a class="header-anchor" href="#官方docker-compose-yml" aria-label="Permalink to &quot;官方docker-compose.yml&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &#39;3.8&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  namesrv:</span></span>
<span class="line"><span>    image: apache/rocketmq:5.2.0</span></span>
<span class="line"><span>    container_name: rmqnamesrv</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 9876:9876</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - rocketmq</span></span>
<span class="line"><span>    command: sh mqnamesrv</span></span>
<span class="line"><span>  broker:</span></span>
<span class="line"><span>    image: apache/rocketmq:5.2.0</span></span>
<span class="line"><span>    container_name: rmqbroker</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 10909:10909</span></span>
<span class="line"><span>      - 10911:10911</span></span>
<span class="line"><span>      - 10912:10912</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - NAMESRV_ADDR=rmqnamesrv:9876</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - namesrv</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - rocketmq</span></span>
<span class="line"><span>    command: sh mqbroker</span></span>
<span class="line"><span>  proxy:</span></span>
<span class="line"><span>    image: apache/rocketmq:5.2.0</span></span>
<span class="line"><span>    container_name: rmqproxy</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - rocketmq</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - broker</span></span>
<span class="line"><span>      - namesrv</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 8080:8080</span></span>
<span class="line"><span>      - 8081:8081</span></span>
<span class="line"><span>    restart: on-failure</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - NAMESRV_ADDR=rmqnamesrv:9876</span></span>
<span class="line"><span>    command: sh mqproxy</span></span></code></pre></div><h2 id="自定义docker-compose-yml" tabindex="-1">自定义docker-compose.yml <a class="header-anchor" href="#自定义docker-compose-yml" aria-label="Permalink to &quot;自定义docker-compose.yml&quot;">​</a></h2><ul><li>增加了自己docker打包的rocketmq-dashboard</li><li>volumn: logs,store</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &#39;3.8&#39;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  namesrv:</span></span>
<span class="line"><span>    image: apache/rocketmq:5.2.0</span></span>
<span class="line"><span>    container_name: rmqnamesrv</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 9876:9876</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - rocketmq</span></span>
<span class="line"><span>    command: sh mqnamesrv</span></span>
<span class="line"><span>  broker:</span></span>
<span class="line"><span>    image: apache/rocketmq:5.2.0</span></span>
<span class="line"><span>    container_name: rmqbroker</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 10909:10909</span></span>
<span class="line"><span>      - 10911:10911</span></span>
<span class="line"><span>      - 10912:10912</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - NAMESRV_ADDR=rmqnamesrv:9876</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - namesrv</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - rocketmq</span></span>
<span class="line"><span>    command: sh mqbroker</span></span>
<span class="line"><span>  proxy:</span></span>
<span class="line"><span>    image: apache/rocketmq:5.2.0</span></span>
<span class="line"><span>    container_name: rmqproxy</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - rocketmq</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - broker</span></span>
<span class="line"><span>      - namesrv</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 8080:8080</span></span>
<span class="line"><span>      - 8081:8081</span></span>
<span class="line"><span>    restart: on-failure</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      - NAMESRV_ADDR=rmqnamesrv:9876</span></span>
<span class="line"><span>    command: sh mqproxy</span></span>
<span class="line"><span>  rocketmq-dashboard:</span></span>
<span class="line"><span>    image: apacherocketmq/rocketmq-dashboard:latest</span></span>
<span class="line"><span>    container_name: rocketmq-dashboard</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      #- JAVA_OPTS=&quot;-Drocketmq.namesrv.addr=namesrv:9876&quot;</span></span>
<span class="line"><span>      - rocketmq.config.namesrvAddr=namesrv:9876</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;8090:8080&quot;</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>      - namesrv</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - rocketmq</span></span></code></pre></div><h3 id="构建-rocketmq-dashboard-docker-镜像" tabindex="-1">构建 rocketmq-dashboard Docker 镜像 <a class="header-anchor" href="#构建-rocketmq-dashboard-docker-镜像" aria-label="Permalink to &quot;构建 rocketmq-dashboard Docker 镜像&quot;">​</a></h3><p>ps: 如果 docker pull apacherocketmq/rocketmq-dashboard:latest 失败，可以考虑下面自己构建Docker镜像的步骤。</p><ul><li><code>https://rocketmq.apache.org/zh/docs/4.x/deployment/03Dashboard/</code></li><li>拉取项目 <code>https://github.com/apache/rocketmq-dashboard.git</code>，注释掉 <code>rocketmq.config.namesrvAddrs</code>，使用环境变量设置。</li><li>打包编译并上传服务器</li><li>上传项目内Dockerfile（这里因为网络问题，换了jdk）</li></ul><div class="language-Dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openjdk:8-jdk-alpine</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VOLUME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /tmp</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rocketmq-dashboard-*.jar rocketmq-dashboard.jar</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sh -c </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;touch /rocketmq-dashboard.jar&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ENV</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JAVA_OPTS=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ENTRYPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;java $JAVA_OPTS -jar /rocketmq-dashboard.jar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span></code></pre></div><ul><li>docker build -t apacherocketmq/rocketmq-dashboard:latest .</li></ul><h2 id="运维操作" tabindex="-1">运维操作 <a class="header-anchor" href="#运维操作" aria-label="Permalink to &quot;运维操作&quot;">​</a></h2><h3 id="创建topic" tabindex="-1">创建topic <a class="header-anchor" href="#创建topic" aria-label="Permalink to &quot;创建topic&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 创建topic</span></span>
<span class="line"><span>docker exec -it rmqbroker bash</span></span>
<span class="line"><span>	*UNSPECIFIED, TRANSACTION, FIFO, MIXED, DELAY, NORMAL</span></span>
<span class="line"><span>	sh mqadmin updatetopic -t normalTopic -c DefaultCluster -a +message.type=NORMAL</span></span>
<span class="line"><span>	sh mqadmin updatetopic -t fifoTopic -c DefaultCluster -a +message.type=FIFO -o true</span></span>
<span class="line"><span>	sh mqadmin updatetopic -t transTopic -c DefaultCluster -a +message.type=TRANSACTION</span></span>
<span class="line"><span>	sh mqadmin updatetopic -t delayTopic -c DefaultCluster -a +message.type=DELAY -r 3</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>-r 1: 表示创建一个支持消息回溯的主题（Retrying Queue Topic）。这种类型的主题用于支持消费失败后消息的重试。</span></span>
<span class="line"><span>-r 2: 表示创建一个支持事务消息的主题（Transactional Topic）。事务消息用于在分布式系统中实现分布式事务。</span></span>
<span class="line"><span>-r 3: 表示创建一个支持定时消息的主题（Timing Topic）。定时消息允许设置消息发送的延迟时间。</span></span>
<span class="line"><span>...todo</span></span></code></pre></div><h3 id="批量替换文件内容" tabindex="-1">批量替换文件内容 <a class="header-anchor" href="#批量替换文件内容" aria-label="Permalink to &quot;批量替换文件内容&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sed -i &quot;s/localhost/lab.io/g&quot; \`grep lab.io -rl .\`</span></span></code></pre></div>`,17),i=[l];function t(c,o,r,h,d,m){return n(),a("div",null,i)}const u=s(e,[["render",t]]);export{q as __pageData,u as default};
