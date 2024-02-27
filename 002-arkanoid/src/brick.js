export class Brick {
  #brickX = -1;
  #brickY = -1;
  #color = -1;
  #status = -1;

  constructor(x, y, color, status) {
    this.#brickX = x;
    this.#brickY = y;
    this.#color = color;
    this.#status = status;
  }

  //#region GETTERS & SETTERS
  getX() {
    return this.#brickX;
  }
  getY() {
    return this.#brickY;
  }
  getColor() {
    return this.#color;
  }
  getStatus() {
    return this.#status;
  }

  setX(value) {
    this.#brickX = value;
  }
  setY(value) {
    this.#brickY = value;
  }
  setColor(value) {
    this.#color = value;
  }
  setStatus(value) {
    this.#status = value;
  }
  //#endregion GETTERS & SETTERS
}
