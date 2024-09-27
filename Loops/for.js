// for loop
const array=[10,20];
// for (let i = 0; i < array.length; i++) { // merko aata h 
// //    console.log(array[i]);
// }


// // nested for loop
// for (let i = 0; i < array.length; i++) {
//     // console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j < array.length; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${j}`)
//         // console.log(`i * j = ${i*j}`);
//     }
// }

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 7){
        console.log(`detected 7 thala for a reason`);
        break; // break hehe
    }
    console.log(`value of i is : ${index}`)    
}


for (let index = 1; index <= 20; index++) {
    if(index == 7){
        console.log(`detected 7 thala for a reason`);
        continue; // continue hehe
    }
    console.log(`value of i is : ${index}`)    
}

