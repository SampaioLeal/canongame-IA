function drawCanon() {
  const canonCenter = createVector(40, CANVAS_HEIGHT - 50);

  push();
  translate(canonCenter.x, canonCenter.y);
  circle(0, 0, 80);
  angleMode(DEGREES);
  rotate(-45);
  rect(50, 0, 80, 20);
  pop();
}

function shot() {}
