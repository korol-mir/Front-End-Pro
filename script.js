let num = +prompt('Введіть ціле число');

if (num <= 1) {
    console.log('Число не просте');
    }else {
        let pr = true;
        for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        pr = false;
        break;
    }
    }
    console.log(pr ? 'Число просте' : 'Число не просте');
}