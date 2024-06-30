# RocketMQ
- https://rocketmq.apache.org/zh/docs/quickStart/01quickstart  #官方文档
- https://github.com/apache/rocketmq-spring.git #官方demo

## 官方docker-compose.yml
```
version: '3.8'
services:
  namesrv:
    image: apache/rocketmq:5.2.0
    container_name: rmqnamesrv
    ports:
      - 9876:9876
    networks:
      - rocketmq
    command: sh mqnamesrv
  broker:
    image: apache/rocketmq:5.2.0
    container_name: rmqbroker
    ports:
      - 10909:10909
      - 10911:10911
      - 10912:10912
    environment:
      - NAMESRV_ADDR=rmqnamesrv:9876
    depends_on:
      - namesrv
    networks:
      - rocketmq
    command: sh mqbroker
  proxy:
    image: apache/rocketmq:5.2.0
    container_name: rmqproxy
    networks:
      - rocketmq
    depends_on:
      - broker
      - namesrv
    ports:
      - 8080:8080
      - 8081:8081
    restart: on-failure
    environment:
      - NAMESRV_ADDR=rmqnamesrv:9876
    command: sh mqproxy

```

## 自定义docker-compose.yml
- 增加了自己docker打包的rocketmq-dashboard
- volumn: logs,store
```
version: '3.8'
services:
  namesrv:
    image: apache/rocketmq:5.2.0
    container_name: rmqnamesrv
    ports:
      - 9876:9876
    networks:
      - rocketmq
    command: sh mqnamesrv
  broker:
    image: apache/rocketmq:5.2.0
    container_name: rmqbroker
    ports:
      - 10909:10909
      - 10911:10911
      - 10912:10912
    environment:
      - NAMESRV_ADDR=rmqnamesrv:9876
    depends_on:
      - namesrv
    networks:
      - rocketmq
    command: sh mqbroker
  proxy:
    image: apache/rocketmq:5.2.0
    container_name: rmqproxy
    networks:
      - rocketmq
    depends_on:
      - broker
      - namesrv
    ports:
      - 8080:8080
      - 8081:8081
    restart: on-failure
    environment:
      - NAMESRV_ADDR=rmqnamesrv:9876
    command: sh mqproxy
  rocketmq-dashboard:
    image: apacherocketmq/rocketmq-dashboard:latest
    container_name: rocketmq-dashboard
    environment:
      #- JAVA_OPTS="-Drocketmq.namesrv.addr=namesrv:9876"
      - rocketmq.config.namesrvAddr=namesrv:9876
    ports:
      - "8090:8080"
    depends_on:
      - namesrv
    networks:
      - rocketmq
```

### 构建 rocketmq-dashboard Docker 镜像
ps: 如果 docker pull apacherocketmq/rocketmq-dashboard:latest  失败，可以考虑下面自己构建Docker镜像的步骤。

- `https://rocketmq.apache.org/zh/docs/4.x/deployment/03Dashboard/`
- 拉取项目 `https://github.com/apache/rocketmq-dashboard.git`，注释掉 `rocketmq.config.namesrvAddrs`，使用环境变量设置。
- 打包编译并上传服务器
- 上传项目内Dockerfile（这里因为网络问题，换了jdk）
```Dockerfile
FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD rocketmq-dashboard-*.jar rocketmq-dashboard.jar
RUN sh -c 'touch /rocketmq-dashboard.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -jar /rocketmq-dashboard.jar" ]
```
- docker build -t  apacherocketmq/rocketmq-dashboard:latest .

## 运维操作
### 创建topic
```
# 创建topic
docker exec -it rmqbroker bash
	*UNSPECIFIED, TRANSACTION, FIFO, MIXED, DELAY, NORMAL
	sh mqadmin updatetopic -t normalTopic -c DefaultCluster -a +message.type=NORMAL
	sh mqadmin updatetopic -t fifoTopic -c DefaultCluster -a +message.type=FIFO -o true
	sh mqadmin updatetopic -t transTopic -c DefaultCluster -a +message.type=TRANSACTION
	sh mqadmin updatetopic -t delayTopic -c DefaultCluster -a +message.type=DELAY -r 3
	
-r 1: 表示创建一个支持消息回溯的主题（Retrying Queue Topic）。这种类型的主题用于支持消费失败后消息的重试。
-r 2: 表示创建一个支持事务消息的主题（Transactional Topic）。事务消息用于在分布式系统中实现分布式事务。
-r 3: 表示创建一个支持定时消息的主题（Timing Topic）。定时消息允许设置消息发送的延迟时间。
...todo
```

### 批量替换文件内容
```
sed -i "s/localhost/lab.io/g" `grep lab.io -rl .`
```