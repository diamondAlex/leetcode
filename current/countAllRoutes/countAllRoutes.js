let x = 0

var countRoutes = function(locations, start, finish, fuel) {
    let memo = new Map()
    for(let i = 0;i<=locations.length;i++){
        for(let j = 0;j<=fuel;j++){
            memo.set(`${i},${j}`,-1)
        }
    }
    let total = countSubRoutes(locations,start,finish,fuel,memo)
    return total % (Math.pow(10,9)+7)
};

var countSubRoutes = function(locations,start,finish,fuel, memo){
    x++
    let memo_val = memo.get(`${start},${fuel}`)
    let subtotal = 0
    if(memo_val != -1){
        //console.log(`been here before, there is ${memo_val} routes`)
        return memo_val
    }

    for(let i = 0; i<locations.length;i++){
        if(i != start){
            let fuel_cost = Math.abs(locations[start]-locations[i])
            let final_fuel = fuel - fuel_cost
            if(final_fuel > 0){
                found = 1
                subtotal = subtotal + countSubRoutes(locations,i,finish,final_fuel,memo)
            }
            else if(final_fuel == 0 && i == finish){
                subtotal++
            }
        }
    }
    if(start == finish){
        subtotal++
    }

    subtotal = subtotal==0 ? 0: subtotal % (Math.pow(10,9)+7)

    memo.set(`${start},${fuel}`, subtotal)

    return subtotal
}

//let locations = [1,2,3]
//let start = 0 
//let finish = 2 
//let fuel = 40
//let locations = [2,3,6,8,4]
//let start = 1 
//let finish = 3 
//let fuel = 5
let locations = [9828,9766,9715,9655,9747,9694,9809,9807,9690,9726,9744,9763,9986,9602,9660,9646,9638,9693,9686,9882,9812,9900,9671,9948,9672,9639,9791,9932,9679,9913,9864,9624,9892,9859,9701,9969,9620,9933,9821,9788,9631,9790,9960,9605,9844,9699,9607,9704,9755,9776,9816,9874,9600,9946,9983,9875,9625,9833,9883,9881,9972,9714,9950,9654,9740,9609,9689,9608,9827,9839,9764,9845,9837,9792,9949,9873,9840,9632,9610,9904,9673,9912,9831,9999,9805,9886,9781,9952,9891,9989,9717,9926]
console.log(locations.length)
let start = 8
let finish = 47
let fuel = 91

let res = countRoutes(locations,start,finish,fuel)
console.log(res)
console.log(x)
