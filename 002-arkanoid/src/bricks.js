import { Brick } from "./brick.js";

export class Bricks {
  #BRICK_STATUS = {
    ACTIVE: 1,
    DESTROYED: 0,
  };
  #brickRowCount = 6;
  #brickColumnCount = 13;
  #brickWidth = 32;
  #brickHeight = 16;
  #brickPadding = 0;
  #brickOffsetTop = 80;
  #brickOffsetLeft = 16;
  #bricks = [];
  $bricks = document.querySelector("#bricks");

  constructor() {
    this.createBricks();
  }

  createBricks() {
    for (let c = 0; c <= this.#brickColumnCount; c++) {
      this.#bricks[c] = [];
      for (let r = 0; r <= this.#brickRowCount; r++) {
        const brickX =
          c * (this.#brickWidth + this.#brickPadding) + this.#brickOffsetLeft;
        const brickY =
          r * (this.#brickHeight + this.#brickPadding) + this.#brickOffsetTop;

        const random = Math.floor(Math.random() * 8);
        this.#bricks[c][r] = new Brick(
          brickX,
          brickY,
          random,
          this.#BRICK_STATUS.ACTIVE
        );
      }
    }
  }

  drawBricks(context) {
    for (let c = 0; c <= this.#brickColumnCount; c++) {
      for (let r = 0; r <= this.#brickRowCount; r++) {
        const currentBrick = this.#bricks[c][r];
        if (currentBrick.getStatus() === this.#BRICK_STATUS.DESTROYED) continue;

        const clipX = currentBrick.getColor() * 32;
        context.drawImage(
          this.$bricks,
          clipX,
          0,
          this.#brickWidth,
          this.#brickHeight,
          currentBrick.getX(),
          currentBrick.getY(),
          this.#brickWidth,
          this.#brickHeight
        );
      }
    }
  }

  isDestroyed(column, row) {
    return this.#bricks[column][row].getStatus() === this.#BRICK_STATUS.DESTROYED
  }

  destroyBrick(column, row) {
    this.#bricks[column][row].setStatus(this.#BRICK_STATUS.DESTROYED);
  }

  //#region GETTERS & SETTERS
  getBricks(){
    return this.#bricks
  }

  getBrickWidth() {
    return this.#brickWidth;
  }
  getBrickHeight() {
    return this.#brickHeight;
  }
  setBrickWidth(value) {
    this.#brickWidth = value;
  }
  setBrickHeight(value) {
    this.#brickHeight = value;
  }
  getBrickColumnCount(){
    return this.#brickColumnCount
  }
  getBrickRowCount(){
    return this.#brickRowCount
  }
  setBrickColumnCount(value){
    this.#brickColumnCount = value
  }
  setBrickRowCount(value){
    this.#brickRowCount = value
  }
  //#endregion GETTERS & SETTERS
}
