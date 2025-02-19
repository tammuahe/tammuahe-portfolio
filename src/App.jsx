import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/interface";

function App() {
  return (
    <Canvas
      className="border"
      shadows
      camera={{ position: [3, 3, 3], fov: 30 }}
    >
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={4} damping={0.2}>
        <Experience />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
