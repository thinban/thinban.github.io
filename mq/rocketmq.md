# RocketMQ
- https://rocketmq.apache.org/zh/docs/quickStart/01quickstart  #官方文档
- https://github.com/apache/rocketmq-spring.git #官方demo

## 概念
- topic,key（精准查询）,tag（消费过滤）
- SimpleConsumer主动拉取消息
- MessageListener
## 消息类型
    普通消息
      sh mqadmin updatetopic -t TestTopic -c DefaultCluster
        -a +message.type=NORMAL （默认值，可选）

    定时/延时消息
      *定时消息仅支持在 MessageType为Delay 的主题内使用
      *定时消息为秒级精度
      创建主题
        /bin/mqadmin updateTopic -c DefaultCluster -t DelayTopic -n 127.0.0.1:9876 -a +message.type=DELAY
      java
        messageBuilder.setDeliveryTimestamp(deliverTimeStamp)
      
    顺序消息
      *场景：先到先得、状态依赖等
      *顺序消息仅支持使用MessageType为FIFO的主题
      *如何保障有序？
        1. 单一生产者串行发送 
        2. rockatmq将同一消息组（MessageGroup）按需存储和投递。 
        3.消费方有序消费、有限重试（否则阻塞后续消息）
      创建主题
        ./bin/mqadmin updateTopic -c DefaultCluster -t FIFOTopic -o true -n 127.0.0.1:9876 -a +message.type=FIFO
      创建FIFO订阅消费组
        ./bin/mqadmin updateSubGroup -c DefaultCluster -g FIFOGroup -n 127.0.0.1:9876 -o true
      java
        messageBuilder.setMessageGroup("fifoGroup001")
        
    事务消息
      *支持二阶段的提交能力
      *事务消息仅支持使用MessageType为TRANSACTION的主题
      创建主题
        ./bin/mqadmin updatetopic -n localhost:9876 -t TestTopic -c DefaultCluster -a +message.type=TRANSACTION
      java
        producer.setTransactionChecker();//事务消息需要生产者构建一个事务检查器，用于检查确认异常半事务的中间状态。
        transaction = producer.beginTransaction();//开启事务
        producer.send(message, transaction);//发送事务消息
        执行本地事务
        localTransactionOk?transaction.commit():transaction.rollback();//提交或回滚