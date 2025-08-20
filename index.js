let currentAudio = null;

function playExclusive(audio) {
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = audio;
    audio.currentTime = 0;
    audio.play();
}

const doAudio = new Audio('./audio.mp3');
const doDiv = document.querySelector('.do');
doDiv.addEventListener('click', () => playExclusive(doAudio));

const laAudio = new Audio('./audio2.mp3');
const laDiv = document.querySelector('.ля');
laDiv.addEventListener('click', () => playExclusive(laAudio));

const solAudio = new Audio('./audio3.mp3');
const solDiv = document.querySelector('.соль');
solDiv.addEventListener('click', () => playExclusive(solAudio));

const reAudio = new Audio('./audio4.mp3');
const reDiv = document.querySelector('.ре');
reDiv.addEventListener('click', () => playExclusive(reAudio));

const faAudio = new Audio('./audio5.mp3');
const faDiv = document.querySelector('.фа');
faDiv.addEventListener('click', () => playExclusive(faAudio));

document.addEventListener('DOMContentLoaded', () => {
    const miAudio = new Audio('./audio6.mp3');
    const miDiv = document.querySelector('.ми');
    miDiv.addEventListener('click', () => playExclusive(miAudio));
});

const siAudio = new Audio('./audio7.mp3');
const siDiv = document.querySelector('.си');
siDiv.addEventListener('click', () => playExclusive(siAudio));

const d1Audio = new Audio('./audio8.mp3');
const d1Div = document.querySelector('.д1');
d1Div.addEventListener('click', () => playExclusive(d1Audio));

const blackDivs = document.querySelectorAll('.black-div');
blackDivs.forEach((div, index) => {
    const audio = new Audio(`./audio${index + 5}.mp3`);
    div.addEventListener('click', () => playExclusive(audio));
});
