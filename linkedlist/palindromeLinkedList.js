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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 普通方法，遍历一遍用数组存，在数组中判断
// 时间：O(n) 空间：O(N)
var isPalindrome = function(head) {
    let arr = []
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    for(let i=0,j=arr.length-1 ;i<j ; i++, j--) {
        if(arr[i] !== arr[j]) {
            return false;
        }
    }

    return true;
}

// 将链表中点之后的节点全部反转
// 时间：O(n) 空间：O(1)
var isPalindrome = function(head) {
    if(!head) {
        return true
    }
    let dummy = new ListNode(-1);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    // 找链表中点
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 将slow后面的链表反转
    let pre = slow;
    let p = slow.next;
    while(p) {
        let next = p.next;
        p.next = pre;
        pre = p;
        p = next;
    }
    // 判断
    while(pre.val === head.val) {
        if(pre === head && !fast) {
            return true
        }
        if(pre.next === head && fast) {
            return true
        }
        pre = pre.next;
        head = head.next;
    }
    
    return false;
};