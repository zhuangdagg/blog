import { lstatSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'


/**
 * 遍历文件夹生成sidebar菜单
 * @param {string} path 基础路径
 * @returns 
 */
function getSideBar(path = '../docs/frontend') {
    function parseSideBar(basePath) {
        let res = []
        const childPaths = readdirSync(basePath)
    
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
                res.push({
                    text: _t.match(/([^\\\/]+)\.md$/)?.[1],
                    collapsed: true,
                    link: _t.match(/(.+)\.md$/)?.[1] 
                })
            }
        }
    
        return res
    }
    const dirname = import.meta.dirname
    const basePath = resolve(dirname, path)
    const stat = lstatSync(basePath)
    if(stat.isDirectory()) {
        return parseSideBar(basePath)
    }
    throw new Error(`${basePath} must be directory!`)
}

const res = getSideBar('../docs/frontend')

console.log(res)