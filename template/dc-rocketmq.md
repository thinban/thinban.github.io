注意：下面配置中没有volumn相关配置，存储的配置和消息会随容器重建而消息。

```yml
version: '3.8'
services:
  namesrv:
    image: apache/rocketmq:5.3.1
    container_name: rmqnamesrv
    ports:
      - 9876:9876
    networks:
      - rocketmq
    command: sh mqnamesrv
  broker:
    image: apache/rocketmq:5.3.1
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
    image: apache/rocketmq:5.3.1
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
  # （可选）监控用的
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
networks:
  rocketmq:
    driver: bridge
```