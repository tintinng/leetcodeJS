function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
    let dummy = new TreeNode(-1);
    let pre = dummy;
    let inorder = function (node) {
        if (!node) {
            return;
        }
        inorder(node.left);
        node.left = null;
        pre.right = node;
        pre = node;
        inorder(node.right);
    }
    inorder(root)

    return dummy.right;
};

let root = new TreeNode(4);
let node2 = new TreeNode(2);
let node5 = new TreeNode(5);
root.left = node2;
root.right = node5;
let node1 = new TreeNode(1);
let node3 = new TreeNode(3);
node2.left = node1;
node2.right = node3;
node1.left = new TreeNode(0);
node5.right = new TreeNode(6);

convertBiNode(root);