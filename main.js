let symbolPlaced = false;
let gameRunning = false;
let playerXTurn = false;
let gameWon = false;
var detectingDraw;



// starting game
function startGame() {
  gameRunning = true;
  gameWon = false;
  grid.length = 0;
  playerXTurn = false;
  
  for (let a=1;a<10;a++){
    document.getElementById("cell" + (a)).innerHTML = "";
  }
  
}


let grid = [
  document.getElementById("cell1").innerHTML,
  document.getElementById("cell2").innerHTML,
  document.getElementById("cell3").innerHTML,
  document.getElementById("cell4").innerHTML,
  document.getElementById("cell5").innerHTML,
  document.getElementById("cell6").innerHTML,
  document.getElementById("cell7").innerHTML,
  document.getElementById("cell8").innerHTML,
  document.getElementById("cell9").innerHTML,
];


console.log(grid);

function setSymbol(a) {
  if (gameRunning == true) {
    if (gameWon == false) {
      if (grid[a] == "o" || grid[a] == "x") {
      } else {
        switch (playerXTurn) {
          case false:
            console.log("o");
            grid[a] = "o";
            document.getElementById("cell" + (a + 1)).innerHTML = "o";
            detctWin();
            detectDraw();

            playerXTurn = true;
            break;
            case true:
              console.log("x");
              grid[a] = "x";
              document.getElementById("cell" + (a + 1)).innerHTML = "x";
              detctWin();
              detectDraw();
              playerXTurn = false;
              break;
            }
          }
        }
      }
    }
    
    
    function detctWin(){
      
      for (let gridNum = 0; gridNum < 9; gridNum = gridNum + 3) {
        if (
          grid[gridNum] == "o" &&
          grid[gridNum + 1] == "o" &&
          grid[gridNum + 2] == "o"
          ) {
            oWon();
          }
        }
        
        for (let gridNum = 0; gridNum < 3; gridNum = gridNum + 1) {
          if (
            grid[gridNum] == "o" &&
            grid[gridNum + 3] == "o" &&
            grid[gridNum + 6] == "o"
            ) {
              oWon();
            }
          }
          
          if (grid[0] == "o" && grid[4] == "o" && grid[8] == "o") {
            oWon();
          }
          if (grid[2] == "o" && grid[4] == "o" && grid[6] == "o") {
            oWon();
          }
          //detecting if X won
          for (let gridNum = 0; gridNum < 9; gridNum = gridNum + 3) {
            if (
              grid[gridNum] == "x" &&
      grid[gridNum + 1] == "x" &&
      grid[gridNum + 2] == "x"
      ) {
        xWon();
      }
    }
    
    for (let gridNum = 0; gridNum < 3; gridNum = gridNum + 1) {
      if (
        grid[gridNum] == "x" &&
        grid[gridNum + 3] == "x" &&
        grid[gridNum + 6] == "x"
        ) {
          xWon();
        }
      }
      
      if (grid[0] == "x" && grid[4] == "x" && grid[8] == "x") {
        xWon();
      }
      if (grid[2] == "x" && grid[4] == "x" && grid[6] == "x") {
        xWon();
      }



 }
    


 function detectDraw(){
  var p=0;
for  (var i=0;i<=9;i++){

  if (grid[i] == "x" || grid[i] == "o" ){
   p++;
  }
  
}
if(p>=9){Draw()}

 }



 function Draw(){
  console.log("draw");
  gameWon = true;
  gameRunning = false;
  document.getElementById("winner").innerHTML= "no one";
openPopup();
  
}
    
    
    function oWon(){
      console.log("o won");
      gameWon = true;
      gameRunning = false;
      document.getElementById("winner").innerHTML= "o";
  openPopup();
      }
   


function xWon(){

  console.log("x won");
  gameWon = true;
  gameRunning = false;
  document.getElementById("winner").innerHTML= "x";
  openPopup();

}

function restartGame(){
  closePopup();
  startGame();

}