#include <stdio.h>
#include <stdlib.h>

#define  TABLE_SIZE 1
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

int main(){
    int x = -531613;
    
    insertVal(x);

    int val = getKey(x);

    printf("table[hashedkey] = %i\n", val);
    printf("\n");

    x = -341;
    
    insertVal(x);

    val = getKey(x);

    printf("table[hashedkey] = %i\n", val);
}
