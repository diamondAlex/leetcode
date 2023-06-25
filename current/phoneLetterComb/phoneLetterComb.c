//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

char ** letterCombinations(char * digits, int* returnSize){
    char * p;
    p = digits;
    int length = strlen(digits);
    int nums[length];
    char *equiv[10];
    equiv[2] = "abc";
    equiv[3] = "def";
    equiv[4] = "ghi";
    equiv[5] = "jkl";
    equiv[6] = "mno";
    equiv[7] = "pqrs";
    equiv[8] = "tuv";
    equiv[9] = "wxyz";

    int digit = 0;
    int total_comb = 1;

    int n;
    while((n = (*p++))){
        int num = n - '0';
        nums[digit++] = num;
        total_comb *= strlen(equiv[num]);
    }

    /*printf("%i digit\n",digit);*/
    /*for (int i = 0; i<length; i++) {*/
        /*printf("nums[i] %i\n",nums[i]);*/
    /*}*/


    char ** combinations  = malloc(sizeof(char)*total_comb*length);
    for(int i =0 ;i<length;i++){
        char ** pc = malloc(sizeof(char)*total_comb*length);
        if(i==1){
            *pc = equiv[nums[i]]; 
        }
        else{
    
        }
        
    }

    for (int i = 0; i<length+1; i++) {
        printf("comb %s\n",*combinations++);
    }


    return combinations;
}

int main(){
    char * digits = "792";
    int * returnSize;
    char ** ret = letterCombinations(digits, returnSize);
    
}
