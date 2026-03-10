import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Particles — tiny grayscale specs drifting outward from a spherical
 * shell centred on the Earth. Uses a single THREE.Points draw call.
 *
 * Props
 *   count        number of specs          (default 400)
 *   innerRadius  spawn radius, inner edge (default 2.2 scene units)
 *   outerRadius  reset boundary           (default 5.5 scene units)
 */
const Particles = ({ count = 400, innerRadius = 2.2, outerRadius = 5.5 }) => {
    const pointsRef = useRef();

    // Build geometry + velocity buffer once
    const { geometry, velocities } = useMemo(() => {
        const pos  = new Float32Array(count * 3);
        const col  = new Float32Array(count * 3);
        const vel  = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const r     = innerRadius + Math.random() * (outerRadius - innerRadius);
            const theta = Math.random() * Math.PI * 2;
            const phi   = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            pos[i * 3]     = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;

            // Outward velocity
            const len   = Math.sqrt(x * x + y * y + z * z) || 1;
            const speed = 0.003 + Math.random() * 0.005;
            vel[i * 3]     = (x / len) * speed;
            vel[i * 3 + 1] = (y / len) * speed;
            vel[i * 3 + 2] = (z / len) * speed;

            // Grayscale near-black → white
            const b = 0.1 + Math.random() * 0.9;
            col[i * 3]     = b;
            col[i * 3 + 1] = b;
            col[i * 3 + 2] = b;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        geo.setAttribute("color",    new THREE.BufferAttribute(col, 3));

        return { geometry: geo, velocities: vel };
    }, [count, innerRadius, outerRadius]);

    useFrame(() => {
        if (!pointsRef.current) return;
        const pos = pointsRef.current.geometry.attributes.position;
        const arr = pos.array;

        for (let i = 0; i < count; i++) {
            arr[i * 3]     += velocities[i * 3];
            arr[i * 3 + 1] += velocities[i * 3 + 1];
            arr[i * 3 + 2] += velocities[i * 3 + 2];

            const x = arr[i * 3];
            const y = arr[i * 3 + 1];
            const z = arr[i * 3 + 2];

            // Reset to inner shell when spec drifts past outer boundary
            if (Math.sqrt(x * x + y * y + z * z) > outerRadius * 1.5) {
                const theta = Math.random() * Math.PI * 2;
                const phi   = Math.acos(2 * Math.random() - 1);
                arr[i * 3]     = innerRadius * Math.sin(phi) * Math.cos(theta);
                arr[i * 3 + 1] = innerRadius * Math.sin(phi) * Math.sin(theta);
                arr[i * 3 + 2] = innerRadius * Math.cos(phi);
            }
        }

        pos.needsUpdate = true;
    });

    return (
        <points ref={pointsRef} geometry={geometry}>
            <pointsMaterial
                size={0.06}
                vertexColors
                transparent
                opacity={0.9}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
};

export default Particles;