const allCards = document.querySelectorAll(".card"); 
/*makes list of all card elemets, stores it in const allCards*/
function flipCard(){
    this.classList.toggle("flip");
}
/*"this" access the classlist of the "card", and then we toggle the flip class*/
allCards.forEach(card => card.addEventListener("click", flipCard));
/*loops through that list - into each one of the cards, we are going to attach an Eventlistener. When that event is fired, we are going to execute a functoin named flipCard*/
 