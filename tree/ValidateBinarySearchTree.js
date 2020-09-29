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
 *  1、中序遍历，用数组存放，判断数组是否严格递增 
 *      时间：遍历一遍二叉树一次，遍历数组一次 O(N)
 *      空间：创建一个数组，递归的时候栈的大小 O(N)
 *  2、递归，不创建额外的数组 helper(root, lower, upper)
 *  3、中序遍历也可以不用额外数组
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST1 = function(root) {
    let nums = []
    let res = true
    let inorder = function(root) {
        if(!root) {
            return
        }
        inorder(root.left)
        nums.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    if(nums.length <= 1) {
        return true
    }
    for(let i=0; i<nums.length-1; i++) {
        if(nums[i] >= nums[i+1]) {
            res = false
        }
    }

    return res
};

var isValidBST3 = function(root) {
    let preNum = -Infinity
    let res = true
    let inorder = function(root) {
        if(!root) {
            return
        }
        inorder(root.left)
        if(root.val <= preNum) {
            res = false
        }
        preNum = root.val
        inorder(root.right)
    }
    inorder(root)

    return res
};