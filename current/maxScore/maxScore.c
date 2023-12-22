#include <stdio.h>
int maxScore();

int main(){
    char* str = "00111";
    int m = maxScore(str);
    printf("%i\n",m);
}


void get_total(char* s, int limit, int* pl, int* pr){
    int i = 0;

    while(*s != '\0'){
        if(i<limit){
            if(*s == '0'){
                (*pl)++;
            }
        }
        else{
            if(*s == '1'){
                (*pr)++;
            }
        }
        i++;
        s++;
    }
}
int maxScore(char* s) {
    char* sp = s;
    sp++; 
    int left = 0;
    int right = 0;
    int* pl;
    int* pr;
    pl = &left;
    pr = &right;
    get_total(s, 1,pl,pr);
    int max = left + right;
    while(*(sp+1) != '\0'){
        if(*sp == '0'){
            left++;
        }
        if(*sp == '1'){
            right--;
        }
        if(max < (left + right)){
            max = (left + right);
        }
        /*printf("left= %i\n", left);*/
        /*printf("right= %i\n", right);*/
        /*printf("newmax= %i\n\n", max);*/
        sp++; 
    }

    return max; 
}
