//BEST PROJECT EVER!!!!
//let a = new Array(10).fill( new Array(10).fill(0) )
let arr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function beginGame(a) {
  for (let b = 0; b < 10; b++) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    a[x][y] = "B";
  }
  console.log(a);

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === "B") {
        isNaN(a[i][j - 1]) ? "" : a[i][j - 1]++; //right
        isNaN(a[i][j + 1]) ? "" : a[i][j + 1]++; //left
        !a[i + 1] || isNaN(a[i + 1][j]) ? "" : a[i + 1][j]++; //down
        !a[i - 1] || isNaN(a[i - 1][j]) ? "" : a[i - 1][j]++; //up
        !a[i + 1] || isNaN(a[i + 1][j + 1]) ? "" : a[i + 1][j + 1]++; //right & down
        !a[i - 1] || isNaN(a[i - 1][j - 1]) ? "" : a[i - 1][j - 1]++; //left & up
        !a[i + 1] || isNaN(a[i + 1][j - 1]) ? "" : a[i + 1][j - 1]++; //left & down
        !a[i - 1] || isNaN(a[i - 1][j + 1]) ? "" : a[i - 1][j + 1]++; //right & up
      }
    }
  }
}

function emptySpace(a) {
  let allButtons = [
    document.querySelectorAll("#boardDiv > div:nth-child(1) button"),
    document.querySelectorAll("#boardDiv > div:nth-child(2) button"),
    document.querySelectorAll("#boardDiv > div:nth-child(3) button"),
    document.querySelectorAll("#boardDiv > div:nth-child(4) button"),
    document.querySelectorAll("#boardDiv > div:nth-child(5) button"),
    document.querySelectorAll("#boardDiv > div:nth-child(6) button"),
    document.querySelectorAll("#boardDiv > div:nth-child(7) button"),
    document.querySelectorAll("#boardDiv > div:nth-child(8) button"),
    document.querySelectorAll("#boardDiv > div:nth-child(9) button"),
    document.querySelectorAll("#boardDiv > div:nth-child(10) button")
  ];

  //let allButtons = document.querySelector('button')
  console.log("emtySpace", allButtons);

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === 0) {
        !allButtons[i][j - 1] ? "" : allButtons[i][j - 1].click(); //right
        !allButtons[i][j + 1] ? "" : allButtons[i][j + 1].click(); //left
        !allButtons[i + 1] || !allButtons[i + 1][j]
          ? ""
          : allButtons[i + 1][j].click(); //down
        !allButtons[i - 1] || !allButtons[i - 1][j]
          ? ""
          : allButtons[i - 1][j].click(); //up
        !allButtons[i + 1] || !allButtons[i + 1][j + 1]
          ? ""
          : allButtons[i + 1][j + 1].click(); //right & down
        !allButtons[i - 1] || !allButtons[i - 1][j - 1]
          ? ""
          : allButtons[i - 1][j - 1].click(); //left & up
        !allButtons[i + 1] || !allButtons[i + 1][j - 1]
          ? ""
          : allButtons[i + 1][j - 1].click(); //left & down
        !allButtons[i - 1] || !allButtons[i - 1][j + 1]
          ? ""
          : allButtons[i - 1][j + 1].click(); //right & up
      }
    }
  }
}
let board = document.getElementById("boardDiv");
let rows = 10;
let size = 100 / rows;

function makeField(a) {
  for (i = 0; i < rows; i++) {
    let row = document.createElement("div");
    // this labels each row with its index in the table
    row.setAttribute("data-row", i);
    row.classList.add("field-row");
    for (x = 0; x < rows; x++) {
      let button = document.createElement("button");
      document.addEventListener("contextmenu", event => event.preventDefault());
      $(button).click(function() {
        // console.log("THIIIIS", this);
        doSomething($(this));
      });
      button.oncontextmenu = markBomb;
      button.setAttribute("toggle", 1); //setting the toggle to 1 or odd
      button.value = a[i][x];
      button.setAttribute("value", a[i][x]);
      button.style.width = size + "%"; //like 20% width
      button.style.height = size + "%";
      // **this labels each button with its index within the row
      button.setAttribute("data-index", x);
      row.appendChild(button);
      // document.getElementsByTagName("button".onclick = function(){beginGame(a)}).innerHTML
    }
    board.appendChild(row);
  }
  //loop within loop and make little boxes with bombs or numbers underneath and add them to the dom
}
// function showEmpty(){
// if()

// }

function markBomb() {
  let toggleNum = Number(this.getAttribute("toggle"));
  let mySound = new sound("click.mp3");
    
  if (toggleNum % 2 === 0) {
    //if this is even - remove flag
    this.innerHTML = `<div></div>`;
    document.getElementById("score").innerHTML++;
  } else {
    //if odd - add the flag
    this.innerHTML = `<div class="flagcol" id = "flagleft">
      <div class = "flagrow" id="flagtriangle" > </div>
      <div class = "flagrow"> </div>
      </div>
      <div class="flagcol" id = "flagstick">
      </div>`;
      mySound.play()
    document.getElementById("score").innerHTML--;
  }
  this.setAttribute("toggle", toggleNum + 1);
}

let seconds;
let timer;
let firstClick = true; //This happens on page load

function startClock() {
  seconds = 0;
  timer = setInterval(mytimer, 1000); //starts the timer to increase time every second
}

function mytimer() {
  document.getElementById("timer").innerHTML = seconds; //places the time into the "timer" div and increments
  seconds++;
}

// determine position that was clicked
//   find adjacent rows
//   determine adjacent blocks
//   reveal adjacent 0s

function getAdjacentEmptySpaces(targetButton) {
  // $(targetButton).each(function(i, button) {
  //   let $button = $(button),
  //     $row = $button.parent(),
  //     $nextRow = $(".field-row[data-row=" + ($row.data("row") + 1) + "]"),
  //     $prevRow = $(".field-row[data-row=" + ($row.data("row") - 1) + "]"),
  //     clickedIndex = $button.data("index"),
  //     nextIndex = clickedIndex + 1,
  //     prevIndex = clickedIndex - 1,
  //     adjacentEmptyBlocks = [];
  //   adjacentEmptyBlocks = [
  //     ...$nextRow.find(
  //       "button[value=0][data-index=" + clickedIndex + "]:not(.revealed)"
  //     ),
  //     ...$nextRow.find(
  //       "button[value=0][data-index=" + nextIndex + "]:not(.revealed)"
  //     ),
  //     ...$nextRow.find(
  //       "button[value=0][data-index=" + prevIndex + "]:not(.revealed)"
  //     ),
  //     ...$prevRow.find(
  //       "button[value=0][data-index=" + clickedIndex + "]:not(.revealed)"
  //     ),
  //     ...$prevRow.find(
  //       "button[value=0][data-index=" + nextIndex + "]:not(.revealed)"
  //     ),
  //     ...$prevRow.find(
  //       "button[value=0][data-index=" + prevIndex + "]:not(.revealed)"
  //     )
  //   ];
  //   $(adjacentEmptyBlocks).map(function(i, element) {
  //     reveal(element);
  //   });
  //   $(adjacentEmptyBlocks).css("background-color", "blue");
  //   if (adjacentEmptyBlocks.length > 0) {
  //     getAdjacentEmptySpaces(adjacentEmptyBlocks);
  //   }
  // });
  $(targetButton).each(function(i, button) {
    let $button = $(button);
    let $row = $button.parent();
    let $nextRow = $(".field-row[data-row=" + ($row.data("row") + 1) + "]");
    let $prevRow = $(".field-row[data-row=" + ($row.data("row") - 1) + "]");
    let $currentRow = $(".field-row[data-row=" + ($row.data("row")) + "]");
    let clickedIndex = $button.data("index");
    let nextIndex = clickedIndex + 1;
    let prevIndex = clickedIndex - 1;
    let adjacentEmptyBlocks = [];
    adjacentEmptyBlocks = [
      $button,
      ...$currentRow.find(
        "button[value=0][data-index=" + clickedIndex + "]:not(.revealed)"
      ),
      ...$currentRow.find(
        "button[value=0][data-index=" + nextIndex + "]:not(.revealed)"
      ),
      ...$currentRow.find(
        "button[value=0][data-index=" + prevIndex + "]:not(.revealed)"
      ),
      ...$nextRow.find(
        "button[value=0][data-index=" + clickedIndex + "]:not(.revealed)"
      ),
      ...$nextRow.find(
        "button[value=0][data-index=" + nextIndex + "]:not(.revealed)"
      ),
      ...$nextRow.find(
        "button[value=0][data-index=" + prevIndex + "]:not(.revealed)"
      ),
      ...$prevRow.find(
        "button[value=0][data-index=" + clickedIndex + "]:not(.revealed)"
      ),
      ...$prevRow.find(
        "button[value=0][data-index=" + nextIndex + "]:not(.revealed)"
      ),
      ...$prevRow.find(
        "button[value=0][data-index=" + prevIndex + "]:not(.revealed)"
      )
    ];
    $(adjacentEmptyBlocks).map(function(i, element) {
      reveal(element);
    });
    if (adjacentEmptyBlocks.length > 1) {
      getAdjacentEmptySpaces(adjacentEmptyBlocks);
    }
    // console.log(adjacentEmptyBlocks);
  });
}

function reveal(element) {
  $(element).addClass("revealed");
  $span = $("<span />").html($(element).val());
  $(element).html($span);
  $(element).css("background-color", "blue");
}

function doSomething(clickedButton) {
  // console.log($(clickedButton)[0]);
  
  
  if ($(clickedButton).val() === "B") {
    let mySound = new sound("Explosion+5.mp3");
    mySound.play();

    // gameOver()
    // alert("game over");
    document.getElementById("score").innerHTML = 10;
    document.getElementById("boardDiv").innerHTML = "";
    firstClick = true; // starts timer upon first click if true
    clearInterval(timer);
    
    beginGame([...arr]);
    makeField([...arr]);
    arr = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    // return;
  }
  if ($(clickedButton).val() == 0) {
    getAdjacentEmptySpaces(clickedButton);
  } else {
    reveal(clickedButton);
  }
  if (firstClick === true) {
    //won't start the timer after further clicks
    startClock(); //Only once
    firstClick = false;
  }
}
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
      this.sound.pause();
  }    
}
function showBombs(){

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
    row.forEach(function(button){
      // console.log(button, button.value)
      if(button.value === 'B'){
        button.innerHTML = `<span>${button.value}</span>`
        button.style.backgroundColor = 'blue'
      } 
    })
  })
}

// function gameOver (){
// var img = document.createElement("img");
// img.src = "fake-kernel-panic.jpg";
// document.getElementById("game").appendChild(img);
// }

// var img = document.createElement('img');
// img.src = 'img/eqp/' + this.apparel + '/' + this.facing + '_idle.png';
// document.getElementById('gamediv').appendChild(img)

document.getElementById("score").innerHTML = 10;

beginGame([...arr]);
makeField([...arr]);
