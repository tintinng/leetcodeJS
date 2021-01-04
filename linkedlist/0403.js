function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
    if (!tree) {
        return null;
    }
    let queue = [];
    let res = [];
    queue.push(tree);
    while (queue.length) {
        let queueLength = queue.length;
        let q = new ListNode(null);
        let dummy = q;
        for (let i = 0; i < queueLength; i++) {
            let p = queue.shift();
            q.next = p;
            q = q.next;
            if (p.left) {
                queue.push(p.left);
            }
            if (p.right) {
                queue.push(p.right);
            }
        }
        res.push(dummy.next);
    }
    return res;
};

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.right = new TreeNode(7)
root.left.left.left = new TreeNode(8)

listOfDepth(root)