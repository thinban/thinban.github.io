import{_ as s,c as a,o as n,a1 as e}from"./chunks/framework.C46D9NsM.js";const u=JSON.parse('{"title":"docker-compose.yml","description":"","frontmatter":{},"headers":[],"relativePath":"db/redis.md","filePath":"db/redis.md"}'),p={name:"db/redis.md"},t=e(`<h1 id="docker-compose-yml" tabindex="-1">docker-compose.yml <a class="header-anchor" href="#docker-compose-yml" aria-label="Permalink to &quot;docker-compose.yml&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &#39;3.8&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  redis:</span></span>
<span class="line"><span>    image: redis:latest</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &quot;6379:6379&quot;</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./redis_data:/data</span></span></code></pre></div>`,2),o=[t];function c(i,l,r,d,_,m){return n(),a("div",null,o)}const k=s(p,[["render",c]]);export{u as __pageData,k as default};
