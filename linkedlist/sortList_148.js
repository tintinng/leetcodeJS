//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * 要求时间复杂度为：O(n*logn)
 * 使用归并排序：递归+中点分割
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head.next) {
        return head;
    }
    let slow = head, fast = head;
    // 找到中间节点slow
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let left = head;
    let right = slow.next;
    // 断开
    slow.next = null;
    left = sortList(left);
    right = sortList(right);
    // 排序后合并
    let dummy = new ListNode(-1);
    let i = left, j = right, p = dummy;
    while (i && j) {
        if (i.val <= j.val) {
            p.next = i;
            i = i.next;
        } else {
            p.next = j;
            j = j.next;
        }
        p = p.next;
    }
    while (i) {
        p.next = i;
        i = i.next;
        p = p.next;
    }
    while (j) {
        p.next = j;
        j = j.next;
        p = p.next;
    }
    return dummy.next;
};

let head = new ListNode(4);
let p = head;
p.next = new ListNode(2);
p = p.next;
p.next = new ListNode(1);
p = p.next;
p.next = new ListNode(3);
p = p.next;
p.next = new ListNode(0);
sortList(head);
