// for in loop
// here it prints keys and not the value automatically
// map is not iterable 
const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb:'ruby',
    py:'python'
}

for (const i in myObject) {
    // console.log(`${i} => ${myObject[i]}`);
}

const programming = ["js", "rb","py","cpp"]

for (const i in programming) {
    // console.log(programming[i]);
}
// maps are not iterable in for in loop
const map = new Map()
map.set('IN',"India") 
map.set('USA',"United States of America")
map.set('Fr',"France")

for (const i in map) {
    console.log(i);
}

