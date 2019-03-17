// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射与电话按键相同。注意 1 不对应任何字母。
// 示例:
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

export default (digits) => {
  let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let digitsArr = null;
  if (digits) {
    digitsArr = digits.split('');
  } else {
    return [];
  }
  let selectContent = [];
  for (let i = 0; i < digitsArr.length; i++) {
    const item = digitsArr[i];
    if (item) {
      selectContent.push(map[item]);
    }
  }

  if (selectContent.length > 1) {
    return comb(selectContent);
  } else {
    return selectContent[0].toString().split('');
  }
}

function comb (arr) {
  let temp = [];
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      temp.push(`${arr[0][i]}${arr[1][j]}`);
    }
  }
  arr.splice(0, 2, temp);
  if (arr.length > 1) {
    comb(arr);
  } else {
    return temp;
  }
  return arr[0];
}
