let score = 0;
let lives = 3;
let previousScore = 0;
let nextLifeScore = 20;

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

function loseLife(){
    lives -= 1;
}
//verifica se o placar é múltiplo de 20, aí ganha uma vida extra
function checkScore(){
    if(score >= nextLifeScore){
        lives += 1;
        nextLifeScore += 20;
    }
    
    if(score < 0){
        lives -= 1;
        score = 0;
    }

    if(lives <= 0){
        alert("Fim de jogo! Você perdeu todas as vidas. :'( ");
        resetGame();
    }

    previousScore = score;
}

function updateDisplay(){
    document.getElementById('score').innerText = score;
    document.getElementById('lives').innerText = lives;
}

function resetGame(){
    score = 0;
    lives = 3;
    nextLifeScore = 20;
    updateDisplay();
}