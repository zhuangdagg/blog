import fs from 'node:fs'
import path from 'node:path'

export declare const data: Record<string, Record<string, string>>

// 构建时数据加载 https://vitepress.dev/zh/guide/data-loading#typed-data-loaders
export default {
    watch: './examples/**',
    load() {
        const exampleDir = path.resolve(__dirname, './examples')

        return readExamples(exampleDir)
    }
}

function readExamples(dir) {
    const examples = fs.readdirSync(dir)

    return examples.reduce((res, name) => {
        res[name] = readExample(path.join(dir, name))
        return res
    }, {})
}

function readExample(dir: string) {
    const filenames = fs.readdirSync(dir)

    return filenames.reduce((obj, filename) => {
        const fullPath = path.join(dir, filename)
        obj[filename] = fs.readFileSync(fullPath, 'utf-8')
        return obj
    }, {})
}