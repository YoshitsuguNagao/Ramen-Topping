'use strict';

function Game(canvas, endGame, updateScore, setLevel, score) {
  this.ctx = canvas.getContext('2d');
  this.player = new Player(canvas);
  this.toppings = [];
  this.scores = new Array(toppingList.length).fill(0);
  this.orderList;
  this.type;
  this.isTopping;
  this.animation;
  this.isGameOver = false;
  this.endGame = endGame;
  this.updateScore = updateScore;
  this.setLevel = setLevel;
  this.level = 1;
  this.delisious = new Audio('audios/DELICIOUS.mp3');
  this.tasty = new Audio('audios/TASTY.mp3');
  
  this._clearCanvas = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  this._drawCanvas = function() {
    this.player.draw();
    this.toppings.forEach(function(topping) {
      topping.draw();
    });
    var norenImage = new Image();
    norenImage.src = 'images/noren.png';
    this.ctx.drawImage(norenImage, 50, -10, 700, 130);
  };

  this._createTopping = function() {
    var x = Math.random() * (canvas.width - 50);
    this.type = Math.floor(Math.random() * (toppingList.length + 1));
    if(this.type >= (toppingList.length - 1)) {this.type = toppingList.length - 1};
    this.toppings.push(new Topping(canvas, x, this.type, this.isTopping));
  }.bind(this);

  this._updateGame = function() {
    this.player.update();
    this.setLevel();
    if (Math.random() > 0.95) {
      this._createTopping();    
    };
    this.toppings = this.toppings.filter(function(topping) {
      return topping.isInScreen();
    });
    this.toppings.forEach(function(topping) {
      topping.update();
      
      if(this.player.isCollided(topping)) {
        this.scores[topping.type] += 1;
        if(this.player.orderList[topping.type] > 0) {
          this.player.orderList[topping.type] -= 1;
        }
        this.updateScore();
        if(topping.type === toppingList.length - 1){
          this.player.loseLife();
        }
        if(topping.type === toppingList.length - 2){
          this.player.gainLife();
          this.tasty.play();
        }
        topping.delete();
        if(topping.type < toppingList.length - 2) {
          this.delisious.play();
        }
      };
    }.bind(this));
  };
};

Game.prototype.start = function() {
  function loop() {    
    this.orderList = this.player.orderList;
    // update variables
    this._updateGame();
    // clear canvas
    this._clearCanvas();
    // paint 
    this._drawCanvas();
    
    this.animation = window.requestAnimationFrame(loop.bind(this));
    
    if(this.player.isDead()){
      this.endGame();
    };
    
    if(this.player.hasAll()) {
      this.level++;
      if(this.level > levelList.length) {
    　   this.endGame();
      }
      if(this.level <= levelList.length) {
        this.player.orderList = levelList[this.level - 1].orderList.concat();
        this.updateScore();
        var levelUpImage = new Image();
        levelUpImage.src = 'images/levelup.png';
        this.ctx.drawImage(levelUpImage, 50, 200, 700, 130);

        setTimeout(function() {
          this._clearCanvas();
          this.animation = window.requestAnimationFrame(loop.bind(this));

        }.bind(this), 1000);
        window.cancelAnimationFrame(this.animation); 
      }
    }
  };
  this.animation = window.requestAnimationFrame(loop.bind(this));
};


Game.prototype.stop = function() {
  window.cancelAnimationFrame(this.animation); 
};

Game.prototype.keyLeft = function() {
  this.player.setDirection(-1);  
};

Game.prototype.keyRight = function() {
  this.player.setDirection(1);
};

Game.prototype.keyP = function() {
  this.stop();
};

Game.prototype.keyS = function() {
  this.start();
};
