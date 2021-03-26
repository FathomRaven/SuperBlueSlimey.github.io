// functions do things
// dont repeat yourself, DRY
// function getRndItn(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }

var shapes = document.getElementById("shapes");
var button = document.getElementById("button");
var input = document.getElementById("input");

var newHtml = [];
var squareCount = 1;



button.addEventListener("click", newSquare);

function newSquare() {
    squareCount = input.value;
    newHtml = [];
    
    
        for (let i = 0; i < squareCount; i++) {
            
            if (i % 2 ) {
                newHtml.push('<div class="square" id = "altColor"></div>')
            } else {newHtml.push('<div class="square"></div>');}
    
            
        
    }
    
    
    shapes.innerHTML = newHtml.join("")
}




