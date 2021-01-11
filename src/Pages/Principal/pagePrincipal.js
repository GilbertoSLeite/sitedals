import { Button, CardHeader, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSpring, animated, useTransition } from 'react-spring';

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
        backgroundImage: `url(https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80)`,
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
    },
    main: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#676767',
    },
    container: {
        position: 'fixed',
        zIndex: '1000',
        width: '0 auto',
        top: '30px',
        bottom: '30px',
        margin: '0 auto',
        left: '30px',
        right: '30px',
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'none',
        alignItems: 'center',
        '& @media': {
            maxWidth: '680px',
            alignItems: 'center'
        },
    },
    button: {
        cursor: 'pointer',
        pointerEvents: 'all',
        outline: 0,
        border: '10px',
        background: 'transparent',
        display: 'flex',
        alignSelf: 'flex-end',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        paddingBottom: '14px',
        color: 'rgba(255, 255, 255, 0.5)',
        '& :hover': {
            color: 'rgba(255, 255, 255, 0.6)',
        }
    },
    globalStyle: {
        margin: 0,
        padding: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        userSelect: 'none',
        background: '#f0f0f0'
    },
    content: {
        color: '#fff',
        background: '#445159',
        opacity: '0.8',
        padding: '12px 22px',
        fontSize: '1em',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gridGap: '10px',
        overflow: 'hidden',
        height: 'auto',
        borderRadius: '10px',
        marginTop: '10px',
        marginBottom: '10px',
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

const openNews = () => {
    let url = '/news';
    window.location.href = url;
};

const openParceirosLS = () => {
    let url = '/parceiros';
    window.location.href = url;
};

let id = 0;

function MessageHub({ config = { tension: 125, friction: 20, precision: 0.1 }, timeout = 3000, children }) {

    const classes = useStyles();

    const [refMap] = React.useState(() => new WeakMap())
    const [cancelMap] = React.useState(() => new WeakMap())
    const [items, setItems] = React.useState([]);

    const transitions = useTransition(items, item => item.key, {
        from: {
            opacity: 0,
            height: 0,
            life: '100%'
        },
        enter: item => async next => await next({
            opacity: 1,
            height: refMap.get(item).offsetHeight
        }),
        leave: item => async (next, cancel) => {
            cancelMap.set(item, cancel)
            await next({ life: '0%' })
            await next({ opacity: 0 })
            await next({ height: 0 })
        },
        onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
        config: (item, state) => (state === 'leave' ? [{ duration: timeout }, config, config] : config),
    })

    React.useEffect(() => void children(msg => setItems(state => [...state, { key: id++, msg }])));

    return (
        <div className={classes.container}>
            {transitions.map(({ key, item, props: { life } }) => (
                <animated.div
                    key={key}
                    style={{
                        boxSizing: 'border-box',
                        position: 'relative',
                        overflow: 'hidden',
                        width: '40ch',
                        '& @media': {
                            maxWidth: '680px',
                            width: '100%',
                        }
                    }}
                >
                    <div
                        className={classes.content}
                        ref={ref => ref && refMap.set(item, ref)}
                    >
                        <animated.div style={{
                            right: life,
                            position: 'absolute',
                            bottom: '0',
                            left: '0px',
                            width: 'auto',
                            height: '5px',
                            background: 'linear-gradient(130deg, #00b4e6, #00f0e0)',
                        }} />
                        <p>{item.msg}</p>
                        <Button
                            onClick={e => {
                                e.stopPropagation()
                                cancelMap.has(item) && cancelMap.get(item)()
                            }}>
                        </Button>
                    </div>
                </animated.div>
            ))}
        </div>
    )
};
var count = 0;
function Mensagem() {

    var msg = [
        'Estamos criando está página.',//0
        'Sério, estamos criando, acredite!',//1
        'Opa! Parece que quer muito falar conosco.',//2
        'Tá Bom! Enquanto essa página não está pronta, posso lhe oferecer uma e-mail.',//3
        'Hum, ok! Mande um e-mail para contato@lsconsultorias.srv.br',//4
        'Já foi! Agora acabou, sério!',//5
        'Opa! Você novamente? Já dei o e-mail: contato@lsconsultorias.srv.br',//6
        'Xau! Vamos para página principal, ok?',//7
    ];

    return (
        msg[(count === 8 ? window.location.href = '/relax' : count++)]
    );

}

export default function PagePrincipal() {

    const ref = React.useRef(null)

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
                                onClick={openNews}
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
                                style={{
                                    transform: propsContact.xys.interpolate(trans)
                                }}
                                onClick={() => ref.current(Mensagem())}
                            />
                            <div className={classes.main}>
                                <div className={classes.globalStyle}>
                                    <MessageHub children={add => (ref.current = add)} />
                                </div>
                            </div>
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
