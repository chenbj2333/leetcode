/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null) return false;
  let fast = head.next;
  let slow = head;
  while (fast !== null && fast.next !== null && slow !== null) {
    if (fast === slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};
// @lc code=end
