import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.1eb6b028.js";const g=JSON.parse('{"title":"20240428_linux启动springcloudalibaba","description":"20240428_linux启动springcloudalibaba","frontmatter":{"title":"20240428_linux启动springcloudalibaba","description":"20240428_linux启动springcloudalibaba","date":"2024-04-28T00:00:00.000Z","tags":["技术"]},"headers":[],"relativePath":"posts/知识整理/20240428_linux启动springcloudalibaba.md","filePath":"posts/知识整理/20240428_linux启动springcloudalibaba.md"}'),l={name:"posts/知识整理/20240428_linux启动springcloudalibaba.md"},p=e(`<h1 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h1><h2 id="系统" tabindex="-1">系统 <a class="header-anchor" href="#系统" aria-label="Permalink to &quot;系统&quot;">​</a></h2><p>uname -a *Linux spring-cloud-alibaba 5.15.0-101-generic #111-Ubuntu SMP Tue Mar 5 20:16:58 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux 5.15.0-101-generic 内核版本 #111-Ubuntu 表示这是Ubuntu操作系统的第111次编译 SMP 代表“Symmetric Multi-Processing”，意味着这个内核版本支持多处理器系统。</p><h2 id="cpu" tabindex="-1">cpu <a class="header-anchor" href="#cpu" aria-label="Permalink to &quot;cpu&quot;">​</a></h2><p>lscpu</p><h2 id="内存" tabindex="-1">内存 <a class="header-anchor" href="#内存" aria-label="Permalink to &quot;内存&quot;">​</a></h2><p>free -h /proc/meminfo</p><h2 id="磁盘" tabindex="-1">磁盘 <a class="header-anchor" href="#磁盘" aria-label="Permalink to &quot;磁盘&quot;">​</a></h2><p>du -sh s = stat lsblk 列出存储 fdisk -l</p><h3 id="pve增加磁盘容量" tabindex="-1">pve增加磁盘容量 <a class="header-anchor" href="#pve增加磁盘容量" aria-label="Permalink to &quot;pve增加磁盘容量&quot;">​</a></h3><p><a href="https://www.cnblogs.com/chuanghongmeng/p/16278040.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/chuanghongmeng/p/16278040.html</a></p><p>具体分配步骤 fdisk -l *此时磁盘未分配，查看对比 parted /dev/sda *分配空间给分区 /dev/sda2 print resizepart 2 100% quit pvresize /dev/sda2 *更新物理卷的大小，当然这里前提是使用了LVM。 lvresize --extents +100%FREE --resizefs /dev/mapper/centos-root *更新逻辑卷的大小 完成</p><h2 id="用户" tabindex="-1">用户 <a class="header-anchor" href="#用户" aria-label="Permalink to &quot;用户&quot;">​</a></h2><p>w</p><h1 id="配置网络" tabindex="-1">配置网络 <a class="header-anchor" href="#配置网络" aria-label="Permalink to &quot;配置网络&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/etc/netplan/xxx.yaml</span></span>
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
<span class="line"><span style="color:#24292e;">lsof -i	列出所有打开的网络端口</span></span></code></pre></div><h1 id="查看安装的软件" tabindex="-1">查看安装的软件 <a class="header-anchor" href="#查看安装的软件" aria-label="Permalink to &quot;查看安装的软件&quot;">​</a></h1><h2 id="apt" tabindex="-1">apt <a class="header-anchor" href="#apt" aria-label="Permalink to &quot;apt&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">dpkg --list | grep maven</span></span>
<span class="line"><span style="color:#e1e4e8;">dpkg -L maven</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">dpkg --list | grep maven</span></span>
<span class="line"><span style="color:#24292e;">dpkg -L maven</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">whereis java</span></span>
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
<span class="line"><span style="color:#24292e;">mvn package -DskipTests</span></span></code></pre></div><h1 id="好用的命令" tabindex="-1">好用的命令 <a class="header-anchor" href="#好用的命令" aria-label="Permalink to &quot;好用的命令&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">20. **\`top\`** 或 **\`htop\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    实时显示系统进程和资源使用情况。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">21. **\`vmstat\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    报告虚拟内存统计信息。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">22. **\`iostat\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    报告CPU和输入/输出统计信息。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">23. **\`mpstat\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    显示处理器相关的统计信息。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">24. **\`dfi\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    检查文件系统的状态。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">25. **\`lspci\`** 或 **\`lsusb\`\`：</span></span>
<span class="line"><span style="color:#e1e4e8;">    列出PCI或USB总线上的设备。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">26. **\`dmesg\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    显示内核环缓冲区的消息，通常用于诊断硬件问题。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">27. **\`lsb_release -a\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    显示Linux发行版信息。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">28. **\`cat /proc/loadavg\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    显示系统负载。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">29. **\`ps aux\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    显示当前运行的进程。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">30. **\`kill PID\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    向指定的进程ID发送信号，通常用于结束进程。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">31. **\`systemctl\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    管理系统服务和服务的状态。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">32. **\`time &lt;command&gt;\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    测量命令执行所需的时间。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">33. **\`cal\`** 或 **\`ncal\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    显示日历信息。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">34. **\`date\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    显示或设置系统日期和时间。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">35. **\`find &lt;directory&gt; -name &lt;filename&gt;\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    在指定目录下搜索文件。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">36. **\`grep\`**：</span></span>
<span class="line"><span style="color:#e1e4e8;">    搜索文本并打印出匹配的行。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">20. **\`top\`** 或 **\`htop\`**：</span></span>
<span class="line"><span style="color:#24292e;">    实时显示系统进程和资源使用情况。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">21. **\`vmstat\`**：</span></span>
<span class="line"><span style="color:#24292e;">    报告虚拟内存统计信息。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">22. **\`iostat\`**：</span></span>
<span class="line"><span style="color:#24292e;">    报告CPU和输入/输出统计信息。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">23. **\`mpstat\`**：</span></span>
<span class="line"><span style="color:#24292e;">    显示处理器相关的统计信息。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">24. **\`dfi\`**：</span></span>
<span class="line"><span style="color:#24292e;">    检查文件系统的状态。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">25. **\`lspci\`** 或 **\`lsusb\`\`：</span></span>
<span class="line"><span style="color:#24292e;">    列出PCI或USB总线上的设备。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">26. **\`dmesg\`**：</span></span>
<span class="line"><span style="color:#24292e;">    显示内核环缓冲区的消息，通常用于诊断硬件问题。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">27. **\`lsb_release -a\`**：</span></span>
<span class="line"><span style="color:#24292e;">    显示Linux发行版信息。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">28. **\`cat /proc/loadavg\`**：</span></span>
<span class="line"><span style="color:#24292e;">    显示系统负载。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">29. **\`ps aux\`**：</span></span>
<span class="line"><span style="color:#24292e;">    显示当前运行的进程。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">30. **\`kill PID\`**：</span></span>
<span class="line"><span style="color:#24292e;">    向指定的进程ID发送信号，通常用于结束进程。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">31. **\`systemctl\`**：</span></span>
<span class="line"><span style="color:#24292e;">    管理系统服务和服务的状态。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">32. **\`time &lt;command&gt;\`**：</span></span>
<span class="line"><span style="color:#24292e;">    测量命令执行所需的时间。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">33. **\`cal\`** 或 **\`ncal\`**：</span></span>
<span class="line"><span style="color:#24292e;">    显示日历信息。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">34. **\`date\`**：</span></span>
<span class="line"><span style="color:#24292e;">    显示或设置系统日期和时间。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">35. **\`find &lt;directory&gt; -name &lt;filename&gt;\`**：</span></span>
<span class="line"><span style="color:#24292e;">    在指定目录下搜索文件。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">36. **\`grep\`**：</span></span>
<span class="line"><span style="color:#24292e;">    搜索文本并打印出匹配的行。</span></span></code></pre></div>`,23),o=[p];function t(c,i,r,y,d,h){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};
