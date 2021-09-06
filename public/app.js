const socket = io();
const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;
const MIDDLE_X = CANVAS_WIDTH / 2;
const MIDDLE_Y = CANVAS_HEIGHT / 2;

/**
 * Matter.js
 */
const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  World = Matter.World;

const balls = [Bodies.circle(MIDDLE_X, 60, 60)];
const ground = Bodies.rectangle(MIDDLE_X, CANVAS_HEIGHT, CANVAS_WIDTH, 20, {
  isStatic: true,
});

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  rectMode(CENTER);

  const engine = Engine.create();

  World.add(engine.world, ground);
  World.add(engine.world, balls);

  Runner.run(engine);
}

function draw() {
  background(0);

  fill(255);

  drawCanon();

  Helpers.drawBodies(balls);

  fill(128);
  Helpers.drawBody(ground);
}
