// old method for getters and setters 


function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const chai = new User("chai@chai.com","chai")

console.log(chai.email); //CHAI@CHAI.COM
