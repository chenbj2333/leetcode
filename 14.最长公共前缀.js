/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    let j = 0;
    for (; j < str.length && j < res.length; j++) {
      if (res[j] !== str[j]) {
        break;
      }
    }
    res = res.substr(0, j);
    if (res === '') {
      return '';
    }
  }
  return res;
};
// @lc code=end
