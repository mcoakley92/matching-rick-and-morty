const allCards = document.querySelectorAll(".card");
/*makes list of all card elemets, stores it in const allCards*/

let hasCardFlipped = false;
let firstClick, secondClick;


function flipCard() {
    this.classList.add("flip"); /*changed toggle to add so we can add a condition*/
    if (!hasCardFlipped) {
        /*first click*/
        hasCardFlipped = true;
        firstClick = this; /*this was checked using console.log(hasCardFlipped, firstClick)*/
    }
    else {
        hasCardFlipped = false;
        secondClick = this;

        //do cards match? - must check if the data-card from 1st&2nd card are same. If they are, we remove EventListener to prevent them being clicked again
        //if its not, then we un-flip the cards back to original state
        if (firstClick.dataset.card ===
            secondClick.dataset.card) {
            //it's a match!
            firstClick.removeEventListener("click", flipCard);
            secondClick.removeEventListener("click", flipCard);
        }
        else {
            //not a match
            setTimeout(() => {
                firstClick.classList.remove("flip");
                secondClick.classList.remove("flip");
            }, 1500);
        }
    }

}
/*"this" access the classlist of the "card", and then we toggle the flip class*/
allCards.forEach(card => card.addEventListener("click", flipCard));
/*loops through that list - into each one of the cards, we are going to attach an Eventlistener. When that event is fired, we are going to execute a functoin named flipCard*/
