function multiply(num) {
    return function(nextNum) {
        return num * nextNum;
    }
}

console.log(
    multiply(5)(2)
);