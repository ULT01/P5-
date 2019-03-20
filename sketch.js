// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person;

var obstacle;

function setup() {
  createCanvas(640, 360);
  person = new Person();
  
}

function keyPressed() {
  if (key === ' ') {
    var jump = createVector(0, -8);
    	person.applyForce(jump);
  }
}

function draw() {
  background(51);
  
  translate(-person.pos.x + 50, 0);
  var gravity = createVector(0, 0.1);
  person.applyForce(gravity);
  
  person.update();
  person.edges();
  person.display();
  
  
  if (mouseIsPressed) {
    
  var force = createVector(0, -0.01);
  person.applyForce(force);
  
  }
  // translate(-100, 0);
		
	fill(255, 0, 100);
  rect(400, height - 50, 50, 50);
  
}

