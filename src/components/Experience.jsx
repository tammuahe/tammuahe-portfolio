import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshStandardMaterial } from "three";

export const Experience = () => {
  const scroll = useScroll()
  const objectRef = useRef()
  useFrame(({ clock }) => {
    objectRef.current.rotation.x = scroll.offset * 2 * Math.PI
    objectRef.current.rotation.y = scroll.delta * 2 * Math.PI
    objectRef.current.rotation.z = scroll.offset * 2 * Math.PI
  })
  return (
    <mesh ref={objectRef}>
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};
