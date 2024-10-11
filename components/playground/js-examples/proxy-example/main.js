

// 通过 Proxy 来实现一个数据响应式
let oriObj = { a: 1 }
const proxyObj = new Proxy(oriObj, {
    get(target, property, receiver) {
        console.log(`监听读取对象${property}属性`)
        return Reflect.get(target, property, receiver)
    },
    set(target, property, val, receiver) {
        console.log(`监听属性${property}修改`)
        return Reflect.set(target, property, val)
    }
})

proxyObj.a
proxyObj.a = 1
