'use strict';

function Player(canvas) {
  this.ctx = canvas.getContext('2d');
  this.canvas = canvas;
  this.size = 50;
  this.x = (canvas.width - this.size) / 2;
  this.y = 550;
  this.lives;
  this.score = 0;
  this.ingredients; 
  this.direction = 0;
  this.speed = 5;
};

Player.prototype.setDirection = function(direction) {
  this.direction = direction;
};

Player.prototype.isCollided = function() {
  
};

Player.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Player.prototype.update = function() {
  this.x += this.direction * this.speed;
  if(this.x <= 0) {
    this.direction = 1;
  } else if(this.x >= this.canvas.width - this.size) {
    this.direction = -1;
  };
};

Player.prototype.hasCollidedWithTrueTopping = function() {

};
