import Sprite from './Sprite.js';
// a class to display score and lives
class GameLabel extends Sprite {
  constructor(x, y, text, font = '16px Helvetica', color = 'red', align = 'left') {
    // call super with properties as you would initialize sprite
    super(x, y, color);
    // define the new properties here on this: this.text and this.font
    this.text = text;
    this.font = font;
  }

  render(ctx) {
    // Add the code here to draw your text label
    // set the font: with ctx.font = this.font
    // Align the text with ctx.textAlign = this.align
    // ...
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    // ctx.fillText(`Score: ${this.text}`, this.x, this.y);
    ctx.fillText(`${this.text}`, this.x, this.y);
    // ctx.fillText(`Score: ${this.score}`, 8, 20);
    ctx.textAlign = this.align;
  }
}

export default GameLabel;
