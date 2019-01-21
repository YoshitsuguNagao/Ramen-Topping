'use strict';

function main() {
  var splachScreen;
  var gameScreen;
  var gameOverScreen;

// --- States and Transitions --- //

  function buildDom(html) {
    var target = document.querySelector(".container");
    target.innerHTML = html;
    return target;
  };

  function destroyDom(target) {
    target.innerHTML = "";
  };

  function buildSplashScreen() {
    splachScreen = buildDom(`
    <img src="images/title.png" title="title"> 
    <div class="btn-container">
      <a id="start-btn" class="button">Start</a>
      <a id="rule-btn" class="button">Rule</a>
    </div>
    `);
    splachScreen.classList.add("splash");
    splachScreen
      .querySelector("#start-btn")
      .addEventListener("click",clickStart);
  };

  function destroySplashScreen() {
    splachScreen.classList.remove("splash");
    destroyDom(splachScreen);
  };
  
  function buildGameScreen() {
    gameScreen = buildDom(`
    <div class="top" >
    <div class="order-box">
    <article class="topping-order">
    <div class="topping-img"></div>
    <h2>: <span class="topping-count">X</span></h2>
    </article>
    <article class="topping-order">
    <div class="topping-img"></div>
    <h2>: <span class="topping-count">X</span></h2>
    </article>
    </div>
    <div class="score-box">
    <h2>Score: <span class="score">XXX</span></h2>
    <h2>Time :<span class="time">XXX</span></h2>
    </div>
    </div>
    <canvas id="canvas" width="800" height="600"></canvas>
    `);
    gameScreen.classList.add("game-screen");
  };
  
  function destroyGameScreen() {
    gameScreen.classList.remove("game-screen");
    destroyDom(gameScreen);
  };

  function buildGameOverScreen() {
    gameOverScreen = buildDom(`
    <h1>Game Over</h1>
    <h2>Level <span>X</span></h2>
    <h2>Score <span>X</span></h2>
    <div class="btn-container">
    <a id="continue-btn" class="button">Continue</a>
    <a id="home-btn" class="button">Home</a>
    </div>
    `);
    gameOverScreen.classList.add("game-over");
    gameOverScreen
      .querySelector("#continue-btn")
      .addEventListener("click",clickContinue);
    
    gameOverScreen
      .querySelector("#home-btn")
      .addEventListener("click",clickHome);
    
  };
  
  function destroyGameOverScreen() {
    gameOverScreen.classList.remove("game-over");
    destroyDom(gameOverScreen);
  };
  
  function clickStart() {
    destroySplashScreen();
    buildGameScreen();
    startGame();
  }
  
  function clickHome() {
    destroyGameOverScreen();
    buildSplashScreen();
  };

  function clickContinue() {
    destroyGameOverScreen();
    buildGameScreen();  
    startGame();
  };
  
  function startGame() {
    var canvas = document.getElementById('canvas');
    var game = new Game(canvas,endGame);
    var onKeyDown = function (event) {
      switch(event.keyCode) {
        case 37: game.keyLeft(); break;
        case 39: game.keyRight(); break;
        case 83: game.keyS(); break;
        case 80: game.keyP(); break;
      };
    };
    //Add event lisner
    document.addEventListener('keydown', onKeyDown);
    
    //Start the game
    game.start();
    
    function endGame() {
      game.stop();
      destroyGameScreen();
      buildGameOverScreen();
    };
  };

  buildSplashScreen();
};

window.addEventListener('load',main);