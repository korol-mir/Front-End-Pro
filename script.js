let age = Math.abs(prompt ("Ваш рік народження?") - 2026);
let city = prompt ("Місто в якому ви проживаете?");
let sport = prompt ("Ваш улюбленний вид спорту?");

console.log('Ваш вік ' + age);

switch (city) {
    case "Київ":
        console.log ("Ти живеш у столиці України");
        break;
    case "Вашингтон":
        console.log ("Ти живеш у столиці Сполучених Штатів Америки");
        break;
    case "Лондон":
        console.log ("Ти живеш у столиці Англії");
        break;
    default:
        console.log ("Ти живеш у місті " + city);
        break;
}

switch (sport) {
    case 'Футбол':
        console.log('Круто! Хочеш стати як Криштиан Роналду?');
        break;
    case 'Баскетбол':
        console.log('Круто! Хочеш стати як Майкл Джордан?');
        break;
    case 'Шахи':
        console.log('Круто! Хочеш стати як Гукеш Доммараджу?');
        break;
    default:
        console.log(sport);
        break;
}

