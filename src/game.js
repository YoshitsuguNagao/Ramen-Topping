'use strict';

function Game(canvas, score) {
  this.ctx = canvas.getContext('2d');
  this.player = new Player(canvas);
  // this.ramen = {
  //   type:"yyy",
  //   ingredient:["xxx","xxx"]
  //  };
  this.toppings = [];
  this.score = 0;
  // this.orderList;
  // this.gameEndedHandler;
  this.type;
  this.isTopping;
  this.animation;

  this._clearCanvas = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  this._drawCanvas = function() {
    this.player.draw();
    this.toppings.forEach(function(topping) {
      topping.draw();
    });
  };

  this._createTopping = function() {
    var x = Math.random() * canvas.width;
    this.toppings.push(new Topping(canvas, x, this.type, this.isTopping));
  }.bind(this);

  this._updateGame = function() {
    this.player.update();
    if (Math.random() > 0.98) {
      this._createTopping();
    };
    this.toppings = this.toppings.filter(function(topping) {
      return topping.isInScreen();
    });
    console.log(this.toppings.length)
    this.toppings.forEach(function(topping) {
      topping.update();
    });
  };
};

Game.prototype.start = function() {
  function loop() {

    // update variables
    this._updateGame();
    // clear canvas
    this._clearCanvas();
    // paint 
    this._drawCanvas();
    
    this.animation = window.requestAnimationFrame(loop.bind(this));
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
