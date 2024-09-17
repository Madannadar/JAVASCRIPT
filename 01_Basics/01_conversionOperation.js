let score = "22fr"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber); //NaN not a number 
console.log(typeof valueInNumber);

// "33" => 33
// "33ffd" => NaN
// true => 1; false =.0
// null =>0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0=> false
// "" => false
// "madan" => true

let someNumber = 33

let stringNumber = String(someNumber) //case sensetive s S
console.log(stringNumber)
console.log(typeof stringNumber)
