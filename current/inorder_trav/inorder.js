 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var traverse = (root, result_array) => {
    root.left ? traverse(root.left,result_array) : 0;
    result_array.push(root.val)
    root.right ? traverse(root.right,result_array) : 0;
}

var inorderTraversal = function(root) {
    let result_array = []
    if (!root) return result_array
    traverse(root, result_array)
    return result_array
};

let node7 = new TreeNode(9,null,null)
let node6 = new TreeNode(6,null,null)

let node5 = new TreeNode(3,null,null)
let node4 = new TreeNode(1,null,null)

let node3 = new TreeNode(8,node6,node7)
let node2 = new TreeNode(2,node4,node5)

let node1 = new TreeNode(5,node2,node3)

inorderTraversal(node1)
