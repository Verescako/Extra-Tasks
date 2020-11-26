    "use strict";

    const lang = prompt('Введите "ru" или "en"');
     
    if (lang == "ru") {
       console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    } else if (lang == "en") {
        console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
    };

    switch (lang) {
        case "ru" : console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
        case "en" : console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday'); 
        break;
    } 
    
    let  arr = {
        'ru' : ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
        'en' : ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    };
    
    console.log(arr[lang]);

    let namePerson = prompt('Введите imia: ');

        namePerson = namePerson == 'Артем' ? 'директор' : 
                     namePerson == 'Максим' ? 'преподаватель' : 'студент' ;   
        
    console.log(namePerson);
