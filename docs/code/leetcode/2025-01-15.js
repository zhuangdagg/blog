/**
 * 超过阈值的最少操作数 II
 * @date 2025-01-15
 */
import { MinHeap } from 'datastructures-js'
var waysToSplitArray = function (arr, key) {
  const mh = MinHeap.heapify(arr)
  let cnt = 0;
  let x, y;
  while(true) {
    x = mh.extractRoot()
    y = mh.extractRoot()

    if(x >= key) break;
    cnt++
    mh.push(Math.min(x, y) * 2 + Math.max(x, y))
  }
  return cnt
}

console.assert(waysToSplitArray([2,11,10,1,3], 10) === 2, "[2,11,10,1,3] no pass")
console.assert(waysToSplitArray([1, 1, 2, 4, 9],  10) === 4, "[2,3,1,0] no pass")
console.log("Accepted!")
