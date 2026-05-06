let score = 0;
let lives = 3;

function addPoint(){
    score += 1;
    checkScore();
    updateDisplay();
}

function losePoint(){
    score -= 1;
    checkScore();
    updateDisplay();
}

function bonus(){
    score += 10;
    checkScore();
    updateDisplay();
}

function live(){
    live -= 1;
}
//verifica se o placar é múltiplo de 20, aí ganha uma vida extra
function checkScore(){
    if(score % 20 === 0 && score > 0){
        lives += 1;
    }
    
    if(score < 0){
        lives -= 1;
        score = 0;
    }

    if(lives <= 0){
        alert("Fim de jogo! Você perdeu todas as vidas. :'( ");
        resetGame();
    }

}

function updateDisplay(){
    document.getElementById('score').innerText = score;
    document.getElementById('lives').innerText = lives;
}

function resetGame(){
    score = 0;
    lives = 3;
    updateDisplay();
}