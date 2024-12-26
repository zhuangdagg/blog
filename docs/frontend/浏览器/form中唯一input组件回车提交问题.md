# form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单
> 这是 W3C标准中规定实现的, 所以浏览器上会实现这些逻辑 [具体规范](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2)

## Vue 组件中阻止该行为的方法
> 在form组件中添加 `@submit.native.prevent`

```vue
<template>
<form @submit.native.prevent="() => submit()" >
    <input />
    <button @click="submit">submit</button>
</form>
</template>
```