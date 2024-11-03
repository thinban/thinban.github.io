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
