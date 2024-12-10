// console.log(Math.PI);  //3.141592653589793
// Math.PI = 5
// console.log(Math.PI);  //3.141592653589793

// the value of pi cannot be chaged
const discriptor = Object.getOwnPropertyDescriptor(Math,"PI") // shows some hidden thing of object
console.log(discriptor);  // discriptor gives property of math that is PO
//{
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// this shows that the value of pi in this example the descriptor properties are not writable enumerable configurable and it can not be made true
// we can also declare object with this type of descriptor properties  of our own 

const chai = {
    name: "normal",
    price: 100,
    isAvaiable: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));  
// {
//   value: 'normal',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// to make changes on this properties

// Object.defineProperty(chai,'name',{
//     writable: false,
//     enumerable: false
// })

console.log(Object.getOwnPropertyDescriptor(chai,"name"));  
// {
//     value: 'normal',
//     writable: false,
    // enumerable: false,
//     configurable: true
// }

// for (let [key, value] of chai) { // value of chai can not be iteratable
//     console.log(`${key} : ${value}`);
// }

for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}

// name : normal
// price : 100
// isAvaiable : true

// code fat gaya situation


const bhai = {
    name: "normal",
    price: 100,
    isAvaiable: true,

    Obhai: function(){
        console.log("function inside object");
    }
}

// for (const [key, value] of Object.entries(bhai)) {
//     console.log(`${key} : ${value}`);
// }
//output:
// Obhai : function(){
//     console.log("function inside object");
// }

//solution:
for (const [key, value] of Object.entries(bhai)) {
    if (typeof value !== 'function'){ 
        console.log(`${key} : ${value}`);
    }
}
