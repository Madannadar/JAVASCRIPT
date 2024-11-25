
let randomNumber = (parseInt(Math.random()*10 + 1 ))
const submit = document.querySelector('#subt') 
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p') // creating a element to make para it does not work like html here  

let prevGuess = []
let numGuess = 1 

let playGame = true // common in games 

if(playGame){ // check if we can play game 
  submit.addEventListener('click', function(e){
    e.preventDefault() // will make the vaule from going because we want to use it 
    const guess = (parseInt(userInput.value))// will store the user guess
    console.log(guess) // will print it 
    validateGuess(guess) // then will go to the next function 
  })
}
// if the input is not a number or if it is less then 1 or more then top limit
function validateGuess(guess){
  if(isNaN(guess)){
    alert('plz enter a vaild number ')
  } else if ( guess < 1 || guess > 100){
    alert('Plz enter a number between 1 to 100')
  }else{
    // alert(guess)
    prevGuess.push(guess) //if the number is correct then it is send to prevguess to display push add value to array 
    if(numGuess >= 10){
      displayGuess(guess) // we will do all this if the no of guess are not left 
      displayMessage(`game over, random number was ${randomNumber}`)
      endGame() // we have called this function but as of now dont know how to will see there abhi jo karna h wo chal raha h 
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

// will print a message if the vaidation is not meet 
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }else if (guess < randomNumber){
    displayMessage(`Number is Too low`)
  }else if (guess > randomNumber){
    displayMessage(`Number is To high`)
  }
}

  // will clean value after every round and reduce all variable
function displayGuess(guess){
  userInput.value = '' // will make it empty after every guess and checking
  // alert(guess)
  guessSlot.innerHTML += `${guess}, ` // this will push value of guess to the guesses span container 
  numGuess++ // after every round
  remaining.innerHTML = `${11 - numGuess}` // will display remainig guesses 
}

// will interact with dom reduce remainig guess prev guess and all
function displayMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>` // lowOrHi is a para created to display that to created in html file with nothing in it 


}

function endGame(){
  userInput.value = '' // clean all values by user
  userInput.setAttribute('disabled', '') // by this the user cant give more input and disable is a key value pare so it needs 2 para one is disabled and the other i have left ''
  p.classList.add('button') // this p variale will behave like button
  p.innerHTML = `<h2 id=newGame>"New Game"</h2>`// button will say new game
  startOver.appendChild(p) // in the resultParas this button will append
  playGame = false // this will not even enter the game 
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = (parseInt(Math.random()*10 + 1 ))
    prevGuess = []
    numGuess = 1 
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    lowOrHi.innerHTML = ''
    playGame = true
  })
}

