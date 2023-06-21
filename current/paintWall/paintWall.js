//https://leetcode.com/problems/painting-the-walls/

/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
    let value = []
    for(let i =0;i<cost.length;i++){
        value[i] = [cost[i] * time[i], cost[i], time[i]]
    }
    value.sort((a,b) => a[0]-b[0])
    console.log(value)
    let totalCost = 0
    let current_time = 0
    while(value.length != 0){
        let current_PP = value.shift()
        totalCost = totalCost + current_PP[1]
        current_time = current_PP[2]

        while(current_time > 0 && value.length > 0){
            value.pop()
            current_time--
        }
    }
    return totalCost
};

let cost = [8,7,5,15]
let time = [1,1,2,1]

let ret = paintWalls(cost,time)
console.log(ret)

