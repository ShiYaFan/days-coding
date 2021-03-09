
/**
 * 地址：https://blog.csdn.net/weixin_34396902/article/details/93170277
 package.json 文件中 main module  browser 字段

 node 环境执行代码 只有 main字段有效

 webpack + web + ESM
 import test from 'test'
 webpack + web + commonJs
 const test = require('test)
 实际上的加载优先级是 browser = browser+mjs > module > browser+cjs > main


 webpack模块化原理
 参考文章：https://segmentfault.com/a/1190000010349749


 */

var threeSum = function (nums) {
  if (nums === null || nums.length < 3) {
    return nums
  }
  nums = nums.sort((a, b) => a - b) //排序
  let res = []
  console.log(nums)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break
    }
    if (i > 0 && nums[i] === nums[i - 1]) continue //跳过相同的值
    let L = i + 1
    let R = nums.length - 1
    while (L < R) {
      let sums = nums[i] + nums[L] + nums[R]
      if (sums === 0) {
        res.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] == nums[L + 1]) L++ //去重
        while (L < R && nums[R] === nums[R - 1]) R-- //去重
        L++
        R--
      } else if (sums > 0) {
        R--
      } else {
        L++
      }
    }
  }
  return res

};

let a = threeSum([-1, 0, 1, 2, -1, -4])
console.log(a)