//video 43 part 1 till 27.00 min
function multipleBy5(num){
    return num*5
}


multipleBy5.power = 2  // . is used in object but in array how?

console.log(multipleBy5);
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// function -> object
// array -> object
// string -> object

function createUser(username, score){
    this.username = username
    this.score = score
}
//additinal properties for createUser
createUser.prototype.increment = function(){
    this.score ++   // this matlab jisne bhi bulaya h
}
//additinal properties for createUser
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
// new key word tell the const chai that createUser has additinal properties with giving in the value 
const chai = new createUser("chai", 25) // price is 25 output came because of the new key word
const tea = createUser("tea",250)


// chai.prototype.printMe() // printMe 
chai.printMe() // no need to write .prototype
