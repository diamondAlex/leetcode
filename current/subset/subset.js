//https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let perm = [[]]
    for(let i=0;i<nums.length;i++){
        for(let j = i+1;j != nums.length+1;j++){
            let sl = nums.slice(i,j)
            perm.push(sl)
            for(let k=j;k<nums.length;k++){
                let current = [...sl]
                if(k != j){
                    current = [...sl,nums[k]] 
                    perm.push(current)
                }
            }
        }
    }
    return perm
};

let nums = [1,2,3,4]
let ret = subsets(nums)
console.log(ret)
