const allCards = document.querySelectorAll(".card");
//makes list of all card elemets, stores it in const allCards

let hasCardFlipped = false;
let lockBoard = false; //locks board until mismatching cards have been flipped back
let firstClick, secondClick;
let matches = 0;

/**
 * This allows cards to be flipped over when they are clicked
 */
function flipCard() {
    if (lockBoard) return;
    if (this === firstClick) return;
    
    this.classList.add("flip"); 
    if (!hasCardFlipped) {
        //first click
        hasCardFlipped = true;
        firstClick = this; 
    }
    else {
        hasCardFlipped = false;
        secondClick = this;

        checkForMatch()
    }
}

/**
 * Checks if first clicked card matches the second clicked card,
 * and adds 1 to "matches" variable if it is
 */
function checkForMatch(){
     if (firstClick.dataset.card ===
        secondClick.dataset.card) { //it's a match!
        disableCards();
        matches += 1;
         
       
    }
    else { //not a match
        unflipCards();
    }
}

/**
 * Disables matched cards by removing "click" event listener
 * and flipCard function, so they can't be clicked again
 */
 function disableCards() {
    firstClick.removeEventListener("click", flipCard);
    secondClick.removeEventListener("click", flipCard);

resetBoard();
}

/**
 * Flips unmatched card back around
 */
function unflipCards() {
    lockBoard = true;
    
     setTimeout(() => {
            firstClick.classList.remove("flip");
            secondClick.classList.remove("flip");
            
            resetBoard();
        }, 1500);
}

/**
 * This will reset the board
 */
function resetBoard(){
    [hasCardFlipped, lockBoard] = [false, false]; //ES6 destructing assignment
    [firstClick, secondClick] = [null, null];
}
 
/**
 * This shuffles all cards on the board
 */
(function shuffle() {
    allCards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

/**
 * This will decrease the timer and count down.
 * If the number of matches equals 6 it will stop, or if it hits 0 seconds left.
 * The relevant modal will then pop up
 * @param {number} secs 
 * @param {string} elem 
 */
function countDown(secs, elem){
    let clock = document.getElementById(elem);
    clock.innerHTML = "TIME "+secs;
   
        if(secs == 0) {
        clearTimeout(countDown);
        winnerModal(false);
      	return clock.innerHTML = "TIME 0";	
    }   
      if (matches == 6){
            clearTimeout(countDown);
            winnerModal(true);
                    }
     
   else{
     secs--;
	setTimeout('countDown('+secs+',"'+elem+'")',1000);
   }
  
}

countDown(10,"timer");

/**
 * loops through that list - into each one of the cards,
 *  we are going to attach an Eventlistener. When that event is fired,
 *  we are going to execute a functoin named flipCard
 */
allCards.forEach(card => card.addEventListener("click", flipCard));

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
    const winnerText = "WINNER!";
    const gameOvertext = "GAME OVER!";
    let myText = winner ? winnerText : gameOvertext;
    const newModal = `
<div class="modal fade" id="superModal" tabindex="-1" role="dialog" aria-labelledby="superModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="superModalLabel">Matching Rick and Morty</h2>
            </div>
      <div class="modal-body">
      <div class="modal-text">${myText}</div>
      <button type="button submit" onClick="refreshPage()" class="btn btn-secondary">Click to Restart</button>
      </div>
      <div class="modal-footer">
        
      </div>
    </div>
  </div>
</div>`;
 $("#superModal").replaceWith(newModal);
 $("#superModal").modal({
	keyboard: false,
	backdrop: "static",
	show: true
  });
}

/**
 * This refreshes the game, to start from beginning again
 */
function refreshPage(){
    window.location.reload();
} 


