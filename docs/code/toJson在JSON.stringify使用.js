const obj = {
    name: 'test all is number',
    type: 'RegExp',
    rule: /^\d+$/
}

const jsonStr = JSON.stringify(obj, (k, v) => {
    if(k === 'rule') return v.toString().slice(1, -1)  // 切片去除斜杠"/"
    return v
}, 4)

const parseObj = JSON.parse(jsonStr, (k, v) => {
    if(k === 'rule') return new RegExp(v)
    return v
})

console.log('rule: ', parseObj.rule)
console.log('test 114514 is: ', parseObj.rule.test('114514'))
console.log('test 1145yy is: ', parseObj.rule.test('1145yy'))
