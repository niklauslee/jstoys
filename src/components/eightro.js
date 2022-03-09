const EventEmitter = require("events");

class GraphicContext {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 128;
    this.height = 64;
    this.color = 1;
    this.fillColor = 1;
    this.fontColor = 1;
    this.bufferCanvas = document.createElement("canvas");
    this.buffer = this.bufferCanvas.getContext("2d");
    // this.buffer.translate(0.5, 0.5);
    this.buffer.strokeStyle = "#00ff00";
  }

  _color(color) {
    return color ? "#00ff00" : "#000000";
  }

  getWidth() {
    return 128;
  }

  getHeight() {
    return 64;
  }

  clearScreen() {
    this.buffer.clearRect(0, 0, this.width, this.height);
  }

  color16(r, g, b) {}

  fillScreen() {}

  setRotation() {}

  getRotation() {}

  setColor(color) {
    this.color = color ? 1 : 0;
    this.buffer.strokeStyle = this._color(this.color);
  }

  getColor() {
    return this.color;
  }

  setFillColor(color) {
    this.fillColor = color ? 1 : 0;
    this.buffer.strokeStyle = this._color(this.fillColor);
  }

  getFillColor() {
    return this.fillColor;
  }

  setFontColor(color) {
    this.fontColor = color ? 1 : 0;
  }

  getFontColor() {
    return this.fontColor;
  }

  setFont(font) {}

  setFontScale(scaleX, scaleY) {}

  setPixel(x, y, color) {
    this.buffer.beginPath();
    this.buffer.fillStyle = this._color(1);
    this.buffer.fillRect(x, y, 1, 1);
    this.buffer.fill();
  }

  getPixel(x, y) {}

  drawLine(x0, y0, x1, y1) {
    this.buffer.beginPath();
    this.buffer.moveTo(x0, y0);
    this.buffer.lineTo(x1, y1);
    this.buffer.stroke();
  }

  drawRect(x, y, w, h) {
    this.buffer.beginPath();
    this.buffer.strokeRect(x, y, w, h);
    this.buffer.stroke();
  }

  fillRect(x, y, w, h) {
    this.buffer.beginPath();
    this.buffer.fillRect(x, y, w, h);
    this.buffer.fill();
  }

  drawCircle(x, y, r) {
    this.buffer.beginPath();
    this.buffer.arc(x, y, r, 0, 2 * Math.PI);
    this.buffer.stroke();
  }

  fillCircle(x, y, r) {
    this.buffer.beginPath();
    this.buffer.arc(x, y, r, 0, 2 * Math.PI);
    this.buffer.fill();
  }

  drawRoundRect(x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.buffer.beginPath();
    this.buffer.moveTo(x + r, y);
    this.buffer.arcTo(x + w, y, x + w, y + h, r);
    this.buffer.arcTo(x + w, y + h, x, y + h, r);
    this.buffer.arcTo(x, y + h, x, y, r);
    this.buffer.arcTo(x, y, x + w, y, r);
    this.buffer.closePath();
    this.buffer.stroke();
  }

  fillRoundRect(x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.buffer.beginPath();
    this.buffer.moveTo(x + r, y);
    this.buffer.arcTo(x + w, y, x + w, y + h, r);
    this.buffer.arcTo(x + w, y + h, x, y + h, r);
    this.buffer.arcTo(x, y + h, x, y, r);
    this.buffer.arcTo(x, y, x + w, y, r);
    this.buffer.closePath();
    this.buffer.fill();
  }

  drawText(x, y, text) {
    let c = this.buffer.fillStyle;
    this.buffer.fillStyle = "#00ff00"; // this._color(this.fontColor);
    this.buffer.font = "8px sans-serif";
    this.buffer.textAlign = "left";
    this.buffer.textBaseline = "top";
    this.buffer.fillText(text, x, y);
    this.buffer.fillStyle = c;
  }

  measureText(text) {}

  drawBitmap(x, y, bitmap, options) {}

  display() {
    let data = this.buffer.getImageData(0, 0, this.width, this.height);
    this.ctx.putImageData(data, 0, 0);
  }
}

export default class Eightro extends EventEmitter {
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
