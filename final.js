var person;



var obstacle;



function setup() {

  createCanvas(640, 360);

  person = new Person();

  

}



function keyPressed() {

  if (key === ' ') {

    var jump = createVector(0, -5);

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

  ellipse(width , height - 15, 30, 30);

  

}

<!DOCTYPE html>

<html>

  <head>

    <meta charset="UTF-8">

    <title>Session 2 Forces</title>

     <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.sound.min.js"></script>

    

    <script src="person.js" type="text/javascript"></script>

    <script src="sketch.js" type="text/javascript"></script>



    <style> body {padding: 0; margin: 0;} canvas {vertical-align: top;} </style>

  </head>

  <body>

    <p align= 'center'>Press the space bar to jump</p>

  </body>

</html>


html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}

/* p { font-family: "Monotype Corsiva";

} */



/ Daniel Shiffman

// https://www.kadenze.com/courses/the-nature-of-code

// http://natureofcode.com/

// Session 2: Array of Particles, multiple forces



function Person() {

  this.pos = createVector(50, 250);

  this.vel = createVector(1, 0);

  this.acc = createVector(2, 0);

  this.mass = 10;





 this.applyForce = function(force) {

    this.acc.add(force);

 }



  this.update = function() {

    this.vel.add(this.acc);

    this.pos.add(this.vel);

    this.acc.set(0, 0);

  }



  this.display = function() {

    fill(255, 150);

    stroke(255);

    rect(this.pos.x + 200, this.pos.y + 70, this.mass*2, this.mass*4);

  }

  

  this.edges = function() {

  	if (this.pos.y > 250) {

      this.vel.y *= 0;

      this.pos.y = 250;

  	}

  
	 if ( this.pos.x > width) {

      this.vel.x *= -1;

      this.pos.x = width;
   }
//   }
// }

  else if (this.pos.x < 0) {
      
      	this.vel.x *= 1;

      	this.pos.x = width;
    }
  }
}

      
