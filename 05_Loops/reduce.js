const mynNums = [1, 2, 3, 4]

// program to add every number 

// const myTotal = mynNums.reduce(function (accumilator,currentValue) {
//     console.log(`Acc: ${accumilator} and currentVal: ${currentValue}`);
//     return accumilator + currentValue;
// }, 0)


// const myTotal = mynNums.reduce((accumilator,currentValue ) => {
//     console.log(`Acc: ${accumilator} and currentVal ${currentValue}`);
//     return accumilator + currentValue;
// },0)

const myTotal = mynNums.reduce((accumilator, currentValue) => accumilator + currentValue ,0)
// console.log(`Acc: ${myTotal}`);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 5999,
    },
    {
        itemName: "java course",
        price: 9999,
    },
    {
        itemName: "data science course",
        price: 12999,
    },
]

const output = shoppingCart.reduce((acc,item) => (acc + item.price),0) // reduce need 2 variable accumilater and current value 
console.log(output);
