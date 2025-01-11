/**
 * @date 2025-01-07
 */
var switchPressCount = function (s) {
  let res = 0;
  s = s.toLowerCase();
  let last = s[0]
  for(const c of s) {
    if(c !== last) {
      res++
      last = c
    }
  }

  return res
}

console.assert(switchPressCount('aAbBcC') === 2, 'aAbBcC no pass')
console.assert(switchPressCount('AaAaAaaA') === 0, 'AaAaAaaA no pass')
console.log('Accepted!')
