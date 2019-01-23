'use strict';

function main() {
  var splachScreen;
  var gameScreen;
  var gameOverScreen;
  var winScreen;

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
    <div class="title-img">
      <img src="images/title.png" title="title"> 
    </div>
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
    if("ontouchstart" in document.documentElement){
      gameScreen = buildDom(`
      <div class="top" >
        <img src="images/title.png" alt="">
        <div class="score-box">
          <article>
            <h2>Score: <span class="score">0</span></h2>
          </article>
          <article>
            <h2>Level: <span class="level">1</span></h2>
          </article>
        </div>
        <div class="order-box">
          <article class="topping-order">
            <img src="images/egg.png" alt="egg" id="egg">
            <h2>: <span class="egg-count">0</span></h2>
          </article>
          <article class="topping-order">
            <img src="images/naruto.png" alt="naruto" id="naruto">
            <h2>: <span class="naruto-count">0</span></h2>
          </article>
          <article class="topping-order">
            <img src="images/chasyu.png" alt="chasyu" id="chasyu">
            <h2>: <span class="chasyu-count">0</span></h2>
          </article>
          <article class="topping-order">
            <img src="images/nori.png" alt="nori" id="nori">
            <h2>: <span class="nori-count">0</span></h2>
          </article>
          <article class="topping-order">
            <img src="images/negi.png" alt="negi" id="negi">
            <h2>: <span class="negi-count">0</span></h2>
          </article>
          <article class="topping-order">
            <img src="images/extra-noodle.png" alt="noodle" id="noodle">
            <h2>: <span class="noodle-count">3</span></h2>
          </article>
        </div>
      </div>
    <!-- <canvas id="canvas" width="375" height="435"></canvas> -->
      <canvas id="canvas" width="800" height="600"></canvas>
      `); 
    } else {
      gameScreen = buildDom(`
      <div class="top" >
        <img src="images/title.png" alt="">
        <div class="score-box">
          <article>
            <h2>Score: <span class="score">0</span></h2>
          </article>
          <article>
            <h2>Level: <span class="level">1</span></h2>
          </article>
        </div>
        <div class="order-box">
          <article class="topping-order">
            <img src="images/egg.png" alt="egg" id="egg">
            <h2>: <span class="egg-count">0</span></h2>
          </article>
          <article class="topping-order">
            <img src="images/naruto.png" alt="naruto" id="naruto">
            <h2>: <span class="naruto-count">0</span></h2>
          </article>
          <article class="topping-order">
            <img src="images/chasyu.png" alt="chasyu" id="chasyu">
            <h2>: <span class="chasyu-count">0</span></h2>
          </article>
          <article class="topping-order">
            <img src="images/nori.png" alt="nori" id="nori">
            <h2>: <span class="nori-count">0</span></h2>
          </article>
          <article class="topping-order">
            <img src="images/negi.png" alt="negi" id="negi">
            <h2>: <span class="negi-count">0</span></h2>
          </article>
          <article class="topping-order">
            <img src="images/extra-noodle.png" alt="noodle" id="noodle">
            <h2>: <span class="noodle-count">3</span></h2>
          </article>
        </div>
      </div>
      <canvas id="canvas" width="800" height="600"></canvas>
      `);
    }
    gameScreen.classList.add("game-screen");
  };
  
  function destroyGameScreen() {
    gameScreen.classList.remove("game-screen");
    destroyDom(gameScreen);
  };

  function buildGameOverScreen() {
    gameOverScreen = buildDom(`
    <img src="images/gameover.png" alt="">
    <h2>Score: <span class="score">X</span></h2>
    <h2>Level: <span class="level">X</span></h2>
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
      .addEventListener("click",clickHomeFromGameOver);
    
  };
  
  function destroyGameOverScreen() {
    gameOverScreen.classList.remove("game-over");
    destroyDom(gameOverScreen);
  };

  function buildWinScreen() {
    winScreen = buildDom(`
    <h1>WIN</h1>
    <h2>Score: <span class="score">X</span></h2>
    <div class="btn-container">
      <a id="home-btn" class="button">Home</a>
    </div>
    `);
    winScreen.classList.add("win-screen");
    winScreen
      .querySelector("#home-btn")
      .addEventListener("click",clickHomeFronWin);
    
  };
  
  function destroyWinScreen() {
    winScreen.classList.remove("win-screen");
    destroyDom(winScreen);
  };
  
  function clickStart() {
    destroySplashScreen();
    buildGameScreen();
    startGame();
  }
  
  function clickHomeFromGameOver() {
    destroyGameOverScreen();
    buildSplashScreen();
  };

  function clickHomeFronWin() {
    destroyWinScreen();
    buildSplashScreen();
  };

  function clickContinue() {
    destroyGameOverScreen();
    destroyWinScreen();
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
    var game = new Game(canvas, endGame, updateScore, setLevel);
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
      if(this.level > levelList.length) {
        buildWinScreen();
      } else {
        buildGameOverScreen();
      }
      var total = this.scores.reduce(function(accu, score) {
        return accu + score; 
      })
      changeDisplay(".score",total - this.scores[5]);
      changeDisplay(".level",this.level);
    };

    function updateScore() {
      var total = this.scores.reduce(function(accu, score) {
        return accu + score; 
      })
      changeDisplay(".score",total - this.scores[5] - this.scores[6]);
      changeDisplay(".level",this.level);
      for(var i = 0; i < 5; i++) { 
        changeDisplay(toppingList[i].class,this.orderList[i]);
      };
      changeDisplay(toppingList[5].class,this.scores[5] - this.scores[6] + 3)
    }

    function setLevel(level) {
      for(var i = 0; i < 5; i++) { 
          changeDisplay(toppingList[i].class,this.orderList[i])
      }
    }
  };

  buildSplashScreen();
};

window.addEventListener('load',main);