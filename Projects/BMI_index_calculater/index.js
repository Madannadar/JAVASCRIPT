const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
// this is wrong because .value will get value after the submit button is clicked 

form.addEventListener('submit', function(e){
  // .value will only work if the user clicks submit 
  // watch at 33min in vid no 35 to understand better

  e.preventDefault(); // form has default action like sending data to database

  const height = parseInt(document.querySelector('#height').value);//did parseInt because ().value) will get value in form of string
  
  const weight = parseInt(document.querySelector('#weight').value); // # will give id

  const results = document.querySelector('#results');

  if (height === ' ' || height < 0 || isNaN(height) )// isNaN(height) new method > (height != NaN) old method
  {
    results.innerHTML = `Plz give a vaild height ${height}`;
  }else if(weight === ' ' || weight < 0 || isNaN
  (weight)){
    results.innerHTML = `Plz give a vaild weight ${weight}`
  }else{
    // results.innerHTML = (weight / ((height*height)/10000)).toFixed(2)
    const bmi = parseFloat((weight / ((height*height)/10000)).toFixed(2));
    // results.innerHTML = `<span>${bmi}</span>`

    switch(true){ //  we use switch (true) to evaluate each case as a boolean expression. This allows you to use conditions rather than just matching a specific value.
      case(bmi <= 18.6):
      results.innerHTML = `<span>Your BMI of ${bmi} is under weight</span>`;
      break
      case(bmi > 18.6 && bmi <= 24.9):
      results.innerHTML =  `<span>Your BMI of ${bmi} is Normal range</span>`;
      break
      case(bmi > 24.9):
      results.innerHTML = `<span>Your BMI of ${bmi} is OverWeight</span>`;
      break
      default:
        results.innerHTML = `<span>Invalid BMI</span>`;
    }
    
  }
})