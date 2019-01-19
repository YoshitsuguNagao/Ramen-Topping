'use strict';

function Topping(canvas, x, type, isTopping) {
  this.size = 30;
  this.x = x;
  this.y = 0;
  this.speed = 5;
  this.type;
  this.isTopping;
  this.ctx = canvas.getContext('2d');
  this.canvas = canvas;
}


Topping.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
};

Topping.prototype.update = function() {
  this.y += this.speed;
};

Topping.prototype.isInScreen = function() {
  return this.y - this.canvas.height < 0;
};

Topping.prototype.delete = function() {
  this.y = 999;
}