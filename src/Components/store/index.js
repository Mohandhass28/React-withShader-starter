import { proxy } from 'valtio';
import * as THREE from "three"

const state = proxy({
  home: true,
  about: false,
  contact: false,
  homefrom: 'load',
  aboutfrom: 'load',
  contactfrom: 'load',
});
  
export default state;







// if (snap.about) {
//   gsap.to(sphear.position, {
//     x: -6,
//     y: 0,
//     z: 0,
//     duration: 2,
//   })
// }
// if (snap.home) {
//   gsap.to(sphear.position, {
//     x: 6,
//     y: 0,
//     z: 0,
//     duration: 2,
//   })
// }