function generateEmail(domain){
    const mailNum = Math.floor(Math.random() * 100);
    return `test_user_${mailNum}@${domain}`;
}


const maskPassword = function(password) {
return '*'.repeat(password.length);
};


const createTestUser = (name, domain) =>{

        const emailValue = generateEmail(domain);
        const maskedPass = maskPassword('polina06');

    return{
        userName: name, 
        email: emailValue,
        password: maskedPass
    }; 
}

console.log(createTestUser('QA_Ninja', 'gmail.com'));



function createRetryCounter(){
    let attempts = 0;

    return function init(){
        attempts++;
        return `Попытка запуска: ${attempts}`;
    }
}

const loginRetry = createRetryCounter();
const paymentRetry = createRetryCounter();

console.log(loginRetry());
console.log(loginRetry());
console.log(loginRetry());

console.log(paymentRetry());


function waitForElement(elementName, attemptsLeft){
    const isFound = Math.random() < 0.2;
    if(attemptsLeft === 0){
        return `Ошибка: Элемент ${elementName} не найден`;
    }
    else if(isFound){
        return `Успех: Элемент ${elementName} появился!`
    }
    else{
        console.log(`Ищем элемент ${elementName}... Осталось попыток: ${attemptsLeft}`);
        return waitForElement(elementName, attemptsLeft - 1);
    }
}

console.log(waitForElement('Кнопка оплаты', 5));

// переменная живет потому, что внутренняя функция "запирает" её в своей личной памяти при создании и не дает компу её удалить, пока мы пользуемся этим счетчиком