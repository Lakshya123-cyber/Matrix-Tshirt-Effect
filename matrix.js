class MatrixEffect {
  constructor(canvas, color) {
    this.canvas = canvas;
    this.color = color;
    this.ctx = canvas.getContext("2d");
    this.characters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    this.charSize = 13;
    this.columns = Math.floor(this.canvas.width / this.charSize);

    this.offsets = [];

    for (let i = 0; i < this.columns; i += 1) {
      this.offsets[i] = 0;
    }
    this.animate();
  }

  animate() {
    this.ctx.fillStyle =
      "rgba(" +
      this.color[0] +
      ", " +
      this.color[1] +
      ", " +
      this.color[2] +
      ", 0.1)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = "white";
    this.ctx.font = this.charSize + "px Arial";
    this.ctx.fontWeight = "bold";

    for (let i = 0; i < this.columns; i++) {
      let index = Math.floor(Math.random() * this.characters.length);
      let char = this.characters.charAt(index);
      this.ctx.fillText(char, i * this.charSize, this.offsets[i]);
      this.offsets[i] += this.charSize;

      if (this.offsets[i] > this.canvas.height && Math.random() < 0.1) {
        this.offsets[i] = 0;
      }
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}
