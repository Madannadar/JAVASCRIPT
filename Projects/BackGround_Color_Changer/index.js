const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function(e){ // e event object 
    console.log(e)
    console.log(e.target)
    // change background color
    switch (e.target.id){ 
      case ('grey'):
        body.style.backgroundColor = e.target.id;
      case ('white'):
        body.style.backgroundColor = e.target.id;
      case ('blue'):
        body.style.backgroundColor = e.target.id;
      case ('yellow'):
        body.style.backgroundColor = e.target.id;
      case ('cyan'):
        body.style.backgroundColor = e.target.id;
      case ('plum'):
        body.style.backgroundColor = e.target.id;
      case ('greenyellow'):
        body.style.backgroundColor = e.target.id;
    }
  })
})
