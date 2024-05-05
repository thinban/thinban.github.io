import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.1eb6b028.js";const m=JSON.parse('{"title":"nginx","description":"20240503_nginx","frontmatter":{"title":"nginx","description":"20240503_nginx","date":"2024-05-03T00:00:00.000Z","tags":["nginx","快捷复制"]},"headers":[],"relativePath":"posts/知识整理/20240503_nginx.md","filePath":"posts/知识整理/20240503_nginx.md"}'),l={name:"posts/知识整理/20240503_nginx.md"},p=e(`<h1 id="常用配置" tabindex="-1">常用配置 <a class="header-anchor" href="#常用配置" aria-label="Permalink to &quot;常用配置&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server {</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="nginx限制请求" tabindex="-1">nginx限制请求 <a class="header-anchor" href="#nginx限制请求" aria-label="Permalink to &quot;nginx限制请求&quot;">​</a></h1><h2 id="_1-限制请求速率-ngx-http-limit-req-module-模块" tabindex="-1">1.限制请求速率（ngx_http_limit_req_module 模块） <a class="header-anchor" href="#_1-限制请求速率-ngx-http-limit-req-module-模块" aria-label="Permalink to &quot;1.限制请求速率（ngx_http_limit_req_module 模块）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">    limit_req_zone $binary_remote_addr zone=mylimit:10m rate=2r/s;</span></span>
<span class="line"><span style="color:#e1e4e8;">    server {</span></span>
<span class="line"><span style="color:#e1e4e8;">        location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">            limit_req zone=mylimit burst=4 nodelay;</span></span>
<span class="line"><span style="color:#e1e4e8;">            # burst 表示突发请求</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    limit_req_zone $binary_remote_addr zone=mylimit:10m rate=2r/s;</span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">        location / {</span></span>
<span class="line"><span style="color:#24292e;">            limit_req zone=mylimit burst=4 nodelay;</span></span>
<span class="line"><span style="color:#24292e;">            # burst 表示突发请求</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_2-限制并发连接数-ngx-http-limit-conn-module-模块" tabindex="-1">2.限制并发连接数（ngx_http_limit_conn_module 模块） <a class="header-anchor" href="#_2-限制并发连接数-ngx-http-limit-conn-module-模块" aria-label="Permalink to &quot;2.限制并发连接数（ngx_http_limit_conn_module 模块）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">    limit_conn_zone $binary_remote_addr zone=perip:10m;</span></span>
<span class="line"><span style="color:#e1e4e8;">    server {</span></span>
<span class="line"><span style="color:#e1e4e8;">        location /download/ {</span></span>
<span class="line"><span style="color:#e1e4e8;">            limit_conn perip 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    limit_conn_zone $binary_remote_addr zone=perip:10m;</span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">        location /download/ {</span></span>
<span class="line"><span style="color:#24292e;">            limit_conn perip 1;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_3-黑白名单配置" tabindex="-1">3. 黑白名单配置 <a class="header-anchor" href="#_3-黑白名单配置" aria-label="Permalink to &quot;3. 黑白名单配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">    map $remote_addr $block {</span></span>
<span class="line"><span style="color:#e1e4e8;">        default 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        192.168.1.1 1; # 黑名单 IP</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    server {</span></span>
<span class="line"><span style="color:#e1e4e8;">        location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if ($block) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                return 403;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    map $remote_addr $block {</span></span>
<span class="line"><span style="color:#24292e;">        default 0;</span></span>
<span class="line"><span style="color:#24292e;">        192.168.1.1 1; # 黑名单 IP</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">        location / {</span></span>
<span class="line"><span style="color:#24292e;">            if ($block) {</span></span>
<span class="line"><span style="color:#24292e;">                return 403;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_4-限速配置" tabindex="-1">4. 限速配置 <a class="header-anchor" href="#_4-限速配置" aria-label="Permalink to &quot;4. 限速配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">    server {</span></span>
<span class="line"><span style="color:#e1e4e8;">        location /download/ {</span></span>
<span class="line"><span style="color:#e1e4e8;">            limit_rate 500k; # 限制下载速率为 500KB/s</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        location /upload/ {</span></span>
<span class="line"><span style="color:#e1e4e8;">            client_max_body_size 10M; # 设置上传文件大小限制</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">        location /download/ {</span></span>
<span class="line"><span style="color:#24292e;">            limit_rate 500k; # 限制下载速率为 500KB/s</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        location /upload/ {</span></span>
<span class="line"><span style="color:#24292e;">            client_max_body_size 10M; # 设置上传文件大小限制</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,11),o=[p];function c(t,r,i,d,y,_){return n(),a("div",null,o)}const g=s(l,[["render",c]]);export{m as __pageData,g as default};
