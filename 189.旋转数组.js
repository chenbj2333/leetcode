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
  const index = k % nums.length;
  if (index > 0) {
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, index - 1);
    reverse(nums, index, nums.length - 1);
  }

  function reverse(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
};
// @lc code=end
