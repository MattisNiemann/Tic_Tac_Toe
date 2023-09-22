//let grid = [,2,3,4,5,6,7,8,9]
let playerXTurn = new Boolean(false)
let grid = [document.getElementById("cell1").innerHTML,document.getElementById("cell2").innerHTML,
        document.getElementById("cell3").innerHTML,document.getElementById("cell4").innerHTML,
        document.getElementById("cell5").innerHTML,document.getElementById("cell6").innerHTML,
        document.getElementById("cell7").innerHTML,document.getElementById("cell8").innerHTML,
        document.getElementById("cell9").innerHTML
    ]




//console.log(xc*1)
console.log(grid)

function setSymbol(a){
    grid[a] = "x";
    document.getElementById("cell"+(a+1)).innerHTML = "x";
    console.log(a+1)
    console.log(grid)
    


}
