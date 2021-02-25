function ListNode(val, next) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
}

var mergeKList = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    let dummy = new ListNode(-Infinity);
    dummy.next = lists[0];
    for (let i = 1; i < lists.length; i++) {
        let pre = dummy, p = dummy.next;
        let q = lists[i];
        while (q && p) {
            if (q.val < p.val) {
                // q节点插入到pre和p之间
                let next = q.next;
                pre.next = q;
                q.next = p;
                // 更新pre、q
                pre = pre.next;
                q = next;
            } else {
                pre = pre.next;
                p = p.next;
            }
        }
        // p走到头了
        if (!p) {
            pre.next = q;
        }
    }
    return dummy.next;
}