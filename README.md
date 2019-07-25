# Ramen-Topping


## Description
This is a game that you have to put the topping on the ramen bowl. You will be given on the topping list. When you get a highter level you will have to get more toppings and the speed of falling will incleace.


## MVP (DOM - CANVAS)
CANVAS You have a ramen bowl to catch the toppings. You lose when you catch the wrong topping.


## Backlog
### Levels
- Once the player get all the topping gose to the next level.

### Check the topping
- check the topping, if it's correct topping or not.

### Extra Noodle
- add extra noodle for topping.

### Image
- add images for background and gameover screen.

### Sounds
- add sounds(if it's possible)

### Order topping
- show the list of topping you have to put.

### Score
- show the current score.

### Pause
- pause and show pause screen.

### Lives
- Get one more live when you get extra noodle.

### Input
- Input username.

### Hight Score
- Show the score and final level that the player reached.


## Data structure
### main


### Game
```javascript
function Game()
  this.ctx;
  this.ramen = {
    type:"yyy",
    ingredient:["xxx","xxx"]
   };
  this.toppings;
  this.score;
  this.orderList;
  this.gameEndedHandler;
  this._clearCanvas();
  this._drawCanvas();
  this._createTopping();
  this._updateGame();
Game.start(){
  function loop();
}
Game.end()
Game.keyLeft()
Game.keyRight()
```

### Player
```javascript
function Player()
  this.size;
  this.x;
  this.y;
  this.lives;
  this.ctx;
  this.ingredients; 
Player.isCollided()
Player.draw()
Player.update()
Player.hasCollidedWithTrueTopping()
```

### Topping
```javascript
function Topping(type, isTopping)
  this.size;
  this.x;
  this.y;
  this.speed;
  this.type;
  this.isTopping;
  this.ctx;
Topping.draw()
Topping.update()
Topping.isInScreen()
```

## States and Transitions
Definition of the different states and their transition (transition functions)

### Splash Screen
- buildSplashScreen()
- destroySplashScreen()
- add Event Listener
  - ruleClick()
  - startGameClick()

### Game Screen
- buildGameScreen()
- destroyGameScreen()

### Gameover Screen
- buildGameOverScreen()
- destroyGameOverScreen()

## Task
Task definition in order of priority

### 1.States and transitions
- Create main.js
- Create index.html
- Call main function when load page
- Create canvas with width and height
- Build Splash DOM
- Build Game DOM
- Build Game Over DOM
- Write destroy Splash
- Write destroy Game
- Write destroy Game Over
- Call startGame

### Game
- Creat game.js 
- Write the loop in Start
- Add event listeners
- Create new Player
- Create new Toppings
- Wtite update clear and draw inside of the loop 

### Player
- Create player.js
- Write Player constructor
- Write methods for update and draw
- Write a method for a direction
- Write a method for a collision with Topping
- Write a method for losing Life(check if it is correct topping)

### Topping
- Create topping.js 
- Write Topping constructor
- Write methods for update and draw
- Write a method for check if it is in screen
- Create topping-list.js
- Write a list of toppings(Array of Object)


## Links

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/YoshitsuguNagao/Ramen-Topping)
[Link Deploy](https://yoshitsugunagao.github.io/Ramen-Topping/)


### Slides
URls for the project presentation 
[Link Slides.com](https://slides.com/yoshitsugunagao/ramen-topping/)
