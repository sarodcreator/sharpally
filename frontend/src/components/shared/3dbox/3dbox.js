import { useFrame, useLoader } from '@react-three/fiber';
import { useState, useRef, useEffect } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { motion } from 'framer-motion-3d';
import { useSpring, useMotionValue } from 'framer-motion';

function Cube({ progress }) {
    const mesh = useRef(null);

    // Load textures
    const texturePaths = [
        "/assets/1.jpg",
        "/assets/2.jpg",
        "/assets/3.jpg",
        "/assets/4.jpg",
        "/assets/5.jpg",
        "/assets/6.jpg",
    ];
    const textures = texturePaths.map(path => useLoader(TextureLoader, path));

    // State for split effect
    const [isSplit, setIsSplit] = useState(false);

    // Motion values for face separation
    const positions = Array(6).fill(null).map(() => useSpring(useMotionValue(0), { damping: 10, stiffness: 100 }));

    // Automatic rotation speeds (randomized)
    const rotationSpeed = useRef({
        x: Math.random() * 0.02 - 0.01,
        y: Math.random() * 0.02 - 0.01,
        z: Math.random() * 0.02 - 0.01,
    });

    // Handle mouse enter (split effect)
    const handleMouseEnter = () => {
        setIsSplit(true);
        positions[0].set(1.5);  // Front moves forward
        positions[1].set(-1.5); // Back moves backward
        positions[2].set(-1.5); // Left moves left
        positions[3].set(1.5);  // Right moves right
        positions[4].set(1.5);  // Top moves up
        positions[5].set(-1.5); // Bottom moves down

        // Reassemble after 2 seconds
        setTimeout(() => {
            setIsSplit(false);
            positions.forEach(p => p.set(0)); // Move all faces back
        }, 2000);
    };

    // Apply continuous rotation
    useFrame(() => {
        if (mesh.current && !isSplit) { // Rotate only when cube is whole
            mesh.current.rotation.x += rotationSpeed.current.x;
            mesh.current.rotation.y += rotationSpeed.current.y;
            mesh.current.rotation.z += rotationSpeed.current.z;
        }
    });

    return (
        <motion.group
            ref={mesh}
            rotation-y={progress}
            rotation-x={progress}
            onPointerEnter={handleMouseEnter}
        >
            <motion.mesh position-z={positions[0]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[0]} attach="material-0" />
            </motion.mesh>

            <motion.mesh position-z={positions[1]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[1]} attach="material-1" />
            </motion.mesh>

            <motion.mesh position-x={positions[2]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[2]} attach="material-2" />
            </motion.mesh>

            <motion.mesh position-x={positions[3]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[3]} attach="material-3" />
            </motion.mesh>

            <motion.mesh position-y={positions[4]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[4]} attach="material-4" />
            </motion.mesh>

            <motion.mesh position-y={positions[5]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[5]} attach="material-5" />
            </motion.mesh>
        </motion.group>
    );
}

export default Cube;