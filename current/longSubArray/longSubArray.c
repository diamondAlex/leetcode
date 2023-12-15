#include <stdio.h>

int longestSubarray(int* nums, int numsSize){
    int * p;
    p = nums;
    int * max = p + numsSize;
    int * start = p;
    int zeros = -1;
    int len = 0;
    int max_len = 0;

    while(p !=  max){
        /*printf("current value is %i\n",*p);*/
        if(*p == 1){
            len++;
            /*printf("adding 1 to len %i\n",len);*/
        }
        else if (*p == 0) {
            if(zeros == 0 || zeros == -1){
                start = p;
                zeros = 0;
            }
            zeros++; 
            if(zeros == 2){
                if (len > max_len){
                    max_len = len;
                    /*printf("new max is %i\n",max_len);*/
                }
                len = 0;
                zeros = 0;
                p = start;
                /*printf("new start is %i\n",*p);*/
            }
        }
        p++;
    }

    /*printf("%i len\n", len);*/
    /*printf("%i zero\n", zeros);*/
    /*printf("%i max\n", max_len);*/
    if(len > max_len){
        if(zeros == -1){
            return len-1;
        }
        else{
            return len;
        }
    }
    else{
        return max_len;
    }
}

int main(){
    int nums[3] = {1,1,1};
    int numsSize = 3;
    int ret = longestSubarray(nums, numsSize);
    printf("%i ret\n", ret);
}
