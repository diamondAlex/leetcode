#include <stdio.h>

int buddyStrings(char * s, char * goal){
    if(*(s+1) == '\0'){
        return 0;
    }

    int found[200] = {0};

    int equal = -1;
    int pair = 0;
    char * p;
    char * g;
    char * u = {NULL};
    char * ug = {NULL};
    g = goal;
    p = s;
    while(*p){
        int seen = found[*p];
        if(seen){
            pair = 1;
        }
        else{
            found[*p] = 1;    
        }
        if(*p != *g){
            equal = 0;
            if(!u){
                u = p;
                ug = g;
            }
            else{
                printf("%s \n", u);
                printf("%s \n", p);
                if(*ug == *p && *u == *g){
                    printf("should swap\n");
                    char temp = *u;
                    *u = *p;
                    *p = temp;
                    printf("%s \n", s);
                    printf("%s \n", goal);
                    equal = 1;
                }
                else {
                    return equal;
                }
            }
        }
        g++;
        p++;
    }

    //printf("%s \n", s);
    //printf("%s \n", goal);
    //condition for uneven strings input
    if(*g != '\0'){
        //printf("uneven string\n");
        return 0;
    }
    //we have a pair to swap, and we never got different letters
    if(equal == -1 && pair){
        return 1;    
    }

    if(equal == -1){
        return 0;
    }

    return 0;
}

int main(){
    /*char s[5] = {'t','s','e','t','\0'};*/
    /*char goal[5] = {'t','e','s','t','\0'};*/
    char s[3] = {'a','b','\0'};
    char goal[3] = {'a','b','\0'};
    /*char s[5] = {'a','b','c','a','\0'};*/
    /*char goal[5] = {'a','b','d','a','\0'};*/
    printf("%i \n", buddyStrings(s, goal)); 

}
