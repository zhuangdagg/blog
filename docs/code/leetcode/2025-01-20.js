/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let res = Number.MIN_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER
    for(const n of nums) {
      const _val = Math.abs(n)
      if(_val < min) {
        min = _val
        res = n
      } else if(_val === min && n > res) {
        res = n
      } 
    }
    return res
};

console.assert(findClosestNumber([-4,-2,1,4,8]) === 1, "-4,-2,1,4,8 no pass")
console.assert(findClosestNumber([2,-1,1]) === 1, "[2, -1, 1] no pass")
console.log("Accepted!")
