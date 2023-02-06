function setup() {
  createCanvas(windowWidth, windowHeight);
  
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
  ellipse(windowWidth/2, (windowHeight/2)-63, 100, 50);
  
  fill('pink');
  stroke('black');
  ellipse(windowWidth/2, (windowHeight/2)-50, 75, 25);
  
  fill('rgb(10,158,10)');
  stroke('black');
  arc((windowWidth/2)-70, (windowHeight/2)-20, 40, 70, 0, 180, OPEN);
  
  fill('rgb(10,158,10)');
  stroke('black');
  arc((windowWidth/2)+70, (windowHeight/2)-20, 40, 70, 0, 180, OPEN);
  
  fill('pink');
  triangle((windowWidth/2)-37, (windowHeight/2)-50, mouseX,mouseY, (windowWidth/2)+37, (windowHeight/2)-50);
  
  fill('balck');
  stroke('black')
  line((windowWidth/2), (windowHeight/2)-50, mouseX, mouseY);
  
  push();
  translate(5,0);
  arc(mouseX, mouseY, 10, 40, 180, 0, OPEN);
  pop()
  arc(mouseX, mouseY, 10, 40, 180, 0, OPEN);
  
  fill('grey');
  stroke('black')
  circle(mouseX, mouseY, 20);
}
function draw() {
  angleMode(DEGREES);
  clear();
  background(220);
  
  drawfrog();
  
}