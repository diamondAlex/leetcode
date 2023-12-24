//TODO: review this shit as the solution is insane.
//every number shows up twice except one, which means
//you can XOR out all the number (as 2 xors cancel themselves out)
//and you'll be left with your lonely number
use std::collections::HashMap;

struct Solution;
impl Solution{
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut totals : HashMap<String, i32>= HashMap::new();

        for val in nums {
            if !totals.contains_key(&val.to_string()){
                totals.insert(val.to_string(), 1);    
            }else{
                totals.remove(&val.to_string());    
            }
        } 
        for key in totals.keys(){
            return key.parse::<i32>().unwrap();
        }
        return 1;
    }
}

fn main() {
    let vec : Vec<i32> = vec![4,1,2,1,2];
    let ret = Solution::single_number(vec);
    println!("{}",ret);
}
