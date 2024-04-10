uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying float vDisplacement;

#define PI 3.1415926535897932384626433832795

void main() {
    vPosition = position;
    vNormal = normal;
    vUv = uv;

    vec3 newPosition = vec3(position.x, (position.y), position.z);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}