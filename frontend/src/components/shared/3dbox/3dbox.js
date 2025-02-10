import { useFrame, useLoader } from '@react-three/fiber';
import { useState, useRef, useEffect } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { motion } from 'framer-motion-3d';
import { useSpring, useMotionValue } from 'framer-motion';
import { SRGBColorSpace } from 'three';

function Cube({ progress }) {
    const mesh = useRef(null);

    // Load textures
    const texturePaths = [
        require('../../../images/adi-goldstein-EUsVwEOsblE-unsplash.jpg'),
        require('../../../images/alex-knight-2EJCSULRwC8-unsplash.jpg'),
        require('../../../images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg'),
        require('../../../images/adi-goldstein-EUsVwEOsblE-unsplash.jpg'),
        require('../../../images/alex-knight-2EJCSULRwC8-unsplash.jpg'),
        require('../../../images/christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg')
    ];
    const textures = useLoader(TextureLoader, texturePaths);

    // Ensure textures use the correct color space
    textures.forEach(texture => (texture.colorSpace = SRGBColorSpace));

    // State for split effect
    const [isSplit, setIsSplit] = useState(false);

    // Motion values for face separation (fixed)
    const positions = Array.from({ length: 6 }, () => useMotionValue(0));
    const springs = positions.map(p => useSpring(p, { damping: 10, stiffness: 100 }));

    // Automatic rotation speeds (randomized)
    const rotationSpeed = useRef({
        x: Math.random() * 0.02 - 0.01,
        y: Math.random() * 0.02 - 0.01,
        z: Math.random() * 0.02 - 0.01,
    });

    // Handle mouse enter (split effect)
    const handleMouseEnter = () => {
        setIsSplit(true);
        springs[0].set(1.5);  // Front moves forward
        springs[1].set(-1.5); // Back moves backward
        springs[2].set(-1.5); // Left moves left
        springs[3].set(1.5);  // Right moves right
        springs[4].set(1.5);  // Top moves up
        springs[5].set(-1.5); // Bottom moves down

        // Reassemble after 2 seconds
        setTimeout(() => {
            setIsSplit(false);
            springs.forEach(p => p.set(0)); // Move all faces back
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
            <motion.mesh position={[0, 0, springs[0].get()]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[0]} attach="material" />
            </motion.mesh>

            <motion.mesh position={[0, 0, springs[1].get()]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[1]} attach="material" />
            </motion.mesh>

            <motion.mesh position={[springs[2].get(), 0, 0]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[2]} attach="material" />
            </motion.mesh>

            <motion.mesh position={[springs[3].get(), 0, 0]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[3]} attach="material" />
            </motion.mesh>

            <motion.mesh position={[0, springs[4].get(), 0]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[4]} attach="material" />
            </motion.mesh>

            <motion.mesh position={[0, springs[5].get(), 0]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial map={textures[5]} attach="material" />
            </motion.mesh>
        </motion.group>
    );
}

export default Cube;