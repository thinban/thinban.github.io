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
{ text: 'redis.md', link: '/./redis' },
{ text: 'index.md', link: '/./index' },
{ text: 'mysql.md', link: '/./mysql' },
    ]
  },
  {
    text: 'dairy',        
    collapsible: true,
    items: [
      { text: '20240629.md', link: '/dairy/20240629' },
    ]
  },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
