---
title: RocketMQ
description: RocketMQ
date: 2023-12-14
tags:
  - 复习
---

# RocketMQ
https://github.com/apache/rocketmq

```text
Concept
	Message Model
	
	Producer
	    特性
            MQ的负载均衡模块选择broker进行投递
            支持快速失败
            低延迟
		网络连接
			producer-NameServer(1)--Master Brokers
	
		
	Consumer
		Pull Consumer
		Push Consumer
		网络连接
			producer-NameServer(1)--Master/Slaver Brokers		
		
	Topic
	
	Broker Server
		结构
			Remoting Module：client请求
			Client Manager: client/topic
			Store Service：消息存储和查询
			HA Service：数据同步Master/Slave
			Index Service: 索引 Message key --> 消息
		集群角色
			master(brokerId=0,BrokerName)
			slaver(brokerId=1参与消息的读负载，brokerId=其他)
			
	Name Server
		无状态节点、节点之间无任何信息同步,可集群部署
		Broker管理
		路由信息管理:每个实例都有完整的路由信息,因为broker会向每一台实例注册。
		
	Producer Group
	Consumer Group
	Clustering
	Broadcasting
	Normal Ordered Message
	Strictly Ordered Message
	Message
	Tag
	
features
	订阅与发布
	消息顺序
	消息过滤
	消息可靠性
	至少一次
	回溯消费
	事务消息
	定时消息
		SCHEDULE_TOPIC_XXXX,然后调度
		
	消息重试
	消息重投
	流量控制
		生产者流控
		消费者流控	
		
	死信队列
		最大重试次数后，投递到Dead-Letter-Queue

design
	消息存储
	通信机制
	消息过滤
	负载均衡
	事务消息
```