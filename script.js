let dollar = 10;
let uah = 26;
let dollarInUah = dollar * uah;
let quantity = 0;

while (quantity < 10) {
    result = dollarInUah * (++quantity);
    console.log((dollar * quantity) + ' Dollars in UAH ' + result);
}
