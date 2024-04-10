/* eslint-disable no-unused-vars */
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { useSnapshot } from "valtio";
import state from "../../Components/store/index";
import { useEffect, useState } from "react";

const CamaraAnimation = () => {
  const snap = useSnapshot(state);
  const { scene, camera } = useThree();
  let sphear;
  let camerapos = new THREE.Vector3();
  let sphearpos = new THREE.Vector3();

  useFrame((states) => {
    states.camera.lookAt(new THREE.Vector3(0, 0, 0));
  });

  setTimeout(() => {
    sphear = scene.children[0].children[3];
    // camerapos = camera.position.copy(camera.position);
    // sphearpos = sphear.position.copy(sphear.position);
    // console.log(camerapos)
    if (snap.about) {
      gsap.to(camera.position, {
        x: -7,
        y: 0,
        z: 0,
        duration: 2,
      });
      gsap.to(sphear.position, {
        x: 6,
        y: 0,
        z: -7,
        duration: 1,
      });
    }
    if (snap.home ) {
      gsap.fromTo(
        camera.position,
        { x: 0, y: 0, z: 14, direction: 2 },
        { x: 0, y: 0, z: 14, direction: 2 }
      );
      gsap.fromTo(
        sphear.position,
        { x: -6, y: 0, z: 0, direction: 20 },
        { x: 6, y: 0, z: 0, direction: 20 }
      );
    }
  }, 1);
  return <></>;
};

export default CamaraAnimation;
