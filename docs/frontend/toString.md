# toString()

## 让变量自动类型转换
```ts
const obj = new Object()
obj.toString = function () {
    return 'hello'
}

obj + ' ' + 'world' // hello world
```

## 用于判断数据类型
> `Object.prototype.toString.call(value)`
- 数值：返回`[object Number]`
- 字符串：返回`[object String]`
- 布尔值：返回`[object Boolean]`
- undefined：返回`[object Undefined]`
- null：返回`[object Null]`
- 数组：返回`[object Array]`
- arguments 对象：返回`[object Arguments]`
- 函数：返回`[object Function]`
- Error 对象：返回`[object Error]`
- Date 对象：返回`[object Date]`
- RegExp 对象：返回`[object RegExp]`
- 其他对象：返回`[object Object]`
- Symbol: 返回`[object Symbol]`
- BigInt: 返回`[object BigInt]`

### 实现一个比`typeof`运算符更准确的类型判断函数
```ts
const type = (o: any) => {
    const str = Object.prototype.toString.call(o)
    return str.match(/\[object (.*?)\]/)[1].toLowerCase()
}
type({}); // "object"
type([]); // "array"
type(666); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"

[
    'Null', 'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp',
    'Symbol',
    'BigInt',
    'Map', 'WeakMap',
    'Set', 'WeakSet'
].forEach((t) => {
    type['is' + t] = (o) => Object.prototype.toString.call(o).match(/\[object (.*?)\]/)[1] === t
})

type.isObject({}) // true
type.isSymbol(Symbol('s')) // true
type.isBigInt(BigInt(666)) // true
```