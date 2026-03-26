
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Earth } from "./earth.jsx";
import Particles from "./Particles.jsx";
import React, { Suspense } from 'react';
import { OrbitControls, Preload } from "@react-three/drei";

/* ─── Tune planet position and scale here ───────────────────────────
   position: [x, y, z]  — positive x moves right, positive y moves up
   scale:    number      — bigger = larger planet
   ─────────────────────────────────────────────────────────────────── */
const DESKTOP = {
    position: [-10, -1, -4],
    scale: 2.5,
};

const MOBILE = {
    position: [0, 5, 0],
    scale: 1.7,
};

/* Particle shell radii — in scene units relative to the group above.
   innerRadius should be slightly less than scale * ~1 (model radius).
   outerRadius controls how far specs drift before resetting.          */
const PARTICLE_INNER = 2.8;
const PARTICLE_OUTER = 6.0;

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    const { position, scale } = isMobile ? MOBILE : DESKTOP;

    return (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 45 }}
            style={{ height: '100vh', width: '100%' }}
            frameloop="always"
            gl={{ preserveDrawingBuffer: true }}
        >
            <ambientLight intensity={40} color="#1a1a40" />
            <directionalLight position={[0, 5, 7]} intensity={2} />
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            {/* Earth + specs share the same group so particles orbit the globe */}
            <Suspense fallback={null}>
            <group position={position}>
                {/* Particles as sibling of Earth — same local origin */}
                <Particles
                    count={400}
                    innerRadius={PARTICLE_INNER}
                    outerRadius={PARTICLE_OUTER}
                />
                <group scale={scale} rotation={[0, Math.PI * 12, 0]}>
                    <Earth />
                </group>
            </group>
             <Preload all />
</Suspense>
        </Canvas>
    );
};

export default HeroExperience;