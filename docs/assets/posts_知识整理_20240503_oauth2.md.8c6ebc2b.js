import{_ as s,o as a,c as e,Q as t}from"./chunks/framework.1eb6b028.js";const u=JSON.parse('{"title":"oauth2","description":"20240503_oauth2","frontmatter":{"title":"oauth2","description":"20240503_oauth2","date":"2024-05-03T00:00:00.000Z","tags":["oauth2"]},"headers":[],"relativePath":"posts/知识整理/20240503_oauth2.md","filePath":"posts/知识整理/20240503_oauth2.md"}'),n={name:"posts/知识整理/20240503_oauth2.md"},p=t(`<h1 id="oauth2" tabindex="-1">oauth2 <a class="header-anchor" href="#oauth2" aria-label="Permalink to &quot;oauth2&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">授权码（authorization-code）</span></span>
<span class="line"><span style="color:#e1e4e8;">	*客户端：a.com	认证服务器：b.com</span></span>
<span class="line"><span style="color:#e1e4e8;">	https://b.com/oauth/authorize?response_type=code&amp;client_id=CLIENT_ID&amp;redirect_uri=CALLBACK_URL&amp;scope=read			https://a.com/callback?code=AUTHORIZATION_CODE</span></span>
<span class="line"><span style="color:#e1e4e8;">	https://b.com/oauth/token?client_id=CLIENT_ID&amp;client_secret=CLIENT_SECRET&amp;grant_type=authorization_code&amp;code=AUTHORIZATION_CODE&amp;redirect_uri=CALLBACK_URL		颁发ACCESS_TOKEN</span></span>
<span class="line"><span style="color:#e1e4e8;">隐藏式（implicit）</span></span>
<span class="line"><span style="color:#e1e4e8;">	*纯前端</span></span>
<span class="line"><span style="color:#e1e4e8;">	https://b.com/oauth/authorize?response_type=token&amp;client_id=CLIENT_ID&amp;redirect_uri=CALLBACK_URL&amp;scope=read	https://a.com/callback#token=ACCESS_TOKEN（前端)</span></span>
<span class="line"><span style="color:#e1e4e8;">密码式（password）</span></span>
<span class="line"><span style="color:#e1e4e8;">	*高度信任</span></span>
<span class="line"><span style="color:#e1e4e8;">	https://oauth.b.com/token?grant_type=password&amp;username=USERNAME&amp;password=PASSWORD&amp;client_id=CLIENT_ID	颁发ACCESS_TOKEN</span></span>
<span class="line"><span style="color:#e1e4e8;">客户端凭证（client credentials）</span></span>
<span class="line"><span style="color:#e1e4e8;">	*一般针对针对第三方应用</span></span>
<span class="line"><span style="color:#e1e4e8;">	https://oauth.b.com/token?grant_type=client_credentials&amp;client_id=CLIENT_ID&amp;client_secret=CLIENT_SECRET			颁发ACCESS_TOKEN	</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">curl -H &quot;Authorization: Bearer ACCESS_TOKEN&quot; &quot;https://api.b.com&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">授权码（authorization-code）</span></span>
<span class="line"><span style="color:#24292e;">	*客户端：a.com	认证服务器：b.com</span></span>
<span class="line"><span style="color:#24292e;">	https://b.com/oauth/authorize?response_type=code&amp;client_id=CLIENT_ID&amp;redirect_uri=CALLBACK_URL&amp;scope=read			https://a.com/callback?code=AUTHORIZATION_CODE</span></span>
<span class="line"><span style="color:#24292e;">	https://b.com/oauth/token?client_id=CLIENT_ID&amp;client_secret=CLIENT_SECRET&amp;grant_type=authorization_code&amp;code=AUTHORIZATION_CODE&amp;redirect_uri=CALLBACK_URL		颁发ACCESS_TOKEN</span></span>
<span class="line"><span style="color:#24292e;">隐藏式（implicit）</span></span>
<span class="line"><span style="color:#24292e;">	*纯前端</span></span>
<span class="line"><span style="color:#24292e;">	https://b.com/oauth/authorize?response_type=token&amp;client_id=CLIENT_ID&amp;redirect_uri=CALLBACK_URL&amp;scope=read	https://a.com/callback#token=ACCESS_TOKEN（前端)</span></span>
<span class="line"><span style="color:#24292e;">密码式（password）</span></span>
<span class="line"><span style="color:#24292e;">	*高度信任</span></span>
<span class="line"><span style="color:#24292e;">	https://oauth.b.com/token?grant_type=password&amp;username=USERNAME&amp;password=PASSWORD&amp;client_id=CLIENT_ID	颁发ACCESS_TOKEN</span></span>
<span class="line"><span style="color:#24292e;">客户端凭证（client credentials）</span></span>
<span class="line"><span style="color:#24292e;">	*一般针对针对第三方应用</span></span>
<span class="line"><span style="color:#24292e;">	https://oauth.b.com/token?grant_type=client_credentials&amp;client_id=CLIENT_ID&amp;client_secret=CLIENT_SECRET			颁发ACCESS_TOKEN	</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">curl -H &quot;Authorization: Bearer ACCESS_TOKEN&quot; &quot;https://api.b.com&quot;</span></span></code></pre></div>`,2),o=[p];function l(c,i,r,_,d,h){return a(),e("div",null,o)}const C=s(n,[["render",l]]);export{u as __pageData,C as default};
