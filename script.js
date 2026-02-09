const input = prompt('Введіть числа через пробіл:');
const numbers = input.split(' ');

const evenNumbers = [];
let i = 0;

while (i < numbers.length) {
  Number(numbers)
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
  i++;
}

console.log('Парні числа:', evenNumbers);