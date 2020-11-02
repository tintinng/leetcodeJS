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
 *  1、dfs，每个节点都会称为最高点
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let res = -Infinity
    let dfs = function(root) {
        if(!root) {
            return 0
        }
        // 左边的最大路径和右边的最大路径
        let left = Math.max(dfs(root.left), 0)
        let right = Math.max(dfs(root.right), 0)
        // 经过当前节点的最大路径
        res = Math.max(res, left + right + root.val)
        // 返回某一条最大路径
        return Math.max(left + root.val, right + root.val)
    }
    dfs(root)
    return res
};