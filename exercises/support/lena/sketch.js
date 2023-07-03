var capture; // this is the video camera
	var capimg;
	var theblur; // this is the blur
	var a = 0.1;
	var b = 1.0-a;

	function setup() {
		createCanvas(640, 480);
		pixelDensity(1);
		background(100);
		capture = createCapture(VIDEO); // this opens the digitizer
		theblur = createImage(640, 480);
		capture.size(640, 480);
		capture.hide();
	}

	function draw() {
		capimg = capture.get(); // copying the video
		if(capimg.width>0) {
			capimg.loadPixels();
			theblur.loadPixels();
			
			for(var i = 0; i < theblur.pixels.length;i+=4)
			{
				theblur.pixels[i] = a*capimg.pixels[i] + b*theblur.pixels[i];
				theblur.pixels[i+1] = a*capimg.pixels[i+1] + b*theblur.pixels[i+1];
				theblur.pixels[i+2] = a*capimg.pixels[i+2] + b*theblur.pixels[i+2];
				theblur.pixels[i+3] = capimg.pixels[i+3];
			}
			theblur.updatePixels();
			image(theblur, 0, 0, width, height);
		}
	}