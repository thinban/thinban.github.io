import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.1eb6b028.js";const h=JSON.parse('{"title":"20240429_摘抄","description":"20240429_摘抄","frontmatter":{"title":"20240429_摘抄","description":"20240429_摘抄","date":"2024-04-25T00:00:00.000Z","tags":["技术"]},"headers":[],"relativePath":"posts/知识整理/20240429_摘抄.md","filePath":"posts/知识整理/20240429_摘抄.md"}'),p={name:"posts/知识整理/20240429_摘抄.md"},l=e(`<h1 id="config-nginx" tabindex="-1">config-nginx <a class="header-anchor" href="#config-nginx" aria-label="Permalink to &quot;config-nginx&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server {</span></span>
<span class="line"><span style="color:#e1e4e8;">    listen 80;</span></span>
<span class="line"><span style="color:#e1e4e8;">    charset utf-8;</span></span>
<span class="line"><span style="color:#e1e4e8;">    access_log off;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_pass http://app:8080;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header Host $host:$server_port;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Forwarded-Host $server_name;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    location /static {</span></span>
<span class="line"><span style="color:#e1e4e8;">        access_log   off;</span></span>
<span class="line"><span style="color:#e1e4e8;">        expires      30d;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        alias /app/static;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server {</span></span>
<span class="line"><span style="color:#24292e;">    listen 80;</span></span>
<span class="line"><span style="color:#24292e;">    charset utf-8;</span></span>
<span class="line"><span style="color:#24292e;">    access_log off;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    location / {</span></span>
<span class="line"><span style="color:#24292e;">        proxy_pass http://app:8080;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header Host $host:$server_port;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Forwarded-Host $server_name;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    location /static {</span></span>
<span class="line"><span style="color:#24292e;">        access_log   off;</span></span>
<span class="line"><span style="color:#24292e;">        expires      30d;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        alias /app/static;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="docker-compose-kafka" tabindex="-1">docker-compose-kafka <a class="header-anchor" href="#docker-compose-kafka" aria-label="Permalink to &quot;docker-compose-kafka&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">version: &#39;2&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">services:</span></span>
<span class="line"><span style="color:#e1e4e8;">  zookeeper:</span></span>
<span class="line"><span style="color:#e1e4e8;">    container_name: zookeeper</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: wurstmeister/zookeeper</span></span>
<span class="line"><span style="color:#e1e4e8;">    volumes:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - ./zookeeper/data:/data</span></span>
<span class="line"><span style="color:#e1e4e8;">    ports:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - &quot;2181:2181&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">       </span></span>
<span class="line"><span style="color:#e1e4e8;">  kafka:</span></span>
<span class="line"><span style="color:#e1e4e8;">    container_name: kafka</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: wurstmeister/kafka</span></span>
<span class="line"><span style="color:#e1e4e8;">    ports:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - &quot;9092:9092&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    environment:</span></span>
<span class="line"><span style="color:#e1e4e8;">      KAFKA_ADVERTISED_HOST_NAME: localhost</span></span>
<span class="line"><span style="color:#e1e4e8;">      KAFKA_MESSAGE_MAX_BYTES: 2000000</span></span>
<span class="line"><span style="color:#e1e4e8;">      KAFKA_CREATE_TOPICS: &quot;test:1:1&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181</span></span>
<span class="line"><span style="color:#e1e4e8;">    volumes:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - ./kafka:/kafka</span></span>
<span class="line"><span style="color:#e1e4e8;">      - /var/run/docker.sock:/var/run/docker.sock</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">  kafka-manager:</span></span>
<span class="line"><span style="color:#e1e4e8;">    container_name: kafka-manager</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: sheepkiller/kafka-manager</span></span>
<span class="line"><span style="color:#e1e4e8;">    ports:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 9020:9000</span></span>
<span class="line"><span style="color:#e1e4e8;">    environment:</span></span>
<span class="line"><span style="color:#e1e4e8;">      ZK_HOSTS: zookeeper:2181</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">version: &#39;2&#39;</span></span>
<span class="line"><span style="color:#24292e;">services:</span></span>
<span class="line"><span style="color:#24292e;">  zookeeper:</span></span>
<span class="line"><span style="color:#24292e;">    container_name: zookeeper</span></span>
<span class="line"><span style="color:#24292e;">    image: wurstmeister/zookeeper</span></span>
<span class="line"><span style="color:#24292e;">    volumes:</span></span>
<span class="line"><span style="color:#24292e;">      - ./zookeeper/data:/data</span></span>
<span class="line"><span style="color:#24292e;">    ports:</span></span>
<span class="line"><span style="color:#24292e;">      - &quot;2181:2181&quot;</span></span>
<span class="line"><span style="color:#24292e;">       </span></span>
<span class="line"><span style="color:#24292e;">  kafka:</span></span>
<span class="line"><span style="color:#24292e;">    container_name: kafka</span></span>
<span class="line"><span style="color:#24292e;">    image: wurstmeister/kafka</span></span>
<span class="line"><span style="color:#24292e;">    ports:</span></span>
<span class="line"><span style="color:#24292e;">      - &quot;9092:9092&quot;</span></span>
<span class="line"><span style="color:#24292e;">    environment:</span></span>
<span class="line"><span style="color:#24292e;">      KAFKA_ADVERTISED_HOST_NAME: localhost</span></span>
<span class="line"><span style="color:#24292e;">      KAFKA_MESSAGE_MAX_BYTES: 2000000</span></span>
<span class="line"><span style="color:#24292e;">      KAFKA_CREATE_TOPICS: &quot;test:1:1&quot;</span></span>
<span class="line"><span style="color:#24292e;">      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181</span></span>
<span class="line"><span style="color:#24292e;">    volumes:</span></span>
<span class="line"><span style="color:#24292e;">      - ./kafka:/kafka</span></span>
<span class="line"><span style="color:#24292e;">      - /var/run/docker.sock:/var/run/docker.sock</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">  kafka-manager:</span></span>
<span class="line"><span style="color:#24292e;">    container_name: kafka-manager</span></span>
<span class="line"><span style="color:#24292e;">    image: sheepkiller/kafka-manager</span></span>
<span class="line"><span style="color:#24292e;">    ports:</span></span>
<span class="line"><span style="color:#24292e;">      - 9020:9000</span></span>
<span class="line"><span style="color:#24292e;">    environment:</span></span>
<span class="line"><span style="color:#24292e;">      ZK_HOSTS: zookeeper:2181</span></span></code></pre></div><h1 id="docker-compose-rabbitmq" tabindex="-1">docker-compose-rabbitmq <a class="header-anchor" href="#docker-compose-rabbitmq" aria-label="Permalink to &quot;docker-compose-rabbitmq&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">version: &#39;2&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">services:</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">  #rabbitmq container</span></span>
<span class="line"><span style="color:#e1e4e8;">  rabbitmq:</span></span>
<span class="line"><span style="color:#e1e4e8;">    #setup host name</span></span>
<span class="line"><span style="color:#e1e4e8;">    hostname: myrabbitmq</span></span>
<span class="line"><span style="color:#e1e4e8;">    #use docker images</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: rabbitmq:management</span></span>
<span class="line"><span style="color:#e1e4e8;">    #ports setting</span></span>
<span class="line"><span style="color:#e1e4e8;">    ports:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 15673:15672</span></span>
<span class="line"><span style="color:#e1e4e8;">      - 5673:5672</span></span>
<span class="line"><span style="color:#e1e4e8;">    restart: always</span></span>
<span class="line"><span style="color:#e1e4e8;">    #volumes setting</span></span>
<span class="line"><span style="color:#e1e4e8;">    volumes:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - ./data:/var/lib/rabbitmq</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">version: &#39;2&#39;</span></span>
<span class="line"><span style="color:#24292e;">services:</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">  #rabbitmq container</span></span>
<span class="line"><span style="color:#24292e;">  rabbitmq:</span></span>
<span class="line"><span style="color:#24292e;">    #setup host name</span></span>
<span class="line"><span style="color:#24292e;">    hostname: myrabbitmq</span></span>
<span class="line"><span style="color:#24292e;">    #use docker images</span></span>
<span class="line"><span style="color:#24292e;">    image: rabbitmq:management</span></span>
<span class="line"><span style="color:#24292e;">    #ports setting</span></span>
<span class="line"><span style="color:#24292e;">    ports:</span></span>
<span class="line"><span style="color:#24292e;">      - 15673:15672</span></span>
<span class="line"><span style="color:#24292e;">      - 5673:5672</span></span>
<span class="line"><span style="color:#24292e;">    restart: always</span></span>
<span class="line"><span style="color:#24292e;">    #volumes setting</span></span>
<span class="line"><span style="color:#24292e;">    volumes:</span></span>
<span class="line"><span style="color:#24292e;">      - ./data:/var/lib/rabbitmq</span></span></code></pre></div><h1 id="oauth" tabindex="-1">oauth <a class="header-anchor" href="#oauth" aria-label="Permalink to &quot;oauth&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">授权码（authorization-code）</span></span>
<span class="line"><span style="color:#e1e4e8;">	*客户端：a.com	认证服务器：b.com</span></span>
<span class="line"><span style="color:#e1e4e8;">	https://b.com/oauth/authorize?response_type=code&amp;client_id=CLIENT_ID&amp;redirect_uri=CALLBACK_URL&amp;scope=read			https://a.com/callback?code=AUTHORIZATION_CODE</span></span>
<span class="line"><span style="color:#e1e4e8;">	https://b.com/oauth/token?client_id=CLIENT_ID&amp;client_secret=CLIENT_SECRET&amp;grant_type=authorization_code&amp;code=AUTHORIZATION_CODE&amp;redirect_uri=CALLBACK_URL		颁发ACCESS_TOKEN</span></span>
<span class="line"><span style="color:#e1e4e8;">隐藏式（implicit）</span></span>
<span class="line"><span style="color:#e1e4e8;">	*纯前端</span></span>
<span class="line"><span style="color:#e1e4e8;">	https://b.com/oauth/authorize?response_type=token&amp;client_id=CLIENT_ID&amp;redirect_uri=CALLBACK_URL&amp;scope=read	https://a.com/callback#token=ACCESS_TOKEN（前端)</span></span>
<span class="line"><span style="color:#e1e4e8;">密码式（password）</span></span>
<span class="line"><span style="color:#e1e4e8;">	*高度信任</span></span>
<span class="line"><span style="color:#e1e4e8;">	https://oauth.b.com/token?grant_type=password&amp;username=USERNAME&amp;password=PASSWORD&amp;client_id=CLIENT_ID	颁发ACCESS_TOKEN</span></span>
<span class="line"><span style="color:#e1e4e8;">客户端凭证（client credentials）</span></span>
<span class="line"><span style="color:#e1e4e8;">	*一般针对针对第三方应用</span></span>
<span class="line"><span style="color:#e1e4e8;">	https://oauth.b.com/token?grant_type=client_credentials&amp;client_id=CLIENT_ID&amp;client_secret=CLIENT_SECRET			颁发ACCESS_TOKEN	</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">curl -H &quot;Authorization: Bearer ACCESS_TOKEN&quot; &quot;https://api.b.com&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">授权码（authorization-code）</span></span>
<span class="line"><span style="color:#24292e;">	*客户端：a.com	认证服务器：b.com</span></span>
<span class="line"><span style="color:#24292e;">	https://b.com/oauth/authorize?response_type=code&amp;client_id=CLIENT_ID&amp;redirect_uri=CALLBACK_URL&amp;scope=read			https://a.com/callback?code=AUTHORIZATION_CODE</span></span>
<span class="line"><span style="color:#24292e;">	https://b.com/oauth/token?client_id=CLIENT_ID&amp;client_secret=CLIENT_SECRET&amp;grant_type=authorization_code&amp;code=AUTHORIZATION_CODE&amp;redirect_uri=CALLBACK_URL		颁发ACCESS_TOKEN</span></span>
<span class="line"><span style="color:#24292e;">隐藏式（implicit）</span></span>
<span class="line"><span style="color:#24292e;">	*纯前端</span></span>
<span class="line"><span style="color:#24292e;">	https://b.com/oauth/authorize?response_type=token&amp;client_id=CLIENT_ID&amp;redirect_uri=CALLBACK_URL&amp;scope=read	https://a.com/callback#token=ACCESS_TOKEN（前端)</span></span>
<span class="line"><span style="color:#24292e;">密码式（password）</span></span>
<span class="line"><span style="color:#24292e;">	*高度信任</span></span>
<span class="line"><span style="color:#24292e;">	https://oauth.b.com/token?grant_type=password&amp;username=USERNAME&amp;password=PASSWORD&amp;client_id=CLIENT_ID	颁发ACCESS_TOKEN</span></span>
<span class="line"><span style="color:#24292e;">客户端凭证（client credentials）</span></span>
<span class="line"><span style="color:#24292e;">	*一般针对针对第三方应用</span></span>
<span class="line"><span style="color:#24292e;">	https://oauth.b.com/token?grant_type=client_credentials&amp;client_id=CLIENT_ID&amp;client_secret=CLIENT_SECRET			颁发ACCESS_TOKEN	</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">curl -H &quot;Authorization: Bearer ACCESS_TOKEN&quot; &quot;https://api.b.com&quot;</span></span></code></pre></div>`,8),o=[l];function t(c,r,i,y,_,d){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{h as __pageData,u as default};
