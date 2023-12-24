package main
import("fmt")

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func postorderTraversal(root *TreeNode) []int {
    if root == nil{
        return []int{}
    }

    vals := make([]int,0)

    vals = append(vals, root.Val)
    if root.Left != nil{
        trav(root.Left, &vals)
    }
    if root.Right != nil{
        trav(root.Right, &vals)
    }


    return vals
}

func trav(root *TreeNode, vals *[]int){
    *vals = append(*vals, root.Val)
    if root.Left != nil{
        trav(root.Left, vals)    
    }
    if root.Right != nil{
        trav(root.Right, vals)
    }
}

func main(){
    head := TreeNode{Val:1}
    head.Right = &TreeNode{Val:2}
    head.Left = nil
    head.Right.Left = &TreeNode{Val:3}
    head.Right.Right = nil
    fmt.Println(postorderTraversal(&head))
    
}
