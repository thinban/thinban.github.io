import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.1eb6b028.js";const x=JSON.parse('{"title":"nginx","description":"20240503_nginx","frontmatter":{"title":"nginx","description":"20240503_nginx","date":"2024-05-03T00:00:00.000Z","tags":["nginx","快捷复制"]},"headers":[],"relativePath":"posts/知识整理/20240503_nginx.md","filePath":"posts/知识整理/20240503_nginx.md"}'),p={name:"posts/知识整理/20240503_nginx.md"},l=e(`<h1 id="常用配置" tabindex="-1">常用配置 <a class="header-anchor" href="#常用配置" aria-label="Permalink to &quot;常用配置&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server {</span></span>
<span class="line"><span style="color:#e1e4e8;">    listen 80;</span></span>
<span class="line"><span style="color:#e1e4e8;">    charset utf-8;</span></span>
<span class="line"><span style="color:#e1e4e8;">    access_log off;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_pass http://app:8080;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header Host $host:$server_port;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Forwarded-Host $server_name;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    location /static {</span></span>
<span class="line"><span style="color:#e1e4e8;">        access_log   off;</span></span>
<span class="line"><span style="color:#e1e4e8;">        expires      30d;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        alias /app/static;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server {</span></span>
<span class="line"><span style="color:#24292e;">    listen 80;</span></span>
<span class="line"><span style="color:#24292e;">    charset utf-8;</span></span>
<span class="line"><span style="color:#24292e;">    access_log off;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    location / {</span></span>
<span class="line"><span style="color:#24292e;">        proxy_pass http://app:8080;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header Host $host:$server_port;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Forwarded-Host $server_name;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#24292e;">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    location /static {</span></span>
<span class="line"><span style="color:#24292e;">        access_log   off;</span></span>
<span class="line"><span style="color:#24292e;">        expires      30d;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        alias /app/static;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,2),o=[l];function t(c,r,i,_,d,y){return a(),n("div",null,o)}const f=s(p,[["render",t]]);export{x as __pageData,f as default};
