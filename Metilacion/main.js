function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  fill(40);
  rect((width / 2) * 0.25, (height / 2) * 0.75, width / 2, 25);
  rect((width / 2) * 0.25, (height / 2) * 1.25, width / 2, 25);

  fill(0);
  square((width / 2) * 1.5, (height / 2) * 0.75, (height / 2) * 0.6);
}
