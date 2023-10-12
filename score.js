// Iteration 8: Making scoreboard functional

var scoreboard = document.getElementById("score-board")
scoreboard.innerText = localStorage.getItem("total")

let play_again_button = document.getElementById("play-again-button").addEventListener(
    "click",()=>{
        location.href="game.html"
    }
)
