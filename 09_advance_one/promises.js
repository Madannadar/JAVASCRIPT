// video 40)promise,async,await,fetch little bit, trycatch 
// video 41) XMLHttpRequest was first then fetch was introduced as successor of it and had less code but was not build in because it was heavly depenedent on browser so they integrated it with all browser and brought fetch as a build in function 
// in fetch error happens when the .then is not able to run because of any sort of permision issue or something like this so it sends response rather then reject if there is error but the .then is executed 
const promiseOne = new Promise(function(resolve,reject){
    // promise is a object
    // do an async task => database base calls , cryptography, network call
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()// use to connect resolve with .then
    },1000)
}) // creating a promise or declaration


promiseOne.then(function(){ // has connection with resolve
    console.log("promise consumed");
}) // consume the promise or callback


// doing both in one method 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolve ");
})

// one more promise
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){ // here user is the name of resolve so we can declare the name of the resolve
    console.log(user);// output all the value of resolve that we got here we declared them but normally they are fetch data that are in the resolve
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false 
        if(!error){
            resolve({username:"madan",passward:"123"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
 // till here 

// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// })
// console.log(username);

// the above code is to show that the return value cannot be stored in a variable

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);  
}).catch(function(error){
    console.log(error);
}).finally(() => console.log(("the promise is either resolve or rejected"))
) // did the work got done and this gets executed allways 
// in the above code we have seen how to consume the resolve and reject by .then and .catch


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"arun",passward:"123"})
        }else{
            reject('error:js went wrong')
        }
    },1000)
})

promiseFive.then(function(){ // can use .then or async/await

})



// async function consumePromiseFive(){
//     const respose = await promiseFive 
//     console.log(respose);
// }
// consumePromiseFive()
// the above code is wrong because it does not check if there is any error so the code below is correct

async function consumePromiseFive(){
    try {
    const respose = await promiseFive 
    console.log(respose);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// her we have consume promise with .then and .catch or try catch method

// async function getAllUsers() {
//    try {
//         const response =  await fetch('https://api.github.com/users/madannadar') // await se code ko utna time milta h taki pura run ho sake 
//         const data = await response.json() // same await is writen so the time gets its time to fully execute 
//         console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }
// getAllUsers()
 
// here there is no await because each .then or .catch runs afte one is complete 
fetch('https://api.github.com/users/madannadar')
.then(function(abc){
    return abc.json()
}).then((pqr) => {
    console.log(pqr);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log('just for fun it is not neccessary');
})


// finally if we run this file all the task from fetch is running first then all the other above promiseOne two and all

// ans : in the event loop there is a task queue that has all the tasks but for fetch
    //  for fetch there is a seperate queue created thats why that was executed before all the other code 