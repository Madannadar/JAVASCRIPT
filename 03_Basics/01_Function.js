 
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){  // number1,number2 is "parameter"
 
//     console.log(number1 + number2);
// }
// const ans = addTwoNumbers(10, 10) // 10 10 is "arguments" 
// console.log("result: ",ans); // ans will be undefined mistake is in function



function addTwoNumbers(number1, number2){  // number1,number2 is "parameter"
 
    // let result = number1 + number2
    // return result
    // console.log(number1 + number2) 
    return number1 + number2
}

const ans = addTwoNumbers(1, 2)
// console.log("result: ",ans);


function loginUserMessage(username = "SAM"){ // this same will be used if there is no value given as argument
    if(username == undefined){  // if(!username) both are same 
        console.log("Plz enter a username");
        return
    }   
        return `${username} just logged in`
}

console.log(loginUserMessage());
