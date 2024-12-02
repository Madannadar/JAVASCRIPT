function SetUsername(username){
    // complex db calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    // SetUsername(username)  // called
    // setUsername will handel the userename and it is being called here 
    // but nahi ho raha 
    SetUsername.call(username) //called 
    SetUsername.call(this, username) //called  // using the createUser ka this not its own 
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com","123")
console.log(chai); //createUser { email: 'chai@fb.com', password: '123' }
