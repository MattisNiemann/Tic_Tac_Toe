
let playerXTurn = false
let grid = [document.getElementById("cell1").innerHTML,document.getElementById("cell2").innerHTML,
        document.getElementById("cell3").innerHTML,document.getElementById("cell4").innerHTML,
        document.getElementById("cell5").innerHTML,document.getElementById("cell6").innerHTML,
        document.getElementById("cell7").innerHTML,document.getElementById("cell8").innerHTML,
        document.getElementById("cell9").innerHTML
    ]
console.log(grid)

function setSymbol(a){
   switch (playerXTurn) {
    case false:
        console.log("o")
        grid[a] = "o";
        document.getElementById("cell"+(a+1)).innerHTML = "o";
        playerXTurn = true
        break
    case true:
        console.log("x")   
        grid[a] = "x";
        document.getElementById("cell"+(a+1)).innerHTML = "x";
        playerXTurn = false
   }
   
}
