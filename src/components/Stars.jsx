import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
    const Stars = (props) => {
        const ref = useRef();
        const [sphere] = useState(() => random.inSphere(new Float32Array(2500), { radius: 1.5 }));
        useFrame((state, delta) => {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        });

        return (
            <group rotation={[0, 0, Math.PI]}>
                <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                    <PointMaterial transparent color="#E8313F" size={0.003} sizeAttenuation={true} depthWrite={false} />
                </Points>
            </group>
        );
    };

    return (
        <div id="stars" className="fixed h-full w-full -z-[1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default Stars;
