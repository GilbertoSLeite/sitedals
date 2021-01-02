import React from 'react';
import ls from '../../Files/iconspng.png';
import { useTransition, useSpring, useChain } from 'react-spring';
import dataHome from '../../Data/Home/dataHome';
import Global from '../../Components/HomeAnimation/global';
import Container from '../../Components/HomeAnimation/container';
import Item from '../../Components/HomeAnimation/item';
import HomeImage from '../../Pages/Home/homeImage';
import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    grid: {
        width: "100%",
        alignItems: "center",
    },
    card: {
        backgroundColor: '#152445',
        opacity: '85%',
    },
    CardContent: {
        backgroundColor: '#152445',
        opacity: '90%',
    },
}))

export default function HomeSite() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const springRef = React.useRef();
    const { size, opacity, freq, scale, transform, ...rest } = useSpring({
        ref: springRef,
        config: { duration: 250 },
        from: { scale: 10, opacity: 0, transform: 'scale(0.9)', freq: '0.0175, 0.0', size: '20%', backgroundImage: `url(${ls})`, backgroundPosition: 'center', backgroundSize: '50%', backgroundRepeat: 'no-repeat' },
        to: { scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0', size: open ? '100%' : '20%', backgroundImage: open ? `url(${ls})` : `url(${ls})` }
    });

    const transRef = React.useRef();

    const transitions = useTransition(open ? dataHome : [], item => item.name, {
        ref: transRef,
        unique: true,
        trail: 400 / dataHome.length,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' }
    });

    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

    const [props, setProps] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    return (
        <React.Fragment>
            <Grid
                container
                justify="center"
            >
                <Grid
                    id='GridHome'
                    spacing={3}
                    alignItems="center"
                    justify="center"
                    container
                    className={classes.grid}
                >
                    <Grid
                        item
                        alignItems="center"
                        justify="center"
                        xs={12}
                        sm={12}
                    >
                        <Global />
                        <HomeImage />
                        <Container style={{ ...rest, width: size, height: size, backgroundImage: `url(${ls})` }} onClick={() => setOpen(open => !open)}>
                            {transitions.map(({ item, key, prop }) => (
                                <Item
                                    key={key}
                                    style={{ ...prop, transform: props.xys.interpolate(trans), background: item.css }}

                                    onMouseMove={({ clientX: x, clientY: y }) => setProps({ xys: calc(x, y) })}
                                    onMouseLeave={() => setProps({ xys: [0, 0, 1] })}
                                >
                                    {item.name}
                                </Item>
                            ))}
                        </Container>
                        <Card
                            className={classes.card}
                        >
                            <CardContent
                                className={classes.CardContent}
                            >
                                <Typography
                                    gutterBottom
                                    className={classes.tipografia}
                                    align='center'
                                    variant='h5'
                                >
                                    Quatidade de Cultivos
                                </Typography>
                                <CardActionArea>
                                </CardActionArea>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};