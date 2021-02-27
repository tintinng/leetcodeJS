function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var sortList = function(head) {
    // 空节点和只有一个元素的节点可以直接返回
    if (!head || !head.next) {
        return head;
    }
    let merge = function(head1, head2) {
        if (!head1) {
            return head2;
        }
        if (!head2) {
            return head1;
        }
        let dummy = new ListNode(-Infinity);
        dummy.next = head1;
        let p = head1, q = head2;
        let pre = dummy;
        // 将q插入到 pre和p之间
        while (p && q) {
            if (q.val <= p.val) {
                let next = q.next;
                pre.next = q;
                q.next = p;
                q = next;
                pre = pre.next;
            } else {
                pre = p;
                p = p.next;
            }
        }
        // p到头了;q到头了不用处理
        if (!p) {
            pre.next = q;
        }

        return dummy.next;
    }
    // 找到中间节点，断开
    let p = head, next = p.next;
    while (next && next.next) {
        p = p.next;
        next = next.next.next;
    }
    let newHead = p.next;
    p.next = null;
    // 递归排序前后两部分
    let head1 = sortList(head);
    let head2 = sortList(newHead);
    // 归并
    return merge(head1, head2);
}

let dummy = new ListNode(-1);
let pre = dummy;
for (let i = 0; i < 9; i++) {
    let p = new ListNode(Math.floor(Math.random() * 50))
    pre.next = p;
    pre = pre.next;
}

let res = []
let q = dummy.next;
while (q) {
    res.push(q.val);
    q = q.next;
}
console.log(res)

let res2 = []
q = sortList(dummy.next);
while (q) {
    res2.push(q.val);
    q = q.next;
}
console.log(res2)