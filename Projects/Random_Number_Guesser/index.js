const randomNum = (parseInt((Math.random() * 10 + 1)));
// .'' for class , #'' for id
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true // general in games 

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){ // very imp in backend email h na and all 
  // NaN , +n, 1-100, checking
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess < 1 || guess > 100){
    alert('give the number in range of 1 to 100 ')
  }else{
    prevGuess.push(guess)
    if(numGuess === 10){
      cleanUpMessage(guess)
      displayMessage(`Game Over. Random number was ${randomNum}`)
      endGame()
    }else{
      checkGuess(guess)
      cleanUpMessage(guess)
    }
  }
}

function checkGuess(guess){
  // if value is == to random number and tell they win 
  if(guess === randomNum){ // main logic
    displayMessage(`You guessed it right`) 
    endGame()
  }else if(guess < randomNum){
    displayMessage(`Number is TOO low`)
  }else if(guess > randomNum){
    displayMessage(`Number is TOO high`)
  }
}

function cleanUpMessage(guess){
  // will clear the first input , update remainging guesses and prevGuess bhi display karega 
  userInput.value = ''
  guessSlot.innerHTML += `${guess}`// adding the guess value into the var we created
  numGuess++ // increasing the total guess avail
  remaining.innerHTML = `${10-numGuess}`//with that numGuess the remaining guess is caclulated and added to the remaining guess
}

function displayMessage(message){
  // will display in dom
  lowOrHi.innerHTML = `<h1>${message}</h1>`
  // lowOrHi.innerHTML = `<h3> the random no was ${randomNum}</h3>`
  // lowOrHi.innerHTML = `<h3>${remaining}</h3>`
  // alert(`${randomNum}`)
}

function endGame(){
  
}

function newGame(){

}

