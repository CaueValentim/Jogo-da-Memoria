//Função para criar as cartas.
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'neeseeks',
    'scroopy',
]

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}// serve para facilitar a criação de elementos HTMl com JAVAScript

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {//função para quando o jogo terminar.
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 20){
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
    }

}

const checkCards = () => { //serve para verificar se a pessoa acertou.
    const firtsCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')

    if (firtsCharacter == secondCharacter){// se acertar.  

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = '';
        secondCard = '';

        checkEndGame();

    }else { //se errar.

        setTimeout(() =>{firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';
    
    }, 500 )

        
    }

}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')){
        return;// serve para verificar se a carta ja foi virada.
    }

    if (firstCard == '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard =='') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards()

    }

}

const createCard = (character) =>{

    const card = createElement('div', 'card')//serve para criar um elemento HTML.
    const front =  createElement('div', 'face front')
    const back =  createElement('div', 'face back')
    
    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;

}

//função para carregar o jogo.
const loadGame = () => {

    const duplicateCharacters =[ ...characters, ...characters ]; //duplica a quantidade de cards.

    const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5);

    Math.random()

    shuffledArray.forEach((character) =>{
        
        const card = createCard(character);
        grid.appendChild(card);

    });

}

const startTimer = () => {// criar o timer.
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML =currentTime + 1;

    }, 1000);
}

window.onload = () => {
    const playerName = localStorage.getItem('Player');
    spanPlayer.innerHTML = playerName;
    startTimer();
    loadGame();
}


