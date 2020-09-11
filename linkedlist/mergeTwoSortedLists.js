/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
    if(!l1) {
        return l2;
    }
    if(!l2) {
        return l1;
    }
    let dummy = new ListNode(-1);
    dummy.next = l1;
    let pre = dummy;
    while(l1 && l2) {
        if (l2.val < l1.val) {
            let next = l2.next;
            pre.next = l2;
            l2.next = l1;
            pre = pre.next;
            l2 = next;
        } else {
            pre = pre.next;
            l1 = l1.next;
        }
    }
    if(!l1 && l2) {
        pre.next = l2;
    }

    return dummy.next;
};