//https://leetcode.com/problems/minimum-absolute-difference-in-bst/
//todo TOO SLOW
//*
 //Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let nodes = [root]    
    let values = []

    while(nodes.length != 0){
        let node = nodes.pop()
        values.push(node.val)
        if(node.right){
            nodes.push(node.right)
        }
        if(node.left){
            nodes.push(node.left)
        }
    }
    values.sort((a,b) => a - b)
    let min
    for(let i =1;i<values.length;i++){
        if(!min){
            min = Math.abs(values[i-1]-values[i])
        }
        else{
            min = Math.min(Math.abs(values[i-1]-values[i]),min)
        }
    }
    return min
};


let node3 = new TreeNode(989,null,null)
let node4 = new TreeNode(633,null,null)
let node1 = new TreeNode(67,node4,null)
let node2 = new TreeNode(853,null,node3)
let node = new TreeNode(678,node1,node2)

let min = getMinimumDifference(node)
console.log("min final = " + min)
