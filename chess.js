// declaring the minutes and seconds values
let minutes = 05;
let seconds = 00;


document.getElementById("timer").addEventListener("change",selectFunction);

function selectFunction(){
    
    minutes = document.getElementById('timer').value;
    seconds = 00;
    p1minutes = document.getElementById('timer').value;
    document.querySelector('.left').innerText = minutes +" : "+ seconds+' secs';
    document.querySelector('.right').innerText = minutes +" : "+ seconds+' secs';   
}

// var str = inpuval.options[inpuval.selectedIndex].value;



let defaulttimer = 00;
// Getting the button Id
var startbtn = document.getElementById('startbtn');
var resetbtn = document.getElementById('resetbtn');

// click function for start and reset button
// resetbtn.onclick = resetFunction;
// startbtn.addEventListener('click', startFunction)
document.getElementById("startbtn").addEventListener("click", startFunctionA);
document.getElementById("swapbtn").addEventListener("click", swapFunction);
document.getElementById("resetbtn").addEventListener("click", resetFunction);

// console.log(str)

// reset function begin
function resetFunction(){
    clearInterval(player1)
    clearInterval(player2)
    document.querySelector('.left').innerText = defaulttimer +":"+ defaulttimer
    document.querySelector('.right').innerText =  defaulttimer +":"+ defaulttimer
    startbtn.disabled = false;
}


let p1minutes = 05;
let p1seconds = 00;

// let currentminutes = 0;
// let currentseconds = 0;

// writing the declared value inside the span element
let left = document.querySelector('.left')
let right = document.querySelector('.right')

let player1,player2;
function startFunctionA(){
    startbtn.disabled = true;

    player1 = setInterval(function (){
        
        if(seconds == 0){
            seconds = 59;
            minutes= minutes -1;
            left.classList.add('intervaltime')

            
        }
        else{
            seconds = seconds -1
        }
        if(seconds == 0 && minutes == 0){
            left.classList.remove('intervaltime')
            clearInterval(player1);
        }

        document.querySelector('.left').innerText = minutes +" : "+ seconds+' secs';    

    },100)
    
    

}
function startFunctionB(){

    player2 = setInterval(function (){
       
       if(p1seconds == 0){
           p1seconds = 59;
           p1minutes= p1minutes -1;

           
       }
       else{
           p1seconds = p1seconds -1
       }
       if(p1seconds == 0 && p1minutes == 0){
           clearInterval(player2);
       }

       document.querySelector('.right').innerText = p1minutes +" : "+ p1seconds+' secs';    

   },100)
   
   

}
function swapFunction(){

    var a = left.classList.contains("intervaltime");
    var b = right.classList.contains("intervaltime");

    if(a ==  true){
        clearInterval(player1);
        // left.classList.add('cleartime')
        startFunctionB()
        left.classList.remove('intervaltime')
        right.classList.add('intervaltime')
        
        
        // setInterval(player2)
        
    }
    else if(b == true){
        clearInterval(player2)
        startFunctionA()
        right.classList.remove('intervaltime')
        left.classList.add('intervaltime')
        
        
    }


}