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
 * 1、自顶向下时每个节点的高度会被重复调用
 *      时间：O( log(n)*n )
 *      空间：O( n )
 * 2、自底向上（后序遍历，返回子树的高度或者-1，-1表示不平衡之间返回）
 *      时间：O( n )
 *      空间：O( n )
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) {
        return true
    }

    return isBalanced(root.left) 
        && isBalanced(root.right) 
        && Math.abs(maxDepth(root.left)-maxDepth(root.right))<=1
};

var maxDepth = function(root) {
    if(!root) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}