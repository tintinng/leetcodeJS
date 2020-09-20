/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null
 }

/**
 * 1、（递归）三种情况：
 *   1-给定 p q的值都比root的值小：在root的左子树中继续找
 *   2-给定 p q的值都比root的值大：在root的右子树中继续找
 *   3-给定 p q的值一个比root小，一个比root大，则root即为所求
 * 2、（迭代）
 *     循环找到分割点即可，空间复杂度可以压缩到o(1)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p,q)
    } else {
        return root
    }
};