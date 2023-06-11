
/**
* https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    let found = false
    let max = 1
    let total = 0

    while(found == false){
        total = max
        let l = [index - 1, max-1 <= 0 ? 1 : max -1]
        let r = [ index + 1, max-1 <= 0 ? 1: max-1]
        let vis = max.toString()
        while(l[0] >= 0 || r[0] <= n-1){
            //console.log("l = " + l[0])
            //console.log("r = " + r[0])
            if(l[0] >= 0){
                vis = l[1].toString() + "," + vis
                total = total + l[1]
                l[0] = l[0] - 1
                l[0] < 0 ? null : l[1] == 1 ? l[1] = 1 : l[1] = l[1] - 1
            }
            if(r[0] <= n-1){
                vis = vis + "," + r[1].toString() 
                total = total + r[1]
                r[0] = r[0] + 1
                r[0] > n-1 ? null : r[1] == 1 ? r[1] = 1 :r[1] = r[1] - 1
            }
            //console.log(total)
        }
        //console.log()
        //console.log(vis)
        if(total > maxSum){
            return max-1
        }
        max = max+1
    }
    
};


n = 4
index = 2 
maxSum = 6
//console.log(maxValue(n,index,maxSum))
