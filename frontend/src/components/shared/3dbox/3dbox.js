import { useFrame, useLoader } from "@react-three/fiber";
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

  // Ensure textures use the correct color space
  textures.forEach((texture) => (texture.colorSpace = SRGBColorSpace));

  // State for split effect
  const [isSplit, setIsSplit] = useState(false);

  // Define motion values and springs for each face **outside** of the loop
  const motionValues = [
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
  ];
  
  const positions = motionValues.map((motionValue) =>
    useSpring(motionValue, { damping: 10, stiffness: 100 })
  );

  // Automatic rotation speeds (randomized)
  const rotationSpeed = useRef({
    x: Math.random() * 0.02 - 0.01,
    y: Math.random() * 0.02 - 0.01,
    z: Math.random() * 0.02 - 0.01,
  });

  // Handle mouse enter (split effect)
  const handleMouseEnter = () => {
    setIsSplit(true);
    positions[0].set(1.5); // Front moves forward
    positions[1].set(-1.5); // Back moves backward
    positions[2].set(-1.5); // Left moves left
    positions[3].set(1.5); // Right moves right
    positions[4].set(1.5); // Top moves up
    positions[5].set(-1.5); // Bottom moves down

    // Reassemble after 2 seconds
    setTimeout(() => {
      setIsSplit(false);
      positions.forEach((p) => p.set(0)); // Move all faces back
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
      <motion.mesh position={[0, 0, positions[0].get()]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[0]} />
      </motion.mesh>

      <motion.mesh position={[0, 0, positions[1].get() * -1]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[1]} />
      </motion.mesh>

      <motion.mesh position={[positions[2].get() * -1, 0, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[2]} />
      </motion.mesh>

      <motion.mesh position={[positions[3].get(), 0, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[3]} />
      </motion.mesh>

      <motion.mesh position={[0, positions[4].get(), 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[4]} />
      </motion.mesh>

      <motion.mesh position={[0, positions[5].get() * -1, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={textures[5]} />
      </motion.mesh>
    </motion.group>
  );
}

export default Cube;