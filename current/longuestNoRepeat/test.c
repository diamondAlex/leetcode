#include <stdio.h>

int main(){
    char * s = "";
    if(*s){
        printf("wut");
    }
    else{
        printf("the");
    }
    s = " ";
    if(*s){
        printf("wut");
    }
    else{
        printf("the");
    }
}
