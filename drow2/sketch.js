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
	background(255);
}
function draw() {

	fill(col.r, col.g, col.b, 100);
	ellipse(spot.x, spot.y, 24, 24);
}