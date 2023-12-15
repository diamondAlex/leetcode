struct Solution{}

use std::cmp;

impl Solution {
    pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
        if nums.len() == 0 {
            return 0;
        }

        let mut p_1 = 0;
        let mut p_2 = 0;
        let mut sum = nums[p_2];
        let mut min = 4_294_967_295u32;

        loop {
            if nums[p_2] == target{
                return 1;
            }
            if sum <= target {
                p_2 += 1;
                if p_2 == nums.len() {
                    if min == 4_294_967_295u32{
                        return 0; 
                    }
                    return min as i32;
                }
                sum += nums[p_2];
            }
            else if sum > target {
                min = cmp::min((p_2-p_1+1) as u32, min);
                sum -= nums[p_1];
                if p_2 == p_1{
                    p_2 += 1;
                    sum += nums[p_2];
                }
                p_1 += 1; 
            }
            if sum >= target {
                min = cmp::min((p_2-p_1+1) as u32, min);
            }
            println!("sum = {sum}");
            println!("p_1 = {}", p_1);
            println!("p_2 = {}", p_2);
            println!("size = {}", p_2-p_1+1);
            println!("min = {min}");
        }
    }
}

fn main() {
    let target = 6;
    let nums = vec![10,2,3];
    let sol = Solution::min_sub_array_len(target, nums);
    println!("{sol}");
}
