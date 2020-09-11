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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head) {
        return null;
    }
    var fisrt = null;
    let dummy = new ListNode(-1);
    dummy.next = head;
    var pre = dummy;
    var nextFirst = head;
    fisrt = nextFirst;
    while(fisrt && fisrt.next) {
        nextFirst = fisrt.next.next;
        pre.next = fisrt.next;
        fisrt.next.next = fisrt;
        pre = fisrt;
        fisrt = nextFirst;
    }
    pre.next = nextFirst;

    return dummy.next;
};

let h = new ListNode(1);
var q = h;
for(var i=2; i<6; i++) {
    let f = new ListNode(i);
    q.next = f;
    q = q.next;
}

h = swapPairs(h);
while(h != null){
    console.log(h.val);
    h = h.next;
}