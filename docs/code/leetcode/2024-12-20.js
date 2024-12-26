/**
 * 同位字符串连接的最小长度
 * @link https://leetcode.cn/problems/minimum-length-of-anagram-concatenation/?envType=daily-question&envId=2024-12-20
 */

function setChar(arr, c) {
    arr[c.charCodeAt() - 'a'.charCodeAt()] += 1
}
function isEqual(first, last) {
    for(let i = 0; i < 26; i++) {
        if(first[i] == last[i]) continue
        return false
    }
    return true
}

function minAnagramLength(s) {
    const n = s.length
    let i = 1
    const clen = 'z'.charCodeAt() - 'a'.charCodeAt() + 1

    const first = new Array(clen).fill(0)
    setChar(first, s[0])
    while(i < n) {
        if(n % i !== 0) {
            if(i*2 > n) return n
            setChar(first, s[i])
            i++
            continue
        }
        const cnt = n / i
        let ok = true
        for(let j = 1; j < cnt; j++) {
            const last = new Array(clen).fill(0)
            for(let z = i*j; z < (j+1)*i; z++) {
                setChar(last, s[z])
            }
            if(isEqual(first, last)) {
                continue
            } else {
                ok = false
                break
            }
        }
        if(ok) return i
        setChar(first, s[i])
        i++
    }
}

console.assert(minAnagramLength('zzzzzzzzzz') === 1, 'zzzzzzzzzz no pass')
console.assert(minAnagramLength('abba') === 2, 'abba no pass')
console.assert(minAnagramLength('acef') === 4, 'acef no pass')

console.log('pass!')