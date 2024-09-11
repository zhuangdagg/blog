let context = 'global'

let obj = {
    context: 'obj',
    getName: function() {
        console.log(this.context)
    },
    getName2: () => {
        console.log(this.context)
    },
    getName3: () => {
        console.log(context) // global
    }
}

obj.getName() // obj
obj.getName2() // 报错：this不能指向全局对象

obj.getName2.call({ context: 'call'}) // this is undefine
obj.getName2.apply({ context: 'apply'}) // 同上
obj.getName2.bind({ context: 'bind'})() // 同上