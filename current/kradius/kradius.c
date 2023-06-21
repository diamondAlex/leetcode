#include <stdio.h>
#include <stdlib.h>

int* getAverages(int* nums, int numsSize, int k, int* returnSize){
    int * retArr = malloc(sizeof(int)*numsSize);
    *returnSize = numsSize;
    int sum = 0;

    for(int i = 0;i<numsSize;i++){
        if(i-k < 0 || i+k+1 > numsSize){
            retArr[i] = -1; 
            continue;
        }
        else if(sum == 0){
            for(int j = i-k;j<i+k+1;j++){
                sum += nums[j];
            }
        }
        else{
            sum = sum - nums[i-k-1]+ nums[i+k];
        }
        retArr[i] = sum / (2* k + 1);
    }
    return retArr;
}

int main(){
    int nums[9] = {7,4,3,9,1,8,5,2,6};
    int numsSize = 9;
    int k = 3;

    int * returnSize;
    int rv = 0;
    returnSize = &rv;


    int* retArr = getAverages(nums, numsSize, k, returnSize);

    for(int i =0;i<*returnSize;i++){
        printf("%i, ", nums[i]);
    }
    printf("\n");
    for(int i =0;i<*returnSize;i++){
        printf("%i, ", retArr[i]);
    }
    printf("\n");

}
