import Brick from './Brick.js';

class Bricks {
  constructor(cols, rows) {
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.cols = cols;
    this.rows = rows;
    this.bricks = [];
    // this.bricks = bricks; //bricks.bricks
    this.initialize();
  }

  initialize() { // used old initializeBricks
    for (let c = 0; c < this.cols; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        // const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        // const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        const brickX = c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;
        const brickY = r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;
        // bricks[c][r] = new Brick(brickX, brickY, this.width, this.height);
        // new way to make a new brick
        this.bricks[c][r] = new Brick(brickX, brickY);
      }
    }
  }

  render(ctx) { // used old drawBricks
    console.log('drawing bricks');
    for (let c = 0; c < this.cols; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        const brick = this.bricks[c][r];
        if (brick.status === true) {
          brick.render(ctx);
        }
      }
    }
  }
}

export default Bricks;
