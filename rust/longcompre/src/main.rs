struct Solution{}

impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.len() == 1 {
            return strs[0].clone();
        }
        let mut ret_string = "".to_owned();
        let mut index = 0;
        for _ in 0..strs[0].len() {
            let mut comp = ' ';
            let mut slice: u8 = 0;
            for str in &strs{
                if str.as_bytes().len() == 0 {
                    //println!("ret from empty string");
                    return "".to_string();
                }
                if str.len() <= index {
                    //println!("return from uneven string");
                    return ret_string
                }
                slice = str.as_bytes()[index];
                if comp == ' ' {
                    comp = slice as char;
                }
                else if comp != slice as char{
                    //println!("ret from not equal");
                    return ret_string;                     
                }
            }
            ret_string.push_str(&(slice as char).to_string());
            index += 1;
        }
        //println!("ret from all equal");
        
        return ret_string;
    }
}

fn main() {
    //let s : Vec<String> = ["flower","flow","flight"].map(String::from).to_vec();
    //let s : Vec<String> = [""].map(String::from).to_vec();
    //let s : Vec<String> = ["a"].map(String::from).to_vec();
    //let s : Vec<String> = ["ab","a"].map(String::from).to_vec();
    let s : Vec<String> = ["flower","flower","flower","flower"].map(String::from).to_vec();
    let str: String = Solution::longest_common_prefix(s);
    println!("res = {str}");
}
