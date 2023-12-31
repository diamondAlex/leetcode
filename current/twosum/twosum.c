/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdlib.h>
#include <stdio.h>

#define  TABLE_SIZE 10000
int *table[TABLE_SIZE*2] = {NULL};

int computeHash(int key){
    int hashedkey = key % TABLE_SIZE;
    if(key < 0){
        hashedkey = hashedkey * -1 + TABLE_SIZE;
    }
    return hashedkey;
}

int getKey(int key){
    int hashedkey = computeHash(key);
    printf("key = %i\n",hashedkey);
    printf("get - table[hashedkey] = %i\n",*table[hashedkey]);
    if(*table[hashedkey]){
        int * ptr = table[hashedkey];
        while(*ptr++){
            if(*ptr == key){
                return *ptr;
            }
        }
        return 0;
    }
    else{
        return 0;
    }
}

void insertVal(int val){
    int hashedkey = computeHash(val);
    printf("key = %i\n",hashedkey);
    if(table[hashedkey]){
        int * ptr = table[hashedkey];
        ptr++;
        *ptr = val;
    }
    else{
        int * ptr = malloc(sizeof(int) * 50);
        *ptr = val;
        table[hashedkey] = ptr;
        printf("insert - table[hashedkey] = %i\n", *table[hashedkey]);
    }
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    int stored[10000];
    *returnSize = 2;
    int * positions = malloc(sizeof(int)*2);

    for(int i = 0;i<numsSize;i++){
        int current = nums[i];
        int diff = current - target;
        int found = getKey(diff);
        if(found){
            positions[0] = 
            return positions;
        }
        else{
            insertVal(diff);
        }

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


