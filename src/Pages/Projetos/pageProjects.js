import { CardContent, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import tree from '../../Files/Projetos/ArvoreDigital/tree01.jpeg'

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
    cardArvore: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(${tree})`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardPDCI: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardHorta: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1592419391068-9bd09dd58510?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardSoftHorta: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardSustentabilidade: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80)`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardCDCI: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardRV: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1554474054-1258273559a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardPDDU: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1547482802-54e4e97a1637?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80)`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardEDU: {
        width: '45ch',
        height: '45ch',
        backgroundImage: `url(https://images.unsplash.com/photo-1424115087662-5845efc6b366?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)`,
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        fontWeight: '800',
        fontFamily: 'roboto',
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
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

const openDigitalTree = () => {
    let url = '/arvoredigital';
    window.location.href = url;
};

const openPDCI = () => {
    let url = '/pdci';
    window.location.href = url;
};

const openHorta = () => {
    let url = '/hortacomunitaria';
    window.location.href = url;
};

const openSoftHorta = () => {
    let url = '/softwarehortacomunitaria';
    window.location.href = url;
};

const openCDCI = () => {
    let url = '/cdci';
    window.location.href = url;
};

const openRV = () => {
    let url = '/rv';
    window.location.href = url;
};

const openES = () => {
    let url = '/energiasolar';
    window.location.href = url;
};

export default function PageProjects() {

    const classes = useStyles();

    const [propsArvoreDigital, setPropsArvoreDigital] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsPDCI, setPropsPDCI] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsHorta, setPropsHorta] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propSGH, setPropSGH] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsEnergiaSolar, setPropsEnergiaSolar] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsCDCI, setPropsCDCI] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsRV, setPropsRV] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsPDDU, setPropsPDDU] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [propsEDU, setPropsEDU] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

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
                                className={classes.cardArvore}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsArvoreDigital({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsArvoreDigital({ xys: [0, 0, 1] })}
                                style={{ transform: propsArvoreDigital.xys.interpolate(trans), justifyContent: 'center', alignItems: 'center' }}
                                onClick={openDigitalTree}
                            />
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Árvore Digital
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Tecnologia & Inovação
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardPDCI}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsPDCI({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsPDCI({ xys: [0, 0, 1] })}
                                style={{ transform: propsPDCI.xys.interpolate(trans) }}
                                onClick={openPDCI}
                            />
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Plano Diretor de Cidade Inteligente
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Governança
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardHorta}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsHorta({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsHorta({ xys: [0, 0, 1] })}
                                style={{ transform: propsHorta.xys.interpolate(trans) }}
                                onClick={openHorta}
                            />
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Horta Comunitária
                                    </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Meio Ambiente
                                    </Typography>
                            </CardContent>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardSoftHorta}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropSGH({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropSGH({ xys: [0, 0, 1] })}
                                style={{ transform: propSGH.xys.interpolate(trans) }}
                                onClick={openSoftHorta}
                            />
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Gestão de Horta Comunitária
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                    align='center'
                                    className={classes.tipografia}
                                    onClick={openSoftHorta}
                                >
                                    Governança - Software - Tecnologia & Inovação
                               </Typography>
                            </CardContent>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardSustentabilidade}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsEnergiaSolar({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsEnergiaSolar({ xys: [0, 0, 1] })}
                                style={{ transform: propsEnergiaSolar.xys.interpolate(trans) }}
                                onClick={openES}
                            />
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Energia Solar
                                    </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Energia - Sustentabilidade
                                   </Typography>
                            </CardContent>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardCDCI}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsCDCI({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsCDCI({ xys: [0, 0, 1] })}
                                style={{ transform: propsCDCI.xys.interpolate(trans) }}
                                onClick={openCDCI}
                            />
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Combate a Doenças Infectocontagiosa
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Governança - Software - Tecnologia & Inovação
                                    </Typography>
                            </CardContent>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardRV}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsRV({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsRV({ xys: [0, 0, 1] })}
                                style={{ transform: propsRV.xys.interpolate(trans) }}
                                onClick={openRV}
                            />
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Projetos com Realidade Virtual
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Tecnologia & Inovação
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardPDDU}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsPDDU({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsPDDU({ xys: [0, 0, 1] })}
                                style={{ transform: propsPDDU.xys.interpolate(trans) }}
                            />
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Plano Diretor Desenvolvimento Urbano
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Governança
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <animated.div
                                className={classes.cardEDU}
                                onMouseMove={({ clientX: x, clientY: y }) => setPropsEDU({ xys: calc(x, y) })}
                                onMouseLeave={() => setPropsEDU({ xys: [0, 0, 1] })}
                                style={{ transform: propsEDU.xys.interpolate(trans) }}
                            />
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Educação & Tecnologia
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                    align='center'
                                    className={classes.tipografia}
                                >
                                    Educação - Tecnologia & Inovação
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Typography paragraph></Typography>
        </React.Fragment>
    )
};
