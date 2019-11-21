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

function checkForMatch(){
     if (firstClick.dataset.card ===
        secondClick.dataset.card) { //it's a match!
        disableCards();
    }
    else { //not a match
        unflipCards();
    }
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

function countDown(secs, elem){
    var clock = document.getElementById(elem);
    clock.innerHTML = "TIME "+secs;
   
     if(secs < 1) {
		clearTimeout(timer);
        element.innerHTML = "GAME OVER";
        //LINK WITH MODALS??
		
	}
   
    secs--;
	var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);

}

countDown(10,"timer");

/*"this" access the classlist of the "card", and then we toggle the flip class*/
allCards.forEach(card => card.addEventListener("click", flipCard));
/*loops through that list - into each one of the cards, we are going to attach an Eventlistener. When that event is fired, we are going to execute a functoin named flipCard*/

const modalContent = `<div class="modal fade" id="superModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-body">
      ...
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>`

$( "#superModal" ).replaceWith(modalContent);

function winnerModal(winner) {
   
}

winnerModal();