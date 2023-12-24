package main

import "fmt"

type Node struct {
	data int
	next *Node
}

func main() {
	// Creating a simple linked list
	head := &Node{data: 1}
	head.next = &Node{data: 2}
	head.next.next = &Node{data: 3}
	head.next.next.next = &Node{data: 4}

	// Traversing the linked list and printing the addresses of each node
	current := head
	for current != nil {
		fmt.Printf("Node value: %d, Address: %p\n", current.data, current)
		current = current.next
	}
}
