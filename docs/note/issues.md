# 存在不足问题

---

### vue

- 事件绑定和表单输入绑定的修饰符；

> 事件修饰符：

- `.stop`: `event.stopPropagation()`
  <!-- ![alt](../assets/screenshot/20231013-01.png) -->
- `.prevent`

  - `event.preventDefault();` 阻止默认的点击事件执行，但依旧传播

    ```js
    const btn = document.createElement("button");
    btn.className = "custom-button";
    btn.addEventListener("click", handleClick);

    function handleClick(evt) {
      if (evt.cancelable) {
        // 检查事件是否支持取消，否则preventDefault()将不会生效；
        evt.preventDefault();
      }
    }
    ```

- `.self`： event.target 是元素本身时才会触发事件处理器，事件处理器不来自子元素
- `.capture`
- `.once`
- `.passive`


> 常用按键别名
- `.enter`
- `.tab`
- `.delete` (p)
- `.esc`
