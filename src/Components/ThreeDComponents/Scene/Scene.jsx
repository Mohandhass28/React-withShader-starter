/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Canvas } from "react-three-fiber";
import Sphear from "../Objects/Sphear/Sphear";
import Plane from "../../ThreeDComponents/Objects/Background/Plane";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Noise,
  Vignette,
  WaterEffect,
  Glitch,
  GodRays,
  ColorDepth
} from "@react-three/postprocessing";
import * as THREE from "three";
import CameraRig from "../CameraRig/CameraRig";
import CamaraAnimation from "../../CamaraAnimation/CamaraAnimation";

const Scene = () => {
  return (
    <Canvas>
      <EffectComposer>
        <CameraRig position={[0, -1, 12]} />
        <ambientLight />
        <Sphear />
        <Plane />
        <CamaraAnimation/>
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;
