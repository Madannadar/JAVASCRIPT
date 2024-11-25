// for of  
// prints directly vaules and not the key matlb it will print india rather then in automatically
// object not iterable 

const arr = [1, 2, 3, 4, 5]
// works with num
// for (const i of arr) { // object matlab kis var pe loop laga na h
//     console.log(i);
// }

// works with 
const greeting = "hello world"
for (const i of greeting) {
    // if (i == " ") {
    //     break
    // }
    // console.log(i);
}

// Maps 
// no duplicate value will be accepted and maintains order of entry 
const map = new Map()
map.set('IN',"India") 
map.set('USA',"United States of America")
map.set('Fr',"France")
// console.log(map);


for(const key of map){
    // console.log(key);
}
// using [] can make 2 var
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
// object can not be iterable using forof loop 
const myObject = {
    'game1': 'chess',
    'game2': 'cricket'
}

// for (const i of myObject) {
//     console.log(i);
    
// }


    