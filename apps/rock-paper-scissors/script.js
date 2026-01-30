const SELECTIONS = [
    {
        name: 'rock',
        beats: 'scissor',
        emoji: '✊',
    },
    {
        name: 'paper',
        beats: 'rock',
        emoji: '🖐',
    },
    {
        name: 'scissor',
        beats: 'paper',
        emoji: '✌️',
    }
]

const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);
    })
})

function makeSelection(selectionName){
    const computerSelection = randomSelection();
    console.log(selectionName);
}

function isWinner(selection , opponentSelection){}

function randomSelection() {
    const randomIndex = Math.floor(Math.random()* SELECTIONS.length);
    return SELECTIONS[randomIndex];
}