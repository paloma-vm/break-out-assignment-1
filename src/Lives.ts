class Lives {
  constructor(x = 70, y = 20, lives = 3, color = 'green', font = '16px Arial') {
    this.x = x;
    this.y = y;
    this.lives = lives;
    this.color = color;
    this.font = font;
  }

  render(ctx, canvas) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, canvas.width - this.x, this.y);
  }

  loseLife() {
    this.lives -= 1;
  }

  reset() {
    this.lives = 0;
  }
}

export default Lives;
