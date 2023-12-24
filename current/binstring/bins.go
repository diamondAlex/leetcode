package main
import(
    "fmt"
)

func minOperations(s string) int {
    one_zero := 0
    zero_one := 0
    neither := 0
    for i:=0;i<len(s)-1;i+=2{
        if s[i] == '0' && s[i+1] == '1' {
            zero_one++
        } else if s[i] == '1' && s[i+1] == '0' {
            one_zero++
        } else {
            neither++
        }
    }

    var last rune = 'A'

    if(len(s)%2 != 0){
        last = []rune(s)[len(s)-1]
    }

    //fmt.Println(one_zero)
    //fmt.Println(zero_one)
    //fmt.Println(neither)

    extra := 0
    if(one_zero == zero_one){
        return (one_zero)*2 + neither 
    } else if(one_zero > zero_one){
        if last == '0'{
            extra = 1
        }
        return (zero_one)*2 + neither + extra
    }else{
        if last == '1'{
            extra = 1
        }
        return (one_zero)*2 + neither + extra
    }
}

func main(){
    //s := "10010100"
    s := "101101111"
    min := minOperations(s)

    fmt.Println(min)
}
