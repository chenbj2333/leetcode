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

  for (let i = 0; i < strs.length; i++) {
    let p = 0;
    while (p < strs[i].length) {
      if (res[p] !== strs[i][p]) {
        break;
      }
      p++;
    }
    res = res.substr(0, p);
  }
  return res;
};
// @lc code=end
