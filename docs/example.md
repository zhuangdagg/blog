---
title: Vitepress 使用示例
---

# Vitepress 用法大全
[[toc]]


## frontmatter配置
示例用法：
```md
title: 定义标题
name: 
```
> 通过 Vue 表达式中的 `$frontmatter` 全局变量访问 frontmatter 数据：
```md
{{ $frontmatter.name }}
```
## 代码片段引用


> 尽量把代码示例单独写在一个文件，再引用入文中

<<< @/docs/code/test.js{1,2 js:line-numbers}

### 代码组 
::: code-group
<<< @/docs/code/test.js{1,2 js:line-numbers}[test.js]
<<< @/docs/code/hello-world.js{1,2 js:line-numbers}[hellow.js]
:::


## 内嵌markdown文件
<!--@include: ./note.md-->

### 自定义锚点 {#custome-define-id}

### 自定义容器
::: info
这是info的样式
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

### Emoji使用
:tada: :100:
[所有支持的emoji列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)



### 注意事项