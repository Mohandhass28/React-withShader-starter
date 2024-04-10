/* eslint-disable react/no-unknown-property */
import vertexShader from "../../../../Shader/Shader1/vertexShader.glsl";
import fragmentShader from "../../../../Shader/Shader1/fragmentShader.glsl";
import * as THREE from "three";
const clock = new THREE.Clock();

const Plane = () => {
  const geomentry = new THREE.SphereGeometry(29, 30, 30);
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: { type: "f", value: 0.0 },
    },
  });
  const animate = () => {
    requestAnimationFrame(animate);
    material.uniforms.uTime.value = clock.getElapsedTime() / 10;
  };
  animate();
  const sphear = new THREE.Mesh(geomentry, material);
  return (
    <>
      <primitive object={sphear} />
    </>
  );
};

export default Plane;
