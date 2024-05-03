import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.1eb6b028.js";const _=JSON.parse('{"title":"mq","description":"20240503_MQ","frontmatter":{"title":"mq","description":"20240503_MQ","date":"2024-05-03T00:00:00.000Z","tags":["mq"]},"headers":[],"relativePath":"posts/知识整理/20240503_mq.md","filePath":"posts/知识整理/20240503_mq.md"}'),p={name:"posts/知识整理/20240503_mq.md"},l=e(`<h1 id="docker-compose-kafka" tabindex="-1">docker-compose-kafka <a class="header-anchor" href="#docker-compose-kafka" aria-label="Permalink to &quot;docker-compose-kafka&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">version: &#39;2&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">services:</span></span>
<span class="line"><span style="color:#e1e4e8;">  zookeeper:</span></span>
<span class="line"><span style="color:#e1e4e8;">    container_name: zookeeper</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: wurstmeister/zookeeper</span></span>
<span class="line"><span style="color:#e1e4e8;">    volumes:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - ./zookeeper/data:/data</span></span>
<span class="line"><span style="color:#e1e4e8;">    ports: </span></span>
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
<span class="line"><span style="color:#24292e;">    ports: </span></span>
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
<span class="line"><span style="color:#24292e;">      - ./data:/var/lib/rabbitmq</span></span></code></pre></div>`,4),o=[l];function c(t,r,i,y,m,k){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{_ as __pageData,u as default};
