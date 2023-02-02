import Sprite from './Sprite';
// a class to display score and lives
class GameLabel extends Sprite {
  text: string
  x: number
  y: number
  color: string
  value: number
  align: string
  font: string
  constructor(text: string, x = 0, y = 0, color: string, value: number, align: string, font = '16px Helvetica') {
    // call super with properties as you would initialize sprite
    super(x, y, 0, 0, color);
    this.text = text;
    this.value = value;
    this.font = font;
    this.align = align;
  }

  render(ctx: any) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);
    ctx.textAlign = this.align;
  }
}

export default GameLabel;
