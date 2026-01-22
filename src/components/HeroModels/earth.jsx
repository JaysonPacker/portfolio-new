import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Earth Component
 * 
 * Renders the planet GLB model with custom materials.
 * Supports an onLoad callback to signal when the model is ready.
 * 
 * @param {Function} onLoad - Optional callback when model loads
 */
export const Earth = ({ onLoad }) => {
    const { scene } = useGLTF('/models/planet.glb');
    const groupRef = useRef();
    const hasLoadedRef = useRef(false);

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                if (child.name === 'Boolean_2' ||
                    child.name === 'Boolean' ||
                    child.name === 'Boolean_3') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x000000,
                        metalness: 0.2,
                        roughness: 0.6,
                    });
                }
                else if (child.name === 'Sphere_3') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0xffffff,
                        metalness: 0.1,
                        roughness: 0.7,
                        wireframe: true,
                    });
                }
                else {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0xffffff,
                        metalness: 0.1,
                        roughness: 0.7,
                    });
                }

                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        // Signal that the model has loaded
        if (!hasLoadedRef.current && onLoad) {
            hasLoadedRef.current = true;
            onLoad();
        }
    }, [scene, onLoad]);

    // Add rotation animation
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.003;
        }
    });

    return <primitive ref={groupRef} object={scene} />;
};

// Preload the model to cache it
useGLTF.preload('/models/planet.glb');
