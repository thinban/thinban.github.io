import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.1eb6b028.js";const l="/assets/image-4.66a28fee.png",p="/assets/image-5.22f5ea67.png",o="/assets/image-6.b4eb5ff1.png",m=JSON.parse('{"title":"20240426_linux系统","description":"20240426_linux系统","frontmatter":{"title":"20240426_linux系统","description":"20240426_linux系统","date":"2024-04-26T00:00:00.000Z","tags":["技术"]},"headers":[],"relativePath":"posts/知识整理/20240426_linux系统.md","filePath":"posts/知识整理/20240426_linux系统.md"}'),c={name:"posts/知识整理/20240426_linux系统.md"},t=e('<h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>Linux 遵循 GNU 通用公共许可证（GPL） <img src="'+l+`" alt="alt text"></p><h1 id="linux-系统启动过程" tabindex="-1">Linux 系统启动过程 <a class="header-anchor" href="#linux-系统启动过程" aria-label="Permalink to &quot;Linux 系统启动过程&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">内核的引导 </span></span>
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
<span class="line"><span style="color:#e1e4e8;">用户登录系统</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">内核的引导 </span></span>
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
<span class="line"><span style="color:#24292e;">若是 c 则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。</span></span></code></pre></div><h1 id="磁盘管理" tabindex="-1">磁盘管理 <a class="header-anchor" href="#磁盘管理" aria-label="Permalink to &quot;磁盘管理&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">df</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">du</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">fdisk</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">如何挂盘？</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">df</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">du</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">fdisk</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">如何挂盘？</span></span></code></pre></div>`,11),i=[t];function r(d,y,h,u,_,g){return n(),a("div",null,i)}const v=s(c,[["render",r]]);export{m as __pageData,v as default};
