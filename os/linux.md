# 监控
https://github.com/aksakalli/gtop
    $ docker run --rm -it --name gtop --net="host" --pid="host" aksakalli/gtop
    $ ln -s ~/run_dockder_gtop.sh /usr/local/bin/gtop
        $ rm /usr/local/bin/gtop

# 加入环境变量
    vi ~/.bashrc
    export PATH=$PATH:/home/user/scripts
    source ~/.bashrc

# 替换更新源
	cat /etc/apt/sources.list
	apt update&&apt upgrade

# 修改hosts
    vi /etc/hosts

# 磁盘扩容
    fdisk -l #查看磁盘分区
    parted /dev/sda
        print
        resizepart 2 100%  #这里表示选中 /dev/sda2
        quit  # 再次执行fdisk -l，可以查看到分区大小已变化，End
    pvresize /dev/sda2 #更新物理卷的大小
    lvresize --extents +100%FREE --resizefs /dev/mapper/centos-root  # 更新逻辑卷的大小
    fdisk -l或者du -h查看已更新成功。

## 20241116_pve_ubuntu磁盘扩容实操
```
pve_ubuntu磁盘扩容
	pve添加磁盘空间
	查看当前磁盘空间
		lsblk
		df -h
		fdisk -l
	具体扩容操作见
		https://www.maocaoying.com/topic/1139

```

# 网络配置
	vi /etc/netplan/00-installer-config.yaml
		dhcp-identifier: mac # 加上这一行。

# 用户相关
    cat /etc/passwd
        root:x:0:0:root:/root:/bin/bash
            x是密码占位符: 密码见/etc/shadow
            0用户id
            0组id
            root是用户的描述信息
            /root用户主目录
            /bin/bash用户默认的shell
        
    sudo cat /etc/sudoers|grep -v "^#"
        root    ALL=(ALL:ALL) ALL
        %admin ALL=(ALL) ALL
        %sudo   ALL=(ALL:ALL) ALL
            %用户组
            ALL任何主机或终端执行sudo
            (ALL:ALL)表示组中的用户可以以任何用户身份（第一个ALL）和任何用户组身份（第二个ALL）来执行命令。
            ALL表示组中的用户可以执行所有命令

## 创建用户并加入组
    *sudo groupadd dev
    sudo useradd -g dev NEWUSER
    sudo passwd NEWUSER

## 系统权限
    sudo usermod -aG sudo NEWUSER
        *Debian 和 Ubuntu 
    sudo usermod -aG wheel NEWUSER
        *Red Hat 和 CentOS

# 目录说明
    */home	用户目录
    */usr	软件
        /local
        /share
        /bin
        ...
    */etc	配置
    */var 变化的内容
    /bin
    /sbin
    /boot	内核、引导
    /dev	设备
    /proc	内核和进程信息的接口
    /sys	内核交互接口，属性、状态、控制等。

# 查看系统
## lsb_release
    Usage: lsb_release [options]

    Options:
    -h, --help         show this help message and exit
    -v, --version      show LSB modules this system supports
    -i, --id           show distributor ID
    -d, --description  show description of this distribution
    -r, --release      show release number of this distribution
    -c, --codename     show code name of this distribution
    -a, --all          show all of the above information
    -s, --short        show requested information in short format

## uname
    Usage: uname [OPTION]...
    Print certain system information.  With no OPTION, same as -s.

    -a, --all                print all information, in the following order,
                                except omit -p and -i if unknown:
    -s, --kernel-name        print the kernel name
    -n, --nodename           print the network node hostname
    -r, --kernel-release     print the kernel release
    -v, --kernel-version     print the kernel version
    -m, --machine            print the machine hardware name
    -p, --processor          print the processor type (non-portable)
    -i, --hardware-platform  print the hardware platform (non-portable)
    -o, --operating-system   print the operating system
        --help     display this help and exit
        --version  output version information and exit
