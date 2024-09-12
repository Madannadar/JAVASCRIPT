// primitive
// typpes : string,number,boolearn,null,undefined,symbol,BigInt

//non primitive(reference)
// Array, Objects,Functions

const score = 100 //number
const scorevalue = 100.3

const isLoggedIn = false //boolean
const outsideTemp = null //null
let useremail; // undefined 

const id = Symbol('123') //symbol
const anotherid = Symbol('123')

console.log(id === anotherid);

const heros = ["Madan", "Arun","Suganthi"];
let my_details = {
    name : "madan",
    age: 20,
}

const  madan_first_function = function() {
    console.log("hello world");
    
}
madan_first_function();

console.log(typeof madan_first_function)

// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  objec