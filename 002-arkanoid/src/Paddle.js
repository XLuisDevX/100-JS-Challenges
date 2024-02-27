export class Paddle {
  PADDLE_SENSIVITY = 2;
    OFFSET_Y = 20
  x = -1;
  y = -1;
  paddleWidth = 50;
  paddleHeight = 10;

  constructor(x, y) {
    this.x = x;
    this.y = y - this.OFFSET_Y - this.paddleHeight;
  }

  updatePosition(direction) {
    if(direction === 'right') {
        this.x += this.PADDLE_SENSIVITY
    } else if(direction === 'left') {
        this.x -= this.PADDLE_SENSIVITY
    }
  }

  // getters and setters
  getX() {
    return this.x;
  }
  setX(value) {
    this.x = value;
  }
  getY() {
    return this.y;
  }
  setY(value) {
    this.y = value;
  }
  getPaddleWidth() {
    return this.paddleWidth;
  }
  getPaddleHeight() {
    return this.paddleHeight;
  }
}
