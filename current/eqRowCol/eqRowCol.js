//https://leetcode.com/problems/equal-row-and-column-pairs/submissions/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let w = grid[0].length 
    let h = grid.length
    let col = []
    let row = []
    let map = new Map()

    for(i = 0; i < w; i++){
        row[i] = ""
        for(j = 0; j < h; j++){
            row[i] = row[i] + grid[i][j] + "."
            col[j] ? col[j] = col[j] + grid[i][j] + "." : col[j] = grid[i][j] + "." 
        }
        map.get(row[i]) ? map.set(row[i], map.get(row[i]) + 1) : map.set(row[i],1)
    }

    let count = 0
    for(l of col){
        map.get(l) >= 0 ? count = count + map.get(l) : false
    }
    return count
};

function printItems(col,row){
    console.log("col")
    for (l of col){
        console.log(l) 
    }
    console.log("col")
    for (l of row){
        console.log(l) 
    }
}

let grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
let x=  equalPairs(grid)
console.log(x)
