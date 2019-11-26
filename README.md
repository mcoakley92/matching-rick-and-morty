# Matching Rick and Morty

Classic matching pairs game with Rick and Morty theme. Match all pairs and beat the timer to win!
Flip pairs of cards to see if they match. If not, they flip face down again. When all pairs have been matched, 
they player wins.

## UX 

The game starts off with 12 cards (6 pairs) facing down, in a randomised grid. The player then choses two cards
to flip over. If the cards are the same, they stay facing up. If they do not match, they are flipped back 
over for the player to try again. The player wins when all cards have been matched, in the time allowed. 

* The user wants to be able to click on a card in order to start the game. 
* Clicking on a card should allow the user to flip it over.
* When two cards have been flipped, the user wants to know if they are a match or not - if they are a match, they 
will stay facing up. If not, they will face back down. 
* If the user has selected two mismatching cards, they will not be able to click on another card until the two mismatching ones have faced back down again.
* If all cards have been matched within the time give, the user wants to know they have won. A pop up modal will let the user know they are the winner
* If the user runs out of time, the want to know they have lost. A "Game Over" modal will notify them of this. 
* Should the player want to play again, there is a restart button wich allows them to start again with a new timer. 

![wireframe](../1-cards-start-down.png)

## Features

### Existing Features
* The game currently features 12 clickable cards
* It uses Bootstrap modals which pop up when the game has ended. Bootstrap buttons are used to restart the game
* It has a timer which informs player how much time they have left to win the game

### Features left to implement
* More levels can be added in the future. This could be in the form of more cards and the same amount of time, or the 
same amount of cards with less time, or both. 
* The game could also have a counter to see how many clicks were used in the gamee


## Technologies Used

* [JQuery](LINK)

The project uses JQuery for DOM Manipulation

* [Bootstrap 4](LINK)

The project uses Bootstrap for simple design, and for modals and buttons

* HTML

* CSS

* Javascript



## Testing

I played the game several times winning and losing to make sure all features worked correctly.
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
