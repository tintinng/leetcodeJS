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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return []
    }
    let queue = []
    let res = []
    queue.push(root)
    while(queue.length) {
        let level = queue.length
        let arr= []
        for(let i=0; i<level; i++) {
            let queueHead = queue.shift()
            arr.push(queueHead.val)
            if(queueHead.left) {
                queue.push(queueHead.left)
            }
            if(queueHead.right) {
                queue.push(queueHead.right)
            }
        }
        res.push(arr)
        break
    }

    return res
};

var root = new TreeNode(3)
var node1 = new TreeNode(9)
var node2 = new TreeNode(20)
var node3 = new TreeNode(15)
var node4 = new TreeNode(7)
root.left = node1
root.right = node2
node2.left = node3
node2.right = node4

console.log(levelOrder(root))