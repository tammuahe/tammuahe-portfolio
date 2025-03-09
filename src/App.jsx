import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useState } from "react";
import { SectionProvider } from "./context/SectionContext";

function App() {
  const [section, setSection] = useState(0);
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[1,1,2]} intensity={5} />
      <ScrollControls pages={6} damping={0.15}>
        <SectionProvider>
          <Experience />
        </SectionProvider>
        <Scroll html>
          <SectionProvider>
            <Interface />
          </SectionProvider>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
