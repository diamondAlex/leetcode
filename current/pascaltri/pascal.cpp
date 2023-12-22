//this is used for pascal triangle 1 and 2
#include <algorithm>
#include <iostream>
#include <stdio.h>
#include <vector>

void printarr(std::vector<std::vector<int>> v){
    for(std::vector<int> l: v){
        for(int i: l){
            std::cout << i << ", ";
        }
            std::cout << std::endl;
    }
}

class Solution {
public:
    std::vector<int> generate(int numRows) {
        std::vector<std::vector<int>> vals;
        if(numRows == 0){
            vals = {{1}};
        }
        else if(numRows == 1){
            vals = {{1},{1,1}};
        }
        else{
            vals = {{1},{1,1}};
            int curr_row = 2;
            while(curr_row <= numRows){
                std::vector<int> row;
                row.push_back(1);
                for(int i = 0;i<vals[curr_row-1].size()-1;i++){
                    int total = vals[curr_row-1][i] + vals[curr_row-1][i+1];
                    row.push_back(total);
                }
                row.push_back(1);
                vals.push_back(std::move(row));
                curr_row++;
            }
        }
        return vals[numRows];
    }
};

int main(){
    Solution* sol = new Solution();
    std::vector<int> out = sol->generate(3);

    for(int i: out){
        std::cout << i << ", ";
    }

    return 1;  
}
