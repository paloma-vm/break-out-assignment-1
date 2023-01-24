import Sprite from './Sprite.js';

class Brick extends Sprite {
  constructor(x = 0, y = 0, width = 75, height = 20, color = '#b6d7a8', status = true) {
    super(x, y, width, height, color); // pass arguments to Sprite!
    this.status = status; // adds a new property
  }

  // render() is same as sprite, so don't have to show (I think)
}

export default Brick;
