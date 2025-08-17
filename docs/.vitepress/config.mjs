import { defineConfig } from 'vitepress'
// auto_sidebar
import { set_sidebar } from './set_sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AIGC开发指南",
  head: [
    ["link", { rel: "icon", href: "/ai.svg" }],
    ['link', { rel: 'canonical', href: 'https://aigc.inshub.cn' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#3c3c3d' }],
    ['meta', { name: 'keywords', content: 'AIGC, AI开发, Chrome插件, AI小程序, 人工智能开发, AI工具, Cursor教程, Claude Code教程, Windsurf, Trae AI' }],
    
    // OpenGraph配置
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-CN' }],
    ['meta', { property: 'og:title', content: 'AIGC开发指南 - AI工具开发教程' }],
    ['meta', { property: 'og:description', content: '全面的AI开发指南，包含Chrome插件、Web站点、小程序的AI开发教程和最佳实践。使用Claude Code、Cursor、Windsurf等AI工具进行高效开发。' }],
    ['meta', { property: 'og:image', content: '/ai.svg' }],
    ['meta', { property: 'og:site_name', content: 'AIGC开发指南' }],
    
    // Twitter卡片
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:title', content: 'AIGC开发指南 - AI工具开发教程' }],
    ['meta', { property: 'twitter:description', content: '全面的AI开发指南，包含Chrome插件、Web站点、小程序的AI开发教程和最佳实践。使用Claude Code、Cursor、Windsurf等AI工具进行高效开发。' }],
    ['meta', { property: 'twitter:image', content: '/ai.svg' }],
    
    // 验证标签
    ['meta', { name: 'baidu-site-verification', content: 'code-xxx' }],
    ['meta', { name: 'google-site-verification', content: 'xxx' }]
  ],
  description: "全面的AI开发指南，包含Chrome插件、Web站点、小程序的AI开发教程和最佳实践。使用Claude Code、Cursor、Windsurf等AI工具进行高效开发。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/ai.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chrome插件', link: '/chrome/' },
      { text: 'Web站点', link: '/web/' },
       { text: 'Claude教程', link: '/claude/' },
      { text: '小程序', link: '/wechat/' }
    ],
    outline: 'deep',
    outlineTitle: '页面目录',
    sidebar: { '/chrome': set_sidebar('chrome'), '/web': set_sidebar('web'), '/claude': set_sidebar('claude'),'/wechat': set_sidebar('wechat') },
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
