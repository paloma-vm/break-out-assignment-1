import Sprite from './Sprite';

class Paddle extends Sprite {
  constructor(x = 0, y = 0, width = 75, height = 10, color = '#0095DD') {
    super(x, y, width, height, color); // pass arguments to Sprite
  }

  move() {
    // checking to see if the RT or LT keys are pressed
  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }
  }
}

export default Paddle;
