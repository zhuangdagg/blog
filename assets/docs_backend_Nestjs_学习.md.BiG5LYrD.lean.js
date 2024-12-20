import{_ as i,c as a,a7 as n,o as t}from"./chunks/framework.DKOW1EBX.js";const c=JSON.parse('{"title":"一些问题","description":"","frontmatter":{},"headers":[],"relativePath":"docs/backend/Nestjs/学习.md","filePath":"docs/backend/Nestjs/学习.md","lastUpdated":1734711086000}'),l={name:"docs/backend/Nestjs/学习.md"};function e(h,s,p,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="一些问题" tabindex="-1">一些问题 <a class="header-anchor" href="#一些问题" aria-label="Permalink to &quot;一些问题&quot;">​</a></h1><h2 id="query属性类型-validationpipe-无法自动转换问题" tabindex="-1">Query属性类型 <code>ValidationPipe</code> 无法自动转换问题; <a class="header-anchor" href="#query属性类型-validationpipe-无法自动转换问题" aria-label="Permalink to &quot;Query属性类型 \`ValidationPipe\` 无法自动转换问题;&quot;">​</a></h2><blockquote><p>解决方法：正确配置 <code>ValidationPipe</code><br> TODO: 去了解 <code>class-transformer</code></p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ValidationPipe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    transform: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    transformOptions: {</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        enableImplicitConversion: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="使用-class-transformer-中的-exclude-进行-排查属性" tabindex="-1">使用 class-transformer 中的 <code>Exclude</code> 进行 <em><strong>排查属性</strong></em> <a class="header-anchor" href="#使用-class-transformer-中的-exclude-进行-排查属性" aria-label="Permalink to &quot;使用 class-transformer 中的 \`Exclude\` 进行 ***排查属性***&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Exclude } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;class-transformer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserEntity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  firstName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  lastName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Exclude</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">partial</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UserEntity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, partial);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="todo-bullmq" tabindex="-1">TODO: bullMQ <a class="header-anchor" href="#todo-bullmq" aria-label="Permalink to &quot;TODO: bullMQ&quot;">​</a></h2><h2 id="pino-pretty-控制台中文输出乱码-cmd、powershell" tabindex="-1">pino-pretty 控制台中文输出乱码(cmd、powershell) <a class="header-anchor" href="#pino-pretty-控制台中文输出乱码-cmd、powershell" aria-label="Permalink to &quot;pino-pretty 控制台中文输出乱码(cmd、powershell)&quot;">​</a></h2><blockquote><p><a href="https://getpino.io/#/docs/help?id=windows" target="_blank" rel="noreferrer">原因</a></p></blockquote><ul><li><strong>解决措施</strong></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 65001</span></span></code></pre></div>`,11)]))}const E=i(l,[["render",e]]);export{c as __pageData,E as default};
