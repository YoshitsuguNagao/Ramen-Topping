'use strict';

function Player(canvas, lives, orderList) {
  this.ctx = canvas.getContext('2d');
  this.canvas = canvas;
  this.width = 100;
  this.height = 80;
  this.x = (canvas.width - this.width) / 2;
  this.y = 520;
  this.lives = lives || 3;
  this.orderList = levelList[0].orderList.concat();
  this.direction = 0;
  this.speed = 5;
  this.level = 1;
};

Player.prototype.setDirection = function(direction) {
  this.direction = direction;
};

Player.prototype.isCollided = function(topping) {
  var collidesRight = this.x + this.width > topping.x;
  var collidesLeft = this.x < topping.x + topping.size;
  var collidesTop = this.y  < topping.y + topping.size;
  var collideBottom = this.y + this.height > topping.y;
  return collidesRight && collidesLeft && collidesTop && collideBottom;
};

Player.prototype.draw = function() {
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
};

Player.prototype.gainLife = function() {
  this.lives++;
};

Player.prototype.isDead = function() {
  return this.lives <= 0;
};

Player.prototype.levelUp = function() {
  this.level++;
};

Player.prototype.getTopping = function(type) {
  if(this.orderList[type] > 0) {
    this.orderList[type]--;
  }
};

Player.prototype.hasAll = function() {
  var total = 0;
  for(var i = 0; i < 5; i++) {
    total += this.orderList[i];
  }
  return total === 0;
};
