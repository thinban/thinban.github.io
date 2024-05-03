---
title: 20240428_linux启动springcloudalibaba
description: 20240428_linux启动springcloudalibaba
date: 2024-04-28
tags:
  - 技术
---

# 命令
## 系统
uname -a
	*Linux spring-cloud-alibaba 5.15.0-101-generic #111-Ubuntu SMP Tue Mar 5 20:16:58 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux
	5.15.0-101-generic 内核版本
	#111-Ubuntu 表示这是Ubuntu操作系统的第111次编译
	SMP 代表“Symmetric Multi-Processing”，意味着这个内核版本支持多处理器系统。
	
## cpu
lscpu

## 内存
free -h
/proc/meminfo

## 磁盘
du -sh
	s = stat
lsblk	列出存储
fdisk -l

### pve增加磁盘容量
https://www.cnblogs.com/chuanghongmeng/p/16278040.html

具体分配步骤
    fdisk -l
        *此时磁盘未分配，查看对比
    parted /dev/sda
        *分配空间给分区 /dev/sda2
        print
        resizepart 2 100%
        quit
    pvresize /dev/sda2
        *更新物理卷的大小，当然这里前提是使用了LVM。
    lvresize --extents +100%FREE --resizefs /dev/mapper/centos-root
        *更新逻辑卷的大小
    完成

## 用户
w

# 配置网络
```
/etc/netplan/xxx.yaml
	//static
	network:
	  version: 2
	  renderer: networkd
	  ethernets:
		eth0:
		  dhcp4: no
		  addresses: [192.168.1.10/24]
		  gateway4: 192.168.1.1
		  nameservers:
			addresses: [8.8.8.8,8.8.4.4]
	//dhcp
	network:
	  ethernets:
		ens18:
		  dhcp4: true
		  dhcp-identifier: mac # 加上这一行。
	  version: 2
/etc/hosts
/etc/hostname

traceroute
lsof -i 列出打开的端口

netstat -tuln  显示网络服务和端口的状态。
lsof -i	列出所有打开的网络端口
	
```

# 查看安装的软件
## apt
```
dpkg --list | grep maven
dpkg -L maven
```

## 其他
```
whereis java
update-alternatives --config java
export JAVA_HOME=/path/to/java

echo "export JAVA_HOME=/path/to/java" >> ~/.bashrc
source ~/.bashrc

apt search openjdk

./mvnw clean package -DskipTests -s /etc/maven/settings.xml -pl "com.alibaba.cloud:integrated-storage,com.alibaba.cloud:integrated-common" --also-make
mvn package -DskipTests

```
# 好用的命令
```

20. **`top`** 或 **`htop`**：
    实时显示系统进程和资源使用情况。

21. **`vmstat`**：
    报告虚拟内存统计信息。

22. **`iostat`**：
    报告CPU和输入/输出统计信息。

23. **`mpstat`**：
    显示处理器相关的统计信息。

24. **`dfi`**：
    检查文件系统的状态。

25. **`lspci`** 或 **`lsusb``：
    列出PCI或USB总线上的设备。

26. **`dmesg`**：
    显示内核环缓冲区的消息，通常用于诊断硬件问题。

27. **`lsb_release -a`**：
    显示Linux发行版信息。

28. **`cat /proc/loadavg`**：
    显示系统负载。

29. **`ps aux`**：
    显示当前运行的进程。

30. **`kill PID`**：
    向指定的进程ID发送信号，通常用于结束进程。

31. **`systemctl`**：
    管理系统服务和服务的状态。

32. **`time <command>`**：
    测量命令执行所需的时间。

33. **`cal`** 或 **`ncal`**：
    显示日历信息。

34. **`date`**：
    显示或设置系统日期和时间。

35. **`find <directory> -name <filename>`**：
    在指定目录下搜索文件。

36. **`grep`**：
    搜索文本并打印出匹配的行。

```

