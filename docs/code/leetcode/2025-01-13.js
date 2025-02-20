/**
 * @date 2025-01-13
 */
var waysToSplitArray = function (nums) {
  if (nums.length < 2) return 0
  let pre = nums[0],
    end = 0,
    cnt = 0
  for (let i = 1; i < nums.length; i++) {
    end += nums[i]
  }
  if(pre >= end) cnt++
  for(let i=1; i < nums.length - 1; i++) {
    pre += nums[i]
    end -= nums[i]
    if(pre >= end) cnt++
  }
  return cnt;
}

console.assert(waysToSplitArray([10, 4, -8, 7]) === 2, "[10,4,-8,7] no pass")
console.assert(waysToSplitArray([2, 3, 1, 0]) === 2, "[2,3,1,0] no pass")
console.log("Accepted!")
