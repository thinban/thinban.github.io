## 简单动态字符串：Simple Dynamic String，SDS
- 存二进制数据。
- 没有char*的缺点：1. 被\0截断。
- 内置len和alloc,方便字符串操作。
- 紧凑型内存结构： 定义结构体时__attribute__ ((packed))修饰，告诉编译器采用内存紧凑方式分配内存，而不是字节对齐（比如8）。

### 数据结构
```text
len
alloc： 分配给字节数组的空间长度
flags: sdshdr5、sdshdr8、sdshdr16、sdshdr32、sdshdr64 （len和 alloc的变量类型不一样。）
buf[]： 字节数组
```

