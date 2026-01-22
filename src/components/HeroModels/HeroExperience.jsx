import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {Earth} from "./earth.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
    const isMobile = useMediaQuery({query: "(max-width: 760px)" });
    const isTablet = useMediaQuery({query: "(max-width: 1024px)" });

    return (
        <Canvas camera={{position:[0,0,15],fov:45}}>
            <ambientLight intensity={40} color="#1a1a40"/>
            <directionalLight position={[0,5,7]} intensity={2} />
            <OrbitControls
                enablePan={true}
                enableZoom={!isTablet}
                maxDistance={20}
                minPolarAngle={Math.PI/5}
                maxPolarAngle={Math.PI/2}
            />
            {/* Particles spread across entire canvas */}
            <Particles count={150}/>

            {/* Earth model positioned to the right */}
            <group
                scale={isMobile ? 1.7 : 2}
                position={isMobile ? [0, 0, 0] : [5, -1, -7]} // Changed: moved back on z-axis
                rotation={[0, Math.PI*12, 0]}
            >
                <Earth/>
            </group>
        </Canvas>
    )
}
export default HeroExperience