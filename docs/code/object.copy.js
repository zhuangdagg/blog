// 对象拷贝
function copyObject(obj) {
    var copy = Object.create(Object.getPrototypeOf(obj)) // 获取源对象原型
    return copyOwnPropertiesFrom(copy, obj)
}
function copyOwnPropertiesFrom(target, source) {
    // 遍历源对象属性
    Object.getOwnPropertyNames(source).forEach(function(propKey) {
        var desc = Object.getOwnPropertyDescriptor(source, propKey)
        console.log({ propKey, desc })
        Object.defineProperty(target, propKey, desc)
    })
    return target
}


function _test () {
    var A = {
        name: 'A',
        print: function() {
            console.log(this.name)
        }
    }

    var B = copyObject(A)
    B.print()
}

_test()