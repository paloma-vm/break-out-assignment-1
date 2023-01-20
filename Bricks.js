import Sprite from './Sprite';

class Bricks extends Sprite {
  constructor(x = 0, y = 0, width = 75, height = 20, color = '#0095DD') {
    super(x, y, width, height, color); // pass arguments to Sprite!
    this.status = true; // adds a new property
  }

  initializeBricks() {

  }

  render() {
    
  }

}

export default Bricks;