
//let a = new Array(10).fill( new Array(10).fill(0) )
let arr = 
[ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]


function beginGame(a){
  for(let b=0; b<10; b++){
    let x = Math.floor(Math.random()*10);
    let y = Math.floor(Math.random()*10);
    a[x][y] = 'B'
  }
  console.log(a)

  for(let i=0; i<a.length; i++){
    for(let j=0; j<a[i].length; j++){
      if(a[i][j] === 'B'){
        isNaN(a[i][j-1])              ? '' : a[i][j-1]++ //right
        isNaN(a[i][j+1])              ? '' : a[i][j+1]++ //left
        !a[i+1] || isNaN(a[i+1][j])   ? '' : a[i+1][j]++ //down
        !a[i-1] || isNaN(a[i-1][j])   ? '' : a[i-1][j]++ //up
        !a[i+1] || isNaN(a[i+1][j+1]) ? '' : a[i+1][j+1]++ //right & down
        !a[i-1] || isNaN(a[i-1][j-1]) ? '' : a[i-1][j-1]++ //left & up
        !a[i+1] || isNaN(a[i+1][j-1]) ? '' : a[i+1][j-1]++ //left & down
        !a[i-1] || isNaN(a[i-1][j+1]) ? '' : a[i-1][j+1]++ //right & up

      }
    }
  }
}

let board = document.getElementById("boardDiv")
let rows = 10
let size = 100/rows

function makeField(a){
  
  for (i=0; i<rows; i++){
    let row = document.createElement("div")
    for (x=0; x<rows; x++){
      let button = document.createElement("button");
      button.addEventListener("click", doSomething);
      button.value = a[i][x]
      button.setAttribute('value', a[i][x])
      button.innerHTML = ':)'
      button.style.width = size + "%" //like 20% width
      button.style.height = size + "%"
      row.appendChild(button);
      
      // document.getElementsByTagName("button".onclick = function(){beginGame(a)}).innerHTML
    }
    board.appendChild(row);
    
  }
  //loop within loop and make little boxes with bombs or numbers underneath and add them to the dom
} 

beginGame([...arr]);
makeField([...arr]);


function doSomething(){
  console.log(this.value)
  if (this.value==="B"){
    alert ("game over")
    document.getElementById("boardDiv").innerHTML = ''

beginGame([...arr]);
makeField([...arr]);

arr = 
[ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]

  }
  this.innerHTML = this.value
  this.style.backgroundColor = 'blue'

}
// function wireButtons(){
//   document.getElementsByTagName('button').addEventListener("click", function(){
//     console.log(this)
//   });
//   /*.onclick = function(){
//     console.log(this)
//   }*/
// }





