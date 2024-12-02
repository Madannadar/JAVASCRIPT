// Es6 ke bad ke kahani h this is syntatical sugar 

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc` // adding abc to the password
    }

    capsUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai","chai@gmai.com","123")

console.log(chai.encryptPassword()); // 123abc

console.log(chai.capsUsername()); //CHAI

//--------------behind the scene-------------------------------------

function user(userename, email, password){
    this.userename = userename;
    this.email = email;
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}


const pqr = new user("tea","tea@gmail.com", "123")

console.log(pqr.encryptPassword());
