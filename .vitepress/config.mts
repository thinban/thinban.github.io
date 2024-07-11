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
        items: [
          { text: 'docker-compose.md', link: '/./docker-compose' },
          { text: 'docker.md', link: '/./docker' },
          { text: 'dubbo.md', link: '/./dubbo' },
          { text: 'git.md', link: '/./git' },
          { text: 'index.md', link: '/./index' },
          { text: 'javacode.md', link: '/./javacode' },
          { text: 'mybatisplus.md', link: '/./mybatisplus' },
          { text: 'mysql.md', link: '/./mysql' },
          { text: 'README.md', link: '/./README' },
          { text: 'redis.md', link: '/./redis' },
          { text: 'rocketmq.md', link: '/./rocketmq' },
          { text: 'shell.md', link: '/./shell' },
          { text: 'ubuntu.md', link: '/./ubuntu' },
          { text: 'windows.md', link: '/./windows' },
        ]
      },
      {
        text: 'dairy',
        collapsible: true,
        items: [
          { text: '20240630.md', link: '/dairy/20240630' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
