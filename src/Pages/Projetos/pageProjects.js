import React from 'react'
import { useTransition, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        margin: '0',
        padding: '0',
        width: '100%',
        height: '100%',
    },
    simplesTransMain: {
        cursor: 'pointer',
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffff',
        fontWeight: '800',
        fontSize: '25em',
        willChange: 'transform opacity',
        textShadow: '0px 2px 40px #00000020, 0px 2px 5px #00000030'
    }
}))

const pages = [
    ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

export default function PageProjects() {

    const classes = useStyles();
    const [index, set] = React.useState(0)
    const onClick = React.useCallback(() => set(state => (state + 1) % 3), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    return (
        <div className={classes.root}>
            <div className={classes.simplesTransMain} onClick={onClick}>
                {transitions.map(({ item, props, key }) => {
                    const Page = pages[item]
                    return <Page key={key} style={props} />
                })}
            </div>
        </div>
    )
};
