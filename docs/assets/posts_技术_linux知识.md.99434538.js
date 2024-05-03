import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.1eb6b028.js";const m=JSON.parse('{"title":"Linux相关","description":"摘抄","frontmatter":{"title":"Linux相关","description":"摘抄","date":"2023-12-14T00:00:00.000Z","tags":["计算机科学"]},"headers":[],"relativePath":"posts/技术/linux知识.md","filePath":"posts/技术/linux知识.md"}'),p={name:"posts/技术/linux知识.md"},l=e(`<h2 id="linux启动过程" tabindex="-1">linux启动过程 <a class="header-anchor" href="#linux启动过程" aria-label="Permalink to &quot;linux启动过程&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">linux启动过程分析</span></span>
<span class="line"><span style="color:#e1e4e8;">（1）BIOS自检</span></span>
<span class="line"><span style="color:#e1e4e8;">（2）启动CRUB/LIL0</span></span>
<span class="line"><span style="color:#e1e4e8;">（3）运行linux内核并检查硬件</span></span>
<span class="line"><span style="color:#e1e4e8;">（4）运行系统的第一个进程init</span></span>
<span class="line"><span style="color:#e1e4e8;">（5）init读取系统引导配置文件/etc/inittab中的信息进行初始化</span></span>
<span class="line"><span style="color:#e1e4e8;">（6）/etc/rc.d/rd.sysinit系统初始化脚本</span></span>
<span class="line"><span style="color:#e1e4e8;">（7）/etc/rc.d/rcX.d/[KS]* 根据运行级别X配置服务</span></span>
<span class="line"><span style="color:#e1e4e8;">    终止以K开头的服务；启动以S开头的服务。</span></span>
<span class="line"><span style="color:#e1e4e8;">（8）/etc/rc.d/rc.local 执行本地特殊配置</span></span>
<span class="line"><span style="color:#e1e4e8;">（9）其它特殊服务</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">linux启动过程分析</span></span>
<span class="line"><span style="color:#24292e;">（1）BIOS自检</span></span>
<span class="line"><span style="color:#24292e;">（2）启动CRUB/LIL0</span></span>
<span class="line"><span style="color:#24292e;">（3）运行linux内核并检查硬件</span></span>
<span class="line"><span style="color:#24292e;">（4）运行系统的第一个进程init</span></span>
<span class="line"><span style="color:#24292e;">（5）init读取系统引导配置文件/etc/inittab中的信息进行初始化</span></span>
<span class="line"><span style="color:#24292e;">（6）/etc/rc.d/rd.sysinit系统初始化脚本</span></span>
<span class="line"><span style="color:#24292e;">（7）/etc/rc.d/rcX.d/[KS]* 根据运行级别X配置服务</span></span>
<span class="line"><span style="color:#24292e;">    终止以K开头的服务；启动以S开头的服务。</span></span>
<span class="line"><span style="color:#24292e;">（8）/etc/rc.d/rc.local 执行本地特殊配置</span></span>
<span class="line"><span style="color:#24292e;">（9）其它特殊服务</span></span></code></pre></div><h2 id="linux命令" tabindex="-1">linux命令 <a class="header-anchor" href="#linux命令" aria-label="Permalink to &quot;linux命令&quot;">​</a></h2><p>搜索命令： <a href="https://wangchujiang.com/linux-command/" target="_blank" rel="noreferrer">https://wangchujiang.com/linux-command/</a></p><p>代码仓库： <a href="https://github.com/jaywcjlove/linux-command" target="_blank" rel="noreferrer">https://github.com/jaywcjlove/linux-command</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">linux 硬链接、软连接</span></span>
<span class="line"><span style="color:#e1e4e8;">软链接：ln -s 源文件 目标文件  # 快捷方式</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">硬链接：ln 源文件 目标文件    # 本质上 cp -p（保留权限、属主、时间戳） 加同步更新</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ls -i xxx   # 查看i节点，i节点是文件和目录的唯一标识。操作系统操作i节点，然后同步更新到映射的文件。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/cpuinfo</span></span>
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
<span class="line"><span style="color:#e1e4e8;">iptables -L            # 查看防火墙设置</span></span>
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
<span class="line"><span style="color:#e1e4e8;">cal -j         # day of year</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">linux 硬链接、软连接</span></span>
<span class="line"><span style="color:#24292e;">软链接：ln -s 源文件 目标文件  # 快捷方式</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">硬链接：ln 源文件 目标文件    # 本质上 cp -p（保留权限、属主、时间戳） 加同步更新</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ls -i xxx   # 查看i节点，i节点是文件和目录的唯一标识。操作系统操作i节点，然后同步更新到映射的文件。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">cat /proc/cpuinfo</span></span>
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
<span class="line"><span style="color:#24292e;">iptables -L            # 查看防火墙设置</span></span>
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
<span class="line"><span style="color:#24292e;">cal -j         # day of year</span></span></code></pre></div><h2 id="windows" tabindex="-1">windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;windows&quot;">​</a></h2><p>dxdiag 诊断工具</p><p>devmgmt.msc 设备管理器</p>`,9),c=[l];function o(t,i,r,y,u,d){return n(),a("div",null,c)}const h=s(p,[["render",o]]);export{m as __pageData,h as default};
