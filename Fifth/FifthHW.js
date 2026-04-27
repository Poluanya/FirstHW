const baseElement = {
click(){
console.log('Клик по элементу');
},
};


const loginButton = {
locator: '#login',
text: 'Войти'
};


loginButton.__proto__ = baseElement;
loginButton.click();



const testRunner = {
testName: 'Login API Test',
run(){
setTimeout(() =>{
console.log(`Запускаю тест: ${this.testName}`);
}, 1000);
}
};

testRunner.run();


const fwConfig = {
_timeout: 5000,
set timeout(value){
    if(value < 0 || typeof value !== 'number' ){
        throw new Error('Некорректный таймаут');
    }else{
    this._timeout = value;
    }
},

get timeout(){
return `Текущий таймаут: ${this._timeout} мс`;
}
};

try {
    fwConfig.timeout = -10;
} catch(e){
    console.log("Ошибка поймана: " + e.message);
}

fwConfig.timeout = 10000;
console.log(fwConfig.timeout);


class BasePage {
    static environment = 'QA';
    constructor(){
    }
    open(url){
        console.log(`Открываю страницу: ${url} на окружении ${BasePage.environment}`)
    }
}


class LoginPage extends BasePage {
    #passwordInput = '#pass';
    constructor(){
        super();
        this.loginInput = '#user';
    }
    fillForm(user, password){
        console.log(`Вводим логин ${user} в поле ${this.loginInput}`);
        console.log(`Вводим пароль ${password} в поле ${this.#passwordInput}`);
    }
}

const page = new LoginPage();
page.open('https://test.com/login');
page.fillForm('admin', '12345');
