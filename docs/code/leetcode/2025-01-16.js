/**
 * 或值至少 K 的最短子数组 I
 * @date 2025-01-16
 */
var minimumSubarrayLength = function (nums, k) {
  let s = 0, res = Number.MAX_SAFE_INTEGER, l=0, r = 0, n = nums.length;
  while(r < n) {
    s |= nums[r]
    if(s >= k) {
      console.log({ l, r, s, res})
      res = Math.min(r-l+1, res)
      if(l < r) {
        s = nums.slice(++l, r+1).reduce((s, i) => s|i, 0)
      } else {
        return res
      }
    } else {
      r++
    }
    
  }
  return res >= Number.MAX_SAFE_INTEGER ? -1 : res
}

console.assert(minimumSubarrayLength([16,1,2,20,32], 45) === 2, "[1,2, 3] no pass")
console.assert(minimumSubarrayLength([2, 1, 8],  10) === 3, "[2, 1, 8] no pass")
console.log("Accepted!")
