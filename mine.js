//BEST PROJECT EVER!!!!
//let a = new Array(10).fill( new Array(10).fill(0) )
let arr =
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

document.getElementById('start').onclick = gameOver;


function beginGame(a) {
for (let b = 0; b < 10; b++) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    // a[x][y] = 'B'
    a[x][y] === 'B' ?  b-- : a[x][y] = 'B'
  }
  console.log(a)

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === 'B') {
        isNaN(a[i][j - 1]) ? '' : a[i][j - 1]++ //right
        isNaN(a[i][j + 1]) ? '' : a[i][j + 1]++ //left
        !a[i + 1] || isNaN(a[i + 1][j]) ? '' : a[i + 1][j]++ //down
        !a[i - 1] || isNaN(a[i - 1][j]) ? '' : a[i - 1][j]++ //up
        !a[i + 1] || isNaN(a[i + 1][j + 1]) ? '' : a[i + 1][j + 1]++ //right & down
        !a[i - 1] || isNaN(a[i - 1][j - 1]) ? '' : a[i - 1][j - 1]++ //left & up
        !a[i + 1] || isNaN(a[i + 1][j - 1]) ? '' : a[i + 1][j - 1]++ //left & down
        !a[i - 1] || isNaN(a[i - 1][j + 1]) ? '' : a[i - 1][j + 1]++ //right & up

      }
    
    }
  }
}
window.what = 'hiiii'

// function emptySpace (a){ 
//   console.log(a)
//   let allButtons = [
//     document.querySelectorAll('#boardDiv > div:nth-child(1) button'),
//     document.querySelectorAll('#boardDiv > div:nth-child(2) button'),
//     document.querySelectorAll('#boardDiv > div:nth-child(3) button'),
//     document.querySelectorAll('#boardDiv > div:nth-child(4) button'),
//     document.querySelectorAll('#boardDiv > div:nth-child(5) button'),
//     document.querySelectorAll('#boardDiv > div:nth-child(6) button'),
//     document.querySelectorAll('#boardDiv > div:nth-child(7) button'),
//     document.querySelectorAll('#boardDiv > div:nth-child(8) button'),
//     document.querySelectorAll('#boardDiv > div:nth-child(9) button'),
//     document.querySelectorAll('#boardDiv > div:nth-child(10) button'),
//   ]

//   //let allButtons = document.querySelector('button')
//   console.log(allButtons)
//   console.log(pos, pos.x, '!!!!!')
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a[i].length; j++) {
//       let clicked = false; 
//       if (a[i][j] === 0) {
//         //console.log(i,j)
//         //console.log(allButtons[i][j - 1], allButtons[0][5])
//         allButtons[i][j].click() //to click myself 
//         !(allButtons[i][j - 1]) ? '' : allButtons[i][j - 1].click() //right
//         !(allButtons[i][j + 1]) ? '' : allButtons[i][j + 1].click() //left
//         !allButtons[i + 1] || !(allButtons[i + 1][j]) ? '' : allButtons[i + 1][j].click() //down
//         !allButtons[i - 1] || !(allButtons[i - 1][j]) ? '' : allButtons[i - 1][j].click() //up
//         !allButtons[i + 1] || !(allButtons[i + 1][j + 1]) ? '' : allButtons[i + 1][j + 1].click() //right & down
//         !allButtons[i - 1] || !(allButtons[i - 1][j - 1]) ? '' : allButtons[i - 1][j - 1].click() //left & up
//         !allButtons[i + 1] || !(allButtons[i + 1][j - 1]) ? '' : allButtons[i + 1][j - 1].click() //left & down
//         !allButtons[i - 1] || !(allButtons[i - 1][j + 1]) ? '' : allButtons[i - 1][j + 1].click() //right & up
//         clicked = true
//     }
//     if(!clicked) {
//       //return console.log(a[i][j], allButtons[i][j]) 
//     }
//    } 
//   } 
// }
let board = document.getElementById("boardDiv")
let rows = 10
let size = 100 / rows

function makeField(a) {

  for (i = 0; i < rows; i++) {
    let row = document.createElement("div")
    for (x = 0; x < rows; x++) {
      let button = document.createElement("button");
      document.addEventListener('contextmenu', event => event.preventDefault());
      //button.addEventListener("click", doSomething)
      button.addEventListener("click", experiment)
      button.addEventListener("click", mouseDownWaiting)
      button.reveal = show
      button.oncontextmenu = markBomb;
      button.setAttribute('toggle',1)//setting the toggle to 1 or odd
      button.value = a[i][x]
      button.setAttribute('value', a[i][x])
      button.style.width = size + "%" //like 20% width
      button.style.height = size + "%"
      row.appendChild(button);
      // document.getElementsByTagName("button".onclick = function(){beginGame(a)}).innerHTML
    }
    board.appendChild(row);
    
  }
  //loop within loop and make little boxes with bombs or numbers underneath and add them to the dom
} 


markBombs = 0;                               //set markBombs to 0
function markBomb(){
    let mySound = new Audio("click.mp3");
    let toggleNum = Number(this.getAttribute('toggle'))
    console.log(this.value);
    if(toggleNum%2===0){                        //if this is even - remove flag
      this.innerHTML = `<div></div>`
      document.getElementById("score").innerHTML++
      if(this.value ==="B"){                    //if this is even and the flag is removed and the value is B => decrease markbombs
        markBombs--
      } 
    } else {                                    //if odd - add the flag
      this.innerHTML = `<div class="flagcol" id = "flagleft">
      <div class = "flagrow" id="flagtriangle" > </div>
      <div class = "flagrow"> </div>
      </div>
      <div class="flagcol" id = "flagstick">
      </div>`
      mySound.play();  
      document.getElementById("score").innerHTML--

      if(this.value ==="B"){                      //the this is odd and the flag is added and the value is B => increase markbombs
        markBombs++
      }
    }
    this.setAttribute('toggle',toggleNum+1)
    console.log('markBombs', markBombs)
    if(markBombs === 10){                       //if marked bombs with value B is 10 - you won
      clearInterval(timer);
      document.getElementById("image").src="win.gif";
      setTimeout(function(){
      document.getElementById("image").src="wait.gif";
      alert('YOU ROCK');
       
      },4000)
      
    } 
} 


document.getElementById("score").innerHTML = 10;

beginGame(arr);
makeField(arr);

function experiment(){
  
  console.log(this, this.name)
  if(this.value === "B"){
    // let mySound = new Audio("Explosion+5.mp3");
    this.innerHTML = `<span><img src='./time-bomb.png'/></span>`
    this.style.backgroundColor = 'tomato'
    // mySound.play() 
   
          setTimeout(function(){
            document.getElementById("image").src="gameover.gif";
            alert("you lost");
          },4500) 
          
    
    firstClick=true;                            // starts timer upon first click if true
    clearInterval(timer);
    startClock()
    return showBombs()
} 

clearInterval()
  if(this.name == "revealed"){                //This cell is only revealed once! 
    return 
  } else {
    this.setAttribute('name','revealed')
  }
  if(firstClick === true){                    //won't start the timer after further clicks
  startClock()                                //Only once
  firstClick = false; 
}
  let j = $(this).index();
  let i = $(this).parent().index()

  console.log(j,i)

  let allButtons = [
    document.querySelectorAll('#boardDiv > div:nth-child(1) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(2) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(3) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(4) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(5) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(6) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(7) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(8) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(9) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(10) button'),
  ]
  //Find all of the 8 around us.  
  allButtons[i][j].reveal() //this is us 

  if(this.value != 0) { return } //if not zero don't reveal the rest...

  !(allButtons[i][j - 1]) ? '' : allButtons[i][j - 1].reveal() //right
  !(allButtons[i][j + 1]) ? '' : allButtons[i][j + 1].reveal() //left
  !allButtons[i + 1] || !(allButtons[i + 1][j]) ? '' : allButtons[i + 1][j].reveal() //down
  !allButtons[i - 1] || !(allButtons[i - 1][j]) ? '' : allButtons[i - 1][j].reveal() //up
  !allButtons[i + 1] || !(allButtons[i + 1][j + 1]) ? '' : allButtons[i + 1][j + 1].reveal() //right & down
  !allButtons[i - 1] || !(allButtons[i - 1][j - 1]) ? '' : allButtons[i - 1][j - 1].reveal() //left & up
  !allButtons[i + 1] || !(allButtons[i + 1][j - 1]) ? '' : allButtons[i + 1][j - 1].reveal() //left & down
  !allButtons[i - 1] || !(allButtons[i - 1][j + 1]) ? '' : allButtons[i - 1][j + 1].reveal() //right & up

} 


function show(){
    console.log(this.value)
    if(this.value!='B'){
        this.innerHTML = `<span>${this.value}</span>`
        this.style.backgroundColor = "seaGreen"
    }
    if(this.value === '0'){ //When it is zero, we need to reclick that zero 
        let fun = experiment.bind(this)
        setTimeout(function(){ fun() },300)
        
    }
}

function showBind(){
  console.log('should only have value 0',this)
}

let seconds;
let timer; 
let firstClick = true;  //This happens on page load 


function startClock(){
  seconds = 1;
  timer = setInterval(mytimer, 1000); //starts the timer to increase time every second
}

function mytimer(){
  document.getElementById("timer").innerHTML = seconds;//places the time into the "timer" div and increments
  seconds++;
 }


function gameOver(){
window.location.reload();
document.getElementById("score").innerHTML = 10;
document.getElementById("boardDiv").innerHTML = '';
    // firstClick=true;// starts timer upon first click if true
    

    arr =
      [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    
    
      beginGame(arr);
      makeField(arr);
      
}

function showBombs(){
  document.getElementById('game').style.animation = 'shake .2s 10 linear'
  
  let allButtons = [
    document.querySelectorAll('#boardDiv > div:nth-child(1) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(2) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(3) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(4) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(5) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(6) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(7) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(8) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(9) button'),
    document.querySelectorAll('#boardDiv > div:nth-child(10) button'),
  ]
 
  allButtons.forEach(function(row){
    row.forEach(function(button, i){
      console.log(button, button.value)
      setTimeout(function(){
        if(button.value === 'B'){
          
          let mySound = new Audio("Explosion+5.mp3");
          mySound.play()
          button.innerHTML = `<span><img src='./time-bomb.png'/></span>`
          button.style.backgroundColor = 'tomato'
        } 
      },i*333)
    })
  })  
}

function mouseDownWaiting() {
  document.getElementById("image").src="waiting.gif";
  setTimeout(function(){
    document.getElementById("image").src="wait.gif";
  },4000)
} 


