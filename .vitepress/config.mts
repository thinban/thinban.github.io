import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "https://thinban.github.io/",
  title: "thinban's blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/sites' },
    ],
    sidebar: [
      { text: 'dairy', collapsible: true, collapsed: true, items: [{ text: '20240630', link: '/dairy/20240630.md' },{ text: '20240713_一人之下', link: '/dairy/20240713_一人之下.md' },{ text: '20240721周日', link: '/dairy/20240721周日.md' }] },
      { text: 'db', collapsible: true, collapsed: true, items: [{ text: 'mysql', link: '/db/mysql.md' }] },
      { text: 'infra', collapsible: true, collapsed: true, items: [{ text: 'docker-compose', link: '/infra/docker-compose.md' },{ text: 'docker', link: '/infra/docker.md' },{ text: 'git', link: '/infra/git.md' },{ text: 'nginx', link: '/infra/nginx.md' }] },
      { text: 'java', collapsible: true, collapsed: true, items: [{ text: 'dubbo', link: '/java/dubbo.md' },{ text: 'javacode', link: '/java/javacode.md' },{ text: 'mail', link: '/java/mail.md' },{ text: 'mybatisplus', link: '/java/mybatisplus.md' },{ text: 'springcloud', link: '/java/springcloud.md' },{ text: '网关参数', link: '/java/网关参数.md' }] },
      { text: 'mq', collapsible: true, collapsed: true, items: [{ text: 'rocketmq', link: '/mq/rocketmq.md' }] },
      { text: 'os', collapsible: true, collapsed: true, items: [{ text: 'macos', link: '/os/macos.md' },{ text: 'shell', link: '/os/shell.md' },{ text: 'ubuntu', link: '/os/ubuntu.md' },{ text: 'windows', link: '/os/windows.md' }] },
      { text: '启动模板', collapsible: true, collapsed: true, items: [{ text: 'dc-mysql', link: '/启动模板/dc-mysql.md' },{ text: 'dc-redis', link: '/启动模板/dc-redis.md' }] },
      { text: '.', collapsible: true, collapsed: true, items: [{ text: 'README', link: '/README.md' },{ text: 'index', link: '/index.md' },{ text: 'sites', link: '/sites.md' }] },
      ]
    ,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
