/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * set存储不重复的节点
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let set = new Set();
    let p = head;
    while(p) {
        if(set.has(p)) {
            return true;
        }
        set.add(p);
        p = p.next;
    }
    return false;
};

/**
 * 快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) {
        return false;
    }
    var slow = head;
    var fast = head.next;
    while(slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            return true;
        }
    }

    return false;
}

/**
 * 快慢指针,找到环的起始点
 * @param {ListNode} head
 * @return {boolean}
 */
var detectCycle = function(head) {
    if(!head) {
        return null;
    }
    var slow = head;
    var fast = head.next;
    while(slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            var p = head;
            slow = slow.next;
            while(p != slow){
                p = p.next;
                slow = slow.next;
            }
            return p;
        }
    }

    return null;
}