// rear in use 

const  User = {
    _email: "abc@gmail.com",
    _passowrd:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){ 
        this._email = value
    }
}

const tea = Object.create(User)  // creating a object based on User and stored in tea
console.log(tea.email);  //ABC@GMAIL.COM