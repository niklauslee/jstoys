const EventEmitter = require("events");

class GraphicContext {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 128;
    this.height = 64;
    this.color = 1;
    this.bufferCanvas = document.createElement("canvas");
    this.buffer = this.bufferCanvas.getContext("2d");
    this.buffer.translate(0.5, 0.5);
    this.buffer.strokeStyle = "#00ff00";
  }

  getWidth() {
    return 128;
  }

  getHeight() {
    return 64;
  }

  clearScreen() {}
  color16(r, g, b) {}
  fillScreen() {}
  setRotation() {}
  getRotation() {}
  setColor(color) {
    this.color = color ? 1 : 0;
    this.buffer.strokeStyle = this.color ? "#00ff00" : "#000000";
  }
  getColor() {
    return this.color;
  }
  setFillColor(color) {}
  getFillColor() {}
  setFontColor(color) {}
  getFontColor() {}
  setFont(font) {}
  setFontScale(scaleX, scaleY) {}
  setPixel(x, y, color) {}
  getPixel(x, y) {}
  drawLine(x0, y0, x1, y1) {}
  drawRect(x, y, w, h) {
    this.buffer.strokeRect(x, y, w, h);
  }
  fillRect(x, y, w, h) {}
  drawCircle(x, y, r) {}
  fillCircle(x, y, r) {}
  drawRoundRect(x, y, w, h, r) {}
  fillRoundRect(x, y, w, h, r) {}
  drawText(x, y, text) {}
  measureText(text) {}
  drawBitmap(x, y, bitmap, options) {}
  display() {
    let data = this.buffer.getImageData(0, 0, this.width, this.height);
    this.ctx.putImageData(data, 0, 0);
  }
}

class Eightro extends EventEmitter {
  constructor(canvasId) {
    super();
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.gc = new GraphicContext(this.ctx);
  }
  log(...args) {
    console.log(...args);
  }
}

window.addEventListener("load", function () {
  window.eightro = new Eightro("console-canvas");
});
