const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]// 16 is hex has 16 values
    }
    return color;
};
// function need to be declared before calling it 
let intervalId
const StartChangingColor = function(){
    if(!intervalId){ // if intervalId is null then make it this 
        intervalId = setInterval(changeBC, 1000)
    }
   function changeBC(){
    document.body.style.backgroundColor = randomColor();
   }
};

const StopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null; // clearing the varible after its use  
}


document.querySelector('#start').addEventListener('click',StartChangingColor);
document.querySelector('#stop').addEventListener('click', StopChangingColor);



