#include <stdio.h>

int maxProfit(int* prices, int pricesSize) {
    int min = -1;
    int profit = 0;
    int buy = 0;
    int sell = 0;
    for(int i = 0;i < pricesSize; i++){
        if(min == -1){
            min = *prices;
            prices++;
            continue;
        }
        else if(*prices < min){
            min = *prices;
            buy = i;
        }
        else{
            int curr_profit = 0;
            curr_profit = *prices - min;
            if(curr_profit > profit){
                profit = curr_profit;
                sell = i;
            }
        }
        prices++;
        
    }
    return profit;
}

int main(){
    /*int prices[6] = {7,6,4,3,1};    */
    int prices[6] = {7,1,5,3,6,4};    
    int pricesSize = 6;

    int prof = maxProfit(prices, pricesSize);
    printf("%i profit\n", prof);

}
