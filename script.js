    let money = 8700,
        income = "фриланс" , 
        addExpenses = "Еда, Вода, Развлечения", 
        deposit = true, 
        mission = 156000,
        period = 11,
        budgetDay;
    
    
    console.log(typeof money,typeof income,typeof deposit);
    console.log(addExpenses.length);
    console.log("Период равен " + period +" месяцев");
    console.log("Цель заработать " + mission +" рублей");

    addExpenses = addExpenses.toLowerCase();

    console.log(addExpenses.split(', '));

    budgetDay = money / 30 ;
 
    console.log(budgetDay);