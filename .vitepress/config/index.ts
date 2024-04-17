import { defineConfig } from 'vitepress';
import { getPathName, getSidebarLinkList } from '../utils';

export default defineConfig({
    title: 'blog',
    base: '/weblog/',
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/',
        },
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
            },
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
                activeMatch: '/src/resume/resume.html',
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
                            link: '/src/js/grammar',
                        },
                        {
                            text: '日常记录',
                            link: '/src/diary/index',
                        },
                        {
                            text: 'docker容器',
                            link: '/src/docker/index',
                        },
                    ],
                },
            ],
            // 语法知识
            '/src/js': [
                {
                    text: 'js',
                    collapsed: true,
                    items: [{ text: '变量', link: './' }],
                },
            ],
            // 日常记录
            '/src/diary': getSidebarLinkList('./src/diary'),
            // 容器相关
            '/src/docker': getSidebarLinkList('./src/docker')
        },
    },
});
