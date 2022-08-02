## HashMap

本质: 数组+链表/红黑树。key/value可以为null。

```txt
Node<K,V>[] tab
    final int hash;
    final K key;
    V value;
    Node<K,V> next;
    
cap=tab.length
bincount=链表长度/树节点数
```

### putval

1. 初始化cap,threadhold(=0.75cap)
2. hash(key)计算，拿到头结点。
3. 尾插法。（链表大于8）(jdk1.8前采用头插法，可能导致循环？)
4. 链表大于8时，触发treeifyBin(tab, hash)操作。
5. 由于cap<64，会先double数组容量，直到cap>=64，才会真正进行树化。
6. 当树结点个数<=6时，会退化成链表。

### resize

1. cap,threadhold=16,12
2. size>threshold时两倍增长
3. bincount>8&&cap<64时，double扩容

### 其他

```txt
LinkedHashMap
    afterNodeAccess（eg.move to last）
    afterNodeInsert(eg.remove eldest)
```

## HashTable

扩容：(oldCapacity << 1) + 1

线程安全：public synchronized V put(K key, V value) {};

## ConcurrentHashMap

数据结构：同HashMap(1.8)

线程安全：乐观锁+Synchronized;哈希桶为空时，线程通过unsafe.compareAndSwapObject比较版本，如果一致则结束线程自旋；哈希桶有值时，则通过Synchronized来保证线程安全。

## ArrayList 和 CopyOnWriteArrayList

```text
ArrayList 
扩容（初始值10）： oldCapacity + (oldCapacity >> 1)

CopyOnWriteArrayList
线程安全： 使用ReentrantLock，写时复制一个新数组。
其他： 初始值0，无需扩容。
```

## 线程池

CPU密集型一般分配 CPU核数+1个线程，IO密集型的则一般分配2*CPU核数

### 类型

newCachedThreadPool (0，max,60,second,SynchronousQueue)
newFixedThreadPool （n,n,0,mill,LinkedBlockingQueue）
newScheduledThreadPool（n,max,0,nano,DelayedWorkQueue)
newSingleThreadExecutor（1,1,0,mill,LinkedBlockingQueue）

### 优点

- 线程复用
- 控制并发
- 线程管理
- 避免new thread导致的：缺乏管理、性能不佳
-

### ThreadPoolExecutor.java

原理：corePoolSize->queuefull->maximumPoolSize->handler

```txt
参数：
int corePoolSize,
int maximumPoolSize,
long keepAliveTime,
TimeUnit unit,
BlockingQueue<Runnable> workQueue,
ThreadFactory threadFactory,
RejectedExecutionHandler handler
    AbortPolicy
    DiscardPolicy
    DiscardOldestPolicy
    CallerRunsPolicy
```

## spring
```text
生命周期
    装配：BeanDefinitionMap[beanName]BeanDefinition
    自定义：BeanFactoryPostProcessor
    实例化：初始化
    填充资源：Aware
    自定义：BeanPostProcessor
    使用、销毁
scope
    Singleton：一个Spring容器中只有一个bean的实例，此为Spring的默认配置，全容器共享一个实例。
    Prototype：每次调用新建一个Bean的实例。
    Request：Web项目中，给每个http request新建一个Bean实例。
    Session：Web项目中，为每个http session新建一个Bean实例。
    GlobalSession：只在portal应用中有用，给每个global http session新建一个Bean实例。
aop
    
   
```

## springboot

优点

原理

启动
https://blog.csdn.net/zsh2050/article/details/124514882

## spring cloud
Eureka
Feign
Ribbon
Hystrix
GateWay

## CAS

CAS底层原理
各种实现：锁
sun.misc.Unsafe#compareAndSwapObject

## JVM

### 内存结构

### 调优


