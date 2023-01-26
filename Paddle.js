import Sprite from './Sprite.js';

class Paddle extends Sprite {
  constructor(x, y, width = 75, height = 10, color = '#0095DD') {
    super(x, y, width, height, color); // pass arguments to Sprite
  }

  moveBy(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y; // be careful!! use = , not += !!!!!!!!!!
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    // console.log(this.x, this.y, this.width, this.height, this.color);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
