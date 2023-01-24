import Sprite from './Sprite.js';

class Background extends Sprite {
  constructor(x = 0, y = 0, width = 100, height = 100, color = '#d6d6d6') {
    super(x, y, width, height, color); // pass arguments to Sprite!
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Background;
