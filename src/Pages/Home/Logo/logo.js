import React from 'react';
import * as THREE from 'three/src/Three';
import { useSpring, animated } from 'react-spring/three'

export default function LogoEffect() {

    const [active, setActive] = React.useState(false)
    const [hovered, setHover] = React.useState(false)
    const vertices = [[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]
    const { color, pos, ...props } = useSpring({
        color: active ? 'hotpink' : 'white',
        pos: active ? [0, 0, 2] : [0, 0, 0],
        'material-opacity': hovered ? 1 : 0.6,
        scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
        rotation: active ? [THREE.Math.degToRad(180), 0, THREE.Math.degToRad(45)] : [0, 0, 0],
        config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
    });

    function openPrincipal() {
        let url = '/principal';
        window.location.href = url;
    };

    const Active = () => {
        setActive(!active)
        setTimeout(() => {
            openPrincipal()
        }, 1800);
    };

    return (
        <group>
            <animated.line position={pos}>
                <geometry attach="geometry" vertices={vertices.map(v => new THREE.Vector3(...v))} />
                <animated.lineBasicMaterial attach="material" color={color} />
            </animated.line>
            <animated.mesh
                onClick={Active}
                onPointerOver={e => setHover(true)}
                onPointerOut={e => setHover(false)}
                {...props}>
                <octahedronGeometry attach="geometry" />
                <meshStandardMaterial attach="material" color="grey" transparent />
            </animated.mesh>
        </group>
    )
};