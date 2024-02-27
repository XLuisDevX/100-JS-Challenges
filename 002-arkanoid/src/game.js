import { Ball } from "./ball.js";
import { Paddle } from "./paddle.js";
import { Bricks } from "./bricks.js"

/* Game variables */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 476;
canvas.height = 424;

const ball = new Ball(canvas.width / 2, canvas.height);
const paddle = new Paddle((canvas.width - 50) / 2, canvas.height);
const bricks = new Bricks()
let rightPressed = false;
let leftPressed = false;

function collisionDetection() {
  const bricks_matrix = bricks.getBricks()
  for (let c = 0; c <= bricks.getBrickColumnCount(); c++) {
    for (let r = 0; r <= bricks.getBrickRowCount(); r++) {
      const currentBrick = bricks_matrix[c][r];
      if (bricks.isDestroyed(c, r)) continue;

      const isBallSameXAsBrick =
        ball.getBallX() > currentBrick.getX() &&
        ball.getBallX() < currentBrick.getX() + bricks.getBrickWidth();

      const isBallSameYAsBrick =
        ball.getBallY() > currentBrick.getY() &&
        ball.getBallY() < currentBrick.getY() + bricks.getBrickHeight();

      if (isBallSameYAsBrick && isBallSameXAsBrick) {
        ball.setBallDY(-ball.getBallDY());
        bricks.destroyBrick(c, r)
      }
    }
  }
}

function ballMovement() {
  // Sides collision
  if (
    ball.getNextBallPositionX() > canvas.width - ball.getBallRadius() ||
    ball.getNextBallPositionX() < ball.getBallRadius()
  ) {
    ball.setBallDX(-ball.getBallDX());
  }

  // Top collision
  if (ball.getNextBallPositionY() < ball.getBallRadius()) {
    ball.setBallDY(-ball.getBallDY());
  }

  const isSameXAsPaddleX =
    ball.getBallX() > paddle.getX() &&
    ball.getBallX() < paddle.getX() + paddle.getPaddleWidth();

  const isTouchingPaddle = ball.getNextBallPositionY() > paddle.getY();

  if (isSameXAsPaddleX && isTouchingPaddle) {
    ball.setBallDY(-ball.getBallDY());
  } else if (ball.getBallY() > canvas.height) {
    // Game Over
    window.location.reload();
  }

  ball.updatePosition();
}

function paddleMovement() {
  if (rightPressed && paddle.getX() < canvas.width - paddle.getPaddleWidth()) {
    paddle.updatePosition("right");
  } else if (leftPressed && paddle.getX() > 0) {
    paddle.updatePosition("left");
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initEvents() {
  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);

  function keyDownHandler(event) {
    const { key } = event;
    if (key === "Right" || key === "ArrowRight") {
      rightPressed = true;
    }
    if (key === "Left" || key === "ArrowLeft") {
      leftPressed = true;
    }
  }

  function keyUpHandler(event) {
    const { key } = event;
    if (key === "Right" || key === "ArrowRight") {
      rightPressed = false;
    }
    if (key === "Left" || key === "ArrowLeft") {
      leftPressed = false;
    }
  }
}

function draw() {
  clearCanvas();

  // Dibujar los elementos
  ball.drawBall(ctx)
  paddle.drawPaddle(ctx)
  bricks.drawBricks(ctx);
  // drawScore()

  // colisiones y movimientos
  collisionDetection();
  ballMovement();
  paddleMovement();
  // Clear screen

  window.requestAnimationFrame(draw);
}

initEvents();
draw();
