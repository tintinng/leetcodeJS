/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

//  右视图就是层次遍历中每一层的最后一个节点值
var rightSideView = function(root) {
    if(!root) {
        return []
    }
    let queue = []
    queue.push(root)
    let res = []
    while(queue.length) {
        let levelLength = queue.length
        for(let i=0; i<levelLength; i++) {
            let queueHead = queue.shift()
            if(queueHead.left) {
                queue.push(queueHead.left)
            }
            if(queueHead.right) {
                queue.push(queueHead.right)
            }
            if(i == levelLength-1) {
                res.push(queueHead.val)
            }
        }
    }

    return res
};