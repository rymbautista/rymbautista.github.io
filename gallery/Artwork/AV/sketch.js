// The midi notes of a scale
let notes = [60, 62, 64, 65, 67, 69, 71, 72];
let oscs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CORNER);
  colorMode(HSL);

  // Create an array of oscillators, one for each note
  for (const note of notes) {
    osc = new p5.Oscillator();
    osc.start();
    osc.amp(0);
    oscs.push(osc);
  }
}

function draw() {
  background('rgb(188,188,246)');
  push();
  ellipseMode(CENTER);
  circle(mouseX,mouseY,20,20);
  translate(0,windowHeight-500);
  fill('green');
  ellipse(windowWidth/2,windowHeight-260,300,30);
  drawfrog();
  pop();
  let w = width / notes.length;

  // Iterate through the notes list and draw each key
  for (let i = 0; i < notes.length; i++) {
    let x = i * w;
    let noteHue = map(x, 0, width, 0, 360);

    // If the mouse is over the key
    if (mouseX > x && mouseX < x + w && mouseY < w) {
      if (mouseIsPressed) {
        // If the mouse is pressed make the fill more saturated
        fill(noteHue, 100, 70);
      } else {
        // If we are just hovering, it is not as saturated
        fill(noteHue, 70, 80);
      }
    } else {
      // Otherwise it is white
      fill(230);
    }

    // Draw the key
    arc(x, 0, w - 1,w - 1,300, 265,PIE);
    
    if (mouseIsPressed) {
        // If the mouse is pressed Stick out tounge
        push();
        translate(0,windowHeight-500);
        fill('pink');
        triangle((windowWidth/2)-37, (windowHeight/2)-50, mouseX,mouseY - (windowHeight-500), (windowWidth/2)+37, (windowHeight/2)-50);

        fill('balck');
        stroke('black')
        line((windowWidth/2), (windowHeight/2)-50, mouseX, mouseY - (windowHeight-500));
        pop();
    }
  }
  push();
  ellipseMode(CENTER);
  push();
  translate(5,0);
  arc(mouseX, mouseY, 10, 40, 180, 0, OPEN);
  pop()
  arc(mouseX, mouseY, 10, 40, 180, 0, OPEN);
  fill('grey');
  circle(mouseX,mouseY,20,20);
  pop();
}

// A function to play a note
function playNote(osc, note) {
  osc.freq(midiToFreq(note), 0.1);

  // increase amplitude over 0.2 seconds, then decrease over 0.5 seconds
  osc.amp(0.3, 0.2);
  osc.amp(0, 0.5);
}

function drawfrog() {
  noStroke();
  angleMode(DEGREES);
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
}

function mousePressed() {
  // Map mouse x position to the appropriate key
  let key = floor(map(mouseX, 0, width, 0, notes.length));
  playNote(oscs[key], notes[key]);
}
