let x = 0
var totalCost = function(costs, k, candidates) {
    let left_to_hire = k
    let total_cost = 0
    let index = -1
    let min_left = -1
    let min_right = -1
    while ( left_to_hire > 0 ){
        x++
        if(x%5000 == 0){
            console.log(x)
        }
        let len = costs.length
        let min = Number.MAX_SAFE_INTEGER
        //console.log(costs)
        //find the best worker
        if(min_right != -1){
            min = min_right[0]
            index = min_right[1]
        }
        else{
            for(let i = len-1; i >= len -candidates; i--){
                if(costs[i] < min){
                    min = costs[i]
                    index = i
                    min_right = [min, index]
                }
            }
        }
        if(min_left != -1){
            min = Math.min(min, min_left[0])
            index = min_left[1]
        }
        else{
            for(let i = 0; i < candidates; i++){
                if(costs[i] <= min){
                    min = costs[i]
                    index = i
                    min_left = [min, index]
                }
            }
        }
        //console.log(`min = ${min}`)
        //get the selected worker's cost
        let cost = costs[index]
        total_cost = total_cost + cost

        //console.log(`worker = ${index}, for cost of ${cost}`)
        
        //check which side was selected
        if(index < candidates){
            min_right = -1
        }
        else{
            min_left = -1
        }

        //remove selected worker from list
        if(index == 0){
            costs.shift()
        }
        else if(index == costs.length - 1){
            costs.pop()
        }
        else{
            costs = [...costs.slice(0,index),...costs.slice(index+1)]
        }
        //console.log(`workers left = ${costs}`)
        left_to_hire--
    }
    
    return total_cost
};

let values = require('./values')
//let costs = [17,12,10,2,7,2,11,20,8]
//let k = 3
//let candidates = 4
//let costs = [1,2,4,1]
//let k = 3
//let candidates = 3
let costs = values[0] 
let k = values[1] 
let candidates = values[2]
let start = Date.now()
let res = totalCost(costs, k , candidates)
let end = Date.now()
console.log(`Execution time: ${end - start} ms`);
console.log(res)
