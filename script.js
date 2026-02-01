let nu = prompt("Enter a three-digit number");

let d0 = Math.trunc(nu / 100) % 10;
let d1 = Math.trunc(nu / 10) % 10;
let d2 = Math.trunc(nu % 10);

if (d0 === d1, d1 === d2, d2 === d0) {
    console.log("Все цифры одинаковые");
} else if (d0 === d1) {
    console.log("Есть одинаковые цифры");
} else if (d1 === d2) {
    console.log("Есть одинаковые цифры");
} else if (d2 === d0) {
    console.log("Есть одинаковые цифры");
} else {
    console.log("Нет одинаковых цифр");
}