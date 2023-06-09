import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'blog',
    base: '/blog/',
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/blog/'
        }
    },
    themeConfig: {
        outline: {
            label: '本页内容',
        },
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        nav: [
            {
                text: '关于',
                link: '/blog/',
                activeMatch: '^/',
            }
        ],
        sidebar: {
            '/': [
                {
                    text: '目录',
                    items: [
                      {
                        text: '语法',
                        link: '/src/js/grammar.html',
                      },
                    ],
                },
            ],
            '/src/': [
                {
                    text: 'js',
                    collapsed: true,
                    items: [
                        { text: '变量', link: '/' }
                    ]
                }
            ]
        }
    }
})