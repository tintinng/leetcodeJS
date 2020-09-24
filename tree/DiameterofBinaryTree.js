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
/** 1、递归。（每一条路径都可以看作一个节点的左右子树深度之和+1）
 *      dfs遍历所有节点，与最长路径大小比较
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let res = 0
    let dfs = function(root) {
        if(!root) {
            return 0
        }

        let lHeight = dfs(root.left)
        let rHeight = dfs(root.right)
        res = Math.max(lHeight + rHeight, res)

        return Math.max(lHeight, rHeight) + 1
    }
    dfs(root)

    return res
};