import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.1eb6b028.js";const u=JSON.parse('{"title":"接单大致流程","description":"20240424_接单大致流程","frontmatter":{"title":"接单大致流程","description":"20240424_接单大致流程","date":"2024-04-24T00:00:00.000Z","tags":["技巧"]},"headers":[],"relativePath":"posts/知识整理/20240424_接单大致流程.md","filePath":"posts/知识整理/20240424_接单大致流程.md"}'),l={name:"posts/知识整理/20240424_接单大致流程.md"},p=e(`<h1 id="接单" tabindex="-1">接单 <a class="header-anchor" href="#接单" aria-label="Permalink to &quot;接单&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">确定大致需求</span></span>
<span class="line"><span style="color:#e1e4e8;">	预算</span></span>
<span class="line"><span style="color:#e1e4e8;">	预估用户量和数据量</span></span>
<span class="line"><span style="color:#e1e4e8;">	已有资源</span></span>
<span class="line"><span style="color:#e1e4e8;">	预期时间</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">详细梳理开发功能点，画原型图</span></span>
<span class="line"><span style="color:#e1e4e8;">	《需求分析》</span></span>
<span class="line"><span style="color:#e1e4e8;">	思维导图</span></span>
<span class="line"><span style="color:#e1e4e8;">		用户</span></span>
<span class="line"><span style="color:#e1e4e8;">		会员</span></span>
<span class="line"><span style="color:#e1e4e8;">		管理用户</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">工时评估，确定费用</span></span>
<span class="line"><span style="color:#e1e4e8;">	*工作的时薪*接单系数（1.2~1.5）</span></span>
<span class="line"><span style="color:#e1e4e8;">	需求分析、功能梳理（就是前面做的那些，还没收钱的呢）</span></span>
<span class="line"><span style="color:#e1e4e8;">	UI 设计、交互设计</span></span>
<span class="line"><span style="color:#e1e4e8;">	前端开发</span></span>
<span class="line"><span style="color:#e1e4e8;">	后端开发</span></span>
<span class="line"><span style="color:#e1e4e8;">	系统运维（包含服务器购买、搭建、认证、配置等）</span></span>
<span class="line"><span style="color:#e1e4e8;">	后期维护</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">出正式的 UI 设计稿(完整费用)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">拟定合同、签合同</span></span>
<span class="line"><span style="color:#e1e4e8;">	乙方将严格按照经过甲方审核的《软件功能设计书》的要求进行软件的开发设计。</span></span>
<span class="line"><span style="color:#e1e4e8;">	甲方托付乙方开发的软件在签订合同之后如需增加其它功能，必须以书面形式呈交给乙方，乙方做改动并酌情收取适当费用。</span></span>
<span class="line"><span style="color:#e1e4e8;">	其他注意的点</span></span>
<span class="line"><span style="color:#e1e4e8;">		乙方交付日期，以及最多延期多久，如果超时怎么办？</span></span>
<span class="line"><span style="color:#e1e4e8;">		甲方付款方式和日期（我们是用的 442 ，开工付 40%，中期验收付 40%，开发完验收付 20%）。</span></span>
<span class="line"><span style="color:#e1e4e8;">		甲方拖欠项目款的处理方式（支付迟延履行金等）。</span></span>
<span class="line"><span style="color:#e1e4e8;">		服务器费用是谁出？如果是乙方，需要注意包服务器的时限。</span></span>
<span class="line"><span style="color:#e1e4e8;">		项目维护期，一般一年半年的吧。</span></span>
<span class="line"><span style="color:#e1e4e8;">		乙方不保证项目 100% 可用，只能保障支撑 &lt;u&gt;多少人&lt;/u&gt; 使用，支撑同时在线人数 &lt;u&gt;多少人&lt;/u&gt; ，如果遇到恶意攻击，不归乙方负责。</span></span>
<span class="line"><span style="color:#e1e4e8;">		软件归属权是谁的？（如果项目款比较少的话，乙方可以要求要软件归属权，之后甲方如果想把项目接回去自己公司维护的话，需要从乙方手里买，这样乙方可以回点血）</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">开发阶段</span></span>
<span class="line"><span style="color:#e1e4e8;">	微信小程序</span></span>
<span class="line"><span style="color:#e1e4e8;">		*云函数可转发请求到ip。</span></span>
<span class="line"><span style="color:#e1e4e8;">		必须是有备案的域名。</span></span>
<span class="line"><span style="color:#e1e4e8;">		必须是有 SSL 证书（ https ）。</span></span>
<span class="line"><span style="color:#e1e4e8;">		域名不得带端口号。</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">验收、上线</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">TODO</span></span>
<span class="line"><span style="color:#e1e4e8;">	需求书</span></span>
<span class="line"><span style="color:#e1e4e8;">	开发功能点</span></span>
<span class="line"><span style="color:#e1e4e8;">	原型图</span></span>
<span class="line"><span style="color:#e1e4e8;">	工时费用</span></span>
<span class="line"><span style="color:#e1e4e8;">	UI稿</span></span>
<span class="line"><span style="color:#e1e4e8;">	合同</span></span>
<span class="line"><span style="color:#e1e4e8;">	源码</span></span>
<span class="line"><span style="color:#e1e4e8;">	测试报告</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">确定大致需求</span></span>
<span class="line"><span style="color:#24292e;">	预算</span></span>
<span class="line"><span style="color:#24292e;">	预估用户量和数据量</span></span>
<span class="line"><span style="color:#24292e;">	已有资源</span></span>
<span class="line"><span style="color:#24292e;">	预期时间</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">详细梳理开发功能点，画原型图</span></span>
<span class="line"><span style="color:#24292e;">	《需求分析》</span></span>
<span class="line"><span style="color:#24292e;">	思维导图</span></span>
<span class="line"><span style="color:#24292e;">		用户</span></span>
<span class="line"><span style="color:#24292e;">		会员</span></span>
<span class="line"><span style="color:#24292e;">		管理用户</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">工时评估，确定费用</span></span>
<span class="line"><span style="color:#24292e;">	*工作的时薪*接单系数（1.2~1.5）</span></span>
<span class="line"><span style="color:#24292e;">	需求分析、功能梳理（就是前面做的那些，还没收钱的呢）</span></span>
<span class="line"><span style="color:#24292e;">	UI 设计、交互设计</span></span>
<span class="line"><span style="color:#24292e;">	前端开发</span></span>
<span class="line"><span style="color:#24292e;">	后端开发</span></span>
<span class="line"><span style="color:#24292e;">	系统运维（包含服务器购买、搭建、认证、配置等）</span></span>
<span class="line"><span style="color:#24292e;">	后期维护</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">出正式的 UI 设计稿(完整费用)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">拟定合同、签合同</span></span>
<span class="line"><span style="color:#24292e;">	乙方将严格按照经过甲方审核的《软件功能设计书》的要求进行软件的开发设计。</span></span>
<span class="line"><span style="color:#24292e;">	甲方托付乙方开发的软件在签订合同之后如需增加其它功能，必须以书面形式呈交给乙方，乙方做改动并酌情收取适当费用。</span></span>
<span class="line"><span style="color:#24292e;">	其他注意的点</span></span>
<span class="line"><span style="color:#24292e;">		乙方交付日期，以及最多延期多久，如果超时怎么办？</span></span>
<span class="line"><span style="color:#24292e;">		甲方付款方式和日期（我们是用的 442 ，开工付 40%，中期验收付 40%，开发完验收付 20%）。</span></span>
<span class="line"><span style="color:#24292e;">		甲方拖欠项目款的处理方式（支付迟延履行金等）。</span></span>
<span class="line"><span style="color:#24292e;">		服务器费用是谁出？如果是乙方，需要注意包服务器的时限。</span></span>
<span class="line"><span style="color:#24292e;">		项目维护期，一般一年半年的吧。</span></span>
<span class="line"><span style="color:#24292e;">		乙方不保证项目 100% 可用，只能保障支撑 &lt;u&gt;多少人&lt;/u&gt; 使用，支撑同时在线人数 &lt;u&gt;多少人&lt;/u&gt; ，如果遇到恶意攻击，不归乙方负责。</span></span>
<span class="line"><span style="color:#24292e;">		软件归属权是谁的？（如果项目款比较少的话，乙方可以要求要软件归属权，之后甲方如果想把项目接回去自己公司维护的话，需要从乙方手里买，这样乙方可以回点血）</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">开发阶段</span></span>
<span class="line"><span style="color:#24292e;">	微信小程序</span></span>
<span class="line"><span style="color:#24292e;">		*云函数可转发请求到ip。</span></span>
<span class="line"><span style="color:#24292e;">		必须是有备案的域名。</span></span>
<span class="line"><span style="color:#24292e;">		必须是有 SSL 证书（ https ）。</span></span>
<span class="line"><span style="color:#24292e;">		域名不得带端口号。</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">验收、上线</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">TODO</span></span>
<span class="line"><span style="color:#24292e;">	需求书</span></span>
<span class="line"><span style="color:#24292e;">	开发功能点</span></span>
<span class="line"><span style="color:#24292e;">	原型图</span></span>
<span class="line"><span style="color:#24292e;">	工时费用</span></span>
<span class="line"><span style="color:#24292e;">	UI稿</span></span>
<span class="line"><span style="color:#24292e;">	合同</span></span>
<span class="line"><span style="color:#24292e;">	源码</span></span>
<span class="line"><span style="color:#24292e;">	测试报告</span></span></code></pre></div>`,2),t=[p];function o(c,i,r,y,_,d){return n(),a("div",null,t)}const g=s(l,[["render",o]]);export{u as __pageData,g as default};
