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
/** 1、递归
 *      时间: O(n)  遍历整个数组
 *      空间：O(log(n)) 返回值不算做空间复杂度，递归栈使用大小是 O(log(n))
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let helper = function(nums, left, right) {
        if(left >= right) {
            return null
        }
        let mid = Math.floor((left + right) / 2)
        let root = new TreeNode(nums[mid])
        root.left = helper(nums, left, mid)
        root.right = helper(nums, mid+1, right)

        return root
    }

    return helper(nums, 0, nums.length)
};