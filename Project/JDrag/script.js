score = 0;
cross= true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameOver.wav');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function(e)
{
    console.log("Key Code is :", e.key)
    if(e.key == "ArrowUp"){
        horse = document.querySelector('.horse');
        horse.classList.add('animateHorse');
        setTimeout(() => {
            horse.classList.remove('animateHorse')
        }, 700); 
    }
    if(e.key == "ArrowRight"){
        horse = document.querySelector('.horse');
        horseX = parseInt(window.getComputedStyle(horse, null).getPropertyValue('left'));
        horse.style.left = horseX + 112 + "px";
    }
    if(e.key == "ArrowLeft"){
        horse = document.querySelector('.horse');
        horseX = parseInt(window.getComputedStyle(horse, null).getPropertyValue('left'));
        horse.style.left = (horseX - 112) + "px";
    }
} 

setInterval(()=> {
    horse = document.querySelector('.horse');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    hx = parseInt(window.getComputedStyle(horse, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(horse, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(hx-ox);
    offsetY = Math.abs(hy-oy);
    //console.log(offsetX, offsetY);
    if(offsetX < 100 && offsetY < 30){ // 93 52
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        audio.pause();
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            //audio.pause();
        }, 1000);

    }
    else if(offsetX < 145 && cross) {//when cross is true
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
}, 100);
function updateScore(score) {
scoreCount.innerHTML = " Your Score : " +score
}

