let symbolPlaced = false;
let gameRunning = false;
let playerXTurn = false;
let gameWon = false;
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
            playerXTurn = true;
            break;
            case true:
              console.log("x");
              grid[a] = "x";
              document.getElementById("cell" + (a + 1)).innerHTML = "x";
              detctWin();
              playerXTurn = false;
              break;
            }
          }
        }
      }
    }
    
    // starting game
    function startGame() {
      gameRunning = true;
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

