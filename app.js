
class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.wave = new Wave();

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.wave.resize();
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.wave.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = 0;
    this.max = Math.random() * 100 + 150;
  }
  update() {
    this.cur += this.speed;
    this.y = this.fixedY + (Math.sin(this.cur) * this.max);
  }
}

class Wave {
  constructor() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.centerx = this.stageWidth / 2;
    this.centery = this.stageHeight / 2;
    this.point = new Point(this.centerx, this.centery)
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    //this.pointGap = this.stageWidth / (this.totalPoints - 1);

  }
  init() {
    this.point = new Point(
      this.centerX,
      this.centerY
    );
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = '#ff0000';

    this.point.update();

    ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

  }
}

window.onload = () => {
  new App();
};
