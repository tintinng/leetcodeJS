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

// 模拟中序遍历非递归
/**
 * @param {TreeNode} root
 */
let stack = []

var BSTIterator = function(root) {
    while(root) {
        stack.push(root)
        root = root.left
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let top = stack.pop()
    let right = top.right
    while(right) {
        stack.push(right)
        right = right.left
    }

    return top.val
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return stack.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */