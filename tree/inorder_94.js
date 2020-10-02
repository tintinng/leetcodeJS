/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
/**
 *  1、不用递归，使用迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = []
    let res = []
    let p = root
    while(p || stack.length) {
        // 左结点入栈
        while(p) {
            stack.push(p)
            p = p.left
        }
        p = stack.pop()
        // 输入根节点
        res.push(p.val)
        // 向右转
        p = p.right
    }

    return res
};

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

inorderTraversal(root)