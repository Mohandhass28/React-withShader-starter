/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";

const Test = () => {
  const ref = useRef(null);
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const boject = new THREE.Mesh(geometry, material);
  return (
    <>
      <primitive object={boject} />
    </>
  );
};

export default Test;
