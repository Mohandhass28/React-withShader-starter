uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vuv;
varying float vDisplacement;
#define PI 3.14159265359

void main() {
  vec3 patten = vec3(vDisplacement, (vDisplacement * uTime / 10.0), vDisplacement);
  vec3 patten1 = vec3(vDisplacement + 2000.100000000 / 10.0, vDisplacement + 0.4000 / 10.0, vDisplacement);
  vec3 patten2 = vec3(vDisplacement + 0.01 / 10.0, vDisplacement + 400.0 / 10.0, vDisplacement);
  gl_FragColor = vec4(patten, 1.0);
}