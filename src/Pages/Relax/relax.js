import React from 'react';
import {
    CssBaseline, makeStyles
} from '@material-ui/core';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
    Canvas,
    extend,
    useThree,
    useFrame
} from "react-three-fiber";

extend({ OrbitControls });

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        width: '100%',
        height: 500,
        margin: '0',
        padding: '0',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        overflow: 'hidden',
        backgroundColor: '#fff',
        //backgroundColor: '#1ca0b3',
        boxSizing: 'border-box',
    }
}));

export default function Relax() {

    const classes = useStyles();

    const CameraControls = () => {
        const {
            camera,
            gl: { domElement }
        } = useThree();

        // Ref to the controls, so that we can update them on every frame using useFrame
        const controls = React.useRef();
        useFrame(() => controls.current.update());
        return (
            <orbitControls
                ref={controls}
                args={[camera, domElement]}
                autoRotate={true}
                enableZoom={false}
            />
        );
    };

    function SkyBox() {
        const { scene } = useThree();
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            "001.jpg",
            "002.jpg",
            "003.jpg",
            "004.jpg",
            "005.jpg",
            "008.jpg"
        ]);

        // Set the scene background property to the resulting texture.
        scene.background = texture;
        return null;
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <Canvas>
                    <CameraControls />
                    <SkyBox />
                </Canvas>
            </div>
        </React.Fragment>
    );
};