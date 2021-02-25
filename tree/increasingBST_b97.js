function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let pre = new TreeNode(0, null, null)
    let inorder = function (node) {
        if (!node) {
            return 
        }
        inorder(node.left)
        node.left = null
        pre.right = node
        pre = node
        inorder(node.right)
    }
    inorder(root)
    return pre.right
};

let nodes = []
for (let i = 0; i < 10; i++) {
    nodes[i] = new TreeNode(i + 1)
}
nodes[4].left = nodes[2]
nodes[4].right = nodes[5]
nodes[2].left = nodes[1]
nodes[2].right = nodes[3]
nodes[1].left = nodes[0]
nodes[5].right = nodes[7]
nodes[7].left = nodes[6]
nodes[7].right = nodes[8]

increasingBST(nodes[4])