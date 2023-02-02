import Sprite from './Sprite';

class Paddle extends Sprite {
  constructor(x: number, y: number, width = 75, height = 10, color = '#0095DD') {
    super(x, y, width, height, color); // pass arguments to Sprite
  }

// moveTo, moveBy, render all inherited from Sprite
}

export default Paddle;
