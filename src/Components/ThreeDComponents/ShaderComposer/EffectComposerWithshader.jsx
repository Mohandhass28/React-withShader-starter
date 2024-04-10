/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { ShaderPass } from "postprocessing";
import vertexShader from "../../../Shader/ComShader/vertexShader.glsl";
import fragmentShader from "../../../Shader/ComShader/fragmentShader.glsl";
import React from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";

const EffectComposerWithshader = () => {
  const Clock = new THREE.Clock();
  const metrial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    transparent : true,
    opacity : 1,
    uniforms: {
      uTime: { type: "f", value: 0.0 },
    },
  });
  const effect = new ShaderPass(metrial);
  useFrame(() => {
    metrial.uniforms.uTime.value = Clock.getElapsedTime();
  });
  return (
    <>
      <primitive object={effect} dispose={null}/>
    </>
  );
};

export default EffectComposerWithshader;
