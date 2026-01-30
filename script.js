let originNum = 10369;

let d0 = Math.trunc(originNum / 10000);
let d1 = Math.trunc((originNum / 1000) % 10);
let d2 = Math.trunc((originNum / 100) % 10);
let d3 = Math.trunc((originNum / 10) % 10);
let d4 = originNum % 10;

let result = `${d0} ${d1} ${d2} ${d3} ${d4}`;

console.log(result);