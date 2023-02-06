function setup() {
  createCanvas(windowWidth, windowHeight); 
}
function drawflower() {
  noLoop();
  background('white');
  //top
  fill('rgb(241,228,228)');
  noStroke();
  ellipse((windowWidth/2), (windowHeight/2)+30,random(95,110),20);
  fill('rgb(10,158,10)');
  stroke('black');
  //stem
  quad((windowWidth/2)-5, (windowHeight/2)-100, (windowWidth/2)+5, (windowHeight/2)-100, (windowWidth/2)+random(5,10), (windowHeight/2),(windowWidth/2)-random(5,10), (windowHeight/2));
  fill('red');
  triangle((windowWidth/2)-random(20,30), (windowHeight/2)-random(145,165),(windowWidth/2)+random(20,30), (windowHeight/2)-random(145,165),(windowWidth/2), (windowHeight/2)-100);
  
  
  //Bottom
  triangle((windowWidth/2)-random(20,30), (windowHeight/2)-50,(windowWidth/2)+20, (windowHeight/2)-50,(windowWidth/2), (windowHeight/2)-100)
  //left
  triangle((windowWidth/2)-40, (windowHeight/2)-80,(windowWidth/2)-40, (windowHeight/2)-120,(windowWidth/2), (windowHeight/2)-100);
  //right
  triangle((windowWidth/2)+40, (windowHeight/2)-80,(windowWidth/2)+40, (windowHeight/2)-120,(windowWidth/2), (windowHeight/2)-100);
  
  fill('rgb(213,138,67)')
  quad((windowWidth/2)-20, (windowHeight/2)-30, (windowWidth/2)+20, (windowHeight/2)-30, (windowWidth/2)+random(20,30), (windowHeight/2)+30, (windowWidth/2)-random(20,30), (windowHeight/2)+30);
  quad((windowWidth/2)-random(25,35), (windowHeight/2)-30, (windowWidth/2)+random(25,35), (windowHeight/2)-30, (windowWidth/2)+random(25,35), (windowHeight/2)-random(15,25), (windowWidth/2)-random(25,35), (windowHeight/2)-random(15,25));
  fill('yellow');
  circle((windowWidth/2), (windowHeight/2)-100,random(20,70));
}

function draw() {
  angleMode(DEGREES);
  clear();
  background(220);
  
  scale(2);
  translate(-(windowWidth/4),-70)
  drawflower();
  
  // rotate(7)
  // translate(100,-100);
  // drawfrog();
}