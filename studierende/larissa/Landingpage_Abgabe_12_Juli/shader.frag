#ifdef GL_ES
  precision mediump float;
  precision mediump int;
#endif

uniform vec2 u_resolution;
uniform sampler2D u_texture;
uniform vec2 u_mouse;

varying vec2 vTexCoord;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(52.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 st = vTexCoord;
  vec4 color = texture2D(u_texture, st);
  
  // Calculate displacement based on mouse position
  vec2 displacement = vec2(
    u_mouse.x * 0.11,
    u_mouse.y * 0.11
  );
  
  // Add distortion with mouse-based displacement
  float distortionAmount = 0.1;
  vec2 distortion = vec2(
    random(st + vec2(5.1, 50.2)) * distortionAmount,
    random(st + vec2(50.3, 5.4)) * distortionAmount
  );
  st += distortion + displacement;
  
  // Add blur
  float blurAmount = 0.01;
  vec4 blurredColor = vec4(1.0);
  vec2 blurStep = vec2(blurAmount) / u_resolution;
  
  for (float i = -2.0; i <= 2.0; i += 1.0) {
    for (float j = -2.0; j <= 2.0; j += 1.0) {
      blurredColor += texture2D(u_texture, st + vec2(i, j) * blurStep);
    }
  }
  
  blurredColor /= 15.0; // Average the color over the blur samples
  
  // Combine the distorted and blurred color
  gl_FragColor = mix(color, blurredColor, 0.3);
}
