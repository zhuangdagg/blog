/**
 * 不含特殊楼层的最大连续楼层数
 * @link https://leetcode.cn/problems/maximum-consecutive-floors-without-special-floors/description/?envType=daily-question&envId=2025-01-06
 */
var maxConsecutive = function (bottom, top, special) {
  special.sort((a, b) => a - b)

  let last = bottom

  let max = 0
  for (const cur of special) {
    max = Math.max(max, cur - last)
    last = cur + 1
  }
  max = Math.max(max, top - last + 1)
  return max
}

console.assert(maxConsecutive(2, 9, [4, 6]) === 3, '[4, 6] no pass')
console.assert(maxConsecutive(6, 8, [7, 6, 8]) === 0, '[7, 6, 8] no pass')
console.log('pass all!')
