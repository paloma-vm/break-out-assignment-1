import Sprite from './Sprite.js';

class Background extends Sprite {
  constructor(x = 0, y = 0, width = 100, height = 100, color = '#d6d6d6') {
    super(x, y, width, height, color); // pass arguments to Sprite!
  }

  // render() comes from Sprite

}

export default Background;
