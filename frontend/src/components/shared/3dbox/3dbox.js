/*import { useFrame, useLoader } from "@react-three/fiber";
import { useState, useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";
import { useSpring, useMotionValue } from "framer-motion";
import { SRGBColorSpace } from "three";

function Cube({ progress }) {
  const mesh = useRef(null);

  // Load textures
  const texturePaths = [
    "/images/adi-goldstein-EUsVwEOsblE-unsplash.jpg",
    "/images/alex-knight-2EJCSULRwC8-unsplash.jpg",
    "/images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg",
    "/images/adi-goldstein-EUsVwEOsblE-unsplash.jpg",
    "/images/alex-knight-2EJCSULRwC8-unsplash.jpg",
    "/images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg",
  ];
  const textures = useLoader(TextureLoader, texturePaths);
  textures.forEach((texture) => (texture.colorSpace = SRGBColorSpace));

  // State for split effect
  const [isSplit, setIsSplit] = useState(false);

  // Define motion values and springs individually at the top level
  const motionValue0 = useMotionValue(0);
  const motionValue1 = useMotionValue(0);
  const motionValue2 = useMotionValue(0);
  const motionValue3 = useMotionValue(0);
  const motionValue4 = useMotionValue(0);
  const motionValue5 = useMotionValue(0);

  const position0 = useSpring(motionValue0, { damping: 10, stiffness: 100 });
  const position1 = useSpring(motionValue1, { damping: 10, stiffness: 100 });
  const position2 = useSpring(motionValue2, { damping: 10, stiffness: 100 });
  const position3 = useSpring(motionValue3, { damping: 10, stiffness: 100 });
  const position4 = useSpring(motionValue4, { damping: 10, stiffness: 100 });
  const position5 = useSpring(motionValue5, { damping: 10, stiffness: 100 });

  // Automatic rotation speeds (randomized)
  const rotationSpeed = useRef({
    x: Math.random() * 0.02 - 0.01,
    y: Math.random() * 0.02 - 0.01,
    z: Math.random() * 0.02 - 0.01,
  });

  // Handle mouse enter (split effect)
  const handleMouseEnter = () => {
    setIsSplit(true);
    position0.set(1.5);
    position1.set(-1.5);
    position2.set(-1.5);
    position3.set(1.5);
    position4.set(1.5);
    position5.set(-1.5);

    setTimeout(() => {
      setIsSplit(false);
      position0.set(0);
      position1.set(0);
      position2.set(0);
      position3.set(0);
      position4.set(0);
      position5.set(0);
    }, 2000);
  };

  // Apply continuous rotation
  useFrame(() => {
    if (mesh.current && !isSplit) {
      mesh.current.rotation.x += rotationSpeed.current.x;
      mesh.current.rotation.y += rotationSpeed.current.y;
      mesh.current.rotation.z += rotationSpeed.current.z;
    }
  });

  return (
    <motion.group ref={mesh} rotation-y={progress} rotation-x={progress} onPointerEnter={handleMouseEnter}>
      {/* Cube Faces */}
      <motion.mesh position={[0, 0, position0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[0]} />
      </motion.mesh>

      <motion.mesh position={[0, 0, -position1]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[1]} />
      </motion.mesh>

      <motion.mesh position={[-position2, 0, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[2]} />
      </motion.mesh>

      <motion.mesh position={[position3, 0, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[3]} />
      </motion.mesh>

      <motion.mesh position={[0, position4, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[4]} />
      </motion.mesh>

      <motion.mesh position={[0, -position5, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[5]} />
      </motion.mesh>
    </motion.group>
  );
}

export default Cube;
*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CubeContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 800px;
  margin:250px;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transform: ${({ rotation }) => rotation};
`;

const CubeFace = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: ${({ color }) => color};
  border: 2px solid black;
`;

const FrontFace = styled(CubeFace)`
  transform: translateZ(100px);
`;

const BackFace = styled(CubeFace)`
  transform: translateZ(-100px) rotateY(180deg);
`;

const RightFace = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(100px);
`;

const LeftFace = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(100px);
`;

const TopFace = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(100px);
`;

const BottomFace = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(100px);
`;

const CubeViewer = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setRotation({ x: -e.clientY, y: e.clientX });
        };

        document.addEventListener('mousemove',
            handleMouseMove);

        return () => {
            document.removeEventListener('mousemove',
                handleMouseMove);
        };
    }, []);

    return (
        <CubeContainer>
            <Cube rotation={`
            rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`}>
                <FrontFace color="red"></FrontFace>
                <BackFace color="blue"></BackFace>
                <RightFace color="green"></RightFace>
                <LeftFace color="yellow"></LeftFace>
                <TopFace color="orange"></TopFace>
                <BottomFace color="purple"></BottomFace>
            </Cube>
        </CubeContainer>
    );
};

export default CubeViewer;
