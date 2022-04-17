import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";

const Laptop = (styles) => {
    const vec = new THREE.Vector3();

    function Model({ hinge, ...props }) {
        const group = useRef();
        const { nodes, materials } = useGLTF("/mac-draco.glb");
        const [hovered, setHovered] = useState(false);
        useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered]);
        useFrame((state) => {
            const t = state.clock.getElapsedTime();
            state.camera.position.lerp(vec.set(0, 0, -24), 0.1);
            state.camera.lookAt(0, 0, 0);
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 8 + 0.25, 0.1);
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 4, 0.1);
            group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 4) / 4, 0.1);
            group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t)) / 3, 0.1);
        });
        return (
            <group
                ref={group}
                {...props}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHovered(true);
                }}
                onPointerOut={(e) => setHovered(false)}
                dispose={null}
            >
                <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
                    <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh material={materials.aluminium} geometry={nodes["Cube008"].geometry} />
                        <mesh material={materials["matte.001"]} geometry={nodes["Cube008_1"].geometry} />
                        <mesh material={materials["screen.001"]} geometry={nodes["Cube008_2"].geometry} />
                    </group>
                </three.group>
                <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
                <group position={[0, -0.1, 3.39]}>
                    <mesh material={materials.aluminium} geometry={nodes["Cube002"].geometry} />
                    <mesh material={materials.trackpad} geometry={nodes["Cube002_1"].geometry} />
                </group>
                <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
            </group>
        );
    }

    const [open] = useState(true);
    const props = useSpring({ open: Number(open) });
    return (
        <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 0, 0], fov: 35 }}
            style={{ position: "absolute", width: 500, height: 500, top: 200 }}
        >
            <three.pointLight position={[10, 10, 10]} intensity={1.5} />
            <Suspense fallback={null}>
                <group rotation={[0, Math.PI, 0]}>
                    <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
                </group>
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    );
};

export default Laptop;
