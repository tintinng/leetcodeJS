/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let findP = false;
    let res = null;
    let inorder = function (node) {
        if (!node) {
            return ;
        }
        if (findP && res) {
            return ;
        }
        inorder(node.left)
        if (findP) {
            res = node;
            return 
        }
        if (node === p) {
            findP = true;
        }
        inorder(node.right)
    }
    return res;
};