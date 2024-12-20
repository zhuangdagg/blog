# View Transition API

## 视图过渡过程
1. 当调用  `document.startViewTransition(callback)` 时，API会截取当前页面的屏幕截图；
2. 调用回调函数，即 `callback`
3. API 会捕获页面的新状态并实时展示
4. API 构造了一个具有以下结构的伪元素树：
```
::view-transition  // 视图过渡叠加层的根元素
└─ ::view-transition-group(root)
   └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)  // 旧页面视图的屏幕截图
      └─ ::view-transition-new(root)  // 新页面视图的实时展示
```

[使用示例](/js-playground#start-view-transition)