var singleNumber = function(nums) {
    let map = new Map()
    for(let i of nums){
        let current = map.get(i)
        if(current){
            current += 1
            if(current == 3){
                map.delete(i)
            }
            else{
                map.set(i,current)
            }
        }
        else{
            map.set(i,1)
        }
    }
    let ret = map.keys().next().value
    return ret
};

let nums = [0,1,0,1,0,1,99]
let sg = singleNumber(nums)
console.log(sg)
