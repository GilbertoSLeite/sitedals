import { CardHeader, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        margin: '0',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    cardProject: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1416339158484-9637228cc908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)`,
        backgroundColor: 'grey',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff'
    },
    cardAbout: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1599597435338-adbf0f27b5b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80)`,
        backgroundColor: 'grey',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff'
    },
    cardTeam: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
        backgroundColor: 'grey',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff'
    },
    cardParter: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
        backgroundColor: 'grey',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff'
    },
    cardNews: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80)`,
        backgroundColor: 'grey',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff'
    },
    cardContact: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
        backgroundColor: 'grey',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff'
    },
    grid: {
        width: "100%",
        alignItems: 'center',
    },
    tipografia: {
        fontWeight: 800,
        userSelect: 'none'
    }
}));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const openProjects = () => {
    let url = '/projetos';
    window.location.href = url;
};

const openAboutUs = () => {
    let url = '/sobrenos';
    window.location.href = url;
};

const openTeamLS = () => {
    let url = '/equipe';
    window.location.href = url;
};

const openParceirosLS = () => {
    let url = '/parceiros';
    window.location.href = url;
};

export default function PagePrincipal() {

    const classes = useStyles();

    const [propsProjects, setPropsProjects] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsAbout, setPropsAbout] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsTeam, setPropsTeam] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsParter, setPropsParter] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsNews, setPropsNews] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsContact, setPropsContact] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (
        <React.Fragment>
            <CssBaseline />
            <Typography paragraph></Typography>
            <div
                className={classes.root}
            >
                <Grid
                    container
                    justify="center"
                >
                    <Grid
                        id="GridLine1"
                        spacing={3}
                        alignItems="center"
                        justify="center"
                        container
                        className={classes.grid}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardProject}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsProjects({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsProjects({ xys: [0, 0, 1] })}
                                style={{ transform: propsProjects.xys.interpolate(trans) }}
                                onClick={openProjects}
                            />
                            <CardHeader
                                title='Projetos'
                                subheader='Apresentação dos projetos.'
                                className={classes.tipografia}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardAbout}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsAbout({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsAbout({ xys: [0, 0, 1] })}
                                style={{ transform: propsAbout.xys.interpolate(trans) }}
                                onClick={openAboutUs}
                            />
                            <CardHeader
                                title='Sobre Nós'
                                subheader='Um pouco da nossa história.'
                                className={classes.tipografia}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardTeam}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsTeam({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsTeam({ xys: [0, 0, 1] })}
                                style={{ transform: propsTeam.xys.interpolate(trans) }}
                                onClick={openTeamLS}
                            />
                            <CardHeader
                                title='Nossa Equipe'
                                subheader='Conheça nossa equipe.'
                                className={classes.tipografia}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardParter}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsParter({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsParter({ xys: [0, 0, 1] })}
                                style={{ transform: propsParter.xys.interpolate(trans) }}
                                onClick={openParceirosLS}
                            />
                            <CardHeader
                                title='Nossos Parceiros'
                                subheader='Conheça nossos parceiros.'
                                className={classes.tipografia}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardNews}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsNews({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsNews({ xys: [0, 0, 1] })}
                                style={{ transform: propsNews.xys.interpolate(trans) }}
                            />
                            <CardHeader
                                title='Novidades'
                                subheader='Saiba novidades sobre nós e nossa equipe.'
                                className={classes.tipografia}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardContact}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsContact({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsContact({ xys: [0, 0, 1] })}
                                style={{ transform: propsContact.xys.interpolate(trans) }}
                            />
                            <CardHeader
                                title='Fale Conosco'
                                subheader='Será um prazer lhe falar com você.'
                                className={classes.tipografia}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Typography paragraph></Typography>
        </React.Fragment>
    )
};
