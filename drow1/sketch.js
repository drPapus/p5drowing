// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// }

// function draw() {

// }

var spot = {
	x: 100,
	y: 50
};

var col = {
	r: 255,
	g: 0,
	b: 0
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}
function draw() {
	col.r = random(100, 250);
	col.g = random (0);
	col.b = random (100, 200);
	spot.x =random(0, width);
	spot.y =random(0, height);
	noStroke();
	fill(col.r, col.g, col.b, 100);
	ellipse(spot.x, spot.y, 24, 24);
}