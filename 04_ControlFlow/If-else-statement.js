//------------------------if statement-------------------------------

const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("control flow");
// }

// = for assign, == for checking, === also checks type
// if(2=="2"){
//     console.log("testing");
    
// }
// if(2 === "2"){
//     console.log("testing");
    
// }
// else{
//     console.log("the type is not same");
// }



const score = 200
// if (score > 100){
//     const power = "fly" // using var will make the variable globle 
//     console.log(`User power: ${power}`);
    
// }

const balance = 1000
// if(balance > 500) console.log("test"),console.log("test2"); is less readable 

// else if and else 
// if (balance < 500){
//     console.log("less then 500");   
// } else if (balance < 750){
//     console.log("less then 750");
// } else{
//     console.log("greater then 750");
// }

// 2 condition inside if 
if(isUserLoggedIn && balance>500){ // &&-and, ||-or,
    console.log("checking 2 startment ");
}
