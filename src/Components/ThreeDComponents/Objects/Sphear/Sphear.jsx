/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import vertexShader from "../../../../Shader/Shader1/vertexShader.glsl";
import fragmentShader from "../../../../Shader/Shader1/fragmentShader.glsl";
import * as THREE from "three";
const clock = new THREE.Clock();

const Sphear = () => {
  const geomentry = new THREE.SphereGeometry(2, 10, 10);
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: { type: "f", value: 0.0 },
    },
  });
  const sphear = new THREE.Mesh(geomentry, material);
  sphear.position.set(6, 0, 0);
  // console.log(sphear.)
  const animate = () => {
    requestAnimationFrame(animate);
    material.uniforms.uTime.value = clock.getElapsedTime() / 10;
  };
  animate();
  return (
    <>
      <primitive object={sphear} />
    </>
  );
};

export default Sphear;
