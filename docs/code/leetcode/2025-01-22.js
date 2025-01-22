/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let res = 0;
    nums.sort((a, b) => b - a)
    const n = nums.length / 3
    let idx = 0
    while(idx < n) {
      res += nums[idx * 2 + 1]
      idx++
    }
    return res
};

console.assert(findClosestNumber([2, 1, 2, 5, 7,8]) === 9, "test one no pass")
console.assert(findClosestNumber([2,0,1, 9, 7, 4, 12, 16, 5]) === 23, "test two no pass")
console.log("Accepted!")
