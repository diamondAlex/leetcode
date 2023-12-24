package main

import("fmt")

type ListNode struct {
    Val int
    Next *ListNode
}

func getIntersectionNode(headA, headB *ListNode) *ListNode {
    seen := make(map[*ListNode]int)

    for headA != nil{
        seen[headA] = headA.Val 
        headA = headA.Next
    }

    for headB != nil{
        if(seen[headB] != 0){
            return headB
        }
        headB = headB.Next
    }
    return nil
}

func main(){
    fmt.Println("sup")

    head1 := ListNode{Val:4}
    head1.Next = &ListNode{Val:1}
    head1.Next.Next = &ListNode{Val:8}
    head1.Next.Next.Next = &ListNode{Val:4}
    head1.Next.Next.Next.Next = &ListNode{Val:5}

    head2 := ListNode{Val:5}
    head2.Next = &ListNode{Val:6}
    head2.Next.Next = &ListNode{Val:1}
    head2.Next.Next.Next = head1.Next.Next
    head2.Next.Next.Next.Next = head1.Next.Next.Next
    head2.Next.Next.Next.Next.Next = head1.Next.Next.Next.Next

    fmt.Println(getIntersectionNode(&head1,&head2))

}
