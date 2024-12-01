// array  string  function (lower lever)
//          object         (higher lever)
//            null 

let myName = "hitesh   "

// console.log(myName.abc);

// console.log(myName.trim.length); // this will do the work of giving the true length but we are tryping to create a method that does this job or us 

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        // console.log(`spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    // console.log(`hitesh is present in all objects`);
    
}


// heroPower.hitesh() // heroPower has the power of hitesh() now 

// myHeros.hitesh()

// as arrya -> so if we inject a power to array will it go to object to?

Array.prototype.abc = function(){
    console.log(`abc is the new power that we are trying to propogate from array to object`);
}

// heroPower.abc()  //heroPower.abc is not a function 

// ie it does not propogate from array to object means no lower lever to higher is posible but higher to lower is possible

// -----------------------inheritance--------------------
const User = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachinSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__:teachinSupport
}

teacher.__proto__ = User // __proto__ is old apporach

// modern systax

Object.setPrototypeOf(teachinSupport, teacher) // teacher access all properties of teachinSupport

let anotherUserName = "chaiaurcode     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.truelength()
"madan".truelength() // True length is: 5 

// see the truelength() is now declarde and can be called to any variable
