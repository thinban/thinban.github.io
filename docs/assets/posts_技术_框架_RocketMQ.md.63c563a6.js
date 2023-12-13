import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.7705da0e.js";const m=JSON.parse('{"title":"RocketMQ","description":"RocketMQ","frontmatter":{"title":"RocketMQ","description":"RocketMQ","date":"2023-12-14T00:00:00.000Z","tags":["复习"]},"headers":[],"relativePath":"posts/技术/框架/RocketMQ.md","filePath":"posts/技术/框架/RocketMQ.md"}'),l={name:"posts/技术/框架/RocketMQ.md"},p=e(`<h1 id="rocketmq" tabindex="-1">RocketMQ <a class="header-anchor" href="#rocketmq" aria-label="Permalink to &quot;RocketMQ&quot;">​</a></h1><p><a href="https://github.com/apache/rocketmq" target="_blank" rel="noreferrer">https://github.com/apache/rocketmq</a></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Concept</span></span>
<span class="line"><span style="color:#e1e4e8;">	Message Model</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	Producer</span></span>
<span class="line"><span style="color:#e1e4e8;">	    特性</span></span>
<span class="line"><span style="color:#e1e4e8;">            MQ的负载均衡模块选择broker进行投递</span></span>
<span class="line"><span style="color:#e1e4e8;">            支持快速失败</span></span>
<span class="line"><span style="color:#e1e4e8;">            低延迟</span></span>
<span class="line"><span style="color:#e1e4e8;">		网络连接</span></span>
<span class="line"><span style="color:#e1e4e8;">			producer-NameServer(1)--Master Brokers</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">	Consumer</span></span>
<span class="line"><span style="color:#e1e4e8;">		Pull Consumer</span></span>
<span class="line"><span style="color:#e1e4e8;">		Push Consumer</span></span>
<span class="line"><span style="color:#e1e4e8;">		网络连接</span></span>
<span class="line"><span style="color:#e1e4e8;">			producer-NameServer(1)--Master/Slaver Brokers		</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">	Topic</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	Broker Server</span></span>
<span class="line"><span style="color:#e1e4e8;">		结构</span></span>
<span class="line"><span style="color:#e1e4e8;">			Remoting Module：client请求</span></span>
<span class="line"><span style="color:#e1e4e8;">			Client Manager: client/topic</span></span>
<span class="line"><span style="color:#e1e4e8;">			Store Service：消息存储和查询</span></span>
<span class="line"><span style="color:#e1e4e8;">			HA Service：数据同步Master/Slave</span></span>
<span class="line"><span style="color:#e1e4e8;">			Index Service: 索引 Message key --&gt; 消息</span></span>
<span class="line"><span style="color:#e1e4e8;">		集群角色</span></span>
<span class="line"><span style="color:#e1e4e8;">			master(brokerId=0,BrokerName)</span></span>
<span class="line"><span style="color:#e1e4e8;">			slaver(brokerId=1参与消息的读负载，brokerId=其他)</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">	Name Server</span></span>
<span class="line"><span style="color:#e1e4e8;">		无状态节点、节点之间无任何信息同步,可集群部署</span></span>
<span class="line"><span style="color:#e1e4e8;">		Broker管理</span></span>
<span class="line"><span style="color:#e1e4e8;">		路由信息管理:每个实例都有完整的路由信息,因为broker会向每一台实例注册。</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">	Producer Group</span></span>
<span class="line"><span style="color:#e1e4e8;">	Consumer Group</span></span>
<span class="line"><span style="color:#e1e4e8;">	Clustering</span></span>
<span class="line"><span style="color:#e1e4e8;">	Broadcasting</span></span>
<span class="line"><span style="color:#e1e4e8;">	Normal Ordered Message</span></span>
<span class="line"><span style="color:#e1e4e8;">	Strictly Ordered Message</span></span>
<span class="line"><span style="color:#e1e4e8;">	Message</span></span>
<span class="line"><span style="color:#e1e4e8;">	Tag</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">features</span></span>
<span class="line"><span style="color:#e1e4e8;">	订阅与发布</span></span>
<span class="line"><span style="color:#e1e4e8;">	消息顺序</span></span>
<span class="line"><span style="color:#e1e4e8;">	消息过滤</span></span>
<span class="line"><span style="color:#e1e4e8;">	消息可靠性</span></span>
<span class="line"><span style="color:#e1e4e8;">	至少一次</span></span>
<span class="line"><span style="color:#e1e4e8;">	回溯消费</span></span>
<span class="line"><span style="color:#e1e4e8;">	事务消息</span></span>
<span class="line"><span style="color:#e1e4e8;">	定时消息</span></span>
<span class="line"><span style="color:#e1e4e8;">		SCHEDULE_TOPIC_XXXX,然后调度</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">	消息重试</span></span>
<span class="line"><span style="color:#e1e4e8;">	消息重投</span></span>
<span class="line"><span style="color:#e1e4e8;">	流量控制</span></span>
<span class="line"><span style="color:#e1e4e8;">		生产者流控</span></span>
<span class="line"><span style="color:#e1e4e8;">		消费者流控	</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">	死信队列</span></span>
<span class="line"><span style="color:#e1e4e8;">		最大重试次数后，投递到Dead-Letter-Queue</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">design</span></span>
<span class="line"><span style="color:#e1e4e8;">	消息存储</span></span>
<span class="line"><span style="color:#e1e4e8;">	通信机制</span></span>
<span class="line"><span style="color:#e1e4e8;">	消息过滤</span></span>
<span class="line"><span style="color:#e1e4e8;">	负载均衡</span></span>
<span class="line"><span style="color:#e1e4e8;">	事务消息</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Concept</span></span>
<span class="line"><span style="color:#24292e;">	Message Model</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	Producer</span></span>
<span class="line"><span style="color:#24292e;">	    特性</span></span>
<span class="line"><span style="color:#24292e;">            MQ的负载均衡模块选择broker进行投递</span></span>
<span class="line"><span style="color:#24292e;">            支持快速失败</span></span>
<span class="line"><span style="color:#24292e;">            低延迟</span></span>
<span class="line"><span style="color:#24292e;">		网络连接</span></span>
<span class="line"><span style="color:#24292e;">			producer-NameServer(1)--Master Brokers</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">	Consumer</span></span>
<span class="line"><span style="color:#24292e;">		Pull Consumer</span></span>
<span class="line"><span style="color:#24292e;">		Push Consumer</span></span>
<span class="line"><span style="color:#24292e;">		网络连接</span></span>
<span class="line"><span style="color:#24292e;">			producer-NameServer(1)--Master/Slaver Brokers		</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">	Topic</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	Broker Server</span></span>
<span class="line"><span style="color:#24292e;">		结构</span></span>
<span class="line"><span style="color:#24292e;">			Remoting Module：client请求</span></span>
<span class="line"><span style="color:#24292e;">			Client Manager: client/topic</span></span>
<span class="line"><span style="color:#24292e;">			Store Service：消息存储和查询</span></span>
<span class="line"><span style="color:#24292e;">			HA Service：数据同步Master/Slave</span></span>
<span class="line"><span style="color:#24292e;">			Index Service: 索引 Message key --&gt; 消息</span></span>
<span class="line"><span style="color:#24292e;">		集群角色</span></span>
<span class="line"><span style="color:#24292e;">			master(brokerId=0,BrokerName)</span></span>
<span class="line"><span style="color:#24292e;">			slaver(brokerId=1参与消息的读负载，brokerId=其他)</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">	Name Server</span></span>
<span class="line"><span style="color:#24292e;">		无状态节点、节点之间无任何信息同步,可集群部署</span></span>
<span class="line"><span style="color:#24292e;">		Broker管理</span></span>
<span class="line"><span style="color:#24292e;">		路由信息管理:每个实例都有完整的路由信息,因为broker会向每一台实例注册。</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">	Producer Group</span></span>
<span class="line"><span style="color:#24292e;">	Consumer Group</span></span>
<span class="line"><span style="color:#24292e;">	Clustering</span></span>
<span class="line"><span style="color:#24292e;">	Broadcasting</span></span>
<span class="line"><span style="color:#24292e;">	Normal Ordered Message</span></span>
<span class="line"><span style="color:#24292e;">	Strictly Ordered Message</span></span>
<span class="line"><span style="color:#24292e;">	Message</span></span>
<span class="line"><span style="color:#24292e;">	Tag</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">features</span></span>
<span class="line"><span style="color:#24292e;">	订阅与发布</span></span>
<span class="line"><span style="color:#24292e;">	消息顺序</span></span>
<span class="line"><span style="color:#24292e;">	消息过滤</span></span>
<span class="line"><span style="color:#24292e;">	消息可靠性</span></span>
<span class="line"><span style="color:#24292e;">	至少一次</span></span>
<span class="line"><span style="color:#24292e;">	回溯消费</span></span>
<span class="line"><span style="color:#24292e;">	事务消息</span></span>
<span class="line"><span style="color:#24292e;">	定时消息</span></span>
<span class="line"><span style="color:#24292e;">		SCHEDULE_TOPIC_XXXX,然后调度</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">	消息重试</span></span>
<span class="line"><span style="color:#24292e;">	消息重投</span></span>
<span class="line"><span style="color:#24292e;">	流量控制</span></span>
<span class="line"><span style="color:#24292e;">		生产者流控</span></span>
<span class="line"><span style="color:#24292e;">		消费者流控	</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">	死信队列</span></span>
<span class="line"><span style="color:#24292e;">		最大重试次数后，投递到Dead-Letter-Queue</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">design</span></span>
<span class="line"><span style="color:#24292e;">	消息存储</span></span>
<span class="line"><span style="color:#24292e;">	通信机制</span></span>
<span class="line"><span style="color:#24292e;">	消息过滤</span></span>
<span class="line"><span style="color:#24292e;">	负载均衡</span></span>
<span class="line"><span style="color:#24292e;">	事务消息</span></span></code></pre></div>`,3),t=[p];function o(c,r,i,y,d,u){return n(),a("div",null,t)}const g=s(l,[["render",o]]);export{m as __pageData,g as default};
