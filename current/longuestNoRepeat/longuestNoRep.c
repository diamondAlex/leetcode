// todo there's something clearly wrong, the ret pointer should never have to be this big

#include <stdio.h>
#include <string.h>
#include <stdlib.h>


int lengthOfLongestSubstring(char * s){
    if(!*s)
        return 0;
    if(*(s+1) == '\0'){
        return 1;
    }
    char table[256] = {0};
    char * ret = malloc(sizeof(char)*11256);
    char * p;
    p = s;
    int sublen = 0;

    while(*p){
        int index = *p;
        int f = table[index];
        //printf("current char %c\n",*p);
        //printf("current index %i\n",index);
        //printf("current table val %i\n",f);
        if(f == 0){
            //printf("new char %c\n",*p);
            table[index] = 1;
            //printf("insert into table[%i] val %i\n",index,table[index]);
            p++;
        }
        else{
            if((p-s) > sublen){
                /*printf("%c\n", *p);*/
                /*printf("%c\n", *s);*/
                sublen = p - s;
                strcpy(ret, s);
                ret[sublen] = '\0';
            }
            s += 1;
            p = s;
            for(int j =0 ;j<256;j++)
                table[j] = 0;

            //printf("stored string %s\n",ret);
        }
    }
    if(p-s > sublen){
        return p - s;
    }
    return sublen;
}

int main(){
    /*char * s = "abcabcbb";*/
    /*char * s = "cdmyhietzgalfkjindktzztkpcfghxblaqjjypezweldqwmgcyzbytnn";*/
    char * s = "hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    /*char * s = "pwwkew";*/
    printf("%i\n", lengthOfLongestSubstring(s));
    
}
