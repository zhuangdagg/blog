# 接口学习

## `node:util` 工具模块

### [`parseArgs()`](https://nodejs.cn/api/util.html#utilparseargsconfig)
> 用途：解析命令行参数

<<< @/docs/code/node.parseArgs.js



## `node:module` 模块

### [`createRequire`](https://nodejs.cn/api/module.html#modulecreaterequirefilename)
> 在 ES6 模块中 创建能引用 `CommonJs` 模块的 `require` 函数
:::code-group
```ts [main.mjs]
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const demo = require('./demo.cjs') // 必须是 commonjs 模块

demo.name  // test
```

```ts [demo.cjs]
module.exports = { name: 'test' }
```
:::