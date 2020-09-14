/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

//  根节点为第一层，将偶数层的结果逆置一遍
var zigzagLevelOrder = function(root) {
    if(!root) {
        return []
    }
    let queue = []
    queue.push(root)
    let res = []
    let level = 1
    while(queue.length) {
        let levelLength = queue.length
        let temp = []
        for(let i=0; i<levelLength; i++) {
            let queueHead = queue.shift()
            temp.push(queueHead.val)
            if(queueHead.left) {
                queue.push(queueHead.left)
            }
            if(queueHead.right) {
                queue.push(queueHead.right)
            }
        }
        // 偶数
        if(!(level%2)) {
            temp.reverse()
        }
        res.push(temp)
        level++
    }

    return res
};