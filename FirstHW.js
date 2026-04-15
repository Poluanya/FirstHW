    let firstName = '        поЛиНа ';
    let lastName = '    бОрОвАя';
    let age = 20;
    let status = true; //объявляем переменные и присваиваем им значения

    let cleanFirstName = firstName.trim().toLowerCase(); // убираем в имени лишние пробелы и приводим его к нижнему регистру 
    let cleanLastName = lastName.trim().toLowerCase(); // убираем в фамилии лишние пробелы и приводим ее к нижнему регистру 

    let rightFirstName = cleanFirstName.charAt(0).toUpperCase() + cleanFirstName.slice(1); // первую букву имени делаем заглавной, остальные строчными 
    let rightLastName = cleanLastName.charAt(0).toUpperCase() + cleanLastName.slice(1); // первую букву фамилии делаем заглавной, остальные строчными 


    let email = `${cleanFirstName}${cleanLastName}@test.com`; // генерируем почту на основе чистых имени и фамилии 

    let currentYear = new Date().getFullYear(); // узнаем текущий год 
    let yearOfbirth = currentYear - age; // вычисляем год рождения

    console.log(` Имя: ${rightFirstName}\n Фамилия: ${rightLastName}\n Возраст: ${age} лет\n Email: ${email}\n Год рождения: ${yearOfbirth}\n Статус: ${status ? "Активен" : "Неактивен"}`);
