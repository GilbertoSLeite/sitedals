import React from 'react';
import { useTransition, animated } from 'react-spring';
import shuffle from 'lodash/shuffle';
import useMeasure from '../../../Components/HomeAnimation/usoMedida';
import useMedia from '../../../Components/HomeAnimation/usoArquivo';
import dataImageHome from '../../../Data/Home/dataImageHome';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    list: {
        boxSizing: 'border-box',
        position: 'relative',
        fontFamily: '-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif',
        width: '100%',
        height: '100%',
        '& div': {
            position: 'absolute',
            willChange: 'transform, width, height, opacity',
            padding: '15px',
            '& div': {
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                textTransform: 'uppercase',
                fontSize: '10px',
                lineHeight: '10px',
                borderRadius: '5px',
                boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)'
            }
        }
    },
}));

export default function HomeImage() {

    const classes = useStyles();

    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
    const [bind, { width }] = useMeasure();
    const [items, set] = React.useState(dataImageHome);

    React.useEffect(() => void setInterval(() => set(shuffle), 2000), [])
    const [heights, gridItems] = React.useMemo(() => {
        let heights = new Array(columns).fill(0)
        let gridItems = items.map((child, i) => {
            const column = heights.indexOf(Math.min(...heights))
            const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2]
            return { ...child, xy, width: width / columns, height: child.height / 2 }
        })
        return [heights, gridItems]
    }, [columns, items, width])

    const transitionsImage = useTransition(gridItems, (item) => item.urlImage, {
        from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
        enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
        update: ({ xy, width, height }) => ({ xy, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 25
    });

    return (
        <div
            {...bind}
            className={classes.list}
            style={{ height: Math.max(...heights) }}>
            {transitionsImage.map(({ item, props: { xy, ...rest }, key }) => (
                <animated.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
                    <div style={{ backgroundImage: item.urlImage }} />
                </animated.div>
            ))}
        </div>
    );
};