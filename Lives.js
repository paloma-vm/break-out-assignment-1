class Lives {
  constructor(lives, color = 'green') {
    this.color = color;
    this.lives = lives;
  }

  render(ctx, canvas) {
    ctx.font = '16px Arial';
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, canvas.width - 65, 20);
  }
}

export default Lives;
