/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 找到第m个节点开始反转，直到第n个节点
var reverseBetween = function(head, m, n) {
    if(!head || m == n) {
        return head;
    }
    var i = 1;
    var dummy = new ListNode(-1);
    dummy.next = head;
    var cur = head, pre = dummy;
    while(i < m) {
        pre = cur;
        cur = cur.next;
        i++;
    }

    // 开始反转
    var tail = cur;
    var reversePre = null;
    while(i <= n) {
        let next = cur.next;
        cur.next = reversePre;
        reversePre = cur;
        cur = next;
        i++;
    }

    pre.next = reversePre;
    tail.next = cur;

    return dummy.next;
};
