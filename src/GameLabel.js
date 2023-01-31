import Sprite from './Sprite';
// a class to display score and lives
class GameLabel extends Sprite {
  constructor(text, x, y, color, value = 3, font = '16px Helvetica', align = 'left') {
    // call super with properties as you would initialize sprite
    super(x, y, color);
    // define the new properties here on this: this.text and this.font
    this.text = text;
    this.value = value;
    this.font = font;
    this.align = align;
  }

  render(ctx) {
    // Add the code here to draw your text label
    // set the font: with ctx.font = this.font
    // Align the text with ctx.textAlign = this.align
    // ...
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    // ctx.fillText(`Score: ${this.text}`, this.x, this.y);
    ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);
    // ctx.fillText(`Score: ${this.score}`, 8, 20);
    ctx.textAlign = this.align;
  }
}

export default GameLabel;
