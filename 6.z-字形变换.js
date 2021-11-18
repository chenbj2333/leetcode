/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  if (s.length < numRows) return s;
  const temp = [];
  for (let i = 0; i < numRows; i++) {
    temp.push('');
  }
  // --核心代码--
  let down = false;
  let loc = 0;
  for (let i = 0; i < s.length; i++) {
    temp[loc] += s[i];
    if (loc === 0 || loc === numRows - 1) {
      down = !down;
    }
    loc += down ? 1 : -1;
  }
  // -----------

  let res = '';
  temp.forEach((item) => {
    res += item;
  });
  return res;
};
// @lc code=end
