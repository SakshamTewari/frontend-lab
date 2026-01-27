const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const textInput = document.getElementById('textInput');
const speedInput = document.getElementById('speed');
let currentCharacter;

// textInput.addEventListener('input', () => console.dir(textInput));

playButton.addEventListener('click', () => {
    playText(textInput.value);
});
pauseButton.addEventListener('click', pauseText);
stopButton.addEventListener('click', stopText);
speedInput.addEventListener('input', () => {
    stopText();
    playText(utterance.text.substring(currentCharacter));
})


// create speech synthesis
const utterance = new SpeechSynthesisUtterance();
// once finished, text input enabled
utterance.addEventListener('end', () => textInput.disabled = false);
utterance.addEventListener('boundary', (e) => {
    currentCharacter = e.charIndex
})


function playText(text){

    // if already speaking and paused, return the existing speech synthesis
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume();
    }

    // if already speaking, return
    if(speechSynthesis.speaking) return;

    utterance.text = text;
    utterance.rate = speedInput.value || 1;

    // disable text input while speaking
    textInput.disabled = true;

    speechSynthesis.speak(utterance);
}

function pauseText(){
    if(speechSynthesis.speaking) speechSynthesis.pause();
}

function stopText(){
    speechSynthesis.resume();
    speechSynthesis.cancel();
}