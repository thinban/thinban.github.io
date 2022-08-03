## kafka

文档： https://kafka.apache.org/documentation.html

## features

- high scalability
- producers and consumers are fully decoupled and agnostic of each other
- better throughput
- built-in partitioning, replication, and fault-tolerance

## concept

### servers

- brokers:storage layer
- Other servers: Kafka Connect连接其他系统或者kafka cluster

### event/record/message

- key：分片
- value
- timestamp
- optional metadata headers

### topics

- per-topic configuration
- scalability：partitioned(replication factor=3）
- order
- data fault-tolerant、highly-available: replicated

### api

- admin-api
- producer-api
- consumer-api
- kafka-streams-api
  transformations, stateful operations like aggregations and joins, windowing, processing based on event-time
  topic-kafka-topic（Extract-Transform-Load）
- kafka-connect-api

## 优化

### 一、write-ahead log

使用文件系统和依赖页面缓存（kernel's pagecache）

- 紧凑型的字节结构设计
- 页面缓存时刻保温，而内存缓存需要预热
- 简化代码：缓存和文件系统一致

### 二、批量发送

问题一：too many small I/O operations

解决方式： "message set" abstraction，用来支持生产者批量发送，消费者批量拉取。批量消息带来好处：更大的网络包、更大连续磁盘操作、持续的内存块。

问题二、excessive byte copying

解决方式：standardized binary message format

### 三、使用 zero-copy

```
//FileChannel.java  (randomAccessFile.getChannel)
public void transferTo(long position, long count, WritableByteChannel target);

#include <sys/socket.h>
ssize_t sendfile(int out_fd, int in_fd, off_t *offset, size_t count);

```

传统io路径：->pagecache->user-space buffer->socket buffer->io like nic buffer(网络缓冲区)

```
File.read(fileDesc, buf, len);//前一步
Socket.send(socket, buf, len);//后一步,调用sendfile system call
```

## 学英语

xx is considered essentially equivalent to xxx： 本质上相当于

Intuitively 直观的

for a relatively long period (say a week): 相对较长的时间（比如一周）

amortize the overhead of the network roundtrip： 摊销网络往返的开销

orders of magnitude speed up. 数量级的速度提升



