import React from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    Hidden,
    makeStyles,
    Typography
} from '@material-ui/core';
import ls from '../../../Files/iconspng.png';
import { useSpring, animated } from 'react-spring';
import one from './img/01.png'
import two from './img/02.png'
import three from './img/03.png'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    media: {
        height: 450,
    },
    cardCdciOne: {
        margin: '0 auto',
        width: '48vw',
        height: '39.8vw',
        backgroundImage: `url(${one})`,
        borderRadius: '10px',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardCdciTwo: {
        margin: '0 auto',
        width: '48vw',
        height: '39.8vw',
        backgroundImage: `url(${two})`,
        borderRadius: '10px',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardCdciThree: {
        margin: '0 auto',
        width: '48vw',
        height: '39.8vw',
        backgroundImage: `url(${three})`,
        borderRadius: '10px',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardCdciMdOne: {
        margin: '0 auto',
        width: '93vw',
        height: '100vw',
        backgroundImage: `url(${one})`,
        borderRadius: '10px',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardCdciMdTwo: {
        margin: '0 auto',
        width: '93vw',
        height: '100vw',
        backgroundImage: `url(${two})`,
        borderRadius: '10px',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardCdciMdThree: {
        margin: '0 auto',
        width: '93vw',
        height: '100vw',
        backgroundImage: `url(${three})`,
        borderRadius: '10px',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center',
        boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        //border: '15px solid #ffff',
        '& hover': {
            boxShadow: '0px 10px 50px -10px rgba(41, 173, 191, 1)',
        },
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    button: {
        color: '#fff',
        fontWeight: 800,
        backgroundColor: '#437894'
    },
    title: {
        fontWeight: 'bold'
    },
}));

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export default function CDCI() {

    const classes = useStyles();

    const [propsChat, setPropsChat] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const [state, toggle] = React.useState(true);
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 2000 } });

    const openProjects = () => {
        toggle(!state)
        setTimeout(() => {
            var url = '/projetos';
            window.location.href = url;
        }, 2100);
    };

    return (
        <React.Fragment>
            <div
                className={classes.root}
            >
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <Typography paragraph></Typography>
                        <Container maxWidth="sm">
                            <Hidden smUp>
                                <animated.div
                                    className={classes.cardCdciMdOne}
                                    onMouseMove={({ clientX: x, clientY: y }) => setPropsChat({ xys: calc(x, y) })}
                                    onMouseLeave={() => setPropsChat({ xys: [0, 0, 1] })}
                                    style={{ transform: propsChat.xys.interpolate(trans) }}
                                />
                            </Hidden>
                            <Hidden xsDown>
                                <animated.div
                                    className={classes.cardCdciOne}
                                    onMouseMove={({ clientX: x, clientY: y }) => setPropsChat({ xys: calc(x, y) })}
                                    onMouseLeave={() => setPropsChat({ xys: [0, 0, 1] })}
                                    style={{ transform: propsChat.xys.interpolate(trans) }}
                                />
                            </Hidden>
                            <Typography paragraph></Typography>
                            <Hidden smUp>
                                <animated.div
                                    className={classes.cardCdciMdTwo}
                                    onMouseMove={({ clientX: x, clientY: y }) => setPropsChat({ xys: calc(x, y) })}
                                    onMouseLeave={() => setPropsChat({ xys: [0, 0, 1] })}
                                    style={{ transform: propsChat.xys.interpolate(trans) }}
                                />
                            </Hidden>
                            <Hidden xsDown>
                                <animated.div
                                    className={classes.cardCdciTwo}
                                    onMouseMove={({ clientX: x, clientY: y }) => setPropsChat({ xys: calc(x, y) })}
                                    onMouseLeave={() => setPropsChat({ xys: [0, 0, 1] })}
                                    style={{ transform: propsChat.xys.interpolate(trans) }}
                                />
                            </Hidden>
                            <Typography paragraph></Typography>
                            <Hidden smUp>
                                <animated.div
                                    className={classes.cardCdciMdThree}
                                    onMouseMove={({ clientX: x, clientY: y }) => setPropsChat({ xys: calc(x, y) })}
                                    onMouseLeave={() => setPropsChat({ xys: [0, 0, 1] })}
                                    style={{ transform: propsChat.xys.interpolate(trans) }}
                                />
                            </Hidden>
                            <Hidden xsDown>
                                <animated.div
                                    className={classes.cardCdciThree}
                                    onMouseMove={({ clientX: x, clientY: y }) => setPropsChat({ xys: calc(x, y) })}
                                    onMouseLeave={() => setPropsChat({ xys: [0, 0, 1] })}
                                    style={{ transform: propsChat.xys.interpolate(trans) }}
                                />
                            </Hidden>
                        </Container>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <Typography paragraph></Typography>
                        <Container maxWidth="sm">
                            <Card>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            variant='circular'
                                            src={ls}
                                        />
                                    }
                                    title='CDCI'
                                    subheader='Combate a Doenças Infectocontagiosa'
                                />
                                <Divider variant="middle" />
                                <CardContent>
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        align='center'
                                        variant='h5'
                                        className={classes.title}
                                    >
                                        Software de Combate a Doenças Infectocontagiosa
                                    </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        A LS Consultoria & Sistemas LTDA, desenvolveu um sistema sob a plataforma que é a tendência mundial,
                                        conhecida como ReactJS, biblioteca JavaScript criado pelo grupo do Facebook e usado em seus
                                        ambientes:
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Instagram;</li>
                                        <li>Facebook;</li>
                                        <li>Twitter;</li>
                                        <li>Americanas;</li>
                                        <li>Netflix;</li>
                                        <li>Boticário.</li>
                                        <li>Buscapé.</li>
                                        <li>Catho;</li>
                                        <li>C6 Bank;</li>
                                        <li>Ifood.</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        Além de utilizar uma Arquitetura de Software inovadora, a LS Consultoria & Sistemas LTDA dispõe de
                                        servidores da AWS(Amazon) evitando que o sistema fique fora do ar, mantendo fulltime o seu
                                        funcionamento. Segue as funcionalidades encontradas no Software de Combate a Doenças Infectocontagiosa:
                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Gestão de Dados
                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Gráficos do Município;</li>
                                        <li>Dashboard Mundial;</li>
                                        <li>Dados da Entidade;</li>
                                        <li>Dados Cadastrais do Município;</li>
                                        <li>Hospitais Covid-19.</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Gráficos do Município
                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Monitoramento automatizado dos casos do Município;</li>
                                        <li>Ambiente gráfico dos casos do Município;</li>
                                        <li>Gráficos por Região (Casos e Óbitos);</li>
                                        <li>Gráfico por Município (Confirmados e Óbitos);</li>
                                        <li>Lista de Casos dos Municípios da Bahia.</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Dashboard
                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Gráfico em Radar (Confirmados, Mortes e Recuperados) com Escolha de País e Filtro de Data;</li>
                                        <li>Ambiente gráfico dos casos do país escolhido;</li>
                                        <li>Ambiente gráfico dos casos por estado;</li>
                                        <li>Painel Geral dos casos a nível mundial e do país escolhido no filtro.</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Dados da Entidade
                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Dados cadastrais do município.</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Dados Técnicos
                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Dados de Monitoramento, Suspeitos, Descartados, Confirmados, Aguardando Resultado, Mortes e Recuperados;</li>
                                        <li>Dados das Leis Publicadas no Município referente ao Codiv-19.</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Hospitais Covid-19
                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Campo de busca de hospitais voltado ao combate da Covid-19 filtrado pelo Município e sua Microrregião.</li>
                                    </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                    >
                                        © LS Consultoria & Sistemas LTDA. Todos os direitos reservados.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Container>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                    >
                        <Card>
                            <CardActionArea>
                                <Button
                                    fullWidth
                                    onClick={openProjects}
                                    className={classes.button}
                                >
                                    <animated.div
                                        style={{
                                            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                                            transform: x
                                                .interpolate({
                                                    range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1, 1.5],
                                                    output: [1, 0.95, 0.85, 0.75, 0.65, 1.1, 0.95, 0, 85, 1.1, 1.03, 1, 1.5]
                                                })
                                                .interpolate(x => `scale(${x})`),
                                        }}
                                    >
                                        PROJETOS
                                    </animated.div>
                                </Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};