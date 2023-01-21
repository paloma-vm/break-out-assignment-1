import Sprite from './Sprite';

class Paddle extends Sprite {
  constructor(x = 0, y = 0, width = 75, height = 10, color = '#0095DD') {
    super(x, y, width, height, color); // pass arguments to Sprite
  }

  // move() has global variables, will not include here for now

  render(ctx, canvas) {
    ctx.beginPath();
    ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
