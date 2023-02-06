// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function drawpad() {
  fill('rgb(10,158,10)');
  arc(0, 0, 50, 50, 300, 265);
  fill('black')
  line(0,0,13,-22); //13,-22
  line(0,0,-2,-25);  //2-25
}

function drawfrog() {
  noStroke();
  fill('rgb(10,158,10)')
  ellipse((windowWidth/2)+70, (windowHeight/2)-85, 40, 70);
  
  noStroke();
  ellipse((windowWidth/2)-70, (windowHeight/2)-85, 40, 70);
  
  noStroke();
  fill('white')
  ellipse((windowWidth/2)+70, (windowHeight/2)-83, 30, 55);
  
  noStroke();
  ellipse((windowWidth/2)-70, (windowHeight/2)-83, 30, 55);
  
  noStroke();
  fill('rgb(10,158,10)')
  ellipse((windowWidth/2)+70, (windowHeight/2)+65, 50, 55);
  
  noStroke();
  ellipse((windowWidth/2)-70, (windowHeight/2)+65, 50, 55);
  
  noStroke();
  fill('rgb(10,158,10)')
  ellipse((windowWidth/2)+70, (windowHeight/2)+90, 70, 30);
  
  noStroke();
  ellipse((windowWidth/2)-70, (windowHeight/2)+90, 70, 30);
  
  fill('black');
  ellipse((windowWidth/2)+70, (windowHeight/2)-80, 20, 45);
  
  fill('black');
  ellipse((windowWidth/2)-70, (windowHeight/2)-80, 20, 45);
  
  fill('rgb(10,158,10)');
  stroke('black');
  ellipse(windowWidth/2, windowHeight/2, 200, 200);
  
  fill('#26C82D');
  noStroke();
  ellipse(windowWidth/2,(windowHeight/2)+50, 120, 100);
  
  fill('black');
  stroke('black');
  ellipse(windowWidth/2, (windowHeight/2)-63, 70, 30);
  
  fill('pink');
  stroke('black');
  ellipse(windowWidth/2, (windowHeight/2)-53, 40, 10);
  
  fill('rgb(10,158,10)');
  stroke('black');
  arc((windowWidth/2)-70, (windowHeight/2)-20, 40, 70, 0, 180, OPEN);
  
  fill('rgb(10,158,10)');
  stroke('black');
  arc((windowWidth/2)+70, (windowHeight/2)-20, 40, 70, 0, 180, OPEN);
}

// Render loop that draws shapes with p5
function drawrot(){
  background('white');
  angleMode(DEGREES);
  
  // Use the minimum screen size for relative rendering
  const dim = Math.min(width, height);
  
  // Set up stroke and disable fill
  strokeWeight(3);
  
  // Get time in seconds
  const time = millis() / 1000;
  
  // How long we want the loop to be (of one full rotation)
  const duration = 7;
  
  // Get a 'playhead' from 0..1
  // We use modulo to keep it within 0..1
  const playhead = time / duration % 1;

  // Get the rotation of a full circle
  const rotation = playhead * 180 * 2;
  
  // Center of screen
  const x = width / 2;
  const y = height / 2;

  // Size of rectangle, relative to screen size
  const size = dim * 0.5;
  
  // Save transforms
  push();

  // To rotate around the center,
  // we have to first translate to center
  translate(x, y);

  // Then we can rotate around the center
  rotate(rotation);
  
  // Now we can draw at (0, 0) because we are still translated
  rectMode(CENTER);
  translate(-150,0);
  drawpad();
  
  translate(300,0);
  drawpad();
  
  translate(-150,150);
  drawpad();
  
  translate(0,-300);
  drawpad();
  
  translate(150,300);
  drawpad();
  
  translate(0,-300);
  drawpad();
  
  translate(-300,300);
  drawpad();
  
  translate(0,-300);
  drawpad();

  // Restore transforms
  pop();
}

function drawcrot(){
  angleMode(DEGREES);
  
  //drawfrog()
  
  // Use the minimum screen size for relative rendering
  const dim = Math.min(width, height);
  
  // Set up stroke and disable fill
  strokeWeight(3);
  
  // Get time in seconds
  const time = millis() / 1000;
  
  // How long we want the loop to be (of one full rotation)
  const duration = 7;
  
  // Get a 'playhead' from 0..1
  // We use modulo to keep it within 0..1
  const playhead = time / duration % 1;

  // Get the rotation of a full circle
  const rotation = playhead * 180 * -2;
  
  // Center of screen
  const x = width / 2;
  const y = height / 2;

  // Size of rectangle, relative to screen size
  const size = dim * 0.5;
  
  // Save transforms
  push();

  // To rotate around the center,
  // we have to first translate to center
  translate(x, y);

  // Then we can rotate around the center
  rotate(rotation);
  
  // Now we can draw at (0, 0) because we are still translated
  rectMode(CENTER);
  translate(-150,0);
  drawpad();
  
  translate(300,0);
  drawpad();
  
  translate(-150,150);
  drawpad();
  
  translate(0,-300);
  drawpad();
  
  translate(150,300);
  drawpad();
  
  translate(0,-300);
  drawpad();
  
  translate(-300,300);
  drawpad();
  
  translate(0,-300);
  drawpad();

  // Restore transforms
  pop();
}

function draw() {
  drawrot();
  drawcrot();
  drawfrog();
}