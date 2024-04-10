/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei";


const CameraRig = (props) => {
  return (
    <>
      <PerspectiveCamera makeDefault {...props} />
    </>
  );
};

export default CameraRig;
