import { defineConfig } from 'vitepress'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

import { getDocsSideBar } from '../utils/getSideBar'

const wechatIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1.19em" height="1em" viewBox="0 0 2048 1728">
    <path fill="currentColor" d="M580 429q0-41-25-66t-66-25q-43 0-76 25.5T380 429q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5m743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5T1160 936q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51m-236-507q0-41-24.5-66T997 338q-43 0-76 25.5T888 429q0 39 33 64.5t76 25.5q41 0 65.5-24.5T1087 429m635 507q0-28-26-50t-65-22q-27 0-49.5 22.5T1559 936q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51m-266-397q-31-4-70-4q-169 0-311 77T851.5 820.5T770 1108q0 78 23 152q-35 3-68 3q-26 0-50-1.5t-55-6.5t-44.5-7t-54.5-10.5t-50-10.5l-253 127l72-218Q0 933 0 646q0-169 97.5-311t264-223.5T725 30q176 0 332.5 66t262 182.5T1456 539m592 561q0 117-68.5 223.5T1794 1517l55 181l-199-109q-150 37-218 37q-169 0-311-70.5T897.5 1364T816 1100t81.5-264T1121 644.5t311-70.5q161 0 303 70.5t227.5 192T2048 1100" />
</svg>`

const dirname = import.meta.dirname

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "博客",
  description: "学习、记录、巩固",
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico'}],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?a72f3f2da8c8182cbfdcfe91c47d9adc";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  vite: {
    ssr: {
      noExternal: ["@vue/repl"]
    }
  },
  lastUpdated: true,
  ignoreDeadLinks: true,
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
      { text: '练习场', 
        items: [
          { text: 'vanilla', link: '/js-playground#test1', target: '_blank' },
          { text: 'vue', link: '/playground#test1', target: '_blank' },
        ]
      },
      {
        text: '分类',
        items: [
          {
            text: '前端篇',
            link: '/docs/frontend/工程化'
          },
          {
            text: '后端篇',
            link: '/docs/backend/docker/index'
          },
          {
            text: '3d',
            link: '/docs/3d/three/基础'
          },
          {
            text: 'Rust篇',
            link: '/docs/rust/install'
          },
          {
            text: 'Python篇',
            link: '/docs/python/conda'
          },
          {
            text: 'LLM',
            link: '/docs/llm/index'
          },
          {
            text: 'Web3篇',
            link: '/docs/web3/基础知识/区块链原理'
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
        }],
        '/docs/interview': [{
          text: '面试', 
          collapsed: false,
          items: getSidebarLinkList('./docs/interview', '/docs/interview/')
        }],
        '/docs/frontend': getDocsSideBar(resolve(dirname, '../docs/frontend')),
        '/docs/backend': getDocsSideBar(resolve(dirname, '../docs/backend')),
        '/docs/3d': getDocsSideBar(resolve(dirname, '../docs/3d')),
        // [
        //   {
        //     text: '容器化',
        //     collapsed: true,
        //     items: getSidebarLinkList('./docs/backend/docker', '/docs/backend/docker/')
        //   }, {
        //     text: 'MongoDB',
        //     collapsed: false,
        //     items: getSidebarLinkList('./docs/backend/mongodb', '/docs/backend/mongodb/')
        //   },
        //   {
        //     text: 'GraphQL',
        //     collapsed: false,
        //     items: getSidebarLinkList('./docs/backend/graphql', '/docs/backend/graphql/')
        //   }
        // ],
        '/docs/rust': [
          {
            text: 'Rust篇',
            collapsed: true,
            items: getSidebarLinkList('./docs/rust', '/docs/rust/')
          }
        ],
        '/docs/llm': [
          {
            text: 'LLM',
            collapsed: true,
            items: getSidebarLinkList('./docs/llm', '/docs/llm/')
          }
        ],
        '/docs/python': [
          {
            text: 'python',
            collapsed: true,
            items: getSidebarLinkList('./docs/python', '/docs/python/')
          }
        ],
        '/docs/web3': [
          {
            text: 'solana',
            items: getSidebarLinkList('./docs/web3/solana', '/docs/web3/solana')
          },
          {
            text: '基础知识',
            collapsed: true,
            items: getSidebarLinkList('./docs/web3/基础知识', '/docs/web3/基础知识')
          },
        ]
    },

    socialLinks: [
      // { icon: {svg: wechatIcon}, ariaLabel: 'wechat'},
      { icon: 'github', link: 'https://github.com/zhuangdagg' },
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
  const _temp = readdirSync(path);
  return _temp;
}

function getSidebarLinkList(path = './', prefix = '') {
  const res = getPathName(path).map(item => ({
    text: item.slice(0, -3),
    link: prefix + item
  }))
  return res
}
