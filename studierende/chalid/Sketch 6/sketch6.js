/*	_typo_textToPoints-lines // cc teddavis.org 2020	*/

let font, points

function preload() {
	font = loadFont("assets/KKL-Narrow.otf")
  bild=loadImage("assets/Test1.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  bild.resize(width, height);
	noFill()
	stroke(255)
	strokeWeight(2)

	genType('AVANT-GARDE', width / 8)
}

function draw() {
	//background(0)
  image(bild, 0, 0);
	translate(width / 2, height / 2)

	beginShape(LINES);
	for(let i = 0; i < points.length; i++) {
		let p = points[i]
		let xScl = sin(i * .031 + frameCount * .021) * sin(frameCount * .01) * map(mouseX, 0, width, .01, .5)
		let yScl = sin(i * .039 + frameCount * .04) * sin(frameCount * .002) * map(mouseY, 0, height, .01, .5)
		let x = map(p.x, width * xScl, width * (1 + xScl), 0, width)
		let y = map(p.y, height * yScl, height * (yScl + 1), 0, height)
		vertex(x, y)
		vertex(p.x, p.y)
	}
	endShape()
}

function keyPressed() {
	genType(key, height / 2)
}

function genType(txtString, txtSize) {
	// grab bounding box of text
	let bounds = font.textBounds(txtString, 0, 0, txtSize)

	// textToPoints(txt, x, y, size, options)
	points = font.textToPoints(txtString, -bounds.w / 2, bounds.h / 2, txtSize, {
		sampleFactor: 1,
		simplifyThreshold: 0
	})
}