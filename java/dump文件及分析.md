# dump文件及分析
`摘自 https://goodapple.top/archives/114`
dump文件是一种快照，包含运行时信息。
## 线程堆栈文件thread dump
```
jps
    或ps –ef|grep java
jstack PID > threaddump.txt
    搜索deadlock
    nid: 系统线程id
    tid: JVM线程id
    线程状态
        deadlock
        runnable
        blocked
        waiting on condition
        waiting for monitor entry或in Object.wait()
            synchronized 升级到重量级锁
                竞争锁失败的线程 => Moniter的entry set中，这时线程状态是waiting for monitor entry
                
                竞争到锁的线程若调用锁对象的wait方法 => Monitor.wait set中，这时线程状态是 in Object.wait()。
```
## 堆栈文转储件heap dump
```
jps
    或ps –ef|grep java
 
jmap -dump:format=b,file=heapdump.bin PID
    https://visualvm.github.io/
    https://blog.csdn.net/fm18771120556/article/details/130298059
```
