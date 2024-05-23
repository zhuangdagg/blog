import { defineConfig } from 'vitepress'
import { readdirSync } from 'node:fs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "博客",
  description: "学习、记录、巩固",
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico'}]
  ],
  lastUpdated: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    image: { lazyLoading: true },
    toc: { level: [2, 3] },
    config: (md) => {
      // 使用更多的markdown-it插件
      // md.use(markdown-plugin)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo.png',
      dark: '/logo.png',
      // alt: 'blunt weblog'
    },
    siteTitle: false,
    search: {
      provider: 'local'
    },
    aside: true,
    outline: {
      label: '页面导航',
      level: 'deep'
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '分类',
        items: [
          {
            text: '前端篇',
            link: '/todo'
          },
          {
            text: '后端篇',
            link: '/todo'
          },
          {
            text: '笔记',
            link: '/docs/note/issues'
          },
          {
            text: '规则示例',
            link: '/docs/example'
          }
        ]
      }
    ],

    sidebar: {
        '/docs/example': [
          { 
            text: 'vitepress 使用示例', 
            collapsed: false,
            link: '/docs/example'
          },  // link 使用绝对路径，这里菜单才会和路由匹配高亮
          
        ],
        '/docs/note': [{
          text: '笔记', 
          collapsed: false,
          items: getSidebarLinkList('./docs/note', '/docs/note/')
        }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhuangdagg' },
      // { icon: 'instagram', link: './resume_cn'}
    ],

    lastUpdated: {
      text: '最近修改',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: 'light theme',
    darkModeSwitchTitle: 'dark theme',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: 'top',
    externalLinkIcon: true,
  }
})

function getPathName(path = './') {
  return readdirSync(path);
}

function getSidebarLinkList(path = './', prefix = '') {
  // console.log(getPathName(path))
  const res = getPathName(path).map(item => ({
    text: item.slice(0, -3),
    link: prefix + item
  }))

  console.log(res)
  return res
}
