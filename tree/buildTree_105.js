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
 * 1、递归
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let pos = new Map()
    let n = inorder.length
    for(let i=0; i<n; i++) {
        pos.set(inorder[i], i)
    }
    let dfs = function(preorder, inorder, pl, pr, il, ir) {
        if(pl > pr) {
            return null
        }

        let val = preorder[pl]
        let root = new TreeNode(val)
        let k = pos.get(val)
        // 左子树的长度
        let len = k - il
        root.left = dfs(preorder, inorder, pl+1, pl+len, il, k-1)
        root.right = dfs(preorder, inorder, pl+len+1, pr, k+1, ir)
        return root
    }
    return dfs(preorder, inorder, 0, n-1, 0, n-1)
};

let preorder = [3, 9, 20, 15, 7]
let inorder = [9, 3, 15, 20, 7]
buildTree(preorder, inorder)