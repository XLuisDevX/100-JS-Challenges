export class Paddle {
  PADDLE_SENSIVITY = 2;
  OFFSET_Y = 20;
  x = -1;
  y = -1;
  paddleWidth = 50;
  paddleHeight = 10;

  $sprite = document.querySelector("#sprite");

  constructor(x, y) {
    this.x = x;
    this.y = y - this.OFFSET_Y - this.paddleHeight;
  }

  updatePosition(direction) {
    if (direction === "right") {
      this.x += this.PADDLE_SENSIVITY;
    } else if (direction === "left") {
      this.x -= this.PADDLE_SENSIVITY;
    }
  }

  drawPaddle(context) {
    context.drawImage(
      this.$sprite, // imagen
      29, // clipX: coordenadas de recorte
      174, // clipY: coordenadas de recorte
      this.paddleWidth, // tamaño del recorte
      this.paddleHeight, // tamaño del recorte
      this.x, // posicion X del dibujo
      this.y, // posición Y del dibujo
      this.paddleWidth, // ancho del dibujo
      this.paddleHeight // alto del dibujo
    );
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
