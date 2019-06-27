/*
914. 卡牌分组

  给定一副牌，每张牌上都写着一个整数。

  此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

  每组都有 X 张牌。
  组内所有的牌上都写着相同的整数。
  仅当你可选的 X >= 2 时返回 true。

  示例 1：

  输入：[1,2,3,4,4,3,2,1]
  输出：true
  解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
  示例 2：

  输入：[1,1,1,2,2,2,3,3]
  输出：false
  解释：没有满足要求的分组。
  示例 3：

  输入：[1]
  输出：false
  解释：没有满足要求的分组。
  示例 4：

  输入：[1,1]
  输出：true
  解释：可行的分组是 [1,1]
  示例 5：

  输入：[1,1,2,2,2,2]
  输出：true
  解释：可行的分组是 [1,1]，[2,2]，[2,2]

*/

// 个人尝试的做法
// export default (deck) => {
//   if (deck.length <= 1) {
//     return false
//   } else {
//     const obj = {};
//     for (let i = 0; i < deck.length; i++) {
//       const item = deck[i];
//       if (!obj[item]) {
//         obj[item] = [];
//       }
//       obj[item].push(item);
//     }

//     let lengthArr = [];
//     for (let key in obj) {
//       lengthArr.push(obj[key].length);
//       if (obj[key].length === 1) {
//         return false;
//       }
//     }
//     let minToMax = [...lengthArr].sort((a, b) => a - b);
//     let maxToMin = [...lengthArr].sort((a, b) => b - a);

//     let flag = 1;
//     let gyy = null;
//     for (let i = 0; i < maxToMin.length; i++) {
//       for (let j = 0; j < minToMax.length - i; j++) {
//         if (maxToMin[i] % minToMax[j] === 0) {
//           flag = 1;
//         } else {
//           let temp = getGyy(maxToMin[i], minToMax[j])
//           gyy = gyy ? (temp > gyy ? gyy : temp) : temp
//           if (gyy !== 1 && maxToMin[i] % gyy === 0) {
//             flag = 1;
//           } else {
//             flag = 0;
//             break;
//           }
//         }
//       }
//       if (flag === 0) {
//         break;
//       }
//     }

//     if (flag === 1) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// function getGyy(a, b) {
//   let temp = 0
//   while(b!=0) {
//     temp = a % b;
//     a = b;
//     b = temp;
//   }
//   return a;
// }

// 优化后的做法
export default (deck) => {
  let getResult = (a, b) => {    //定义一个寻找公约数的方法
    if(b === 0)  return a;   
    return getResult(b, a % b)
  }
  const hash = deck.reduce((pre, num) => {    //统计出每种数字的数目
    if(!pre[num]) {
      pre[num] = 1
    }else{
      pre[num]++
    }
    return pre
  }, {})
  const numCount = Object.values(hash)     //将hash中的每项数值存入数组，便于后续遍历
  const min = numCount.sort((a, b) => a-b)[0];         //利用数组排序快速获取最小值
  if (min < 2) return false; //根据题意，如果最分组最小数量小于2，直接返回false
  return !numCount.some((item,index) => {
    if(index > 0) return getResult(item, min) === 1
  })
}