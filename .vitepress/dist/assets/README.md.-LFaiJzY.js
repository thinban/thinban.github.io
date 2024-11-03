import{_ as a,c as n,o as s,a1 as e}from"./chunks/framework.C46D9NsM.js";const _=JSON.parse('{"title":"vitepress","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md"}'),p={name:"README.md"},l=e(`<h1 id="vitepress" tabindex="-1">vitepress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;vitepress&quot;">​</a></h1><ul><li><a href="https://vitepress.dev/guide/getting-started" target="_blank" rel="noreferrer">https://vitepress.dev/guide/getting-started</a></li><li>npm run docs:dev -- --host # linux export</li></ul><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><h3 id="命令行获取文本" tabindex="-1">命令行获取文本 <a class="header-anchor" href="#命令行获取文本" aria-label="Permalink to &quot;命令行获取文本&quot;">​</a></h3><p>curl d.thinban.top/mysql.md</p><h3 id="网页查看博客" tabindex="-1">网页查看博客 <a class="header-anchor" href="#网页查看博客" aria-label="Permalink to &quot;网页查看博客&quot;">​</a></h3><p><a href="https://blog.thinban.top" target="_blank" rel="noreferrer">https://blog.thinban.top</a></p><h3 id="相关nginx配置" tabindex="-1">相关nginx配置 <a class="header-anchor" href="#相关nginx配置" aria-label="Permalink to &quot;相关nginx配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span>        listen [::]:80;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        server_name d.thinban.top tb;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        root /var/www/blog;</span></span>
<span class="line"><span>        index index.html;</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>          #default_type text/html;</span></span>
<span class="line"><span>          autoindex on;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>  listen 80;</span></span>
<span class="line"><span>  listen [::]:80;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  server_name blog.thinban.top;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  root /var/www/blog/.vitepress/dist;</span></span>
<span class="line"><span>  #root /var/www/blog;</span></span>
<span class="line"><span>  index index.html;</span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>     try_files $uri $uri/ =404;</span></span>
<span class="line"><span>     #index  index.html;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="发布流程" tabindex="-1">发布流程 <a class="header-anchor" href="#发布流程" aria-label="Permalink to &quot;发布流程&quot;">​</a></h2><ul><li><p>一、编写</p></li><li><p>添加markdown文件</p></li><li><p>sh buildmenu.sh，配置到.vitepress/config.mts</p></li><li><p>git提交</p></li><li><p>二、服务器</p></li><li><p>git pull</p></li><li><p>npm run docs:build</p></li></ul>`,11),i=[l];function t(r,o,c,d,h,u){return s(),n("div",null,i)}const m=a(p,[["render",t]]);export{_ as __pageData,m as default};
