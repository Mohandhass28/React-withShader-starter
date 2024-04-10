uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

#define PI 3.1415926535897932384626433832795

float wave(float rows) {
    return step(0.5, fract(rows * 20.0));
}

void main() {
    float rows = (vUv.y) + uTime;
    float patten = wave(rows);
    gl_FragColor = vec4(vec3(2.0 * uTime + .0, patten, 2.0 * uTime + 1.0), 1.0);
}