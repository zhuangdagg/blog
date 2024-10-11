

// 通过 JSON.parse, JSON.stringify 硬拷贝对象的转换
let obj = {
    number: 66,
    string: 'string',
    boolean: true,
    null: null,
    undefined: undefined, // 丢弃属性
    array: [1, 2, 'three'],
    object: { },
    symbol: Symbol('test'), // 丢弃属性
    function: function test() {}, // 丢弃属性
    function2: () => {}, // 丢弃属性
    class: class test {}, // 丢弃属性
    // bigint: BigInt(114514),  // 报错
 }

 obj = JSON.parse(JSON.stringify(obj))

 console.log(obj)

