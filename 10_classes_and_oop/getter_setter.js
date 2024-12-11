class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    // get password (){  // getter define kiya h to setter bhi karna h 
    //     return this.password.toUpperCase()
    // } // use to get value 
    // set password(value){
    //     this.password = this.value   //RangeError: Maximum call stack size exceeded, at set password [as password]
    //     // this is happening because constructor set are stting the value that is so many fuction are setting the value of password
    //     // they are racing to set the value of password thats why the call stack size is exceeding
    // }// use to set value

    get email(){
        return this._email.toUpperCase()   // we are placing _email becauase it will prevent racing between set and constructor pretending to be a new var in the seters
    }
    set email(value){
        this._email = value
        console.log(value);
    }


    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
        console.log(value);
    }
    // here the password is abc so tha setter is having value abc but when someone wants to acces the password the password goes throw the geter and the getter sets the value to upper but the orginal value is abc only but the acceser will see ABC
}



const hitesh = new User("madan@gmail.com","acb")
console.log(hitesh.password);
console.log(hitesh.email);

// getter and setter are user in case where we do not what to show the password or want to show the encripted password
