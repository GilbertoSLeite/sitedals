import React from 'react';
import {
    makeStyles
} from '@material-ui/core';
import Stars from './Estrelas/stars';
import LogoEffect from './Logo/logo';
import { Canvas } from 'react-three-fiber';

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

export default function NewHome() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Canvas>
                    <ambientLight color="lightblue" />
                    <pointLight color="white" intensity={2} position={[10, 10, 10]} />
                    <Stars />
                    <LogoEffect />
                </Canvas>
            </div>
        </React.Fragment>
    );
};