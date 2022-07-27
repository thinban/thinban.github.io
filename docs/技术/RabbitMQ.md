## rabbitmq
erlang(天生具备分布式,不需要通过引入ZK或者数据库来实现数据同步),Mnesia数据库

### 重要参数
```text
交换机
    durable
    autoDelete
    arguments
队列（运行时无法变更，只能重建）
    durable
    exclusive
    autoDelete
    arguments：队列的其他属性，例如x-message-ttl、x-expires、x-max-length、x-max-length-bytes、x-dead-letter-exchange、x-dead-letter-routing-key、x-max-priority。
        Message TTL : 消息生存期
        Auto expire : （x-expire）队列生存期，一般不用。
        Max length : 队列可以容纳的消息的最大条数，[会删除最先入队的消息]。
        Max length bytes : 队列可以容纳的消息的最大字节数，[超出直接丢弃]。
        Overflow behaviour : （x-overflow：drop-head|reject-publish）队列中的消息溢出后如何处理
        Dead letter exchange : 溢出的消息需要发送到绑定该死信交换机的队列
        Dead letter routing key : 溢出的消息需要发送到绑定该死信交换机,并且路由键匹配的队列
        Maximum priority : 最大优先级，取值范围[0,255]，设置后：[p,255]范围内的FIFO；[0,p]从大到小；其他的看做0，FIFO。
        Lazy mode : (x-queue-mode:lazy)懒人模式，消息尽可能多的保存在磁盘，减少内存占用。
        Master locator : 官方 Set the queue into master location mode, determining the rule by which the queue master is located when declared on a cluster of nodes.(Sets the "x-queue-master-locator" argument.) 
消息
    消息优先级: AMQP.BasicProperties.Builder().priority(5)//只有消息堆积（消息的发送速度大于消费者的消费速度）的情况下优先级才有意义。
    
```
### 可靠性投递与高可用架构
```
投递可靠性
  confirmCallback 确认模式
    CachingConnectionFactory factory = new CachingConnectionFactory();factory.setPublisherConfirms(true);//开启confirm模式
    broker 接收到就会执行 confirmCallback，如果是 cluster 模式，需要所有 broker 接收到才会调用 confirmCallback。
  returnCallback 未投递到queue退回模式
    CachingConnectionFactory factory = new CachingConnectionFactory();factory.setPublisherReturns(true);//开启return模式rabbitTemplate.setMandatory(true);//开启强制委托模式
    未能投递到目标 queue 里将调用 returnCallback
  shovel-plugin 跨机房可靠投递（不展开）
```

#### P to X
原因：网络、Broker的问题导致消息发送失败，生产者不能确定 Broker 有没有正确的接收。
```text
事务模式 ：channel.txSelect(),channel.txCommit()|channel.txRollback(),阻塞
确认模式:  
    普通确认：channel.confirmSelect(),<-Basic.Ack（channel.waitForConfirms()=true）
    批量确认：channel.waitForConfirmsOrDie()
    异步确认：rabbitTemplate.setConfirmCallback
```

#### X TO Q
原因：路由键错误,队列不存在
##### 策略一:消息回发生产者
```java
rabbitTemplate.setMandatory(true);
rabbitTemplate.setReturnCallback();
```

##### 策略2：指定交换机的备份交换机
```java
channel.exchangeDeclare("TEST_EXCHANGE","topic", false, false, false, "alternate-exchange","ALTERNATE_EXCHANGE");
```

#### Q
原因：未持久化
```java
// queueName, durable, exclusive, autoDelete, Properties
new Queue("GP_TEST_QUEUE", true, false, false, new HashMap<>());

// exchangeName, durable, exclusive, autoDelete, Properties
new DirectExchange("GP_TEST_EXCHANGE", true, false, new HashMap<>());

//MessageProperties
messageProperties.setDeliveryMode(MessageDeliveryMode.PERSISTENT);
new Message("持久化消息".getBytes(), messageProperties);
```
#### Q TO CLIENT

```java
spring.rabbitmq.listener.simple.acknowledge-mode=manual
spring.rabbitmq.listener.direct.acknowledge-mode=manua
        NONE：自动 ACK
        MANUAL：手动 ACK
        AUTO：如果方法未抛出异常，则发送 ack。
或
//SimpleRabbitListenerContainer 或者SimpleRabbitListenerContainerFactory
factory.setAcknowledgeMode(AcknowledgeMode.MANUAL)

```

### 工作模式
```text
PQC(简单模式)
PQCC(工作模式,消费者组内相互竞争)
PXQC(发布订阅,FanoutExchange)
PXQC(路由,DirectExchange,BindingBuilder.bind(queue).to(ex).with(key))
PXQC(路由,TopicExchange ,BindingBuilder.bind(topicQueue1).to(topic).with("#.orange.*"),*1)
```

### 死信
使用： 声明队列时，指定一个 x-dead-letter-exchange
```java
## 成为死信（dead letter）
- (NACK || Reject ) && requeue == false
- 消息过期（消息或者队列的TTL设置）
- 消息堆积

```
### 其他用法
RPC: C Q S Q2 C
服务端流控： rabbitmq.config修改内存阈值（0.4）和磁盘阈值(1g)，会阻塞生产者。
延迟队列： Msg(TTL) in Q(with x-dead-letter-exchange) DLX Q

### 集群
普通集群模式：主备架构，slave复制master状态和数据，不包括队列数据，负责转发master的队列给客户端。
镜像集群: 基于普通集群模式，开启队列镜像。

RabbitMQ 集群本身并没有提供负载均衡的功能，可选用HAProxy负载均衡，同时通过KeepAlived解决HAProxy单点故障问题。

KeepAlived 采用 VRRP (Virtual Router Redundancy Protocol，虚拟路由冗余协议) 来解决单点失效的问题

