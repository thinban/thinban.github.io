# dubbo
- https://cn.dubbo.apache.org/zh-cn/overview/tasks/develop/template/
- https://github.com/apache/dubbo-admin/releases  dubbo-admin

## 实践
- dubbo3 + springboot3 + Nacos + protobuf 实现生产者
- - https://cn.dubbo.apache.org/zh-cn/overview/tasks/develop/idl/
- go + gRPC实现消费者
- dubbo-admin针对以上服务进行检测
- 流量管控
- 限流降级
- HTTP网关
- - https://cn.dubbo.apache.org/zh-cn/overview/tasks/ecosystem/gateway/
- 配置中心
- - https://cn.dubbo.apache.org/zh-cn/overview/mannual/java-sdk/reference-manual/config-center/
- k8s部署

## 概念
```
RPC
    Remote procedure call
RPC协议
    内容
    格式
    控制数据
        序列化方式
        超时时间
        压缩方式
        鉴权信息
    Dubbo2
    http/1.1
        head-of-line问题
        性能差
        无直接server push支持
    gRPC
        http2
            server push
            多路复用
            流量控制
        protobuf
            +跨平台二进制
            +k8s/etcd天然支持协议，云原生的事实协议标准
            -对服务治理的支持比较基础  (服务治理？？)
            -强绑定protobuf的序列化方式，较高的学习和改造成本
    thrift
        facebook
    Triple(Dubbo3)
        +兼容gRPC
        +metadata和payload分离，避免中间设备对payload进行解析和反序列化（分离就不反序列化了？）
        +支持自定义header
        +支持mTLS
        +除了支持protobuf方式，还支持Hessian/json等其他序列化
        +易用，一行配置搞定。
        +Streaming RPC,长连接,TCP上支持多个Stream
服务治理控制面
    注册中心
    流量管控策略
    Dubbo Admin 控制台
        https://github.com/apache/dubbo-admin/releases
    如果采用了 Service Mesh 架构则还包含 Istio 等服务网格控制面
Dubbo 数据面
服务治理(在微服务集群环境下)
    无状态服务节点动态变化
    外部化配置
    日志跟踪
    可观测性
    流量管理
    高可用性
    数据一致性
    ...
微服务架构
    Service Mesh
        Istio是其开源代表实现
    spring cloud
        +更易上手
        +spring更多的原生支持
        +服务发现、动态配置、异步消息、批处理任务、定时任务、持久化数据。。。
        -只提供抽象模式的定义不提供官方稳定实现
        -欠缺服务治理能力,流量管控方面如负载均衡、流量路由方面能力都比较弱
        -HTTP
        -很多微服务实践场景的问题需要用户独自解决，比如
            优雅停机、启动预热、服务测试，再比如双注册、双订阅、延迟注册、服务按分组隔离、集群容错

开发
    接口+分组+版本号才能唯一确定一个服务。
    RpcContext
        ServiceContext
            在 Dubbo 内部使用，用于传递调用链路上的参数信息，如 invoker 对象等
        ClientAttachment
            Client 端，ClientAttachment将传递到server端
        ServerAttachment
            Server 端,ServerAttachment读取client传的参数
                RpcContext.getServerContext().setAttachment("serverKey","serverValue");
        ServerContext
            Server 端回传 Client 端使用
                    Map<String, Object> clientAttachment = RpcContext.getServerContext().getObjectAttachments();

```