"use client";
import React, { Suspense, useCallback, useMemo, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';

const CameraControls = React.memo(() => (
  <OrbitControls
    autoRotate
    autoRotateSpeed={-0.1}
    enableRotate={false}
    enableZoom={false}
  />
));

const Points = React.memo(() => {
  const imgTex = useLoader(THREE.TextureLoader, './circle.png');
  const bufferRef = useRef<THREE.BufferAttribute | null>(null);

  let t = 0;
  const graph = useCallback((x: number, z: number) => (
    Math.sin(0.002 * (x ** 2 + z ** 2 + t)) * 3
  ), [t]);

  const count = 50;
  const sep = 6;
  const positions = useMemo(() => {
    const posArray = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y = graph(x, z);
        posArray.push(x, y, z);
      }
    }
    return new Float32Array(posArray);
  }, [count, sep, graph]);

  useFrame(() => {
    t += 10;
    const positions = bufferRef.current!.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current!.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach='attributes-position'
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x708090}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
});

const AnimationCanvas = React.memo(() => (
  <Canvas
    style={{ pointerEvents: 'none' }}
    camera={{ position: [100, 10, 0], fov: 75 }}
  >
    <Suspense fallback={null}>
      <Points />
    </Suspense>
    <CameraControls />
  </Canvas>
));

const Ripple: React.FC = () => (
  <div className="w-screen h-screen bg-custom-color">
    <Suspense fallback={null}>
      <AnimationCanvas />
    </Suspense>
  </div>
);

export default React.memo(Ripple);
