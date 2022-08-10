import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
    const Stars = (props) => {
        const [globalCoords, setGlobalCoords] = useState({ x: 0.1, y: 0.1 });

        useEffect(() => {
            const handleWindowMouseMove = (event) => {
                setGlobalCoords({
                    x:
                        event.screenX / window.innerWidth >= 0.5
                            ? event.screenX / window.innerWidth - 0.5
                            : -(0.5 - event.screenX / window.innerWidth),
                    y:
                        (window.innerHeight - event.screenY + 100) / window.innerHeight >= 0.5
                            ? (window.innerHeight - event.screenY + 100) / window.innerHeight - 0.5
                            : -(0.5 - (window.innerHeight - event.screenY + 100) / window.innerHeight),
                });
            };
            window.addEventListener("mousemove", handleWindowMouseMove);

            return () => {
                window.removeEventListener("mousemove", handleWindowMouseMove);
            };
        }, []);

        const ref = useRef();
        const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
        useFrame((state, delta) => {
            ref.current.rotation.x += (delta * globalCoords.x) / 2;
            ref.current.rotation.y += (delta * globalCoords.y) / 2;
        });

        return (
            <group rotation={[0, 0, Math.PI / 2]}>
                <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                    <PointMaterial transparent color="#E8313F" size={0.003} sizeAttenuation={true} depthWrite={false} />
                </Points>
            </group>
        );
    };

    return (
        <Canvas
            id="stars"
            style={{ position: "fixed", height: "100%", width: "100%", zIndex: "-1" }}
            camera={{ position: [0, 0, 1] }}
        >
            <Stars />
        </Canvas>
    );
};

export default Stars;
