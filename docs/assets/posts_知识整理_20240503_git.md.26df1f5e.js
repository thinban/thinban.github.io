import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.1eb6b028.js";const l="/assets/image-7.76a5157b.png",b=JSON.parse('{"title":"git","description":"git","frontmatter":{"title":"git","description":"git","date":"2024-04-27T00:00:00.000Z","tags":["git","快捷复制"]},"headers":[],"relativePath":"posts/知识整理/20240503_git.md","filePath":"posts/知识整理/20240503_git.md"}'),p={name:"posts/知识整理/20240503_git.md"},o=e(`<h1 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;git&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.git/</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- HEAD            # 当前分支的引用</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- config           # 存储仓库的配置信息</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- info/</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- exclude     # 定义全局忽略规则</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- hooks/</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- pre-commit   # 提交前运行的钩子脚本</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- post-checkout # 检出后运行的钩子脚本</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- ...</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- objects/        # 存储所有对象（提交、树、blob）</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- [a-z0-9]/   # 对象存储在 SHA-1 哈希目录结构中</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- info/</span></span>
<span class="line"><span style="color:#e1e4e8;">|       \`-- [pack]  # 打包的对象</span></span>
<span class="line"><span style="color:#e1e4e8;">|-- refs/                ## （git branch /  git checkout)</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |-- heads/      # 分支的引用</span></span>
<span class="line"><span style="color:#e1e4e8;">|   |   \`-- master  # master 分支的引用</span></span>
<span class="line"><span style="color:#e1e4e8;">|   \`-- tags/      # 标签的引用</span></span>
<span class="line"><span style="color:#e1e4e8;">|       \`-- v1.0    # v1.0 标签的引用</span></span>
<span class="line"><span style="color:#e1e4e8;">\`-- logs/</span></span>
<span class="line"><span style="color:#e1e4e8;">    \`-- refs/</span></span>
<span class="line"><span style="color:#e1e4e8;">        |-- heads/   # 分支的日志</span></span>
<span class="line"><span style="color:#e1e4e8;">        |   \`-- master # master 分支的日志</span></span>
<span class="line"><span style="color:#e1e4e8;">        \`-- tags/    # 标签的日志</span></span>
<span class="line"><span style="color:#e1e4e8;">            \`-- v1.0   # v1.0 标签的日志</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.git/</span></span>
<span class="line"><span style="color:#24292e;">|-- HEAD            # 当前分支的引用</span></span>
<span class="line"><span style="color:#24292e;">|-- config           # 存储仓库的配置信息</span></span>
<span class="line"><span style="color:#24292e;">|-- info/</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- exclude     # 定义全局忽略规则</span></span>
<span class="line"><span style="color:#24292e;">|-- hooks/</span></span>
<span class="line"><span style="color:#24292e;">|   |-- pre-commit   # 提交前运行的钩子脚本</span></span>
<span class="line"><span style="color:#24292e;">|   |-- post-checkout # 检出后运行的钩子脚本</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- ...</span></span>
<span class="line"><span style="color:#24292e;">|-- objects/        # 存储所有对象（提交、树、blob）</span></span>
<span class="line"><span style="color:#24292e;">|   |-- [a-z0-9]/   # 对象存储在 SHA-1 哈希目录结构中</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- info/</span></span>
<span class="line"><span style="color:#24292e;">|       \`-- [pack]  # 打包的对象</span></span>
<span class="line"><span style="color:#24292e;">|-- refs/                ## （git branch /  git checkout)</span></span>
<span class="line"><span style="color:#24292e;">|   |-- heads/      # 分支的引用</span></span>
<span class="line"><span style="color:#24292e;">|   |   \`-- master  # master 分支的引用</span></span>
<span class="line"><span style="color:#24292e;">|   \`-- tags/      # 标签的引用</span></span>
<span class="line"><span style="color:#24292e;">|       \`-- v1.0    # v1.0 标签的引用</span></span>
<span class="line"><span style="color:#24292e;">\`-- logs/</span></span>
<span class="line"><span style="color:#24292e;">    \`-- refs/</span></span>
<span class="line"><span style="color:#24292e;">        |-- heads/   # 分支的日志</span></span>
<span class="line"><span style="color:#24292e;">        |   \`-- master # master 分支的日志</span></span>
<span class="line"><span style="color:#24292e;">        \`-- tags/    # 标签的日志</span></span>
<span class="line"><span style="color:#24292e;">            \`-- v1.0   # v1.0 标签的日志</span></span></code></pre></div><p><img src="`+l+`" alt="Git 工作区、暂存区和版本库"></p><h2 id="git-log" tabindex="-1">git log <a class="header-anchor" href="#git-log" aria-label="Permalink to &quot;git log&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">查看文件在哪些分支上修改</span></span>
<span class="line"><span style="color:#e1e4e8;">git log --follow -- build.sh</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">git log --graph</span></span>
<span class="line"><span style="color:#e1e4e8;">git log --author=&quot;thinban&quot; --since=&quot;2023-04-01&quot; --until=&quot;2025-05-03&quot; -- build.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">查看文件在哪些分支上修改</span></span>
<span class="line"><span style="color:#24292e;">git log --follow -- build.sh</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">git log --graph</span></span>
<span class="line"><span style="color:#24292e;">git log --author=&quot;thinban&quot; --since=&quot;2023-04-01&quot; --until=&quot;2025-05-03&quot; -- build.sh</span></span></code></pre></div><h2 id="git-show" tabindex="-1">git show <a class="header-anchor" href="#git-show" aria-label="Permalink to &quot;git show&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git show --stat ff664ea1dfb61d4c141c3753c99d8ccec911e42c</span></span>
<span class="line"><span style="color:#e1e4e8;">(git show HEAD)</span></span>
<span class="line"><span style="color:#e1e4e8;">git show ff664ea1dfb61d4c141c3753c99d8ccec911e42c --  build.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git show --stat ff664ea1dfb61d4c141c3753c99d8ccec911e42c</span></span>
<span class="line"><span style="color:#24292e;">(git show HEAD)</span></span>
<span class="line"><span style="color:#24292e;">git show ff664ea1dfb61d4c141c3753c99d8ccec911e42c --  build.sh</span></span></code></pre></div><h2 id="git-ignore" tabindex="-1">git ignore <a class="header-anchor" href="#git-ignore" aria-label="Permalink to &quot;git ignore&quot;">​</a></h2><p>如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git rm -r --cached .</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &#39;update .gitignore&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git rm -r --cached .</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &#39;update .gitignore&#39;</span></span></code></pre></div><h2 id="创建代码仓库" tabindex="-1">创建代码仓库 <a class="header-anchor" href="#创建代码仓库" aria-label="Permalink to &quot;创建代码仓库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mkdir my-repo.git</span></span>
<span class="line"><span style="color:#e1e4e8;">cd my-repo.git</span></span>
<span class="line"><span style="color:#e1e4e8;">git init --bare</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mkdir my-repo.git</span></span>
<span class="line"><span style="color:#24292e;">cd my-repo.git</span></span>
<span class="line"><span style="color:#24292e;">git init --bare</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">重置当前分支到特定的状态：</span></span>
<span class="line"><span style="color:#e1e4e8;">git reset --hard [提交哈希]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">查看两个分支的差异：</span></span>
<span class="line"><span style="color:#e1e4e8;">git diff [分支1] [分支2]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">修改最近的一次提交：</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit --amend</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">交互式地选择文件添加到索引：</span></span>
<span class="line"><span style="color:#e1e4e8;">git add -i</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">交互式地暂存或取消暂存更改：</span></span>
<span class="line"><span style="color:#e1e4e8;">git stash</span></span>
<span class="line"><span style="color:#e1e4e8;">git stash pop</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">查看所有引用（分支、标签）指向的提交：</span></span>
<span class="line"><span style="color:#e1e4e8;">git reflog</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">配置</span></span>
<span class="line"><span style="color:#e1e4e8;">git config --global user.name &quot;thinban&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">git config --global user.email &quot;thinban@mail.com&quot;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">重置当前分支到特定的状态：</span></span>
<span class="line"><span style="color:#24292e;">git reset --hard [提交哈希]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">查看两个分支的差异：</span></span>
<span class="line"><span style="color:#24292e;">git diff [分支1] [分支2]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">修改最近的一次提交：</span></span>
<span class="line"><span style="color:#24292e;">git commit --amend</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">交互式地选择文件添加到索引：</span></span>
<span class="line"><span style="color:#24292e;">git add -i</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">交互式地暂存或取消暂存更改：</span></span>
<span class="line"><span style="color:#24292e;">git stash</span></span>
<span class="line"><span style="color:#24292e;">git stash pop</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">查看所有引用（分支、标签）指向的提交：</span></span>
<span class="line"><span style="color:#24292e;">git reflog</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">配置</span></span>
<span class="line"><span style="color:#24292e;">git config --global user.name &quot;thinban&quot;</span></span>
<span class="line"><span style="color:#24292e;">git config --global user.email &quot;thinban@mail.com&quot;</span></span></code></pre></div>`,14),c=[o];function t(i,r,g,d,y,h){return a(),n("div",null,c)}const m=s(p,[["render",t]]);export{b as __pageData,m as default};
