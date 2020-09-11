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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 头插法新建一个链表
var reverseList = function(head) {
    let newHead = null;
    while(head !== null) {
        let p = new ListNode(head.val);
        p.next = newHead;
        newHead = p;
        head = head.next;
    }

    return newHead;
};

// 原地反转链表
var reverseList1 = function(head) {
    if(!head) {
        return null;
    }
    let pre = null;
    let cur = head;
    while(cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

// 递归
let reverseList2 = (head) =>{
    var res;
    let reverse = (pre, cur) => {
      if(!cur) {
          res = pre;
          return ;
      }
      // 保存 next 节点
      let next = cur.next;
      cur.next = pre;
      reverse(cur, next);
    }
    reverse(null, head);
    return res;
}

let h = new ListNode(1);
var q = h;
for(var i=2; i<6; i++) {
    let f = new ListNode(i);
    q.next = f;
    q = q.next;
}

h = reverseList2(h);
while(h != null){
    console.log(h.val);
    h = h.next;
}