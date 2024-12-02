class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    // createId(){  // this will be accessed when ever a new instant is created 
    //     return `123`
    // }
    static createId(){  // hence use static to not give access of this to every instance
        return `123`
    }
}

const madan = new User("madan")
// console.log(madan.createId()) 

class teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone","i@phone.com")
iphone.logMe() //Username is: iphone
console.log(iphone.createId()); // does not have access to createId

