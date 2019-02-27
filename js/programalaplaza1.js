function setup() {
  createCanvas(192, 157, WEBGL);
}

function draw() {
	var paleta=['#00ff87','#00d370','#00b05d','#028547','#5acd97','#317e5a','#0d7b9e','#3b9ab9'];
 	background(0,255,255);
 	//background(paleta [int(random(1,paleta.length))]);
 	rotateY(frameCount * 0.01);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(frameCount * 0.001 + j) * 100,
        i * 0.1
      );
      
      rotateZ(frameCount * 0.002);
      push(); 
 
  		stroke(paleta[int(random(0, paleta.length))]);
		
 		//Donut
		rotateX(frameCount * 0.01);
  		rotateY(frameCount * 0.01);
  		torus(25, 5);

  		//Elipse dentro
 		//ellipsoid(5, 15, 25);

      pop();
    }
    pop();
  }
}