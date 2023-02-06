let song;
let showtext = true;
let recH;
let drawgraphic = false;
let click = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound('Whopper.mp3');
  background('white');
  recH = windowHeight;
}

function drawplate(){
  fill('white');
  stroke(10);
  quad(windowWidth/2-80, windowHeight/2,windowWidth/2+80, windowHeight/2,windowWidth/2+70, windowHeight/2+20,windowWidth/2-70, windowHeight/2+20);
  ellipse(windowWidth/2, windowHeight/2,180,20);
  ellipse(windowWidth/2, windowHeight/2,120,7); 
}

function drawburger(){
  fill('#ECAF55');
  stroke(10);
  rect(windowWidth/2-80, windowHeight/2-20,160,20,5);
  arc(windowWidth/2, windowHeight/2-65,160,50,180,0,CHORD);
  fill('#A87427');
  rect(windowWidth/2-80, windowHeight/2-35,160,15,5);
  fill('#25971B');
  rect(windowWidth/2-80, windowHeight/2-40,160,5,5);
  rect(windowWidth/2-53, windowHeight/2-40,100,5,5);
  rect(windowWidth/2, windowHeight/2-40,80,5,5);
  fill('#CFE52B');
  triangle(windowWidth/2, windowHeight/2-35,windowWidth/2+60, windowHeight/2-35,windowWidth/2+20, windowHeight/2-25);
  fill('#F6F0E6');
  rect(windowWidth/2-80, windowHeight/2-50,160,10,5);
  rect(windowWidth/2-40, windowHeight/2-50,120,10,5);
  fill('#E7713B');
  rect(windowWidth/2-80, windowHeight/2-60,160,10,5);
  rect(windowWidth/2, windowHeight/2-60,80,10,5);
  fill('#50D42E');
  rect(windowWidth/2-80, windowHeight/2-65,160,5,5);
  
}

function drawrec() {
  fill('#A87427');
  quad(windowWidth/2-120, recH ,windowWidth/2-40, recH,windowWidth/2-40, windowHeight,windowWidth/2-120, windowHeight);
  fill('#E7713B');
  quad(windowWidth/2-40, recH,windowWidth/2+40, recH,windowWidth/2+40, windowHeight,windowWidth/2-40, windowHeight);
  fill('#CFE52B');
  quad(windowWidth/2+40, recH,windowWidth/2+120, recH,windowWidth/2+120, windowHeight,windowWidth/2+40, windowHeight);
  if (recH < 0) {
    recH = windowHeight;
  } else {
    recH = recH -1
  }
}


function mousePressed() {
  showtext = false;
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    drawgraphic = false;
  } else {
    song.play();
    drawgraphic = true;
    click = true;
  }
}

function draw() {
  clear();
  angleMode(DEGREES);
  fill('black');
  noStroke();
  if (showtext) {
  text('Do you want a Whooper?', windowWidth/2-65, windowHeight/2);
  }
  //drawrec();
  if (click) {
  background('rgb(241,239,231)');
  drawplate();
  }
  if (drawgraphic) {
  background('rgb(241,239,231)');
  drawrec();
  drawplate();
  drawburger();
  } 
}
