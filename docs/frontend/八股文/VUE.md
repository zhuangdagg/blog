# VUE 查漏补缺

## 表单输入绑定
> `v-model` 会根据各种不同类型的输入，`textarea` `<select>` 元素。它会根据所使用的元素自动使用对应的 DOM 属性和事件组合。

- 文本类型的`<input>` 和 `&lt;textarea>` 元素绑定 `value` 属性和监听 `input` 事件
- `<input type="checkbox">, <input type="radio">` 绑定 `check` 属性和监听 `change` 事件
- &lt;select&gt; 绑定 `value` 属性和监听 `change` 事件

## 生命周期构子

![alt](/assets/capture/lifecycle_hooks.png)

## 侦听器（`watch`, `watchEffect`）

- 回调触发时机：在**父组件**更新(如有)之后，所属组件的DOM更新之前被调用。如果你尝试在侦听器回调中访问所属组件的 DOM，那么 DOM 将处于 **更新前** 的状态。
- Post Watchers 能让回调获取Vue更新之后的所属组件的DOM。需要指明 `flush: 'post';`
```js
watch(source, callback, { flush: 'post' });

watchEffect(callback, { flush: 'post' });
// 别名
watchPostEffect(callback);
```
- 同步侦听器： 在Vue进行任何更新之前触发； `{ flush: 'sync' }`

::: warning 注意
同步创建的侦听器会绑定在组件实例上，随组件卸载自动停止；
异步创建的侦听器（在生命周期回调创建）需要手动停止；
:::