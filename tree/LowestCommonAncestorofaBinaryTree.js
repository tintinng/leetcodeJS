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
 * 1、递归：
 *    如何判断一个节点x是不是p,q的公共节点？
 *      1-p和q，一个在x左子树，一个在x右子树
 *      2-x这个节点是p，q在左子树或右子树；x这个节点是q，p在左子树或者右子树
 * 2、用map记录每个节点的父节点
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var res
    // root节点的子树中是否包含p节点或q节点
    let inChild = function(root, p, q) {
        if(!root) {
            return false
        }

        // 左子树是否包含p,q中任意一个
        let isInLeft = inChild(root.left, p, q)
        // 右子树是否包含p,q中任意一个
        let isInRight = inChild(root.right, p, q)
        
        // 找到最近公共祖先
        if((isInLeft && isInRight) || ((isInLeft || isInRight) && (p == root || q == root)) ) {
            res = root
        }
        // 包含任意一个都会返回true
        return isInLeft || isInRight || (p == root || q == root)
    }
    inChild(root, p, q)
    return res
};

var lowestCommonAncestor1 = function(root, p, q) {
    let map = new Map()
    // 存储p节点和p的所有祖先节点（包括父节点）
    let pAncestors = new Set()
    // 遍历二叉树，给每个节点添加其对应父节点
    let setFather = function(root, father) {
        if (!root) {
            return
        }
        map.set(root, father)
        setFather(root.left, root)
        setFather(root.right, root)
    }
    setFather(root, null)
    while (p) {
        pAncestors.add(p)
        p = map.get(p)
    }
    while (q) {
        if (pAncestors.has(q)) {
            return q
        } else {
            q = map.get(q)
        }
    }
}