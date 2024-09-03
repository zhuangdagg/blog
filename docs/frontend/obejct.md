# Object

## Object attribute

### 对象属性模型的相关方法
- `Object.getOwnPropertyNames` 获取对象所以属性的键名（不包括原型上属性）
- `Object.getOwnPropertyDescriptor(obj: Object, key: String): { value: any, writable: boolean, enumerable: boolean, configurable: boolean }` 获取某个属性的描述对象
- `Object.defineProperty()` 通过描述对象，定义某个属性
- `Object.defineProperties()` 通过描述对象，定义多个属性

### 控制对象状态的方法
- `Object.preventExtensions()`：防止对象扩展。
- `Object.isExtensible()`：判断对象是否可扩展。
- `Object.seal()`：禁止对象配置。
- `Object.isSealed()`：判断一个对象是否可配置。
- `Object.freeze()`：冻结一个对象。
- `Object.isFrozen()`：判断一个对象是否被冻结。

### 原型链相关方法
- `Object.create()`：该方法可以指定原型对象和属性，返回一个新的对象。
- `Object.getPrototypeOf()`：获取对象的Prototype对象。
- `Object.setPrototypeOf(target:Object, prototype: Object)`：设置对象的原型。

### Object 实例方法
- Object.prototype.valueOf()：返回当前对象对应的值。
- `Object.prototype.toString()`：返回当前对象对应的字符串形式。
- `Object.prototype.toLocaleString()`：返回当前对象对应的本地字符串形式(这个方法的主要作用是留出一个接口，让各种不同的对象实现自己版本的)。
- `Object.prototype.hasOwnProperty()`：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
- `Object.prototype.isPrototypeOf()`：判断当前对象是否为另一个对象的原型。
- `Object.prototype.propertyIsEnumerable()`：判断某个属性是否可枚举。

### Object 拷贝
> 原型拷贝 `Object.create(obj.prototype)`
> 属性拷贝 
```ts
function copyPropertyDescription(target, source) {
    Object
        .getOwnPropertyNames(source)
        .forEach(function(key) {
            var desc = Object.getOwnPropertyDescriptor(source, key)
            Object.defineProperty(target, key, desc)
        })
    return target
}
```