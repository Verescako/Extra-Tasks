   "use strict";
const num = 266219;
let   str, arr = [], result;    // str - строка для преобразования числа в строку 
                        

    str = String(num);
    arr = str.split('');


    result = arr.reduce(function(sum, current) {
        return  sum * current;
    },);

 
    result **= 3;
    str = String(result);
    console.log(str.substring(0, 2));
