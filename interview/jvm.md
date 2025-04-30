# jvm架构
	*除了程序计数器,都设置有OutOfMemoryError异常
	程序计数器
	    线程方法的指令地址或者null(Native 方法)
	虚拟机栈
	    栈帧，用于存储局部变量表、操作数栈、动态链接、方法出口等信息
	    存基本数据类型和对象的引用
	本地方法栈
	     HotSpot 虚拟机中和 Java 虚拟机栈合二为一
	堆
	    新生代  1
	        *好处: 高效的yound gc,减少full gc;减少内存碎片的产生;
	        eden    8
	        from survivor   1
	        to survivor 1
	    老年代  2
	        *大对象
	元空间
	    类信息、常量、静态变量
	运行时常量池
	    用于存放编译期生成的各种字面量和符号引用
	    运行期也可动态放入
	直接内存
	    堆外内存

# 关于new String("abc")
	    在堆中创建了一个"abc"的String对象，并将其引用保存到字符串常量池中，然后返回

# 引用
	    强引用
	    软引用  SoftReference    内存溢出前
	    弱引用  WeakReference   下一次GC
	    虚引用  PhantomReference(搭配ReferenceQueue使用)    下一次gc        可以用虚引用来管理堆外内存