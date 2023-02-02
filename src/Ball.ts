import Sprite from './Sprite';

class Ball extends Sprite {
  radius: number
  dx: number
  dy: number
  constructor(x = 0, y = 0, radius = 10, color = '#0095DD') {
    super(x, y, 0, 0, color); // pass parameters to super (which is Sprite)
    this.radius = radius;
    this.dx = 2;
    this.dy = -2;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx: any) { // Overrides the existing render method!
    // console.log('drawing ball');
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
