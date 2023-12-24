//TODO this pointer shit has to be reviewed
package main
import("fmt")
type ListNode struct {
    Val int
    Next *ListNode
}

func hasCycle(head *ListNode) bool {
    addresses := make(map[*ListNode]int)
    
    for head != nil{
        addresses[head] = 1
        fmt.Printf("address:%p\n", head)
        head = head.Next
        if(addresses[head] == 1){
            return false
        }
    }
    return true    
}

func main(){
	head := &ListNode{Val: 3}
	head.Next = &ListNode{Val: 2}
	head.Next.Next = &ListNode{Val: 0}
	head.Next.Next.Next = &ListNode{Val: -4}
	//head.Next.Next.Next.Next = head.Next

    fmt.Printf("%p\n",head)
    fmt.Printf("%p\n",head.Next)
    fmt.Printf("%p\n",head.Next.Next)
    fmt.Printf("%p\n",head.Next.Next.Next)

    x := hasCycle(head)
    fmt.Println(x)
}
