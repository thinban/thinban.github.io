import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "thinban's blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' },
    ],
    sidebar: [
      {
        text: 'index',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'index.md', link: '/./index' },
          { text: 'README.md', link: '/./README' },
          { text: 'sites.md', link: '/./sites' },
        ]
      },
      {
        text: 'db',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'mysql.md', link: '/db/mysql' },
          { text: 'redis.md', link: '/db/redis' },
        ]
      },
      {
        text: 'mq',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'rocketmq.md', link: '/mq/rocketmq' },
        ]
      },

      {
        text: 'java',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'dubbo.md', link: '/java/dubbo' },
          { text: 'javacode.md', link: '/java/javacode' },
          { text: 'mail.md', link: '/java/mail' },
          { text: 'mybatisplus.md', link: '/java/mybatisplus' },
        ]
      },
      {
        text: 'infra',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'docker-compose.md', link: '/infra/docker-compose' },
          { text: 'docker.md', link: '/infra/docker' },
          { text: 'git.md', link: '/infra/git' },
        ]
      },
      {
        text: 'os',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'shell.md', link: '/os/shell' },
          { text: 'ubuntu.md', link: '/os/ubuntu' },
          { text: 'windows.md', link: '/os/windows' },
        ]
      },
      {
        text: 'life',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '20240630.md', link: '/dairy/20240630' },
          { text: '20240713_一人之下.md', link: '/dairy/20240713_一人之下' },
          { text: '20240721周日.md', link: '/dairy/20240721周日' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
