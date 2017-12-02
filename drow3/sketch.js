var a = 20;

function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(4);
	noFill();


	ellipse( 300, 200, a, a);

	if(mouseX > 100){
		a = (mouseX - 5) ;
	}

}