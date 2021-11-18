/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null;
  let nxt = head;
  while (nxt) {
    const temp = nxt.next;
    nxt.next = pre;
    pre = nxt;
    nxt = temp;
  }
  return pre;
};
// @lc code=end
