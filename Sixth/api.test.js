import { BASE_URL } from "./config.js";
import checkResponse, { assertEqual } from "./helpers.js";

console.log(BASE_URL);
console.log(checkResponse);

const getUser = async () => {
    const response = await fetch(`${BASE_URL}/users/2`, {
        method: 'GET',
        headers: {
            'x-api-key': 'free_user_3D5dsr84lgklT9cByUuSXGvmia5'
        }
    });

if(checkResponse(response)){
    const data = await response.json();
    assertEqual(data.data.email, 'janet.weaver@reqres.in', 'Проверка email пользователя')
} else {
    console.log("Ошибка");
}
};

getUser();

const getBrokenData = async () => {
    try{
    const response = await fetch('https://reqres.in/api/users/23/сломанный_путь');
    const data = await response.json();
    console.log(data);
    } catch(error){
        console.log(`Тест не упал, но мы поймали ошибку: ${error.message}`);
    }
}

getBrokenData();