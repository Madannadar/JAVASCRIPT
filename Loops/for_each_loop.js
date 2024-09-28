//for each has preload method to call and the operation needs to be given in a function

const coding = ['js','python','java','cpp']

coding.forEach( function (i) {
    // console.log(i);
})

coding.forEach((i) => {
    // console.log(i);
}) // no function needs name because it does not need to be stored as a function 


// here we have writen a function seperatly and called it into for each function 
function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)

coding.forEach((item, index, arr) => { // every index has value of whole array 
    // console.log(item, index, arr); 
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "python",
        languageFileName: "py",
    }
]
// array ke inside object se data retrive karna its a big deal 
myCoding.forEach((item) => {
    // console.log(item.languageName);
    console.log(item.languageFileName);
})