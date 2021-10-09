import React, {useRef} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, pointLight} from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../assets/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/8k_earth_clouds.jpg";
import { TextureLoader } from "three";


export function Earth(props) {

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);
  
  const earthRef = useRef();
  const cloudRef = useRef();

  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime/6;
    cloudRef.current.rotation.y = elapsedTime/6;
  });
  

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea"
      position={[3, 0 ,3]}
      intensity={1.2}
      />

      <Stars radius={300} depth={60}
      count={20000} 
      factor={7} 
      saturation={0}
      faded={true}
      />
      <mesh ref={cloudRef}>
        <sphereGeometry args={[2.005, 50, 50]}/>
        <meshPhongMaterial map={cloudsMap} 
        opacity={0.4} 
        depthWrite={true} 
        transparent={true} 
        side={THREE.DoubleSide}/>
      </mesh>
      <mesh ref={earthRef}>
          <sphereGeometry args={[2, 50, 50]} />
          <meshPhongMaterial specularMap ={specularMap}/>
          <meshStandardMaterial map = {colorMap} normalMap = {normalMap} metalness={0.4} roughness={0.7}/>
          <OrbitControls enableZoom={true} 
            enablePan={true} 
            enableRotate={true} 
            zoomSpeed={0.6} 
            panSpeed={0.5} 
            rotateSpeed={0.4}
            />
      </mesh>
    </>
  );
}
