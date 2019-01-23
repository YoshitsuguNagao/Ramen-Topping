'use strict';

function Player(canvas, lives) {
  this.ctx = canvas.getContext('2d');
  this.canvas = canvas;
  this.width = 100;
  this.height = 80;
  this.x = (canvas.width - this.width) / 2;
  this.y = 520;
  this.lives = lives || 3;
  // this.score = 0;
  this.ingredients; 
  this.direction = 0;
  this.speed = 5;
  this.level = 1;
};

Player.prototype.setDirection = function(direction) {
  this.direction = direction;
};

Player.prototype.isCollided = function(topping) {
  // debugger
  var collidesRight = this.x + this.width > topping.x;
  var collidesLeft = this.x < topping.x + topping.size;
  var collidesTop = this.y  < topping.y + topping.size;
  var collideBottom = this.y + this.height > topping.y;

  return collidesRight && collidesLeft && collidesTop && collideBottom;
}

Player.prototype.draw = function() {
  // this.ctx.fillRect(this.x, this.y, this.width, this.height);
  var bowlImage = new Image();
  bowlImage.src = 'images/shoyu.png';
  this.ctx.drawImage(bowlImage, this.x, this.y, this.width, this.height);
};

Player.prototype.update = function() {
  this.x += this.direction * this.speed;
  if(this.x <= 0) {
    this.direction = 1;
  } else if(this.x >= this.canvas.width - this.width) {
    this.direction = -1;
  };
};

Player.prototype.loseLife = function() {
  this.lives--;
  console.log(`Player lives: ${this.lives}`);
};

Player.prototype.gainLife = function() {
  this.lives++;
  console.log(`Player lives: ${this.lives}`);
};

Player.prototype.isDead = function() {
  return this.lives <= 0;
};

Player.prototype.levelUp = function() {
  this.level++;
  console.log(`Level up: ${this.level}`);
};

Player.prototype.hasCollidedWithTrueTopping = function() {

};
