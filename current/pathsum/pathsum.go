package main

import(
    "fmt"
)

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func hasPathSum(node *TreeNode, targetSum int) bool{
    has_it := false 

    if node == nil{
        return false
    }

    total := node.Val

    if node.Left != nil{
        has_it = rec_sum(node.Left, total, targetSum)
        if has_it == true{
            return has_it
        }
    }
    if node.Right != nil{
        has_it = rec_sum(node.Right, total, targetSum)
        if has_it == true{
            return has_it
        }
    }
    if node.Right == nil && node.Left == nil && total == targetSum{
        return true
    }
    return has_it
}

func rec_sum(node *TreeNode, sum int, targetSum int) bool{
    has_it := false 

    total := sum + node.Val

    if node.Left != nil{
        has_it = rec_sum(node.Left, total, targetSum)
        if has_it == true{
            return has_it
        }
    }
    if node.Right != nil{
        has_it = rec_sum(node.Right, total, targetSum)
        if has_it == true{
            return has_it
        }
    }
    if node.Right == nil && node.Left == nil && total == targetSum{
        return true
    }

    return has_it
}

func main(){
    node9 := TreeNode{Val: 1, Left: nil , Right: nil }
    node8 := TreeNode{Val: 2, Left: nil , Right:  nil}
    node7 := TreeNode{Val: 7, Left: nil , Right: nil }
    node6 := TreeNode{Val: 4, Left: nil, Right: &node9 }
    node5 := TreeNode{Val: 13, Left:nil , Right:nil }
    node4 := TreeNode{Val: 11, Left:&node7 , Right:&node8 }
    node3 := TreeNode{Val: 8, Left:&node5 , Right:&node6 }
    node2 := TreeNode{Val: 4, Left: &node4 , Right:nil }
    node1 := TreeNode{Val: 5, Left: &node2, Right: &node3}
    sum := 22
    fmt.Println(hasPathSum(&node1,sum))
}
