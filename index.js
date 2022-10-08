//GAME CONTROL
function control(e){
    if(e.key =='ArrowUp' || e.key == ' '){
        jump();
    }
}
document.addEventListener('keydown', control);


//Score
let scoreboard = document.getElementById("scoreNum")//displayscore;score
let scoreNum =0;//score

function ScoreNum(){
    scoreNum ++;
    scoreboard.innerText = scoreNum;
}
setInterval(ScoreNum, 1000)

//character, ball
let character =
document.getElementById("character");
let ball = document.getElementById("ball");

//JUMP
function jump(){
    if(character.classList!= "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500)
}

//LOSE
let GameOver = setInterval(function(){
    let characterTop=
    parseInt (window.getComputedStyle(character).getPropertyValue("top"));
    let ballLeft=
    parseInt (window.getComputedStyle(ball).getPropertyValue("left"));
    if(ballLeft<20 && ballLeft>0 && characterTop>=130)
    {
        ball.style.animation = "bounce";
        alert("Hey Friend, Game Over! Score: " + scoreNum);
        location.reload();
    }
},10);//check on lost status every 10 ms (setInterval)



