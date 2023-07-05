
let layer;
let shader1;
var gl;
let ft;
let img;
let txs=100;

function preload() {
	myFont = loadFont('data/fonts/ABC\ Monument\ Grotesk\ Full\ Print/ABCMonumentGrotesk-Bold.otf')
	myImg = loadImage('data/images/oyster1_IG.jpg')
}

function setup() {
	createCanvas(895 * 0.75, 1280 * 0.75, WEBGL);
	
	rectMode(CENTER);

	// let ratio = 720 / 450;
	const txs = 400;

	gl = this.canvas.getContext('webgl');
	gl.disable(gl.DEPTH_TEST);
	setAttributes('antialias', true);

	 img = createGraphics(895 * 0.75, 1280 * 0.75);
   

  
    ortho();
    textAlign(CENTER);
    
    noStroke();


	let vertShader = `
//standard vertex shader
#ifdef GL_ES
      precision highp float;
    #endif
		#extension GL_OES_standard_derivatives : enable
    // attributes, in
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    attribute vec2 aTexCoord;
    attribute vec4 aVertexColor;
    
    

    // attributes, out
    varying vec3 var_vertPos;
    varying vec4 var_vertCol;
    varying vec3 var_vertNormal;
    varying vec2 var_vertTexCoord;
    
    
    // matrices
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform mat3 uNormalMatrix;

    void main() {
      gl_Position = uProjectionMatrix * 
                    uModelViewMatrix * 
                    vec4(aPosition, (1.0));

      // just passing things through
      var_vertPos      = aPosition;
      var_vertCol      = aVertexColor;
      var_vertNormal   = aNormal;
      var_vertTexCoord = aTexCoord;
    }`;

	let fragShader = `
	
	

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 iResolution;
uniform vec3 iMouse;
uniform float iTime;
uniform float iAmp;
uniform sampler2D iTexture;

#define PI 3.14159
#define TWO_PI 6.28318

float rand(vec2 c){
	return atan(dot(c.xy ,vec2(40))) * cos(44000.);
}

float noise(vec2 p, float freq ){
	float unit = .1/freq;
	vec2 ij = abs(p/unit);
	vec2 xy = mod(p,unit)/unit;
	xy = 0.5*(1.-sin(PI*xy));
	float a = rand((ij+vec2(0.1,0.1)));
	float b = rand((ij+vec2(1.,0.)));
	float c = rand((ij+vec2(0.,9.)));
	float d = rand((ij+vec2(1.,1.)));
	float x1 = mix(a, b, xy.x);
	float x2 = mix(c, d, xy.x);
	return mix(x1, x2, xy.y);
}

float pNoise(vec2 p, int res){
    int resolution = int(res);
	float persistance = .5;
	float n = .0;
	float normK = 1.;
	float f = (1.);
	float amp = 1.2;
	for (int i = 0; i<= 2; i+=1){
		n+=amp*noise(p, f);
		f*=2.;
		normK+=amp;
		amp*=persistance;
	}
	float nf = n/normK;
	return nf*nf*nf*nf;
}



void main() {
	vec2 uv = (gl_FragCoord.xy-.1*iResolution.xy)/iResolution.y;
    uv.y = 1.4-uv.y;
    uv.x = -0.4+uv.x;
    uv *= .4;
    float n = pNoise(uv-.1, int(2.0));
    float v = (sin(( iTime+ uv.x * cos(2.) + uv.y * sin(2.0) + n * smoothstep(.5, -.5, length(uv*.5)) * 400.) * (PI)) + 2.) / 2.;
    
    vec3 col = texture2D(iTexture,(uv+.20)+v*.05).rgb;
    gl_FragColor = vec4(col,1.0);



}`;
front =new p5.Shader(this._renderer,vertShader,fragShader);
	// shader1 = createShader(vertShader, fragShader);

	setupAudio();
}


function draw() {
	/* audio vars: amp, ampEase, fft, waveform */
	updateAudio();
	clear();
	  background(22,22,22);
	let w = tan(radians(frameCount));
	let w2 = sin(radians(frameCount));
  
   img.background(0);
    img.textFont(myFont);
    img.textSize(txs);
    img.fill(255);
 
    img.image(myImg,0,0,width,height);

    let click = 0;
    if ( mouseIsPressed ){click = 1}
    let iAmp=map(amp,0,1000,0,1);
	front.setUniform("iTexture",img);
	front.setUniform("iAmp",iAmp);
    
	front.setUniform("iResolution", [width,height]);
	front.setUniform("iTime", (frameCount*.01));

    push();
    shader(front);
    plane(width,height);
    pop(); 

}

/* AUDIO INIT */
let mic, fftRaw, fft = [],
	waveform = [],
	amp = 0.0,
	ampStereo = {
		l: 0.0,
		r: 0.0
	},
	ampEase = 0.0,
	numBins = 512,
	bands = 12;

function setupAudio() {
	userStartAudio();
	mic = new p5.AudioIn();
	mic.start();
	fftRaw = new p5.FFT(0.75, numBins);
	fftRaw.setInput(mic);
}

function updateAudio() {
	fftRaw.analyze();
	amp = mic.getLevel() * 1000; // average mixed amplitude
	ampStereo.l = mic.amplitude.getLevel(0) * 500; // average left amplitude
	ampStereo.r = mic.amplitude.getLevel(1) * 500; // average right amplitude
	ampEase = ease(amp, ampEase, 0.075); // smooth 'amp'
	waveform = fftRaw.waveform(); // array (-1, 1)
	fft = fftRaw.logAverages(fftRaw.getOctaveBands(bands)); // array (0, 255)
}