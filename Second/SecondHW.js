const room = 'bedroom';
const timeOfDay = 7;
const sensorTemp = null;


let energy = 10;
let depth = 0;
let gold = 0;

const currentTemp = (sensorTemp ?? 22);
const isLightOn = timeOfDay >= 18 || timeOfDay < 6 ? 'включен' : 'выключен';

switch (room) {
    case 'bedroom':
    console.log(`Спальня: Свет ${isLightOn}, Температура ${currentTemp}`);
    break;

    case 'kitchen':
    console.log(`Кухня: работает вытяжка. Свет ${isLightOn}`);
    break;

    default:
    console.log('Неизвестная комната');
}

(room === 'bedroom') && console.log('Увлажнитель воздуха включен'); // если первое условие верно, код проходит дальше и выполняет действие, если нет - даже не пытается прродолжить



while (energy > 0){
    depth++;
    energy--;
     if (depth % 3 === 0){
        gold++;
     }
     if (depth % 7 === 0){
        console.log(`Монстр! Гном в панике убегает!`);
        break;
     }
     console.log(`Глубина: ${depth}м. Энергия: ${energy}. Золото: ${gold}`);
}
console.log(`Смена окончена. Итоговая глубина: ${depth}, добыто золота: ${gold}`);