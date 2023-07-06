precision mediump float;

// lets grab texcoords just for fun
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;
uniform float time;
uniform float frequency;
uniform float amplitude;
uniform float scale;

void main() {
  vec2 uv = vTexCoord;
  
  // Reverse the y-coordinate to fix the mirroring effect
  uv.y = 0.5 - uv.y;

  // lets create a sine wave to distort our texture coords
  float sineWaveX = sin(uv.x * frequency + time) * amplitude;
  float sineWaveY = sin(uv.y * frequency + time) * sineWaveX;

  // create a vec2 with our sine
  vec2 distort = vec2(sineWaveX, sineWaveY);

  // add the distortion to our texture coordinates
  vec4 tex = texture2D(tex0, uv + distort);

  gl_FragColor = tex;
}
