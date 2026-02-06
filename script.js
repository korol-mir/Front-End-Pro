let num = +prompt('Введіть ціле число');

for (let i = 1; i <= 100; i++) {
    if (i * i <= num) {
        console.log(i);
    }else if (i * i >= num) {
        break;
    }else 
        console.log('Ви ввели не число');
}