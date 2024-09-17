const score =400

const balance = new Number(100)
// console.log(balance);
// console.log(score);

//console.log(balance.toString().length); // now the number is string so now string ka property can be used on this number;
//console.log(balance.toFixed(2)); // after . 2 decimal value

const otherNum = 12.956

//console.log(otherNum.toPrecision(3)); // round of wth 3 number after point

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); // gives coma according to indian type

// ----------------------------------Math -----------------------------------------
 
// console.log(Math);
// console.log(Math.abs(-4));  // abs only for - to + not + to -
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.4)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.pow(5,2));
// console.log(Math.min(4, 5, 6, 3, 2));
// console.log(Math.max(4, 5, 6, 3, 2));

console.log(Math.random()); //value between  0 to 1
console.log((Math.random()*10) +1); //+1 to avoid 0
console.log(Math.round((Math.random()*10) +1)); // round the random into a whole number

const min = 20
const max = 50

console.log(Math.floor(Math.random() * (max - min +1))+min); // to get random value from the limits








