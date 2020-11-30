    "use strict";

    const lang = prompt('Введите "ru" или "en"'), 
          arr = {
                'ru' : ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
                'en' : ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            };
  
    if (lang === "ru" || lang === "en" ) 
       console.log(arr[lang]);
    
    switch (lang) {
        case "ru" : console.log(arr[lang]);
        break;
        case "en" : console.log(arr[lang]); 
        break;
    } 
    
    console.log(arr[lang]);

    let namePerson = prompt('Введите имя: ');

        namePerson = namePerson === 'Артем' ? 'директор' : 
                     namePerson === 'Максим' ? 'преподаватель' : 'студент' ;   
        
    console.log(namePerson);
