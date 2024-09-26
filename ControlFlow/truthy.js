const userEmail = "Madan@gmail.com"

// if (userEmail) {  // empty hoga to falsy value
//     console.log("welcome");
// }
// else{
//     console.log("give your email");
    
// }


// falsy values
// 1) false, 2) 0, 3) -0, 4) BigInt "0n", 5) null, 6) undefined, 7)NaN

// truthy values
// 1) "0", 2) 'false'/"false", 3) " ", 4) function(){}==>(empty function)


// if (userEmail.length === 0) {
//     console.log("give your email");
// }
// else{
//     console.log("welcome");
// }

const emtObj = {}

// if (Object.keys(emtObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10  // ans 5
// val1 = null ?? 10 // ans 10  checks safty 
// val1 = undefined ?? 15 // ans 15 
val1 = null ?? 10 ?? 15  // ans 10

// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=10 ? console.log("more then 10") : console.log("less then 10");

