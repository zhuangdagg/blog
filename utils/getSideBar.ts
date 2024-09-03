import { lstatSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

import type { DefaultTheme } from 'vitepress'

/**
 * 遍历Docs文件夹生成sidebar菜单
 * @param {string} path 基础路径
 * @returns 
 */
export function getDocsSideBar(path: string) {
    if(!path) return []
    function parseSideBar(basePath) {
        let res: DefaultTheme.SidebarItem[] = []
        const childPaths = readdirSync(basePath)
        childPaths.sort((a: any, b: any) => b-a)
        const file: string[] = []
        for(const p of childPaths) {
            const _t = resolve(basePath, p)
            const stat = lstatSync(_t)
            
            if(stat.isDirectory()) {
                const text = _t.match(/[^\\\/]+$/)?.[0] || 'null'
                res.push({
                    text,
                    collapsed: true,
                    items: parseSideBar(_t)
                })
            } else if(stat.isFile() && /\.md$/.test(_t)){
                file.push(_t)
                // res.push({
                //     text: _t.match(/([^\\\/]+)\.md$/)?.[1],
                //     collapsed: true,
                //     link: _t.match(/(docs(.*)).md$/)?.[1].replace(/\\/g, '/')
                // })
            }
        }

        res.push(...file.map(f => ({
            text: f.match(/([^\\\/]+)\.md$/)?.[1],
            collapsed: true,
            link: f.match(/(docs(.*)).md$/)?.[1].replace(/\\/g, '/')
        })))
    
        return res
    }

    const basePath = resolve(path)

    const stat = lstatSync(basePath)
    if(stat.isDirectory()) {
        return parseSideBar(basePath)
    }
    throw new Error(`${basePath} must be directory!`)
}