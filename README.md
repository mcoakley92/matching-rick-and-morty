# Matching Rick and Morty

[Matching Rick and Morty](https://mcoakley92.github.io/matching-rick-and-morty/) is a classic matching pairs game with a Rick and Morty theme. 

The game starts off with 12 cards (6 pairs) facing down, in a randomised grid. The player then choses two cards
to flip over. If the cards are the same, they stay facing up. If they do not match, they are flipped back 
over for the player to try again. The player wins when each pair has been found, in the time allowed. 

## UX 

This game is for Rick and Morty, and classic card game fans. The game aims to be both mentally stimulating, and entertaining to play.

1. As a player, I want to be able to click on a card in order to flip it over 
2. As a player, I want a timer so I know how much time I have left to complete the game
3. As a player, I want matched cards to stay facing up and unmatched cards to flip back again, so I know which cards I have left to match
4. As a player, I want a pop up notification to inform me when I have won or lost the game
5. As a player, I want to have a replay button, so I can try again each time I win or lose


### Wireframes

All wireframes can be found in the [wireframes folder](https://github.com/mcoakley92/matching-rick-and-morty/tree/master/wireframes) of the repository 

## Features

### Existing Features
* The game currently features 12 clickable cards. (Noted the original wireframe has 10 cards)

![wireframe](https://raw.githubusercontent.com/mcoakley92/matching-rick-and-morty/master/wireframes/2-unmatched-pair.png)

* It uses Bootstrap modals which pop up when the game has ended. Bootstrap buttons are used to restart the game

![winner wireframe](https://raw.githubusercontent.com/mcoakley92/matching-rick-and-morty/master/wireframes/5-winner.png)

* It has a timer which informs player how much time they have left to win the game

### Features left to implement
* More levels can be added in the future. This could be in the form of more cards and the same amount of time, or the 
same amount of cards with less time, or both. 
* The game could also have a counter to see how many clicks were used to complete the game 


## Technologies Used

* HTML

* CSS

* Javascript

* [JQuery](LINK)

    * The project uses JQuery for DOM Manipulation

* [Bootstrap 4](LINK)

    * The project uses Bootstrap for simple design, and for modals and buttons





## Testing

I played the game several times, winning and losing to see if all features worked correctly. 


* I noticed that when the player either won or lost the game, the timer stayed going into the negative in the background.
    - I managed to fix this for the when the game is won by creating the "matches" variable.

```
if (matches == 6){
            clearTimeout(countDown);
            winnerModal(true);
                    }
  ```                  
                                       
   * However, despite also calling `clearTimeout(countDown)` when the timer got to 0, its still went into negative 
    figures in the background. To overcome this, the code now returns a string of "TIME 0" in place of "TIME "+secs.

 ```   
    function countDown(secs, elem){
    let clock = document.getElementById(elem);
    clock.innerHTML = "TIME "+secs;
   
        if(secs == 0) {
        clearTimeout(countDown);
        winnerModal(false);
      	return clock.innerHTML = "TIME 0";
  ```      

I also had friends and family play the game and got their feedback.
I wanted to make sure that the cards flipped and matching cards stayed facing up. Modals should pop up at the 
correct times - when all cards are matched or the timer run out. Restart buttons should refresh the page and the timer 
should start from 45 seconds again. 
All of these features worked while testing the game.

I tested the game on laptop, iPad and mobile. 

## Deployment

The website is deployed through [github](https://github.com/)
## Credits

### Media

Images for the cards and background were taken from the following sources:

[Rick](https://i.pinimg.com/originals/7b/aa/25/7baa252dbdfeed669c152bedd2fa5feb.jpg)

[Morty](https://store.playstation.com/en-us/product/UP0151-CUSA09971_00-AV00000000000002)

[Meeseek](https://steemitimages.com/DQmfHedFJStzXRDC2R5fnWrAiYJqWaknPaYTfeQWQe8Boxh/flat%2C800x800%2C075%2Cf.u1.jpg)

[Jerry](https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjBhOOHx4PmAhU0oXEKHWeED9EQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.teepublic.com%2Ft-shirt%2F299958-rick-and-morty-jerry&psig=AOvVaw0Ha_iFQax3JMcDDtsVGpBy&ust=1574709200132690)

[Rick and Morty](https://ya-webdesign.com/download.html)

[Snuffles](https://lh3.googleusercontent.com/XM8nvs1UZSOFf4ICTRDN7zmw9RtfN2gT8JoxSbKzrxoOutDd2R1kQX9CVy6qsfHNyDyM=s85)

[Card back](https://www.trendsinternational.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/5/15460_rick-and-morty_portal_4x6.jpg)


[Background](https://nebula.wsimg.com/a1cc1c259eeae5a37cb70f0ab3b46217?AccessKeyId=0FDC079973B83A5D980E&disposition=0&alloworigin=1)

## Acknowlegements
