import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./Components/Earth";
import { Suspense } from "react";
import { HeaderSection } from "./Components/HeaderSection";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <CanvasContainer>
      <HeaderSection/>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
