import{_ as s,c as a,o as n,a1 as e}from"./chunks/framework.C46D9NsM.js";const N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"db/mysql.md","filePath":"db/mysql.md"}'),p={name:"db/mysql.md"},l=e(`<h2 id="docker-compose-yml" tabindex="-1">docker-compose.yml <a class="header-anchor" href="#docker-compose-yml" aria-label="Permalink to &quot;docker-compose.yml&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &#39;3.8&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  mysql:</span></span>
<span class="line"><span>    image: mysql:latest</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      MYSQL_ROOT_PASSWORD: your_root_password</span></span>
<span class="line"><span>      MYSQL_DATABASE: your_database_name</span></span>
<span class="line"><span>      MYSQL_USER: your_username</span></span>
<span class="line"><span>      MYSQL_PASSWORD: your_password</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;3306:3306&quot;</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./mysql_data:/var/lib/mysql</span></span></code></pre></div><h2 id="创建数据库" tabindex="-1">创建数据库 <a class="header-anchor" href="#创建数据库" aria-label="Permalink to &quot;创建数据库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE DATABASE &lt;YOUR_DBNAME&gt; CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;</span></span></code></pre></div><h2 id="创建数据表和数据" tabindex="-1">创建数据表和数据 <a class="header-anchor" href="#创建数据表和数据" aria-label="Permalink to &quot;创建数据表和数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CREATE TABLE users (</span></span>
<span class="line"><span>    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    name VARCHAR(50) NOT NULL COMMENT &#39;name&#39;,</span></span>
<span class="line"><span>    password VARCHAR(100) NOT NULL COMMENT &#39;password&#39;,</span></span>
<span class="line"><span>    age INT UNSIGNED DEFAULT 0 COMMENT &#39;age&#39;,</span></span>
<span class="line"><span>    status TINYINT UNSIGNED DEFAULT 1 COMMENT &#39;status:1-active,0-inactive&#39;,</span></span>
<span class="line"><span>    bool_del TINYINT UNSIGNED DEFAULT 0 COMMENT &#39;逻辑删除标志 (0 表示未删除，1 表示已删除)&#39;,</span></span>
<span class="line"><span>    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT &#39;创建时间&#39;,</span></span>
<span class="line"><span>    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT &#39;更新时间&#39;,</span></span>
<span class="line"><span>    created_by INT UNSIGNED DEFAULT 0 COMMENT &#39;创建者的用户ID&#39;,</span></span>
<span class="line"><span>    updated_by INT UNSIGNED DEFAULT 0 COMMENT &#39;最后更新者的用户ID&#39;</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=&#39;用户表&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO users (name, password, age, status, bool_del, created_at, updated_at)</span></span>
<span class="line"><span>VALUES (&#39;Alice&#39;, &#39;hashed_password_here&#39;, 28, 1, 0, NOW(), NOW());</span></span>
<span class="line"><span>INSERT INTO users (name, password, age, status, bool_del, created_at, updated_at, created_by)</span></span>
<span class="line"><span>VALUES (&#39;Bob&#39;, &#39;hashed_password_here&#39;, 32, 1, 0, NOW(), NOW(), 1);</span></span>
<span class="line"><span>INSERT INTO users (name, password, age, status, bool_del, created_at, updated_at, created_by, updated_by)</span></span>
<span class="line"><span>VALUES (&#39;Eve&#39;, &#39;hashed_password_here&#39;, 25, 1, 0, NOW(), NOW(), 2, 1);</span></span></code></pre></div>`,6),t=[l];function i(c,o,d,r,_,T){return n(),a("div",null,t)}const u=s(p,[["render",i]]);export{N as __pageData,u as default};
