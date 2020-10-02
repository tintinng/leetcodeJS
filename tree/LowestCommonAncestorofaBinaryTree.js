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
 *    1-如果以root为根的子树中包含p和q，则返回他们的公共祖先
 *    2-如果只包含p，则返回p
 *    3-如果只包含q，则返回q
 *    4-如果都不包含，则返回null
 * 2、用map记录每个节点的父节点
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root == p || root == q) {
        return root
    }

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    // 左边为空，整棵树的结果就是右子树的结果
    if(!left) {
        return right
    }
    // 右边为空，整棵树的结果就是左子树的结果
    if(!right) {
        return left
    }
    // 两边都不为空，就是左边一个右边一个，整棵树的结果就是root本身
    return root
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