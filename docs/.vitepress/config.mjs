import { defineConfig } from 'vitepress'
// auto_sidebar
import { set_sidebar } from './set_sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AIGC",
  head: [["link", { rel: "icon", href: "/ai.svg" }]],
  description: "A AIGC Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/ai.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ChatGPT', link: '/chatgpt/' },
      { text: 'MidJourney', link: '/midjourney/' },
      { text: 'Sora', link: '/sora/' }
    ],
    sidebar: { '/chatgpt': set_sidebar('chatgpt'), '/midjourney': set_sidebar('midjourney'), '/sora': set_sidebar('sora') },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/inshub' }
    ]
  }
})
