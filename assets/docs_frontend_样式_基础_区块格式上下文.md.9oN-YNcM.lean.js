import{_ as i,c as e,a7 as o,o as a}from"./chunks/framework.DKOW1EBX.js";const f=JSON.parse('{"title":"区块格式化上下文（Block Formatting Context）BFC","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/样式/基础/区块格式上下文.md","filePath":"docs/frontend/样式/基础/区块格式上下文.md","lastUpdated":1731130895000}'),t={name:"docs/frontend/样式/基础/区块格式上下文.md"};function n(r,l,c,d,s,u){return a(),e("div",null,l[0]||(l[0]=[o('<h1 id="区块格式化上下文-block-formatting-context-bfc" tabindex="-1">区块格式化上下文（Block Formatting Context）BFC <a class="header-anchor" href="#区块格式化上下文-block-formatting-context-bfc" aria-label="Permalink to &quot;区块格式化上下文（Block Formatting Context）BFC&quot;">​</a></h1><h2 id="创建格式化上下文" tabindex="-1">创建格式化上下文 <a class="header-anchor" href="#创建格式化上下文" aria-label="Permalink to &quot;创建格式化上下文&quot;">​</a></h2><ul><li>文档的根元素<code>html</code></li><li>浮动元素（非 float:none; 元素）</li><li>绝对定位元素 （position: absolute or fixed element）</li><li>行内块元素 display: inline-block;</li><li>表格单元格： display: table-cell;</li><li>表格标题 display: table-caption</li><li>匿名表格单元格元素 display: table, table-row, table-row-group, table-header-group, table-footer-group, inline-table;</li><li>弹性元素 display: flex, inline-flex;</li><li>网格元素 display: grid, inline-grid;</li><li><code>overflow</code> 值不为 <code>visible</code> 或 <code>clip</code> 的块级元素</li><li>display: flow-root;</li><li>contain: layout、content 或 paint 的元素</li><li>多列容器（column-count 或 column-width 值不为 auto，且含有 column-count: 1 的元素）</li><li>column-span: all; 的元素始终会创建一个新的格式化上下文，即使该元素没有包裹在一个多列容器中</li></ul><h2 id="作用" tabindex="-1">作用： <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用：&quot;">​</a></h2><ul><li>包含内部浮动</li><li>排除外部浮动</li><li>阻止外边距重叠</li></ul><h2 id="什么是外边距重叠-重叠的结果是什么" tabindex="-1">什么是外边距重叠？重叠的结果是什么？ <a class="header-anchor" href="#什么是外边距重叠-重叠的结果是什么" aria-label="Permalink to &quot;什么是外边距重叠？重叠的结果是什么？&quot;">​</a></h2><blockquote><p>外边距重叠就是margin-collapse</p></blockquote><ul><li>在CSS当中，相邻的两个盒⼦（可能是兄弟关系也可能是祖先关系）的外边距可以结合成 ⼀个单独的外边距。这种合并外边距的⽅式被称为折叠，并且因⽽所结合成的外边距称为 折叠外边距。</li></ul><p><code>折叠结果遵循下列计算规则</code></p><ul><li>两个相邻的外边距都是正数时，折叠结果是它们两者之间较⼤的值。</li><li>两个相邻的外边距都是负数时，折叠结果是两者绝对值的较⼤值。</li><li>两个外边距⼀正⼀负时，折叠结果是两者的相加的和。</li></ul>',10)]))}const b=i(t,[["render",n]]);export{f as __pageData,b as default};
