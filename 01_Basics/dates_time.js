let mydate = new Date()
// console.log(mydate.toString());

// toString() : Sun May 07 2023 14:16:39
// toDateString() : Sun May 07 2023
// toTimeString() :14:19:03 GMT+0500 (Pakistan Standard Time)
// toLocaleString() : 5/7/2023, 2:20:24 PM
// toISOString() : 2023-05-07T09:21:22.167Z
// toUTCString() : Sun, 07 May 2023 09:24:48 GMT

let mycreatedDate = new Date(2024, 8, 5) // months from 0 to 11
// console.log(mycreatedDate.toDateString());

let mycreatedDate_1 = new Date("01-14-2024")
// console.log(mycreatedDate_1.toLocaleString());

let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(mycreatedDate_1.getTime());
console.log(Math.round(Date.now()/1000)); // conparir sec 

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay());

// `${newdate.getDate()} and the time `

newdate.toLocaleString('default', {
    weekday:"long",
})
