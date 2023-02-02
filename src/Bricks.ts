import Brick from './Brick';

class Bricks {
  brickPadding: number
  brickOffsetTop: number
  brickOffsetLeft: number
  brickWidth: number
  brickHeight: number
  cols: number
  rows: number
  bricks: Brick[][]
 

  constructor(cols: number, rows: number) {
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.cols = cols;
    this.rows = rows;
    this.bricks = [];
    this.initialize();
  }

  initialize() { // used old initializeBricks
    for (let c = 0; c < this.cols; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brickX = c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;
        const brickY = r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;
        // new way to make a new brick
        this.bricks[c][r] = new Brick(brickX, brickY);
      }
    }
  }

  render(ctx: any) { // used old drawBricks
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
