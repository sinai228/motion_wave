class App {
constructor() {
this.canvas = document.createElement('canvas');
this.ctx = this.canvas.getContext('2d');
document.body.appendChild(this.canvas);
  
  window.addEventListener('resize', this.resize.bind(this), false);
  this.resize();
  
  requestAnimationFrame(this.animate.bind(this));
}

resize() {
this.stageWidth = document.body.clientWidth;
this.stageHeight = docuent.body.clientHeight;

this.canvas.width = this.stageWidth * 2;
this.canvas.height = this.stageHeight * 2;
this.ctx.sclae(2, 2);
} 

animate(t) {
this.ctx.cleaerRect(0, 0, this.stageWidth, this.stageHeight);
requestAnimationFrame(This.animate.bind(this));
}}

window.onload = () => {
  new App();
};
