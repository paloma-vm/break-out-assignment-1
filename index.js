import Ball from './Ball';
import Brick from './Brick';
import Paddle from './Paddle';
import Bricks from './Bricks';

// JavaScript code goes here
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getConle.xt('2d');

// const ball = new Ball(200, 200, 10)
// const ball = new Ball(ball.x, ball.y, ball.radius)
// b.render(ctx)
// define x and y

// ----------------------------------------------
// Variables
// ----------------------------------------------

const ball = new Ball();
const paddle = new Paddle();

// let paddle.x;

// const ballRadius = 10;
// const paddleHeight = 10;
// const paddleWidth = 75;
// const objectColor = '#0095DD';

let rightPressed = false;
let leftPressed = false;
// false because at the beginning the control buttons are not pressed
// const brickRowCount = 3;
// const brickColumnCount = 5;
const rows = 3;
const cols = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;



const brickOffsetLeft = 30;
const bricks = new Bricks(cols, rows);


let score = 0;
let lives = 3;

// ----------------------------------------------
// Functions
// ----------------------------------------------

// function initializeBricks() {
//   for (let c = 0; c < brickColumnCount; c += 1) {
//     bricks[c] = [];
//     for (let r = 0; r < brickRowCount; r += 1) {
//       const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
//       const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
//       // bricks[c][r] = new Brick(brickX, brickY, this.width, this.height);
//       // new way to make a new brick
//       bricks[c][r] = new Brick(brickX, brickY);
//     }
//   }
// }
/** draws the bricks for each screen refresh */
// function drawBricks() {
//   for (let c = 0; c < brickColumnCount; c += 1) {
//     for (let r = 0; r < brickRowCount; r += 1) {
//       const brick = bricks[c][r];
//       if (brick.status === 1) {
//         brick.render(ctx);
//       }
//     }
//   }
// }

// function drawBall() {
//   // ball.move();
//   // ball.render();
//   ctx.beginPath();
//   ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
//   ctx.fillStyle = objectColor;
//   ctx.fill();
//   ctx.closePath();
// }

// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(paddle.x, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//   ctx.fillStyle = objectColor;
//   ctx.fill();
//   ctx.closePath();
// }

function resetBallAndPaddle() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height - 30;
  ball.dx = 2;
  ball.dy = -2;
  paddle.x = (canvas.width - paddle.width) / 2;
}

// function moveBall() {
//   ball.x += ball.dx;
//   ball.y += ball.dy;
// }

function movePaddle() {
  // checking to see if the RT or LT keys are pressed
  if (rightPressed) {
    paddle.x = Math.min(paddle.x + 7, canvas.width - paddle.width);
  } else if (leftPressed) {
    paddle.x = Math.max(paddle.x - 7, 0);
  }
}

function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddle.width / 2;
  }
}

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}
function collisionDetection() {
  for (let c = 0; c < bricks.cols; c += 1) {
    for (let r = 0; r < bricks.rows; r += 1) {
      const brick = bricks.bricks[c][r];
      if (brick.status === 1) {
        if (
          ball.x > brick.x
                && ball.x < brick.x + brick.width
                && ball.y > brick.y
                && ball.y < brick.y + brick.height
        ) {
          ball.dy = -ball.dy;
          brick.status = 0;
          score += 1;
          if (score === bricks.rows * bricks.cols) {
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function collisionsWithCanvasAndPaddle() {
  // bounce off top wall by reversing y-axis movement
  if (ball.y + ball.dy < 0) {
    ball.dy = -ball.dy;
  }

  // bounce off bottom wall
  if (ball.y + ball.dy > canvas.height) {
    ball.dy = -ball.dy;
  }
  // bounce off left and right
  if (ball.x + ball.dx > canvas.width || ball.x + ball.dx < 0) {
    ball.dx = -ball.dx;
  }

  if (ball.y + ball.dy > canvas.height || ball.y + ball.dy < 0) {
    ball.dy = -ball.dy;
  }

  // adjusting for radius of ball so it doesn't 'sink' into the wall
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }
  // if ball hits bottom wall
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      // lose a life
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        resetBallAndPaddle();
      }
    }
  }
}

// function drawScore() {
//   ctx.font = '16px Arial';
//   ctx.fillStyle = objectColor;
//   ctx.fillText(`Score: ${score}`, 8, 20);
// }

// function drawLives() {
//   ctx.font = '16px Arial';
//   ctx.fillStyle = objectColor;
//   ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
// }

//  GAME LOOP ------------------------------------------------

function draw() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawBricks();
  // drawBall();
  // drawPaddle();
  // drawScore();
  // drawLives();
  // collisionDetection();
  // moveBall();
  // movePaddle();
  // collisionsWithCanvasAndPaddle();

  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // call helper functions
  bricks.render(ctx);
  paddle.render(ctx);
  score.render(ctx);
  lives.render(ctx);
  collisionDetection();
  ball.move(ctx);
  movePaddle();
  collisionsWithCanvasAndPaddle();

  // draw the screen again
  requestAnimationFrame(draw);
}

// event listeners for control buttons
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

resetBallAndPaddle();
draw();

// *********************************************************
// Variables
// *********************************************************