/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdlib.h>
#include <stdio.h>
int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    int stored[10000];
    *returnSize = 2;
    int * positions = malloc(sizeof(int)*2);

    for(int i = 0;i<numsSize;i++){
        int current = nums[i];
        /*printf("%i\n", current);*/
        for(int j = i+1;j<numsSize;j++){
            if(current + nums[j] == target){
                positions[0] = i;
                positions[1] = j;
                return positions;
            }
        }
        stored[i] = nums[i];
    }
    return NULL;
}

int main(){
    /*int nums[4] = {2,7,11,15};*/
    /*int numsSize = 4;*/
    /*int target = 9;*/
    int nums[3] = {3,2,4};
    int numsSize = 3;
    int target = 6;
    int * ret;
    int i = 2, *returnSize= &i;

    ret = twoSum(nums, numsSize, target, returnSize);

    for(int i = 0;i<*returnSize;i++){
        printf("ret = %i \n",ret[i]);
    }
}


