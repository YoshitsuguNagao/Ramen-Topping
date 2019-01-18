'use strict';

function main() {
  var splachScreen;
  var gameScreen;
  var gameOverScreen;

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
    <h1>Ramen Topping</h1>
    <div class="btn-container">
      <a class="button">Start</a>
      <a class="button">Rule</a>
    </div>
    `);
  }

  function destroySlpashScreen() {
    destroyDom(splachScreen);
  }

  buildSplashScreen();
  destroySlpashScreen();

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
  };

  function destroyGameScreen() {
    destroyDom(gameScreen);
  }
  buildGameScreen();
  destroyGameScreen();
  
  function buildGameOverScreen() {
    gameOverScreen = buildDom(`
    <h1>Game Over</h1>
    <h2>Level <span>X</span></h2>
    <h2>Score <span>X</span></h2>
    <div class="btn-container">
    <a class="button">Continue</a>
    <a class="button">Home</a>
    </div>
    `);
  }
  
  function destroyGameOverScreen() {
    destroyDom(gameOverScreen);
  }
  
  buildGameOverScreen();
  destroyGameOverScreen();















};


window.addEventListener('load',main);