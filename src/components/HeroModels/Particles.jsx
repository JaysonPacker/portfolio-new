import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';

const Particles = ({ count = 80 }) => {
    const mesh = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 25,
                    Math.random() * 15 + 5,
                    (Math.random() - 0.5) * 15,
                ],
                speed: 0.005 + Math.random() * 0.001,
                rotation: [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                ],
                rotationSpeed: [
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                ],
            });
        }
        return temp;
    }, [count]);

    useFrame(() => {
        if (!mesh.current) return;

        mesh.current.children.forEach((cube, i) => {
            cube.position.y -= particles[i].speed;
            if (cube.position.y < -5) {
                cube.position.y = Math.random() * 15 + 5;
            }

            cube.rotation.x += particles[i].rotationSpeed[0];
            cube.rotation.y += particles[i].rotationSpeed[1];
            cube.rotation.z += particles[i].rotationSpeed[2];
        });
    });

    // Create rounded box geometry once
    const roundedBoxGeometry = useMemo(() => new RoundedBoxGeometry(0.1, 0.1, 0.1, 2, 0.02), []);

    return (
        <group ref={mesh}>
            {particles.map((particle, i) => (
                <mesh
                    key={i}
                    position={particle.position}
                    rotation={particle.rotation}
                    geometry={roundedBoxGeometry}
                >
                    <meshBasicMaterial color="#000000" />
                    <lineSegments>
                        <edgesGeometry attach="geometry" args={[roundedBoxGeometry]} />
                        <lineBasicMaterial attach="material" color="#ffffff" />
                    </lineSegments>
                </mesh>
            ))}
        </group>
    );
};

export default Particles;