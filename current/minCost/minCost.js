//https://leetcode.com/problems/minimum-cost-to-make-array-equal/submissions/
/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
let values = require("./values")
var minCost = function(nums, cost) {
    let avg = Math.floor(nums.reduce((p,e) => p + e) / nums.length)

    let min
    let max = 0
    let total = 0
    for(let i =0;i<nums.length;i++){
        max = Math.max(max, nums[i])
        let value = Math.abs(avg-nums[i]) * cost[i]
        total += value
    }
    min = total

    total = 0
    for(let i = avg+1; i<= max; i++){
        for(let k =0;k<nums.length;k++){
            let value = Math.abs(i-nums[k]) * cost[k]
            total += value
            if(total > min) break
        }
        min = Math.min(total,min)
        total = 0
    }
    
    for(let i = avg-1; i>= 0; i--){
        for(let k =0;k<nums.length;k++){
            let value = Math.abs(i-nums[k]) * cost[k]
            total += value
            if(total > min) break
        }
        min = Math.min(total,min)
        total = 0
    }
    return min
};

//let nums = [1,3,5,2]
//let cost = [2,3,1,14]
let nums = [2,2,2,2,2]
let cost = [4,2,8,1,3]

console.time('Execution Time');
let ret = minCost(values.nums,values.cost)
console.timeEnd('Execution Time');
console.log(ret)
