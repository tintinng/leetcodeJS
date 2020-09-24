/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

/**
 *  1、递归；想象成两棵树，两棵树是对称二叉树的条件是
 *      1-根节点值相同
 *      2-左子树和右子树对称
 *      3-右子树和左子树对称
 *  2、迭代
 *      每次从队列取出两个节点并比较，将第一个节点左子树和第二个节点右子树加入队列
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let isSym = function (root1, root2) {
        if(!root1 && !root2) {
            return true
        }
        if(!root1 || !root2) {
            return false
        }
        return root1.val == root2.val && isSym(root1.left, root2.right) && isSym(root1.right, root2.left)
    }
    return isSym(root, root)
};

var isSymmetric0 = function(root) {
    if(!root) {
        return true
    }
    let queue = []
    queue.push(root)
    queue.push(root)
    while(queue.length) {
        let node1 = queue.shift()
        let node2 = queue.shift()
        if (!node1 && !node2) {
            continue
        }
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false
        }
        queue.push(node1.left)
        queue.push(node2.right)
        queue.push(node1.right)
        queue.push(node2.left)
    }

    return true
}