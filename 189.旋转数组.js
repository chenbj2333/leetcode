/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

const { reverse } = require('lodash');

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  // 将所有元素反转，然后反转前 k 个元素，再反转后面l-k个元素，就能得到想要的结果。
  const index = k % nums.length;
  if (index > 0) {
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, index - 1);
    reverse(nums, index, nums.length - 1);
  }
};
// @lc code=end
