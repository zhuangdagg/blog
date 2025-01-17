/**
 * 或值至少 K 的最短子数组 I(优化)
 * @date 2025-01-16
 */
var minimumSubarrayLength = function (nums, k) {
  let res = Number.MAX_SAFE_INTEGER, l=0, r = 0, n = nums.length;
  let cnt = new Array(30).fill(0)

  function getSum() {
    let tol = 0
    for(let i =0; i < cnt.length; i++) {
      if(cnt[i]) {
        tol |= (1 << i)
      }
    }
    return tol
  }

  function rM(n) {
    for(let i =0; i < cnt.length; i++) {
      (n & (1 << i)) && cnt[i]++
    }
  }
  function lM(n) {
    for(let i =0; i < cnt.length; i++) {
      (n & (1 << i)) && cnt[i]--
    }
  }
  rM(nums[r])
  while(r < n) {
    if(getSum() >= k) {
      res = Math.min(r-l+1, res)
      if(l < r) {
        lM(nums[l++])
      } else {
        return res
      }
    } else if (++r < n) {
      rM(nums[r])
    }
  }
  return res >= Number.MAX_SAFE_INTEGER ? -1 : res
}

console.assert(minimumSubarrayLength([16,1,2,20,32], 45) === 2, "[1,2, 3] no pass")
console.assert(minimumSubarrayLength([2, 1, 8],  10) === 3, "[2, 1, 8] no pass")
console.log("Accepted!")
