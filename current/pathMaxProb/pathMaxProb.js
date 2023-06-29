//todo complete it, I didn't know the algo
var maxProbability = function(n, edges, succProb, start, end) {
    let total = 0
    let memo = []
    memo[start] = 1



    return total
};


//let n = 3
//let edges = [[0,1],[1,2],[0,2]]
//let succProb = [0.5,0.5,0.2]
//let start = 0
//let end = 2
//let n = 3
//let edges = [[0,1]]
//let succProb = [0.5]
//let start = 0
//let end = 2
let n = 5
let edges = [[2,3],[1,2],[3,4],[1,3],[1,4],[0,1],[2,4],[0,4],[0,2]]
let succProb = [0.06,0.26,0.49,0.25,0.2,0.64,0.23,0.21,0.77]
let start = 0
let end = 3

let ret = maxProbability(n,edges,succProb,start,end)
console.log(ret)
