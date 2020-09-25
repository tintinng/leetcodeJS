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
 * 1、dfs，用一个栈保存当前路径，遇到叶子节点则把路径加入最终结果中
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) {
        return []
    }
    let res = []
    let path = []
    let dfs = function(root) {
        // 节点值加入路径
        path.push(root.val)
        // 找到叶子节点
        if(!root.left && !root.right) {
            let str = ''
            for(let i=0; i<path.length-1; i++) {
                str += path[i] + '->'
            }
            str += path[path.length-1]
            res.push(str)
        }
        if(root.left) {
            dfs(root.left)
        }
        if(root.right) {
            dfs(root.right)
        }
        path.pop()
    }
    dfs(root)

    return res
};