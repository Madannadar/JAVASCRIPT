// type of memory
//1.stack used in primitive datatype  we get a copy
//2.Heap used in heap datatype  we get original value

let youtube_name = "arunkumar gaming"

let another_name = youtube_name
another_name = "madan gaming"

console.log(youtube_name);
console.log(another_name);

let userOne = {
    email:"user@google.com",
    upi:"user@ggd"
}

let userTwo = userOne

userTwo.email = "madan@google.com"

console.log(userOne.email);
console.log(userTwo.email);