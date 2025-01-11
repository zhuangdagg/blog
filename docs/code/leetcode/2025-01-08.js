/**
 * @date 2025-01-08
 */
var findMaxNiceNum = function (s) {
  let res = '';
  if(s.length < 3) return res;
  for(let i=2; i < s.length; i++) {
    if(s[i] === s[i-1] && s[i] === s[i-2]) {
      const _n = s.slice(i-2, i+1)
      res = res > _n ? res : _n
    }
  } 

  return res
}

console.assert(findMaxNiceNum('6777133339') === '777', '6777133339 no pass')
console.assert(findMaxNiceNum('325000245') === '000', '325000245 no pass')
console.log('Accepted!')
