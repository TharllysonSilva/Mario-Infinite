const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump =() => {
    mario.classList.add('jump');

    setTimeout(() => {  

        mario.classList.remove('jump');
        
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition =  +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'nome';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './Imagens/game-over.png';
        mario.style.width ='75px'
        mario.style.marginLeft ='50px'

        clearInterval(loop);
        
    }

}, 10);
/*
myAudio = new Audio('./audios/Super Mario Bros. medley.mp3'); 
if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop = true;
}
else
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
myAudio.play();
*/
document.addEventListener('keydown', ()=>{
    jump()
}); 