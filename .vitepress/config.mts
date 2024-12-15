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
    outline: [1, 2, 3],
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          }
        }
      }
    },
    sidebar:
      [
        { text: 'img', collapsible: true, collapsed: true, items: [] },
        { text: 'dairy', collapsible: true, collapsed: true, items: [{ text: '20240630', link: '/dairy/20240630.md' }, { text: '20240713_一人之下', link: '/dairy/20240713_一人之下.md' }, { text: '20240721周日', link: '/dairy/20240721周日.md' }, { text: '20241123', link: '/dairy/20241123.md' }] },
        { text: 'db', collapsible: true, collapsed: true, items: [{ text: 'mysql', link: '/db/mysql.md' }] },
        { text: 'infra', collapsible: true, collapsed: true, items: [{ text: 'apollo', link: '/infra/apollo.md' }, { text: 'docker', link: '/infra/docker.md' }, { text: 'docker-compose', link: '/infra/docker-compose.md' }, { text: 'git', link: '/infra/git.md' }, { text: 'nexus', link: '/infra/nexus.md' }, { text: 'nginx', link: '/infra/nginx.md' }] },
        { text: 'java', collapsible: true, collapsed: true, items: [{ text: 'dubbo', link: '/java/dubbo.md' }, { text: 'javacode', link: '/java/javacode.md' }, { text: 'mail', link: '/java/mail.md' }, { text: 'mybatisplus', link: '/java/mybatisplus.md' }, { text: 'springcloud', link: '/java/springcloud.md' }, { text: '网关参数', link: '/java/网关参数.md' }] },
        { text: 'mq', collapsible: true, collapsed: true, items: [{ text: 'rocketmq', link: '/mq/rocketmq.md' }] },
        { text: 'network', collapsible: true, collapsed: true, items: [{ text: '网络抓包', link: '/network/网络抓包.md' }] },
        { text: 'os', collapsible: true, collapsed: true, items: [{ text: 'linux', link: '/os/linux.md' }, { text: 'macos', link: '/os/macos.md' }, { text: 'shell', link: '/os/shell.md' }, { text: 'windows', link: '/os/windows.md' }] },
        { text: 'template', collapsible: true, collapsed: true, items: [{ text: 'dc-apollo', link: '/template/dc-apollo.md' }, { text: 'dc-mysql', link: '/template/dc-mysql.md' }, { text: 'dc-nexus', link: '/template/dc-nexus.md' }, { text: 'dc-nginx', link: '/template/dc-nginx.md' }, { text: 'dc-redis', link: '/template/dc-redis.md' }, { text: 'dc-rocketmq', link: '/template/dc-rocketmq.md' }] },
        { text: '.', collapsible: true, collapsed: true, items: [{ text: 'index', link: '/index.md' }, { text: 'README', link: '/README.md' }] },
      ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
