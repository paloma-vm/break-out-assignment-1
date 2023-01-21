import Brick from './Brick';

class Bricks {
  constructor(cols, rows) {
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
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        // bricks[c][r] = new Brick(brickX, brickY, this.width, this.height);
        // new way to make a new brick
        this.bricks[c][r] = new Brick(0, 0);
      }
    }
  }

  render(ctx) { // used old drawBricks
    for (let c = 0; c < this.cols; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          brick.render(ctx);
        }
      }
    }
  }
}

export default Bricks;
