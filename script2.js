let num = 266219,
    PoN = 1,         // PoN - произведение цифр числа "num" (Product of Numbers)
    i, str;          // i - отдельная цифра числа "num"
                     // str - строка для преобразования числа в строку
                      
    while ((num / 10) > 0) {

    i = num % 10;
    num /= 10;
    num = Math.floor(num);
    PoN = PoN  * i; 
    }
 
    PoN **= 3;
    
    str = String(PoN);
    console.log(str.substr(0, 2));