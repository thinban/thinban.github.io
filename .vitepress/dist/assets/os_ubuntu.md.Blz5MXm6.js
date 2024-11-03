import{_ as e,c as a,o as t,a1 as r}from"./chunks/framework.C46D9NsM.js";const f=JSON.parse('{"title":"替换更新源","description":"","frontmatter":{},"headers":[],"relativePath":"os/ubuntu.md","filePath":"os/ubuntu.md"}'),n={name:"os/ubuntu.md"},o=r(`<h1 id="替换更新源" tabindex="-1">替换更新源 <a class="header-anchor" href="#替换更新源" aria-label="Permalink to &quot;替换更新源&quot;">​</a></h1><pre><code>cat /etc/apt/sources.list
apt update&amp;&amp;apt upgrade
</code></pre><h1 id="磁盘扩容" tabindex="-1">磁盘扩容 <a class="header-anchor" href="#磁盘扩容" aria-label="Permalink to &quot;磁盘扩容&quot;">​</a></h1><pre><code>fdisk -l #查看磁盘分区
parted /dev/sda
    print
    resizepart 2 100%  #这里表示选中 /dev/sda2
    quit  # 再次执行fdisk -l，可以查看到分区大小已变化，End
pvresize /dev/sda2 #更新物理卷的大小
lvresize --extents +100%FREE --resizefs /dev/mapper/centos-root  # 更新逻辑卷的大小
fdisk -l或者du -h查看已更新成功。
</code></pre><h1 id="网络配置" tabindex="-1">网络配置 <a class="header-anchor" href="#网络配置" aria-label="Permalink to &quot;网络配置&quot;">​</a></h1><pre><code>vi /etc/netplan/00-installer-config.yaml
	dhcp-identifier: mac # 加上这一行。
</code></pre>`,6),s=[o];function d(i,c,p,l,u,_){return t(),a("div",null,s)}const m=e(n,[["render",d]]);export{f as __pageData,m as default};
