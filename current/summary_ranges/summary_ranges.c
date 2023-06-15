//there's just no way this is right. It's almost impossible
//https://leetcode.com/problems/summary-ranges/

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void printRanges(char ** ranges, int * max){
    printf("\n");
    for(int i = 0; i < *max ; i++){
        printf("%s\n",ranges[i]);
    }
    printf("\n");
}

char ** summaryRanges(int* nums, int numsSize, int* returnSize){
    char ** ranges = malloc(sizeof(char)*10*150);
    int range_count = 0;
    int start = nums[0];
    int end = nums[0];
    int current = nums[0];
    if(numsSize == 0) {
        int none = 0;
        *returnSize = none;
        char empty[0];
        ranges[0] = empty;
        return ranges;
    }
    
    for(int i =1 ; i<numsSize+1;i++){
        if(i == numsSize){
            goto write; 
        }
        if(nums[i] == current + 1){
            end = nums[i];
        }
        else{
write:
            if(start == end){
                //range will be "x" 
                char * str = malloc(sizeof(char)*65);
                sprintf(str, "%d", start);
                ranges[range_count] = str;
                range_count++;
            }
            else{
                //range will be "x->y" 
                char * str = malloc(sizeof(char)*65);
                char * str2 = malloc(sizeof(char)*65);
                sprintf(str, "%d", start);
                sprintf(str2, "%d", current);
                strcat(str,"->");
                strcat(str,str2);
                ranges[range_count] = str;
                range_count++;
            }
            if(i == numsSize){
                printf("continue");
                continue;
            }
            end= nums[i];
            start= nums[i];
        }
        printf("i = %i\n",i);
        current = nums[i];
    }
    *returnSize = range_count;
    return ranges;
}

int main(){
    /*int list[6] = {0,1,2,4,5,7};*/
    /*int retSize = 0;*/
    int list[0] = {};
    int retSize = 0;
    int * returnSize;
    returnSize = &retSize;
    char ** ranges = summaryRanges(list, 0, returnSize);  
    printRanges(ranges, returnSize);
}
