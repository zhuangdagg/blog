/**
 * 或值至少 K 的最短子数组 I
 * @date 2025-01-16
 */
var minimumSubarrayLength = function (nums, k) {
  let sum = 0, res = 0;
  nums.sort((a, b) => b - a)
  for(const n of nums) {
    sum |= n
    res++
    console.log({ sum, res })
    if(sum >= k) return res
  }

  return -1
}

console.assert(minimumSubarrayLength([1,2, 3], 2) === 1, "[1,2, 3] no pass")
console.assert(minimumSubarrayLength([2, 1, 8],  10) === 3, "[2, 1, 8] no pass")
console.log("Accepted!")
