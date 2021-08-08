window.addEventListener('load',init)

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};


// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
    'undertake',
    'undertake',
    'accord',
    'practice',
    'approach',
    'straight',
    'apparent',
    'passage',
    'instance',
    'commission',
    'constitute',
    'institute',
    'generate',
    'campaign',
    'entertain',
    'yield',
    'knight',
    'convention',
    'financial',
    'territory'
];

function init(){
    //level
    seconds.innerHTML = currentLevel;
    showWord(words);
    //Starting matching words
    wordInput.addEventListener('input',startMatch);
    //countdown
    setInterval(countdown,1000);
    //check status
    setInterval(checkStatus,50);
}
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if (score === -1){
        scoreDisplay.innerHTML = 0;
    }
    else{
        scoreDisplay.innerHTML = score;
    }
    
}
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    }
    else{
        message.innerHTML = '';
        return false;
    }
}

function showWord(words){
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex];
}

//coundown timer
function countdown(){
    if(time > 0){
        time--;
    }
    else if(time === 0){
        isPlaying = false;
    }

    //show time
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!! Plz try again.'
             
    }
}