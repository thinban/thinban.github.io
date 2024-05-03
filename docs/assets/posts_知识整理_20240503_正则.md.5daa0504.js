import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.1eb6b028.js";const h=JSON.parse('{"title":"正则","description":"正则","frontmatter":{"title":"正则","description":"正则","date":"2024-05-03T00:00:00.000Z","tags":["正则","快捷复制"]},"headers":[],"relativePath":"posts/知识整理/20240503_正则.md","filePath":"posts/知识整理/20240503_正则.md"}'),p={name:"posts/知识整理/20240503_正则.md"},l=n(`<h1 id="正则" tabindex="-1">正则 <a class="header-anchor" href="#正则" aria-label="Permalink to &quot;正则&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\\s ==&gt; space</span></span>
<span class="line"><span style="color:#e1e4e8;">\\w ==&gt; word</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/&lt;.*&gt;/ ==&gt; &lt;h1&gt;RUNOOB-菜鸟教程&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">/&lt;.*?&gt;/  ==&gt;  &lt;h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">exp1(?=exp2)：查找 exp2 前面的 exp1。</span></span>
<span class="line"><span style="color:#e1e4e8;">(?&lt;=exp2)exp1：查找 exp2 后面的 exp1。</span></span>
<span class="line"><span style="color:#e1e4e8;">exp1(?!exp2)：查找后面不是 exp2 的 exp1。</span></span>
<span class="line"><span style="color:#e1e4e8;">(?&lt;!exp2)exp1：查找前面不是 exp2 的 exp1。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\\s ==&gt; space</span></span>
<span class="line"><span style="color:#24292e;">\\w ==&gt; word</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/&lt;.*&gt;/ ==&gt; &lt;h1&gt;RUNOOB-菜鸟教程&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">/&lt;.*?&gt;/  ==&gt;  &lt;h1&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">exp1(?=exp2)：查找 exp2 前面的 exp1。</span></span>
<span class="line"><span style="color:#24292e;">(?&lt;=exp2)exp1：查找 exp2 后面的 exp1。</span></span>
<span class="line"><span style="color:#24292e;">exp1(?!exp2)：查找后面不是 exp2 的 exp1。</span></span>
<span class="line"><span style="color:#24292e;">(?&lt;!exp2)exp1：查找前面不是 exp2 的 exp1。</span></span></code></pre></div>`,2),t=[l];function o(c,r,i,x,_,d){return e(),a("div",null,t)}const y=s(p,[["render",o]]);export{h as __pageData,y as default};
