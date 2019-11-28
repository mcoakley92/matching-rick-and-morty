const allCards = document.querySelectorAll(".card");
//makes list of all card elemets, stores it in const allCards

let hasCardFlipped = false;
let lockBoard = false; //locks board until mismatching cards have been flipped back
let firstClick, secondClick;
let matches = 0;


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

function refreshPage(){
    window.location.reload();
} 


