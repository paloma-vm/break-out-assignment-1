class Score {
  constructor(score, color = 'blue') {
    this.color = color;
    this.score = score;
  }

  render(ctx) {
    ctx.font = '16px Arial';
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, 8, 20);
  }
}

export default Score;
