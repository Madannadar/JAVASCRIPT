if (true){  // block scope 
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ",a);
    
}

var c = 200 // globle scope

// console.log(a);
// console.log(b);
// console.log(c);

// nested function

function one(){
    const username = "Madan"

    function two(){  // for two one is globle so it can access all one values
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}

// one()


if (true) {
    const username = "Madan"
    if(username === "Madan"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ----------------------------- intersting -------------------------------------

console.log(addOne(4)); // can be used before declaration

function addOne(num){
    return num + 1
}

console.log(addTwo(4)); // cant use before declaration 

const addTwo = function(num){ // is sometime called expression, also creates variable
    return num + 2
}

