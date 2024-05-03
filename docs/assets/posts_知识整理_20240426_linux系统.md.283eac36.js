import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.1eb6b028.js";const l="/assets/image-4.66a28fee.png",p="/assets/image-5.22f5ea67.png",o="/assets/image-6.b4eb5ff1.png",x=JSON.parse('{"title":"linux系统","description":"20240426_linux系统","frontmatter":{"title":"linux系统","description":"20240426_linux系统","date":"2024-04-26T00:00:00.000Z","tags":["linux系统","快捷复制"]},"headers":[],"relativePath":"posts/知识整理/20240426_linux系统.md","filePath":"posts/知识整理/20240426_linux系统.md"}'),c={name:"posts/知识整理/20240426_linux系统.md"},t=e(`<h1 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h1><ul><li>搜索命令： <a href="https://wangchujiang.com/linux-command/" target="_blank" rel="noreferrer">https://wangchujiang.com/linux-command/</a></li></ul><h2 id="用户相关" tabindex="-1">用户相关 <a class="header-anchor" href="#用户相关" aria-label="Permalink to &quot;用户相关&quot;">​</a></h2><p>w</p><h2 id="软件" tabindex="-1">软件 <a class="header-anchor" href="#软件" aria-label="Permalink to &quot;软件&quot;">​</a></h2><h3 id="apt" tabindex="-1">apt <a class="header-anchor" href="#apt" aria-label="Permalink to &quot;apt&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">dpkg --list | grep maven</span></span>
<span class="line"><span style="color:#e1e4e8;">dpkg -L maven</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">dpkg --list | grep maven</span></span>
<span class="line"><span style="color:#24292e;">dpkg -L maven</span></span></code></pre></div><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">whereis java</span></span>
<span class="line"><span style="color:#e1e4e8;">update-alternatives --config java</span></span>
<span class="line"><span style="color:#e1e4e8;">export JAVA_HOME=/path/to/java</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;export JAVA_HOME=/path/to/java&quot; &gt;&gt; ~/.bashrc</span></span>
<span class="line"><span style="color:#e1e4e8;">source ~/.bashrc</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">apt search openjdk</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">./mvnw clean package -DskipTests -s /etc/maven/settings.xml -pl &quot;com.alibaba.cloud:integrated-storage,com.alibaba.cloud:integrated-common&quot; --also-make</span></span>
<span class="line"><span style="color:#e1e4e8;">mvn package -DskipTests</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">whereis java</span></span>
<span class="line"><span style="color:#24292e;">update-alternatives --config java</span></span>
<span class="line"><span style="color:#24292e;">export JAVA_HOME=/path/to/java</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">echo &quot;export JAVA_HOME=/path/to/java&quot; &gt;&gt; ~/.bashrc</span></span>
<span class="line"><span style="color:#24292e;">source ~/.bashrc</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">apt search openjdk</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">./mvnw clean package -DskipTests -s /etc/maven/settings.xml -pl &quot;com.alibaba.cloud:integrated-storage,com.alibaba.cloud:integrated-common&quot; --also-make</span></span>
<span class="line"><span style="color:#24292e;">mvn package -DskipTests</span></span></code></pre></div><h2 id="系统架构-内核" tabindex="-1">系统架构&amp;内核 <a class="header-anchor" href="#系统架构-内核" aria-label="Permalink to &quot;系统架构&amp;内核&quot;">​</a></h2><p>uname -a *Linux spring-cloud-alibaba 5.15.0-101-generic #111-Ubuntu SMP Tue Mar 5 20:16:58 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux 5.15.0-101-generic 内核版本 #111-Ubuntu 表示这是Ubuntu操作系统的第111次编译 SMP 代表“Symmetric Multi-Processing”，意味着这个内核版本支持多处理器系统。</p><h2 id="cpu" tabindex="-1">CPU <a class="header-anchor" href="#cpu" aria-label="Permalink to &quot;CPU&quot;">​</a></h2><p>lscpu</p><h2 id="内存" tabindex="-1">内存 <a class="header-anchor" href="#内存" aria-label="Permalink to &quot;内存&quot;">​</a></h2><p>free -h /proc/meminfo</p><h2 id="配置网络和查看网络" tabindex="-1">配置网络和查看网络 <a class="header-anchor" href="#配置网络和查看网络" aria-label="Permalink to &quot;配置网络和查看网络&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/etc/netplan/xxx.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">	//static</span></span>
<span class="line"><span style="color:#e1e4e8;">	network:</span></span>
<span class="line"><span style="color:#e1e4e8;">	  version: 2</span></span>
<span class="line"><span style="color:#e1e4e8;">	  renderer: networkd</span></span>
<span class="line"><span style="color:#e1e4e8;">	  ethernets:</span></span>
<span class="line"><span style="color:#e1e4e8;">		eth0:</span></span>
<span class="line"><span style="color:#e1e4e8;">		  dhcp4: no</span></span>
<span class="line"><span style="color:#e1e4e8;">		  addresses: [192.168.1.10/24]</span></span>
<span class="line"><span style="color:#e1e4e8;">		  gateway4: 192.168.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">		  nameservers:</span></span>
<span class="line"><span style="color:#e1e4e8;">			addresses: [8.8.8.8,8.8.4.4]</span></span>
<span class="line"><span style="color:#e1e4e8;">	//dhcp</span></span>
<span class="line"><span style="color:#e1e4e8;">	network:</span></span>
<span class="line"><span style="color:#e1e4e8;">	  ethernets:</span></span>
<span class="line"><span style="color:#e1e4e8;">		ens18:</span></span>
<span class="line"><span style="color:#e1e4e8;">		  dhcp4: true</span></span>
<span class="line"><span style="color:#e1e4e8;">		  dhcp-identifier: mac # 加上这一行。</span></span>
<span class="line"><span style="color:#e1e4e8;">	  version: 2</span></span>
<span class="line"><span style="color:#e1e4e8;">/etc/hosts</span></span>
<span class="line"><span style="color:#e1e4e8;">/etc/hostname</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">traceroute</span></span>
<span class="line"><span style="color:#e1e4e8;">lsof -i 列出打开的端口</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">netstat -tuln  显示网络服务和端口的状态。</span></span>
<span class="line"><span style="color:#e1e4e8;">lsof -i	列出所有打开的网络端口</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/etc/netplan/xxx.yaml</span></span>
<span class="line"><span style="color:#24292e;">	//static</span></span>
<span class="line"><span style="color:#24292e;">	network:</span></span>
<span class="line"><span style="color:#24292e;">	  version: 2</span></span>
<span class="line"><span style="color:#24292e;">	  renderer: networkd</span></span>
<span class="line"><span style="color:#24292e;">	  ethernets:</span></span>
<span class="line"><span style="color:#24292e;">		eth0:</span></span>
<span class="line"><span style="color:#24292e;">		  dhcp4: no</span></span>
<span class="line"><span style="color:#24292e;">		  addresses: [192.168.1.10/24]</span></span>
<span class="line"><span style="color:#24292e;">		  gateway4: 192.168.1.1</span></span>
<span class="line"><span style="color:#24292e;">		  nameservers:</span></span>
<span class="line"><span style="color:#24292e;">			addresses: [8.8.8.8,8.8.4.4]</span></span>
<span class="line"><span style="color:#24292e;">	//dhcp</span></span>
<span class="line"><span style="color:#24292e;">	network:</span></span>
<span class="line"><span style="color:#24292e;">	  ethernets:</span></span>
<span class="line"><span style="color:#24292e;">		ens18:</span></span>
<span class="line"><span style="color:#24292e;">		  dhcp4: true</span></span>
<span class="line"><span style="color:#24292e;">		  dhcp-identifier: mac # 加上这一行。</span></span>
<span class="line"><span style="color:#24292e;">	  version: 2</span></span>
<span class="line"><span style="color:#24292e;">/etc/hosts</span></span>
<span class="line"><span style="color:#24292e;">/etc/hostname</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">traceroute</span></span>
<span class="line"><span style="color:#24292e;">lsof -i 列出打开的端口</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">netstat -tuln  显示网络服务和端口的状态。</span></span>
<span class="line"><span style="color:#24292e;">lsof -i	列出所有打开的网络端口</span></span></code></pre></div><h2 id="磁盘管理" tabindex="-1">磁盘管理 <a class="header-anchor" href="#磁盘管理" aria-label="Permalink to &quot;磁盘管理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">df -h</span></span>
<span class="line"><span style="color:#e1e4e8;">du -sh</span></span>
<span class="line"><span style="color:#e1e4e8;">	s = stat</span></span>
<span class="line"><span style="color:#e1e4e8;">lsblk	列出存储</span></span>
<span class="line"><span style="color:#e1e4e8;">fdisk -l</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">df -h</span></span>
<span class="line"><span style="color:#24292e;">du -sh</span></span>
<span class="line"><span style="color:#24292e;">	s = stat</span></span>
<span class="line"><span style="color:#24292e;">lsblk	列出存储</span></span>
<span class="line"><span style="color:#24292e;">fdisk -l</span></span></code></pre></div><h3 id="pve增加磁盘容量" tabindex="-1">pve增加磁盘容量 <a class="header-anchor" href="#pve增加磁盘容量" aria-label="Permalink to &quot;pve增加磁盘容量&quot;">​</a></h3><p><a href="https://www.cnblogs.com/chuanghongmeng/p/16278040.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/chuanghongmeng/p/16278040.html</a></p><p>具体分配步骤 fdisk -l *此时磁盘未分配，查看对比 parted /dev/sda *分配空间给分区 /dev/sda2 print resizepart 2 100% quit pvresize /dev/sda2 *更新物理卷的大小，当然这里前提是使用了LVM。 lvresize --extents +100%FREE --resizefs /dev/mapper/centos-root *更新逻辑卷的大小 完成</p><h2 id="crontab" tabindex="-1">crontab <a class="header-anchor" href="#crontab" aria-label="Permalink to &quot;crontab&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">crontab -e </span></span>
<span class="line"><span style="color:#e1e4e8;">   *系统级：编辑 /etc/crontab 或 /etc/cron.d/</span></span>
<span class="line"><span style="color:#e1e4e8;">   *用户的作业调度表保存在内存，编辑时是临时文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">   *编辑指定用户: crontab -u username -e</span></span>
<span class="line"><span style="color:#e1e4e8;">   每分钟执行一次：* * * * * /path/to/command</span></span>
<span class="line"><span style="color:#e1e4e8;">   每小时的第5分钟执行：5 * * * * /path/to/command</span></span>
<span class="line"><span style="color:#e1e4e8;">   每天的午夜12点执行：0 0 * * * /path/to/command</span></span>
<span class="line"><span style="color:#e1e4e8;">   每周一的午夜12点执行：0 0 * * 1 /path/to/command</span></span>
<span class="line"><span style="color:#e1e4e8;">   每天的21:30执行：30 21 * * * /path/to/command</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">crontab -e </span></span>
<span class="line"><span style="color:#24292e;">   *系统级：编辑 /etc/crontab 或 /etc/cron.d/</span></span>
<span class="line"><span style="color:#24292e;">   *用户的作业调度表保存在内存，编辑时是临时文件。</span></span>
<span class="line"><span style="color:#24292e;">   *编辑指定用户: crontab -u username -e</span></span>
<span class="line"><span style="color:#24292e;">   每分钟执行一次：* * * * * /path/to/command</span></span>
<span class="line"><span style="color:#24292e;">   每小时的第5分钟执行：5 * * * * /path/to/command</span></span>
<span class="line"><span style="color:#24292e;">   每天的午夜12点执行：0 0 * * * /path/to/command</span></span>
<span class="line"><span style="color:#24292e;">   每周一的午夜12点执行：0 0 * * 1 /path/to/command</span></span>
<span class="line"><span style="color:#24292e;">   每天的21:30执行：30 21 * * * /path/to/command</span></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cat /proc/cpuinfo</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/meminfo |grep MemTotal</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">uname -a               # Linux VM-20-2-ubuntu 5.4.0-42-generic #46-Ubuntu SMP Fri Jul 10 00:24:02 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">hostname               # VM-20-2-ubuntu</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">head -n 1 /etc/issue   # Ubuntu 20.04 LTS \\n \\l</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">lspci -tv              # 列出所有PCI设备</span></span>
<span class="line"><span style="color:#e1e4e8;">lsusb -tv              # 列出所有USB设备的linux系统信息命令</span></span>
<span class="line"><span style="color:#e1e4e8;">lsmod                  # 列出加载的内核模块</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">env                    # 查看环境变量资源，vim ~/.bashrc    source vim ~/.bashrc</span></span>
<span class="line"><span style="color:#e1e4e8;">free -m                # 查看内存使用量和交换区使用量</span></span>
<span class="line"><span style="color:#e1e4e8;">df -h                  # 查看各分区使用情况</span></span>
<span class="line"><span style="color:#e1e4e8;">du -sh                 # 查看指定目录的大小</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">uptime   # 查看系统运行时间、用户数、负载</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/loadavg      # 查看系统负载磁盘和分区</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">mount | column -t      # 查看挂接的分区状态</span></span>
<span class="line"><span style="color:#e1e4e8;">fdisk -l               # 查看所有分区</span></span>
<span class="line"><span style="color:#e1e4e8;">swapon -s              # 查看所有交换分区</span></span>
<span class="line"><span style="color:#e1e4e8;">hdparm -i /dev/hda     # 查看磁盘参数(仅适用于IDE设备)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">dmesg | grep IDE       # 查看启动时IDE设备检测状况网络</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ifconfig               # 查看所有网络接口的属性</span></span>
<span class="line"><span style="color:#e1e4e8;">iptables -L            # 查看防火墙设置 </span></span>
<span class="line"><span style="color:#e1e4e8;">route -n               # 查看路由表</span></span>
<span class="line"><span style="color:#e1e4e8;">netstat -lntp          # 查看所有监听端口</span></span>
<span class="line"><span style="color:#e1e4e8;">netstat -antp          # 查看所有已经建立的连接</span></span>
<span class="line"><span style="color:#e1e4e8;">netstat -s             # 查看网络统计信息进程</span></span>
<span class="line"><span style="color:#e1e4e8;">ps -ef                 # 查看所有进程</span></span>
<span class="line"><span style="color:#e1e4e8;">top                    # 实时显示进程状态用户</span></span>
<span class="line"><span style="color:#e1e4e8;">w                      # 查看活动用户</span></span>
<span class="line"><span style="color:#e1e4e8;">id                     # 查看指定用户信息</span></span>
<span class="line"><span style="color:#e1e4e8;">last                   # 查看用户登录日志</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">4.文件</span></span>
<span class="line"><span style="color:#e1e4e8;">cut -d: -f1 /etc/passwd   # 查看系统所有用户</span></span>
<span class="line"><span style="color:#e1e4e8;">cut -d: -f1 /etc/group    # 查看系统所有组</span></span>
<span class="line"><span style="color:#e1e4e8;">crontab -l             # 查看当前用户的计划任务服务</span></span>
<span class="line"><span style="color:#e1e4e8;">chkconfig –list       # 列出所有系统服务</span></span>
<span class="line"><span style="color:#e1e4e8;">chkconfig –list | grep on    # 列出所有启动的系统服务程序</span></span>
<span class="line"><span style="color:#e1e4e8;">rpm -qa                # 查看所有安装的软件包</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/cpuinfo      #查看CPU相关参数的linux系统命令</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/partitions   #查看linux硬盘和分区信息的系统信息命令</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/meminfo      #查看linux系统内存信息的linux系统命令</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/version      #查看版本，类似uname -r</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/ioports      #查看设备io端口</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/interrupts   #查看中断</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/pci          #查看pci设备的信息</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/swaps        #查看所有swap分区的信息</span></span>
<span class="line"><span style="color:#e1e4e8;">find / -name xxx</span></span>
<span class="line"><span style="color:#e1e4e8;">find / -size +100000k</span></span>
<span class="line"><span style="color:#e1e4e8;">find / -amin|-atime +10 # +表示10分/小时前，-表示内</span></span>
<span class="line"><span style="color:#e1e4e8;">echo 233 &gt;&gt; abc.txt     # 内容追加</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">时间同步：</span></span>
<span class="line"><span style="color:#e1e4e8;">date -s 12/22/14    改日期</span></span>
<span class="line"><span style="color:#e1e4e8;">date -s 10:26:30    改时间</span></span>
<span class="line"><span style="color:#e1e4e8;">hwclock -w          保存修改结果</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">用户管理</span></span>
<span class="line"><span style="color:#e1e4e8;">useradd xxx</span></span>
<span class="line"><span style="color:#e1e4e8;">passwd xxx      # /etc/password</span></span>
<span class="line"><span style="color:#e1e4e8;">userdel xxx</span></span>
<span class="line"><span style="color:#e1e4e8;">userdel -r xxx  # 同时移除用户目录</span></span>
<span class="line"><span style="color:#e1e4e8;">groupadd  #  /etc/group</span></span>
<span class="line"><span style="color:#e1e4e8;">usermod -g 组名 用户名   # 改变用户的组</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">日历</span></span>
<span class="line"><span style="color:#e1e4e8;">cal 7 2022</span></span>
<span class="line"><span style="color:#e1e4e8;">cal 2022</span></span>
<span class="line"><span style="color:#e1e4e8;">cal -j         # day of year</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cat /proc/cpuinfo</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">cat /proc/meminfo |grep MemTotal</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">uname -a               # Linux VM-20-2-ubuntu 5.4.0-42-generic #46-Ubuntu SMP Fri Jul 10 00:24:02 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">hostname               # VM-20-2-ubuntu</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">head -n 1 /etc/issue   # Ubuntu 20.04 LTS \\n \\l</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">lspci -tv              # 列出所有PCI设备</span></span>
<span class="line"><span style="color:#24292e;">lsusb -tv              # 列出所有USB设备的linux系统信息命令</span></span>
<span class="line"><span style="color:#24292e;">lsmod                  # 列出加载的内核模块</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">env                    # 查看环境变量资源，vim ~/.bashrc    source vim ~/.bashrc</span></span>
<span class="line"><span style="color:#24292e;">free -m                # 查看内存使用量和交换区使用量</span></span>
<span class="line"><span style="color:#24292e;">df -h                  # 查看各分区使用情况</span></span>
<span class="line"><span style="color:#24292e;">du -sh                 # 查看指定目录的大小</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">uptime   # 查看系统运行时间、用户数、负载</span></span>
<span class="line"><span style="color:#24292e;">cat /proc/loadavg      # 查看系统负载磁盘和分区</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mount | column -t      # 查看挂接的分区状态</span></span>
<span class="line"><span style="color:#24292e;">fdisk -l               # 查看所有分区</span></span>
<span class="line"><span style="color:#24292e;">swapon -s              # 查看所有交换分区</span></span>
<span class="line"><span style="color:#24292e;">hdparm -i /dev/hda     # 查看磁盘参数(仅适用于IDE设备)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">dmesg | grep IDE       # 查看启动时IDE设备检测状况网络</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ifconfig               # 查看所有网络接口的属性</span></span>
<span class="line"><span style="color:#24292e;">iptables -L            # 查看防火墙设置 </span></span>
<span class="line"><span style="color:#24292e;">route -n               # 查看路由表</span></span>
<span class="line"><span style="color:#24292e;">netstat -lntp          # 查看所有监听端口</span></span>
<span class="line"><span style="color:#24292e;">netstat -antp          # 查看所有已经建立的连接</span></span>
<span class="line"><span style="color:#24292e;">netstat -s             # 查看网络统计信息进程</span></span>
<span class="line"><span style="color:#24292e;">ps -ef                 # 查看所有进程</span></span>
<span class="line"><span style="color:#24292e;">top                    # 实时显示进程状态用户</span></span>
<span class="line"><span style="color:#24292e;">w                      # 查看活动用户</span></span>
<span class="line"><span style="color:#24292e;">id                     # 查看指定用户信息</span></span>
<span class="line"><span style="color:#24292e;">last                   # 查看用户登录日志</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">4.文件</span></span>
<span class="line"><span style="color:#24292e;">cut -d: -f1 /etc/passwd   # 查看系统所有用户</span></span>
<span class="line"><span style="color:#24292e;">cut -d: -f1 /etc/group    # 查看系统所有组</span></span>
<span class="line"><span style="color:#24292e;">crontab -l             # 查看当前用户的计划任务服务</span></span>
<span class="line"><span style="color:#24292e;">chkconfig –list       # 列出所有系统服务</span></span>
<span class="line"><span style="color:#24292e;">chkconfig –list | grep on    # 列出所有启动的系统服务程序</span></span>
<span class="line"><span style="color:#24292e;">rpm -qa                # 查看所有安装的软件包</span></span>
<span class="line"><span style="color:#24292e;">cat /proc/cpuinfo      #查看CPU相关参数的linux系统命令</span></span>
<span class="line"><span style="color:#24292e;">cat /proc/partitions   #查看linux硬盘和分区信息的系统信息命令</span></span>
<span class="line"><span style="color:#24292e;">cat /proc/meminfo      #查看linux系统内存信息的linux系统命令</span></span>
<span class="line"><span style="color:#24292e;">cat /proc/version      #查看版本，类似uname -r</span></span>
<span class="line"><span style="color:#24292e;">cat /proc/ioports      #查看设备io端口</span></span>
<span class="line"><span style="color:#24292e;">cat /proc/interrupts   #查看中断</span></span>
<span class="line"><span style="color:#24292e;">cat /proc/pci          #查看pci设备的信息</span></span>
<span class="line"><span style="color:#24292e;">cat /proc/swaps        #查看所有swap分区的信息</span></span>
<span class="line"><span style="color:#24292e;">find / -name xxx</span></span>
<span class="line"><span style="color:#24292e;">find / -size +100000k</span></span>
<span class="line"><span style="color:#24292e;">find / -amin|-atime +10 # +表示10分/小时前，-表示内</span></span>
<span class="line"><span style="color:#24292e;">echo 233 &gt;&gt; abc.txt     # 内容追加</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">时间同步：</span></span>
<span class="line"><span style="color:#24292e;">date -s 12/22/14    改日期</span></span>
<span class="line"><span style="color:#24292e;">date -s 10:26:30    改时间</span></span>
<span class="line"><span style="color:#24292e;">hwclock -w          保存修改结果</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">用户管理</span></span>
<span class="line"><span style="color:#24292e;">useradd xxx</span></span>
<span class="line"><span style="color:#24292e;">passwd xxx      # /etc/password</span></span>
<span class="line"><span style="color:#24292e;">userdel xxx</span></span>
<span class="line"><span style="color:#24292e;">userdel -r xxx  # 同时移除用户目录</span></span>
<span class="line"><span style="color:#24292e;">groupadd  #  /etc/group</span></span>
<span class="line"><span style="color:#24292e;">usermod -g 组名 用户名   # 改变用户的组</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">日历</span></span>
<span class="line"><span style="color:#24292e;">cal 7 2022</span></span>
<span class="line"><span style="color:#24292e;">cal 2022</span></span>
<span class="line"><span style="color:#24292e;">cal -j         # day of year</span></span></code></pre></div><h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>Linux 遵循 GNU 通用公共许可证（GPL） <img src="`+l+`" alt="alt text"></p><h1 id="linux-系统启动过程" tabindex="-1">Linux 系统启动过程 <a class="header-anchor" href="#linux-系统启动过程" aria-label="Permalink to &quot;Linux 系统启动过程&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">内核的引导  </span></span>
<span class="line"><span style="color:#e1e4e8;">    BIOS开机自检</span></span>
<span class="line"><span style="color:#e1e4e8;">    接管硬件</span></span>
<span class="line"><span style="color:#e1e4e8;">    读入/boot</span></span>
<span class="line"><span style="color:#e1e4e8;">运行 init</span></span>
<span class="line"><span style="color:#e1e4e8;">    首先是需要读取配置文件 /etc/inittab</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;运行级别&quot;（runlevel）</span></span>
<span class="line"><span style="color:#e1e4e8;">        运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动</span></span>
<span class="line"><span style="color:#e1e4e8;">        运行级别1：单用户工作状态，root权限，用于系统维护，禁止远程登录</span></span>
<span class="line"><span style="color:#e1e4e8;">        运行级别2：多用户状态(没有NFS)</span></span>
<span class="line"><span style="color:#e1e4e8;">        运行级别3：完全的多用户状态(有NFS)，登录后进入控制台命令行模式</span></span>
<span class="line"><span style="color:#e1e4e8;">        运行级别4：系统未使用，保留</span></span>
<span class="line"><span style="color:#e1e4e8;">        运行级别5：X11控制台，登录后进入图形GUI模式</span></span>
<span class="line"><span style="color:#e1e4e8;">        运行级别6：系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动</span></span>
<span class="line"><span style="color:#e1e4e8;">系统初始化</span></span>
<span class="line"><span style="color:#e1e4e8;">    *init程序会执行  si::sysinit:/etc/rc.d/rc.sysinit</span></span>
<span class="line"><span style="color:#e1e4e8;">    *rc.sysinit是每一个运行级别都要首先运行的重要脚本。它主要完成的工作有：激活交换分区，检查磁盘，加载硬件模块以及其它一些需要优先执行任务。</span></span>
<span class="line"><span style="color:#e1e4e8;">    *启动service或者daemon</span></span>
<span class="line"><span style="color:#e1e4e8;">建立终端</span></span>
<span class="line"><span style="color:#e1e4e8;">用户登录系统</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">内核的引导  </span></span>
<span class="line"><span style="color:#24292e;">    BIOS开机自检</span></span>
<span class="line"><span style="color:#24292e;">    接管硬件</span></span>
<span class="line"><span style="color:#24292e;">    读入/boot</span></span>
<span class="line"><span style="color:#24292e;">运行 init</span></span>
<span class="line"><span style="color:#24292e;">    首先是需要读取配置文件 /etc/inittab</span></span>
<span class="line"><span style="color:#24292e;">    &quot;运行级别&quot;（runlevel）</span></span>
<span class="line"><span style="color:#24292e;">        运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动</span></span>
<span class="line"><span style="color:#24292e;">        运行级别1：单用户工作状态，root权限，用于系统维护，禁止远程登录</span></span>
<span class="line"><span style="color:#24292e;">        运行级别2：多用户状态(没有NFS)</span></span>
<span class="line"><span style="color:#24292e;">        运行级别3：完全的多用户状态(有NFS)，登录后进入控制台命令行模式</span></span>
<span class="line"><span style="color:#24292e;">        运行级别4：系统未使用，保留</span></span>
<span class="line"><span style="color:#24292e;">        运行级别5：X11控制台，登录后进入图形GUI模式</span></span>
<span class="line"><span style="color:#24292e;">        运行级别6：系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动</span></span>
<span class="line"><span style="color:#24292e;">系统初始化</span></span>
<span class="line"><span style="color:#24292e;">    *init程序会执行  si::sysinit:/etc/rc.d/rc.sysinit</span></span>
<span class="line"><span style="color:#24292e;">    *rc.sysinit是每一个运行级别都要首先运行的重要脚本。它主要完成的工作有：激活交换分区，检查磁盘，加载硬件模块以及其它一些需要优先执行任务。</span></span>
<span class="line"><span style="color:#24292e;">    *启动service或者daemon</span></span>
<span class="line"><span style="color:#24292e;">建立终端</span></span>
<span class="line"><span style="color:#24292e;">用户登录系统</span></span></code></pre></div><h1 id="系统目录" tabindex="-1">系统目录 <a class="header-anchor" href="#系统目录" aria-label="Permalink to &quot;系统目录&quot;">​</a></h1><p><img src="`+p+'" alt="alt text"> 权限</p><h1 id="文件基本属性" tabindex="-1">文件基本属性 <a class="header-anchor" href="#文件基本属性" aria-label="Permalink to &quot;文件基本属性&quot;">​</a></h1><p><img src="'+o+`" alt="alt text"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">当为 d 则是目录</span></span>
<span class="line"><span style="color:#e1e4e8;">当为 - 则是文件；</span></span>
<span class="line"><span style="color:#e1e4e8;">若是 l 则表示为链接文档(link file)；</span></span>
<span class="line"><span style="color:#e1e4e8;">若是 b 则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；</span></span>
<span class="line"><span style="color:#e1e4e8;">若是 c 则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">当为 d 则是目录</span></span>
<span class="line"><span style="color:#24292e;">当为 - 则是文件；</span></span>
<span class="line"><span style="color:#24292e;">若是 l 则表示为链接文档(link file)；</span></span>
<span class="line"><span style="color:#24292e;">若是 b 则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；</span></span>
<span class="line"><span style="color:#24292e;">若是 c 则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。</span></span></code></pre></div>`,35),i=[t];function r(y,d,h,u,m,g){return n(),a("div",null,i)}const v=s(c,[["render",r]]);export{x as __pageData,v as default};
