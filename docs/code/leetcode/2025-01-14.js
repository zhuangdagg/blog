/**
 * @date 2025-01-14
 */
var waysToSplitArray = function (arr, key) {
  let cnt = 0;
  for(const n of arr) {
    if(n < key) cnt++
  }
  return cnt
}

console.assert(waysToSplitArray([10, 4, -8, 7], 5) === 2, "[10,4,-8,7] no pass")
console.assert(waysToSplitArray([23, 31, 1, 0],  10) === 2, "[2,3,1,0] no pass")
console.log("Accepted!")
