const coding = [ "js","ruby","java","python","cpp"]

const Values = coding.forEach((item) => { // this to dont return any value 
    // console.log(item);
})
// console.log(Values); // therefore ans is undefined 


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num)=> num > 4) // returns value and is store in newNums

// const newNums = myNums.filter((nums) => {
//     return num > 4  // here in filter method it doesnt return automatically it needs to be mensioned  nahi to ans will be []
// })
// console.log(newNums);

const newNums = []

myNums.forEach((i) => { // doing it with for each then filter methond
    if (i > 4) {
        newNums.push(i)
    }
})
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let filter1 = books.filter((i) =>{
     return i.genre === 'History' && i.publish <= 1998;
 })
 console.log(filter1);
 



