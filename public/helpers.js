class Helpers {
  static drawVertices(vertices) {
    beginShape();
    for (let i = 0; i < vertices.length; i++) {
      vertex(vertices[i].x, vertices[i].y);
    }
    endShape(CLOSE);
  }

  static drawBody(body) {
    if (body.parts && body.parts.length > 1) {
      for (let p = 1; p < body.parts.length; p++) {
        Helpers.drawVertices(body.parts[p].vertices);
      }
    } else {
      Helpers.drawVertices(body.vertices);
    }
  }

  static drawBodies(bodies) {
    for (let i = 0; i < bodies.length; i++) {
      Helpers.drawBody(bodies[i]);
    }
  }

  static drawMouse(mouseConstraint) {
    if (mouseConstraint.body) {
      const pos = mouseConstraint.body.position;
      const offset = mouseConstraint.constraint.pointB;
      const m = mouseConstraint.mouse.position;
      stroke(0, 255, 0);
      strokeWeight(2);
      line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
    }
  }

  static drawConstraint(constraint) {
    const offsetA = constraint.pointA;
    let posA = {
      x: 0,
      y: 0,
    };
    if (constraint.bodyA) {
      posA = constraint.bodyA.position;
    }
    const offsetB = constraint.pointB;
    let posB = {
      x: 0,
      y: 0,
    };
    if (constraint.bodyB) {
      posB = constraint.bodyB.position;
    }
    line(
      posA.x + offsetA.x,
      posA.y + offsetA.y,
      posB.x + offsetB.x,
      posB.y + offsetB.y
    );
  }

  static drawConstraints(constraints) {
    for (let i = 0; i < constraints.length; i++) {
      Helpers.drawConstraint(constraints[i]);
    }
  }

  static drawSprite(body, img) {
    const pos = body.position;
    const angle = body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(img, 0, 0);
    pop();
  }

  static drawText(body, txt) {
    const pos = body.position;
    const angle = body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    textAlign(CENTER, CENTER);
    text(txt, 0, 0);
    ellipse(0, 10, 2, 2);
    pop();
  }

  static bodyFromPath(path, x, y, options) {
    const body = Matter.Bodies.fromVertices(
      x,
      y,
      Matter.Svg.pathToVertices(path, 10),
      options
    );
    return body;
  }
}
