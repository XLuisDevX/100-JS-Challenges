export class Ball {
  OFFSET_Y = 30;
  x = -1;
  y = -1;
  dx = 1;
  dy = -1;
  radius = 3;

  constructor(x, y) {
    this.x = x;
    this.y = y - this.OFFSET_Y;
  }

  updatePosition() {
    this.x += this.dx;
    this.y += this.dy;
  }

  drawBall(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = "#fff";
    context.fill();
    context.closePath();
  }

  getNextBallPositionX(){
    return this.x + this.dx
  }

  getNextBallPositionY(){
    return this.y + this.dy
  }

  getBallX() {
    return this.x;
  }

  getBallY() {
    return this.y;
  }

  getBallDX() {
    return this.dx;
  }

  getBallDY() {
    return this.dy;
  }

  getBallRadius() {
    return this.radius;
  }

  setBallX(dx) {
    this.x += dx;
  }

  setBallY(dy) {
    this.y += dy;
  }

  setBallDX(dx) {
    this.dx = dx;
  }

  setBallDY(dy) {
    this.dy = dy;
  }
}
