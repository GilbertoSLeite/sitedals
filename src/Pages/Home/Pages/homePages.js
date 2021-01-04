import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        margin: '0',
        padding: '0',
        '& div': {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
        },
        '&& div': {
            fontWeight: '600',
            fontSize: '5em',
            willChange: 'opacity',
        },
    },
}));

export default function HomePages() {

    const classes = useStyles();

    const [state, toggle] = React.useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } });

    const openPrincipal = () => {
        let url = '/principal';
        window.location.href = url;
    };

    return (
        <div
            className={classes.root}
            onClick={openPrincipal}
            onMouseMove={() => toggle(!state)}
        >
            <animated.div
                style={{
                    opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                    transform: x
                        .interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        })
                        .interpolate(x => `scale(${x})`)
                }}>
                Iniciar
      </animated.div>
        </div>
    )
};