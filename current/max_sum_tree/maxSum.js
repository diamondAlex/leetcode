//https://leetcode.com/problems/minimum-absolute-difference-in-bst/
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
var maxLevelSum = function(root) {
    let levelSum = []
    let nodes = [[root,1]]    

    while(nodes.length != 0){
        let nodeItem = nodes.pop()
        let level = nodeItem[1]

        let node = nodeItem[0]
        levelSum[level] ? levelSum[level] = levelSum[level] + node.val 
            : levelSum[level] = node.val
         
        if(node.right){
            nodes.push([node.right, level+1])
        }
        if(node.left){
            nodes.push([node.left, level + 1])
        }
    }

    let max =  levelSum.reduce((a,e) =>{
        return Math.max(a,e) 
    })
    return levelSum.findIndex((e) => e == max)
};


let node3 = new TreeNode(-8,null,null)
let node4 = new TreeNode(7,null,null)
let node1 = new TreeNode(0,null,null)
let node2 = new TreeNode(7,node4,node3)
let node = new TreeNode(1,node1,node2)

let val = maxLevelSum(node)
console.log("final = " + val)
