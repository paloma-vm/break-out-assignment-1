class Score {
  constructor(score = 0, font = '16px Arial', x = 8, y = 20, color = 'blue') {
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
    this.font = font;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
    // ctx.fillText(`Score: ${this.score}`, 8, 20);
  }

  updatePoints() {
    this.score += 1;
  }

  reset() {
    this.score = 0;
  }
}

export default Score;
