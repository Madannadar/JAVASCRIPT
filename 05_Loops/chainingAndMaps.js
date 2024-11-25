const myNums = [1,2,3,4,5,5,6,7,7,8,8,10]

const newnums1 = myNums.map( (num) => num + 10)

const newnums2 = myNums.map( (num) => {
    return num + 10
})
// console.log(newnums1);

const newnums3 = myNums
.map((i) => i + 10)
.map((i) => i + 1 )
.filter((i) => i > 20) // chaining

console.log(newnums3);
