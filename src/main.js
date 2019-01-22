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
    <!-- <div class="title-img"> -->
      <img src="images/title.png" title="title"> 
    <!-- </div> -->
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
        <h2>: <span class="egg-count">X</span></h2>
      </article>
      <article class="topping-order">
        <div class="topping-img"></div>
        <h2>: <span class="chasyu-count">X</span></h2>
      </article>
      <article class="topping-order">
        <div class="topping-img"></div>
        <h2>: <span class="leek-count">X</span></h2>
      </article>
      <article class="topping-order">
        <div class="topping-img"></div>
        <h2>: <span class="nori-count">X</span></h2>
      </article>
      <article class="topping-order">
        <div class="topping-img"></div>
        <h2>: <span class="naruto-count">X</span></h2>
      </article>
      </div>
      <img src="images/title.png" alt="">
      <div class="score-box">
        <h2>Score: <span class="score">0</span></h2>
        <h2>Life :<span class="life">3</span></h2>
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
    <img src="images/gameover.png" alt="">
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
  
  function changeDisplay(id, value) {
    var target = document.querySelector(id);
    target.innerText = value;
    return target;
  };



  function startGame() {
    var canvas = document.getElementById('canvas');
    var game = new Game(canvas, endGame, updateScore);
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

    function updateScore() {

      changeDisplay(".score",this.scores[0]+this.scores[1])
    }
  };

  // buildSplashScreen();
};

window.addEventListener('load',main);