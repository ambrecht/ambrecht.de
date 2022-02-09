import * as THREE from 'three';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import { CubeTextureLoader, Mesh, Euler } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styled from 'styled-components';
import { useViewportScrollCoords, useWindowScrollCoords } from 'web-api-hooks';
import useMousePosition from '../../Hooks/useMousePosition';
import Test from '../../public/Rect.svg';

extend({ OrbitControls });

const CameraControls = (props) => {
  const { x, y } = useMousePosition();
  const [windowScrollX, windowScrollY] = useWindowScrollCoords();

  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();

  camera.position.y -= windowScrollY * 0.02;
  /*   camera.position.y = -THREE.MathUtils.lerp(
    camera.position.y,
    (y * Math.PI) / 10,
    0.1,
  ); */

  camera.position.x = -THREE.MathUtils.lerp(
    camera.position.x,
    (x * Math.PI) / 200,
    0.05,
  );

  camera.position.y = THREE.MathUtils.lerp(
    camera.position.y,
    (y * Math.PI) / 200,
    0.05,
  );

  /* camera.position.y = THREE.MathUtils.lerp(
    camera.position.y,
    (y * Math.PI) / 10,
    0.1,
  ); */

  //camera.position.y = -20;

  //

  //camera.rotation.z = windowScrollY * -0.002;

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();

  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={true}
      autoRotateSpeed={0.5}
    />
  );
};

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    './cubemap/px.jpg',
    './cubemap/nx.jpg',
    './cubemap/py.jpg',
    './cubemap/ny.jpg',
    './cubemap/pz.jpg',
    './cubemap/nz.jpg',
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

// Lights
function App(props) {
  return (
    <>
      <UniverseContainer>
        <Canvas
          camera={{
            position: [
              -0.000002885081231817927, 4.999999999997496,
              0.000004083935454970389,
            ],
          }}
        >
          <SkyBox />
          <CameraControls />
        </Canvas>
      </UniverseContainer>
    </>
  );
}
export default App;

const UniverseContainer = styled.div`
  canvas {
  width: 100vw;
  height: 120vh;
`;
