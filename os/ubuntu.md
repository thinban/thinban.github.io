# 替换更新源
	cat /etc/apt/sources.list
	apt update&&apt upgrade

# 磁盘扩容
    fdisk -l #查看磁盘分区
    parted /dev/sda
        print
        resizepart 2 100%  #这里表示选中 /dev/sda2
        quit  # 再次执行fdisk -l，可以查看到分区大小已变化，End
    pvresize /dev/sda2 #更新物理卷的大小
    lvresize --extents +100%FREE --resizefs /dev/mapper/centos-root  # 更新逻辑卷的大小
    fdisk -l或者du -h查看已更新成功。

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
