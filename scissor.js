var rock, paper, scissor;
var randnum,winorlose;

function setup(){
    winorlose = document.getElementById('wolor')
    rock = "🪨"
    paper = "📝"
    scissor = "✂️"
}
function guessrpsp(){
    randnum = Math.round(random(1,3))
    
    if(randnum == 1){
        document.getElementById('gcscrg').innerHTML = "rock" + " " + rock
        winorlose.innerHTML = "You Lose! 😞"
    }else if(randnum == 2){
        document.getElementById('gcscrg').innerHTML = "paper" + " " + paper
        winorlose.innerHTML = "You Win! 😃"
    }else{
        document.getElementById('gcscrg').innerHTML = "scissor" + " " + scissor
        winorlose.innerHTML = "Draw! 😐"
    }
}
function draw(){
    
}

