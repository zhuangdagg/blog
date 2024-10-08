---
layout: doc # doc|home|page
navbar: true
sidebar: false
aside: true # boolean|'left'
title: Vitepress 使用示例
lastUpdated: true # 显示页面上次修改时间
footer: true
pageClass: 'custom-page-class'
---

# Vitepress 用法大全

## [[toc]] 生成目录
[[toc]]
::: warning
一般不需要使用 `[[toc]]` 来手动生成目录，而是用 `outline`
:::


## `frontmatter` 配置
示例用法：
```md
---
title: 定义标题
name: 
---
```
> 通过 Vue 表达式中的 `$frontmatter` 全局变量访问 frontmatter 数据：
```md
{{ $frontmatter.name }}
```
[frontmatter 配置查阅](https://vitepress.dev/zh/reference/frontmatter-config)
## 代码片段引用


> 尽量把代码示例单独写在 `code` 文件夹内，再引用入文中

<<< @/docs/code/test.js{1,2 js:line-numbers}

### 代码组 
::: code-group
<<< @/docs/code/test.js{1,2 js:line-numbers}[test.js]
<<< @/docs/code/hello-world.js{1,2 js:line-numbers}[hellow.js]
:::


## 内嵌markdown文件
```md
<!--@include: ../note.md-->
```
<!--@include: ./note.md-->

## 自定义锚点 {#custome-define-id}

## 自定义容器
::: info
```md
    ::: info
        // 信息内容
    :::
```
:::

::: tip
```md
    ::: tip
        // 提示内容
    :::
```
:::

::: warning
```md
    ::: warning
        // 信息内容
    :::
```
:::

::: danger
```md
    ::: danger
        // danger内容
    :::
```
:::

::: details
```md
    ::: details
        // 详细信息内容
    :::
```
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

## Emoji使用
:tada: :100:
:blue_book:
[所有支持的emoji列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)


## markdown中使用 `vue` 组件
```md
// 其他内容
...

<script setup>
    import CustomComponent from './components/CustomComponent.vue' 
</script>

<CustomComponent />

// 其他内容
...

```

## 运行时 `API` 示例
```md
<script setup>
    import { useData } from 'vitepress'
    const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```



## 注意事项