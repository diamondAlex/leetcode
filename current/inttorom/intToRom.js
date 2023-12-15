function intToRoman(num) {
    var str = "";
    var mod10 = num % 10;
    if (mod10 != 0) {
        if (mod10 == 9) {
            str += "IX";
        }
        else if (mod10 == 4) {
            str += "IV";
        }
        else {
            if (mod10 >= 5) {
                str = "V" + str;
            }
            var mod5 = mod10 % 5;
            for (var i = 0; i < mod5; i++) {
                str += "I";
            }
        }
    }
    var mod100 = Math.floor((num % 100) / 10) * 10;
    if (mod100 != 0) {
        var substr = "";
        if (mod100 == 90) {
            substr = "XC" + substr;
        }
        else if (mod100 == 40) {
            substr = "XL" + substr;
        }
        else {
            if (mod100 >= 50) {
                substr = "L" + substr;
            }
            var mod50 = Math.floor(mod100 % 50 / 10) * 10;
            for (var i = 0; i < mod50; i += 10) {
                substr += "X";
            }
        }
        str = substr + str;
    }
    var mod1000 = Math.floor((num % 1000) / 100) * 100;
    if (mod1000 != 0) {
        var substr = "";
        if (mod1000 == 900) {
            substr = "CM" + substr;
        }
        else if (mod1000 == 400) {
            substr = "CD" + substr;
        }
        else {
            if (mod1000 >= 500) {
                substr = "D" + substr;
            }
            var mod500 = Math.floor(mod1000 % 500 / 100) * 100;
            for (var i = 0; i < mod500; i += 100) {
                substr += "C";
            }
        }
        str = substr + str;
    }
    var mod10000 = Math.floor((num % 10000) / 1000) * 1000;
    for (var i = 0; i < mod10000; i += 1000) {
        str = "M" + str;
    }
    return str;
}
;
var num = 1994;
var res = intToRoman(num);
console.log(res);
//num = 58
//res = intToRoman(num)
//console.log(res)
