// let numOrStr = prompt('input number or string');
// console.log(numOrStr);


// if (numOrStr === null) {
//     console.log('ви скасували');
// } else if (numOrStr.trim() === '') {
//     console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//     console.log('Number is Ba_NaN');
// } else {
//     console.log('OK!');
// }

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (numOrStr) {
    case null:
        console.log('Ви скасували');
        break;
    case (''):
        console.log('Empty String');
        break;
    default: 
    if (isNaN(+numOrStr)) {
        console.log('Number is Ba_NaN');
    }else {
        console.log('OK!');
        }
        break;
}