let symbolPlaced = false;
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
  if (gameWon == false) {
    if (grid[a] == "o" || grid[a] == "x") {
    } else {
      switch (playerXTurn) {
        case false:
          console.log("o");
          grid[a] = "o";
          document.getElementById("cell" + (a + 1)).innerHTML = "o";
          detectWin();
          playerXTurn = true;
          break;
        case true:
          console.log("x");
          grid[a] = "x";
          document.getElementById("cell" + (a + 1)).innerHTML = "x";
          detectWin();
          playerXTurn = false;
          break;
      }
    }
  }
}

function detectWin(gridNum) {
  console.log("detecting Win...");

  for (let gridNum = 0; gridNum < 9; gridNum = gridNum + 3) {
    if (
      grid[gridNum] == "o" &&
      grid[gridNum + 1] == "o" &&
      grid[gridNum + 2] == "o"
    ) {
      console.log("win");
      gameWon = true;
    }

    for (let gridNum = 0; gridNum < 3; gridNum = gridNum + 1) {
      if (
        grid[gridNum] == "o" &&
        grid[gridNum + 3] == "o" &&
        grid[gridNum + 6] == "o"
      ) {
        console.log("win");
        gameWon = true;
      }
    }

    if (grid[0] == "o" && grid[4] == "o" && grid[8] == "o") {
      console.log("win");
      gameWon = true;
    }
    if (grid[2] == "o" && grid[4] == "o" && grid[6] == "o") {
      console.log("win");
      gameWon = true;
    }
  }
}
