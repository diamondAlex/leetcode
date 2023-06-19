/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
    let total = 0
    let paths = []
    for(let x=0;x<grid.length;x++){
        paths.push([])
        for(let y=0;y<grid[x].length;y++){
            paths[x][y] = 1
        }
    }
    for(let i = 0;i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(i - 1 >= 0){
                grid[i-1][j] < grid[i][j] ? paths[i][j] += paths[i-1][j] :false;
            }
            if(j - 1 >= 0){
                grid[i][j-1] < grid[i][j] ? paths[i][j] += paths[i][j-1] :false;
            }
            total += paths[i][j]
        }
    }
    let paths2 = []
    for(let x=0;x<grid.length;x++){
        paths2.push([])
        for(let y=0;y<grid[x].length;y++){
            paths2[x][y] = 0
        }
    }
    for(let i = grid.length-1;i >=0; i--){
        for(let j = grid[i].length-1; j >= 0; j--){
            if(i + 1 < grid.length){
                grid[i+1][j] < grid[i][j] ? paths2[i][j] = paths2[i+1][j] + 1:false;
            }
            if(j + 1 < grid[i].length){
                grid[i][j+1] < grid[i][j] ? paths2[i][j] = paths2[i][j+1] + 1 :false;
            }
            total += paths2[i][j] 
        }
    }

    grid.forEach((e) =>{
        console.log(e)
    })
    console.log()
    paths.forEach((e) =>{
        console.log(e)
    })
    console.log()
    console.log()
    paths2.forEach((e) =>{
        console.log(e)
    })
    for(let i = 0;i<grid.length;i++){
        console.log(( paths[i][0] + paths2[i][0] ) + "," + ( paths[i][1] + paths2[i][1] ) + "," + ( paths[i][2] + paths2[i][2] ))
    }
    return total % (Math.pow(10,9) + 7)
};

let grid = [[1,2,3],[2,2,3],[3,1,4]]
let ret = countPaths(grid)
console.log(ret)
