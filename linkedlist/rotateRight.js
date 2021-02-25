function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) {
        return head;
    }
    // 遍历第一遍，记录链表的长度
    let count = 1;
    let p = head;
    while (p.next) {
        count++;
        p = p.next;
    }
    // 记录尾节点
    let tail = p;
    let n = k % count;
    if (n === 0) {
        return head;
    }
    // 遍历第二遍找到断开的节点
    n = count - n - 1;
    let pre = head;
    p = head.next;
    while (n > 0 && p) {
        pre = p;
        p = p.next;
        n--;
    }
    // 首尾相连
    tail.next = head;
    // 断开
    pre.next = null;
    // 返回新头部
    return p;
};