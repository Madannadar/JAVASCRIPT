// watch it from start again
const user = {
    username: "Madan",
    price: 100,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this means "current context" 
    }

}
user.welcomeMessage()
user.username = "Arun"
user.welcomeMessage()
