# redis
    为什么快?
        内存计算
        单线程模型
        io多路复用机制

    哪些地方使用了多线程?
        网络io v6.0
            *v6.0之前是单Reactor单线程模型
            //Redis.conf,默认只开启写响应多线程,可通过下面配置开启读请求多线程处理.
            io-threads-do-reads yes
            io-threads 4 # 推荐n-1

        执行命令
        关闭文件 v2.6 bio_close_file
        aof刷盘 v2.6 bio_aof_fsync
        释放内存 v4.0 bio_lazy_free
            lazyfree线程: 处理 unlink key / flushdb async / flushall async 等命令任务
        
    redis事务
        单行命令执行是原子性的
        多行命令可通过lua脚本
        MULTI - 命令a - 命令b... - EXEC
            Redis 事务正常执行，可以保证原子性；
            Redis 事务执行中某一个操作执行失败，不保证原子性；
    
    持久化
        AOF日志
            appendfsync 配置项
                *可用redis-check-aof工具来修复损坏的文件
                Always
                Everysec
                No
        RDB快照
            *二进制,体积小,易恢复,但可能缺数据.
            save
                # 表示在 900 秒内如果至少有 1 个 key 发生变化，就触发一次 RDB 快照
                save 900 1
                # 表示在 300 秒内如果至少有 10 个 key 发生变化，就触发一次 RDB 快照
                save 300 10
                # 表示在 60 秒内如果至少有 10000 个 key 发生变化，就触发一次 RDB 快照
                save 60 10000
            bgsave

    过期键删除策略
        惰性删除
            访问和修改之前,expireIfNeeded函数检查是否过期
        定期删除
            每隔一段时间随机抽取key检查
                从过期字典中随机抽取20个key,删除已过期.
                若已过期占比超25%(5个)且执行时间不超过25ms,就继续抽取20个,继续上述步骤.
            //默认10次过期检查一次数据库
            hz 10

    内存淘汰策略
        不数据淘汰
            noeviction v3.0默认 禁止写入
        数据淘汰
            * volatile表示筛选设置了过期时间的键
            volatile-random
            volatile-ttl
            volatile-lru v3.0之前默认
            volatile-lfu v4.0
            allkeys-random
            allkeys-lru
            allkeys-lfu v4.0

    估算
        * 4c8g,qps
        redis 10w
        mysql 5000∂