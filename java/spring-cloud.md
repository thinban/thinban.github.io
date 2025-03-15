# 流相关
```
springcloud stream
	*基于springcloud integration
	*提供一个抽象层，通过统一的编程接口发送和接收消息，隐藏底层消息中间件的细节。
	binder
	ouputs
	inputs
		
	配置
		spring.cloud.stream.binders
		spring.cloud.stream.bindings.output(总线出)
			binder
			@EnableBinding(Source.class)
		spring.cloud.stream.bindings.input（消费者入）
			@EnableBinding(Sink.class)
			binder
			group
	
springcloud integration
	*连接消息代理中间件以实现消息事件驱动
	*更复杂的集成场景：过滤、路由、聚合等
```
