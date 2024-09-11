# chrome devtools

## 自定义 `chrome-devtools` 对象格式

### 规则
> - 用法：通过定义 `window.devtoolsFormatters` 数组来创建对象格式； 
> [参考文章](https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html)  
> -  formatter 是一个包含 `header`，`hasBody`, `body` 三个函数的对象，且三个函数都会接受 console.log 中传的数据  
> 类型定义：

```ts
type childObjects = ["object", {
    object: object,
    config: object
}]
// jsonML 是使用 json 格式描述 dom(xml) 节点的一种方式
type jsonML = [tagName: string, attributes: object, elementList: string | childObjects | jsonML]

interface Formatter = {
    header: (obj: object, config: any) => jsonML,
    hasBody: (obj: object) => boolean,
    body: (obj: object) => jsonML
}
window.devtoolsFormatters: Formatter[] = [
    {
        header: function(obj) {
            return ['div', {}, obj.toString()]
        },
        hasBody: function() { return false }，
        body: function() {}
    }
]
```