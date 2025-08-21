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
if (doDiv) doDiv.addEventListener('click', () => playExclusive(doAudio));

const reAudio = new Audio('./audio3.mp3');
const reDiv = document.querySelector('.ре');
if (reDiv) reDiv.addEventListener('click', () => playExclusive(reAudio));

const miAudio = new Audio('./audio4.mp3');
const miDiv = document.querySelector('.ми');
if (miDiv) miDiv.addEventListener('click', () => playExclusive(miAudio));

const faAudio = new Audio('./audio5.mp3');
const faDiv = document.querySelector('.фа'); // Make sure your HTML element has class="фа"
if (faDiv) {
    faDiv.addEventListener('click', () => playExclusive(faAudio));
} else {
    console.warn('Element with class ".фа" not found. Please check your HTML.');
}

const solAudio = new Audio('./audio6.mp3');
const solDiv = document.querySelector('.соль');
if (solDiv) solDiv.addEventListener('click', () => playExclusive(solAudio));

const siAudio = new Audio('./audio7.mp3');
const siDiv = document.querySelector('.си');
if (siDiv) siDiv.addEventListener('click', () => playExclusive(siAudio));

const d1Audio = new Audio('./audio8.mp3');
const d1Div = document.querySelector('.д1');
if (d1Div) d1Div.addEventListener('click', () => playExclusive(d1Audio));

// Исправлено: создаём массив аудио для чёрных клавиш заранее
const blackDivs = document.querySelectorAll('.black-div');
const blackAudios = [
    new Audio('./audio.mp3'),
    new Audio('./audio2.mp3'),
    new Audio('./audio3.mp3'),
    new Audio('./audio4.mp3'),
    new Audio('./audio5.mp3'),
    new Audio('./audio6.mp3'),
    new Audio('./audio7.mp3'),
    new Audio('./audio8.mp3')
];
blackDivs.forEach((div, index) => {
    if (blackAudios[index]) {
        div.addEventListener('click', () => playExclusive(blackAudios[index]));
    }
});
