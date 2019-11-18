/*
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    
       overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
              });
    }); */

const allCards = document.querySelectorAll(".card");
/*makes list of all card elemets, stores it in const allCards*/

let hasCardFlipped = false;
let lockBoard = false; //locks board until mismatching cards have been flipped back
let firstClick, secondClick;



function flipCard() {
    if (lockBoard) return;
    if (this === firstClick) return;
    
    this.classList.add("flip"); /*changed toggle to add so we can add a condition*/
    if (!hasCardFlipped) {
        /*first click*/
        hasCardFlipped = true;
        firstClick = this; /*this was checked using console.log(hasCardFlipped, firstClick)*/
    }
    else {
        hasCardFlipped = false;
        secondClick = this;

        checkForMatch()
    }
}

/*function checkForMatch() { //do cards match? - must check if the data-card from 1st&2nd card are same. If they are, we remove EventListener to prevent them being clicked again
    //if its not, then we un-flip the cards back to original state

    if (firstClick.dataset.card ===
        secondClick.dataset.card) { //it's a match!
        disableCards();
    }
    else { //not a match
        unflipCards();
    }

}*/ /*ALL OF THIS DOES SAME AS NEXT LINE! (ternary block)*/

function checkForMatch(){
    let isMatch = firstClick.dataset.card ===
        secondClick.dataset.card;
        
        isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstClick.removeEventListener("click", flipCard);
    secondClick.removeEventListener("click", flipCard);

resetBoard();
}

function unflipCards() {
    lockBoard = true;
    
     setTimeout(() => {
            firstClick.classList.remove("flip");
            secondClick.classList.remove("flip");
            
            resetBoard();
        }, 1500);
}

function resetBoard(){
    [hasCardFlipped, lockBoard] = [false, false]; //ES6 destructing assignment
    [firstClick, secondClick] = [null, null];
}
    
(function shuffle() {
    allCards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function countDown(secs,elem) {
	var element = document.getElementById(elem);
	element.innerHTML = secs;
	if(secs < 1) {
		clearTimeout(timer);
		element.innerHTML = '<h2>Countdown Complete!</h2>';
		element.innerHTML += '<a href="#">Click here now</a>';
	}
	secs--;
	var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);
}

countDown(10,"timer");

/*"this" access the classlist of the "card", and then we toggle the flip class*/
allCards.forEach(card => card.addEventListener("click", flipCard));
/*loops through that list - into each one of the cards, we are going to attach an Eventlistener. When that event is fired, we are going to execute a functoin named flipCard*/
