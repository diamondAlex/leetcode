package main

import("fmt")

func majorityElement(nums []int) int {
    ele := make(map[int]int) 
    max := 0
    max_ele := 0
    for _,i := range nums{
        ele[i]+=1
        if(ele[i] > max){
            max = ele[i] 
            max_ele = i
        }
    }
    return max_ele
}

func main(){
    elements := [...]int{2,2,1,1,1,2,2}
    fmt.Println(majorityElement(elements[:]))
}
