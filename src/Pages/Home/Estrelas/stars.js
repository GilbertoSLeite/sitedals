import React from 'react';
import * as THREE from 'three/src/Three';
import { useFrame } from 'react-three-fiber'

export default function Stars() {

    let group = React.useRef()
    let theta = 0

    useFrame(() => {
        // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
        const r = 10 * Math.sin(THREE.Math.degToRad((theta += 0.1)))
        const s = Math.cos(THREE.Math.degToRad(theta * 2))
        group.current.rotation.set(r, r, r)
        group.current.scale.set(s, s, s)
    });

    const [geo, mat, coords] = React.useMemo(() => {
        const geo = new THREE.SphereBufferGeometry(1, 10, 10)
        const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#1ca0b3') })
        const coords = new Array(2000).fill().map(i => [Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200])
        return [geo, mat, coords]
    }, []);

    return (
        <group ref={group}>
            {coords.map(([p1, p2, p3], i) => (
                <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
            ))}
        </group>
    )
}