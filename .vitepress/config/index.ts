import { defineConfig } from 'vitepress'
import { getPathName } from '../utils'

const diaryList = getPathName('./src/diary').filter(item => item !== 'index.md')


export default defineConfig({
    title: 'blog',
    base: '/blog/',
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/'
        }
    },
    themeConfig: {
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/zhuangdagg',
            }
        ],
        footer: {
            copyright: 'Copyright © 2023-present blunt',
            message: 'Released under the MIT License.',
          },
        // 导航栏
        nav: [
            {
                text: '关于',
                link: '/about/',
                activeMatch: '^/',
            },
            {
                text: '其他',
                link: '/other/',
                activeMatch: '^/',
            },
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
                          {
                            text: '日常记录',
                            link: '/src/diary/index.html',
                          },
                            ],
                },
            ],
            // 语法知识
            '/src/js': [
                {
                    text: 'js',
                    collapsed: true,
                    items: [
                        { text: '变量', link: './' }
                    ]
                }
            ],
            // 语法知识
            '/src/diary': diaryList.map(item => {
                return {
                    text: item.slice(0, -3),
                    link: './' + item
                }
            }),
        }
    }
})