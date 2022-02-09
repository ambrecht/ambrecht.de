import * as THREE from 'three';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import flatten from 'lodash-es/flatten';
import { SVGLoader as loader } from 'three/examples/jsm/loaders/SVGLoader';
import SVG_SHVITI_URL from '../public/dreieck.svg';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

// Promise of an SVG parsed into paths
// with which the threejs engine will make shapes
const svgResource = new Promise((resolve) =>
  new loader().load(SVG_SHVITI_URL, (shapes) => {
    resolve(
      flatten(
        shapes.paths.map((group, index) => {
          return group.toShapes(true).map((shape) => {
            const fillColor = group.userData.style.fill;
            return { shape, color: fillColor, index };
          });
        }),
      ),
    );
  }),
);

/**
 * A very special thanks to @neftaly for open source contribution.
 * https://gist.github.com/neftaly/7c4d96f1ba37aada7f366b5393e59ddb
 *
 * Use a shape of the SVG to associate a Mesh Material with a Geometry
 */
function SvgShape({ shape, color, index }) {
  const mesh = useRef();
  return (
    <mesh ref={mesh}>
      <shapeBufferGeometry attach="geometry" args={[shape]} />
      <meshBasicMaterial
        aspect={window.innerWidth / window.innerHeight}
        attach="material"
        color={color}
        opacity={1}
        side={THREE.DoubleSide}
        flatShading={true}
        depthWrite={true}
        /*
          HACK: Offset SVG polygons by index
          The paths from SVGLoader Z-fight.
          This fix causes stacking problems with detailed SVGs.
        */
        polygonOffset
        polygonOffsetFactor={index * -0.1}
      />
    </mesh>
  );
}

function Scene() {
  const [shapes, set] = useState([]);
  useEffect(() => svgResource.then(set), []);
  return (
    <group
      color={new THREE.Color(0xb0b0b0)}
      position={[-50, 100, 10]}
      scale={[0.125, 0.125, 0.125]}
      rotation={[
        THREE.Math.degToRad(0),
        THREE.Math.degToRad(180),
        THREE.Math.degToRad(180),
      ]}
    >
      {shapes.map((item) => (
        <SvgShape key={item.shape.uuid} {...item} />
      ))}
    </group>
  );
}

const Camera = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();

  camera.position.z = 200;

  useFrame(() => controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
    />
  );
};

/**
 * Put it all together.  Flat Shviti.svg floating around.
 * 0. Canvas gives us the WebGL rendering environment,
 * 2. Control the object in the 3D scene
 * 2. I still don't know what the light stuff does,
 * 3. And put the SVG'd-up Scene inside... ?
 * @return {JSX}
 */
const FloatingShvitiExperience = () => {
  return (
    <div className="main">
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <Camera />
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[0, 0, 200]} />
        <Scene />
      </Canvas>
    </div>
  );
};

SvgShape.propTypes = {
  color: PropTypes.any,
  index: PropTypes.any,
  shape: PropTypes.shape,
};

export default FloatingShvitiExperience;
