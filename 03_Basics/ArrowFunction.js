// ------------------------------------this------------------------------------------
const user = {
    username: "Madan",
    price: 100,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this means "current context" 
    }

}
// user.welcomeMessage()
// user.username = "Arun"
// user.welcomeMessage()

console.log(this); // output {}


// function chai(){
//     let username = "Arun"
//     console.log(this.username);     // this cant be used in functions 
// }

// chai()


// const chai = function(){  // both are same
//     let username = "Arun"
//     console.log(this.username);
// }

// chai()

// const chai = () => {  // this is not used here to here means arrow functions 
//     let username = "Madan"
//     console.log(this.username);
// }
// chai()


//---------------------------Arrow function-------------------------------------

// const addTwo = (n1,n2) =>{
//     return n1 + n2
// }

// const addTwo = (n1,n2) => n1 + n2 // if only one statement then can be done like this 
// // implisite return, it understands by it self ke return karna h 

// console.log(addTwo(3,4));


// const name = (num1,num2) => ({username:"madan"})
// console.log(name(3,4));

