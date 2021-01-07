import React from "react";
import { makeStyles } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import sky from '../../Files/background_sky_star_nigth.jpg';
import lua from '../../Files/lua.png';

const useStyles = makeStyles(() => ({
    /*root: {
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
        backgroundImage: `url(${sky})`,
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }*/
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${sky})`,
        backgroundSize: 'cover',
        backgroundPosition: '60%',
    }
}));

export default function TeamLS() {

    const classes = useStyles();

    const { transform, opacity } = useSpring({
        reverse: false,
        from: {
            transform: "translateZ(0) rotate(0deg)",
            "-moz-transform": "translateZ(0) rotate(0deg)"
        },
        to: async (next) => {
            while (1) {
                await next({
                    transform: "translateZ(0) rotate(360deg)",
                    "-moz-transform": "translateZ(0) rotate(360deg)"
                });
            }
        },
        config: { duration: 20000 },
        reset: true
    });

    return (
        <React.Fragment>
            <div
                className={classes.root}>
                <animated.div style={{
                    transform,
                    opacity,
                    width: '150px',
                    height: '150px',
                    backgroundImage: `url(${lua})`,
                    backgroundSize: 'cover',
                    boxShadow: '0 0 40px 0px #fff',
                    alignItems: 'center',
                    justifyItems: 'center',
                    borderRadius: '50%'
                }} />
            </div>
        </React.Fragment>
    );
};
