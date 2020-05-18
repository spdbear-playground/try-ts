// 値を表示
console.log(10.5);
console.log(128);
console.log(0b11); // == 3
console.log(0o77); // == 63
console.log(0xff); // == 255

const year: number = 2019;
console.log(year.toFixed(2));
console.log(year.toString(2));
console.log(Boolean(year));
console.log(parseInt("010"));
console.log(parseInt(" a  124", 16));
console.log(parseInt("124px"));
console.log(parseInt(year.toString(2), 2));

console.log(2 ** 10);
const ary = [1, 2, 3, 4, 5];
console.log(Math.max(...ary));
console.log(Math.log(8) / Math.log(2));
