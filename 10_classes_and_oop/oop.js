// video 42
//step1) on using new keyword creats new object                            
//step2) a constructor function is called beacuse of new keyword
//step3) all the argument writen with the constructor function is added 
//step4) output 
// const abc = new madan("madan",1,false)
        //s4   s1   s2     s3
const user = {
    username: "madan",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`); // this to tell that use the username in our function , without this. the code wont know what username are u reffering to
        // console.log(this); // this knows the current context 
    }
}
// console.log(this); // this knows the globle context here because it does not have any current context and the globle context has {} nothing in it 
// console.log(user.loginCount);   
// console.log();
user.getUserDetails();


// const promiseOne = new Promise() // new is a constructor object 

function madan(username, loginCount, isLoggedIn){
    this.username = username; // left one is the variable and right one is the parameter that is giving the value to this.username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

// const abc = madan("madan",1,false)
// const pqr = madan("arun",32,true)  //madan { username: 'arun', loginCount: 44, isLoggedIn: true } // this code will overwrite abc to so on printing the pqr
// console.log(abc);                  //madan { username: 'arun', loginCount: 44, isLoggedIn: true }


const abc = new madan("madan",1,false) // will give a new copy so the main one is not changed and not overwritten
const pqr = new madan("arun",44,true)
console.log(abc); //madan { username: 'madan', loginCount: 1, isLoggedIn: false }
console.log(pqr); //madan { username: 'arun', loginCount: 44, isLoggedIn: true }
