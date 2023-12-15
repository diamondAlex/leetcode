function intToRoman(num: number): string {
    let str = "" 
    let mod10 = num%10
    if(mod10 != 0){
        if(mod10 == 9){
            str += "IX"
        }
        else if(mod10 == 4){
            str += "IV"
        }
        else{
            if(mod10 >= 5){
                str = "V" + str
            }
            let mod5 = mod10%5
            for(let i = 0;i<mod5;i++){
                str += "I"
            }
        }
    }
    let mod100 = Math.floor((num%100)/10)*10
    if(mod100 != 0){
        let substr = ""
        if(mod100 == 90){
            substr =  "XC" + substr
        }
        else if(mod100 == 40){
            substr = "XL" + substr
        }
        else{
            if(mod100 >= 50){
                substr = "L" + substr
            }
            let mod50 = Math.floor(mod100%50/10)*10
            for(let i = 0;i<mod50;i+=10){
                substr += "X"
            }
        }
        str = substr + str
    }
    let mod1000 = Math.floor((num%1000)/100)*100
    if(mod1000 != 0){
        let substr = ""
        if(mod1000 == 900){
            substr =  "CM" + substr
        }
        else if(mod1000 == 400){
            substr = "CD" + substr
        }
        else{
            if(mod1000 >= 500){
                substr = "D" + substr
            }
            let mod500 = Math.floor(mod1000%500/100)*100
            for(let i = 0;i<mod500;i+=100){
                substr += "C"
            }
        }
        str = substr + str
    }
    let mod10000 = Math.floor((num%10000)/1000)*1000
    for(let i = 0;i<mod10000;i+=1000){
        str = "M" + str
    }
    return str
};


let num: number = 1994
let res: string = intToRoman(num)
console.log(res)

//num = 58
//res = intToRoman(num)
//console.log(res)
