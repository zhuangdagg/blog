import { readExamples } from "./utils";
import path from 'node:path'

// 构建时数据加载 https://vitepress.dev/zh/guide/data-loading#typed-data-loaders
export default {
    watch: './js-examples/**',
    load() {
        const exampleDir = path.resolve(__dirname, './js-examples')

        return readExamples(exampleDir)
    }
}