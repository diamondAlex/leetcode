#include <stdio.h>
#include <limits.h>

int myAtoi(char * s){
    int total = 0;
    int i = 0;
    int c;
    int negative = 1;
    while((c =  s[i]) == ' ')
        i++;

    if(c == '-'){
        negative *= -1;
        i++;
    }
    else if(c == '+'){
        i++;
    }

    while((c =  s[i++]) != '\0'){
        if(c >= '0' && c<='9'){
            if(total > INT_MAX/10){
                printf("should be here\n");
                printf("total \t= %i\n",total);
                printf("int_max\t= %i\n",INT_MAX/10);
                return negative == 1 ? INT_MAX: INT_MIN;
            }
            else if(total == INT_MAX/10){
                printf("should not be here\n");
                printf("total \t= %i\n",total);
                printf("int_max\t= %i\n",INT_MAX/10);
                //if it's negative above 8 
                if(negative == -1 && c >= '8'){
                    return INT_MIN;
                }
                else if(negative == 1 && c >='7'){
                    return INT_MAX;
                }
                else {
                    total = total * 10 + (c - 48); 
                }
            }
            else
                total = total * 10 + c - 48; 
        }
        else {
            break;
        }
    }
    total = total * negative;
    return total;
}

int main(){
    /*char * input = "   +001351 testing";*/
    /*char * input = "2147483648";*/
    /*char * input = "-2147483646";*/
    /*char * input = "-91283472332";*/
    /*char * input = "+1";*/
    char * input = "21474836460";
    int ret = myAtoi(input);
    printf("ret = %i\n", ret);
}
