precision mediump float;

uniform sampler2D tex0;
uniform float uTime;

varying vec2 vTexCoord;

float random(float x) {
  return fract(sin(x * 12.9898) * 43758.5453);
}

void main() {
  vec2 uv = vTexCoord;
  vec2 offset = vec2(
    0.1 * cos(uv.y * 10.0 + uTime * 2.0),
    0.1 * sin(uv.x * 5.0 + uTime * 1.5)
  );

  vec4 tex = texture2D(tex0, uv + offset);
  gl_FragColor = tex;
}
