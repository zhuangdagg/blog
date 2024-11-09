/**
 * @level difficult
 * @link https://leetcode.cn/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/description/?envType=daily-question&envId=2024-10-31
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maximumSumSubsequence = function(nums, queries) {

}


// test
function test1() {
    const nums = [3, 5, 9], queries = [[1, -2], [0, -3]]
    console.assert(maximumSumSubsequence(nums, queries) === 21)
}