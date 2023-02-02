import Ball from './Ball';
import Paddle from './Paddle';
import Bricks from './Bricks';
import Background from './Background';
import GameLabel from './GameLabel';

// JavaScript code goes here
const canvas: HTMLCanvasElement = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// ----------------------------------------------
// Variables
// ----------------------------------------------
const paddleHeight: number = 10;
const paddleWidth: number = 75;
const paddleXStart = (canvas.width - paddleWidth) / 2;
const paddleYStart = canvas.height - paddleHeight;
const background: Background = new Background(0, 0, canvas.width, canvas.height);
const ball: Ball = new Ball();
const paddle: Paddle = new Paddle(paddleXStart, paddleYStart, paddleWidth, paddleHeight);

let rightPressed = false;
let leftPressed = false;
// false because at the beginning the control buttons are not pressed

const rows = 3;
const cols = 5;

const bricks: Bricks = new Bricks(cols, rows);

const scoreLabel: GameLabel = new GameLabel('Score: ', 100, 20, 'blue', 0, 'left');
const livesLabel: GameLabel = new GameLabel('Lives: ', canvas.width - 70, 20, 'green', 3, 'right');
scoreLabel.align = 'left';
livesLabel.align = 'right';
scoreLabel.value = 0;
livesLabel.value = 3;

// ----------------------------------------------
// Functions
// ----------------------------------------------

function resetBallAndPaddle(): void {
  ball.x = canvas.width / 2;
  ball.y = canvas.height - 30;
  ball.dx = 2;
  ball.dy = -2;
  paddle.x = (canvas.width - paddle.width) / 2;
}

function movePaddle() {
  // checking to see if the RT or LT keys are pressed
  if (rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.moveBy(7, 0);
  } else if (leftPressed && paddle.x > 0) {
    paddle.moveBy(-7, 0);
  }
}

function mouseMoveHandler(e: any): void {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.moveTo(relativeX - paddle.width / 2, paddleYStart);
  }
}

function keyDownHandler(e: any) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e: any) {
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
      if (brick.status === true) {
        if (
          ball.x > brick.x
                && ball.x < brick.x + brick.width
                && ball.y > brick.y
                && ball.y < brick.y + brick.height
        ) {
          ball.dy = -ball.dy;
          brick.status = false;
          scoreLabel.value += 1;

          if (scoreLabel.value === bricks.rows * bricks.cols) {
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
      livesLabel.value -= 1;
      if (livesLabel.value < 1) {
        alert('GAME OVER');
        livesLabel.value = 3;
        scoreLabel.value = 0;
        document.location.reload();
      } else {
        resetBallAndPaddle();
      }
    }
  }
}

//  GAME LOOP ------------------------------------------------

function draw() {
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // call helper functions
  background.render(ctx);
  bricks.render(ctx);
  paddle.render(ctx);
  ball.render(ctx);
  scoreLabel.render(ctx);
  livesLabel.render(ctx);
  collisionDetection();
  ball.move();
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
