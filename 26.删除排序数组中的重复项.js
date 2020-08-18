/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let p = 0;
  let q = 1;
  while (q < nums.length) {
    if (nums[p] === nums[q]) {
      q++;
    } else {
      nums[p + 1] = nums[q];
      p++;
      q++;
    }
  }
  return p + 1;
};
// @lc code=end
