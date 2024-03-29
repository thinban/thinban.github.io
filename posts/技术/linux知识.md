---
title: Linux相关
description: 摘抄
date: 2023-12-14
tags:
  - 计算机科学
---

## linux启动过程
```
linux启动过程分析
（1）BIOS自检
（2）启动CRUB/LIL0
（3）运行linux内核并检查硬件
（4）运行系统的第一个进程init
（5）init读取系统引导配置文件/etc/inittab中的信息进行初始化
（6）/etc/rc.d/rd.sysinit系统初始化脚本
（7）/etc/rc.d/rcX.d/[KS]* 根据运行级别X配置服务
    终止以K开头的服务；启动以S开头的服务。
（8）/etc/rc.d/rc.local 执行本地特殊配置
（9）其它特殊服务
```

## linux命令
搜索命令： https://wangchujiang.com/linux-command/

代码仓库： https://github.com/jaywcjlove/linux-command

```
linux 硬链接、软连接
软链接：ln -s 源文件 目标文件  # 快捷方式

硬链接：ln 源文件 目标文件    # 本质上 cp -p（保留权限、属主、时间戳） 加同步更新

ls -i xxx   # 查看i节点，i节点是文件和目录的唯一标识。操作系统操作i节点，然后同步更新到映射的文件。


cat /proc/cpuinfo

cat /proc/meminfo |grep MemTotal

uname -a               # Linux VM-20-2-ubuntu 5.4.0-42-generic #46-Ubuntu SMP Fri Jul 10 00:24:02 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux

hostname               # VM-20-2-ubuntu

head -n 1 /etc/issue   # Ubuntu 20.04 LTS \n \l

lspci -tv              # 列出所有PCI设备
lsusb -tv              # 列出所有USB设备的linux系统信息命令
lsmod                  # 列出加载的内核模块

env                    # 查看环境变量资源，vim ~/.bashrc    source vim ~/.bashrc
free -m                # 查看内存使用量和交换区使用量
df -h                  # 查看各分区使用情况
du -sh                 # 查看指定目录的大小

uptime   # 查看系统运行时间、用户数、负载
cat /proc/loadavg      # 查看系统负载磁盘和分区

mount | column -t      # 查看挂接的分区状态
fdisk -l               # 查看所有分区
swapon -s              # 查看所有交换分区
hdparm -i /dev/hda     # 查看磁盘参数(仅适用于IDE设备)

dmesg | grep IDE       # 查看启动时IDE设备检测状况网络

ifconfig               # 查看所有网络接口的属性
iptables -L            # 查看防火墙设置
route -n               # 查看路由表
netstat -lntp          # 查看所有监听端口
netstat -antp          # 查看所有已经建立的连接
netstat -s             # 查看网络统计信息进程
ps -ef                 # 查看所有进程
top                    # 实时显示进程状态用户
w                      # 查看活动用户
id                     # 查看指定用户信息
last                   # 查看用户登录日志

4.文件
cut -d: -f1 /etc/passwd   # 查看系统所有用户
cut -d: -f1 /etc/group    # 查看系统所有组
crontab -l             # 查看当前用户的计划任务服务
chkconfig –list       # 列出所有系统服务
chkconfig –list | grep on    # 列出所有启动的系统服务程序
rpm -qa                # 查看所有安装的软件包
cat /proc/cpuinfo      #查看CPU相关参数的linux系统命令
cat /proc/partitions   #查看linux硬盘和分区信息的系统信息命令
cat /proc/meminfo      #查看linux系统内存信息的linux系统命令
cat /proc/version      #查看版本，类似uname -r
cat /proc/ioports      #查看设备io端口
cat /proc/interrupts   #查看中断
cat /proc/pci          #查看pci设备的信息
cat /proc/swaps        #查看所有swap分区的信息
find / -name xxx
find / -size +100000k
find / -amin|-atime +10 # +表示10分/小时前，-表示内
echo 233 >> abc.txt     # 内容追加

时间同步：
date -s 12/22/14    改日期
date -s 10:26:30    改时间
hwclock -w          保存修改结果

用户管理
useradd xxx
passwd xxx      # /etc/password
userdel xxx
userdel -r xxx  # 同时移除用户目录
groupadd  #  /etc/group
usermod -g 组名 用户名   # 改变用户的组

日历
cal 7 2022
cal 2022
cal -j         # day of year

```

## windows
dxdiag 诊断工具

devmgmt.msc 设备管理器