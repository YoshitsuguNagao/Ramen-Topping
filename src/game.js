'use strict';

function Game(canvas) {
  this.ctx = canvas.getContext('2d');
  
  
  
  
};


Game.prototype.start = function() {
  function loop() {

    // update variables
    // this._updateGame();
    // clear canvas
    // this._clearCanvas();
    // paint 
    // this._drawCanvas();






    this.animation = window.requestAnimationFrame(loop.bind(this));
  }
  this.animation = window.requestAnimationFrame(loop.bind(this));
};


Game.prototype.stop = function() {
  window.cancelAnimationFrame(this.animation); 
}
