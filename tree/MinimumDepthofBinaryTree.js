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
 * 1、层次遍历，碰到第一个叶子节点，对应层高即为minDepth
 *      空间：
 *      时间：
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) {
        return 0
    }
    let queue = []
    let level = 1
    queue.push(root)
    while(queue.length) {
        let levelLength = queue.length
        for(let i=0; i<levelLength; i++) {
            let queueHead = queue.shift()
            if(!queueHead.left && !queueHead.right) {
                return level
            }
            if(queueHead.left) {
                queue.push(queueHead.left)
            }
            if(queueHead.right) {
                queue.push(queueHead.right)
            }
        }
        level++
    }
};