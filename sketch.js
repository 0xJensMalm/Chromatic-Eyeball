// Define variables for the orbs
let outerOrbRadius = 200;
let middleOrbRadius = outerOrbRadius * 0.5;
let innerOrbRadius = middleOrbRadius * 0.5;

// Variables for outer orb rotation
let outerOrbRotationX = 0;
let outerOrbRotationY = 0;
let isDragging = false;
let prevMouseX = 0;
let prevMouseY = 0;

// Variables for middle orb rotation (opposite of outer orb)
let middleOrbRotationX = 0;
let middleOrbRotationY = 0;

// Variables for inner orb rotation (steady rotation on x-axis)
let innerOrbRotationX = 0;
let innerOrbRotationSpeed = 0.01;

function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
  background(0); // Set background to black

  // Apply rotation to the outer orb based on mouse interaction
  if (isDragging) {
    let deltaX = mouseX - prevMouseX;
    let deltaY = mouseY - prevMouseY;
    outerOrbRotationX += deltaY * 0.01;
    outerOrbRotationY += deltaX * 0.01;
    prevMouseX = mouseX;
    prevMouseY = mouseY;
  }

  // Draw the outer orb
  drawOrb(
    outerOrbRadius,
    color(0, 0, 255),
    outerOrbRotationX,
    outerOrbRotationY
  ); // Blue outer orb

  // Apply rotation to the middle orb (opposite direction from outer orb)
  middleOrbRotationX = -outerOrbRotationX;
  middleOrbRotationY = -outerOrbRotationY;
  drawOrb(
    middleOrbRadius,
    color(255, 0, 0),
    middleOrbRotationX,
    middleOrbRotationY
  ); // Red middle orb

  // Update rotation of the inner orb (steady rotation on x-axis)
  innerOrbRotationX += innerOrbRotationSpeed;
  drawOrb(innerOrbRadius, color(255, 255, 0), innerOrbRotationX, 0); // Yellow inner orb
}

function drawOrb(radius, col, rotationX, rotationY) {
  push();
  noFill(); // No fill for wireframe appearance
  stroke(col); // Set stroke color
  rotateX(rotationX);
  rotateY(rotationY);
  sphere(radius);
  pop();
}

function mousePressed() {
  isDragging = true;
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function mouseReleased() {
  isDragging = false;
}
