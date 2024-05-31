/** 笔试题 **/
function createSum() {
    let count = 0;

    function chain(...args) {
        if(args.length === 0) {
            const res = count
            count = 0
            return res
        } else {
            count += args.reduce((pre, i) => pre + i, 0);
            return chain
        }
    }

    return chain;
}

const sum = createSum();

// test
console.log(sum(1)(2)(3)() === 6);
console.log(sum(1, 2, 3)() === 6);


// 
// 宏任务
setTimeout(() => console.log('timeout outside'))

// promise 微任务
const req = new Promise((resolve, reject) => {

    setTimeout(() => console.log('timeout in promise'), 0)

    resolve('resolve')
})

req.then((res) => {
    console.log(res)
})