const arr = [1, 2, 3, 10, true, false, "String", "56"];
let sum = 0;

function lengthArr(item) {
    return typeof item === "number" && !isNaN(item);
}
let numbers = arr.filter(lengthArr);

function average(arr) {
    for(let i = 0; i <= arr.length; i++) {
        if(typeof arr[i] === "number" && !isNaN(arr[i]))
            sum += arr[i];
    }

    return sum / numbers.length;
}

console.log(average(arr));
// console.log(numbers.length);
