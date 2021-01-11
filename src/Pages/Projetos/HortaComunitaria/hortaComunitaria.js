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
    Link,
    makeStyles,
    Typography
} from '@material-ui/core';
import ls from '../../../Files/iconspng.png';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    media: {
        height: 450,
    },
    cardHorta: {
        margin: '0 auto',
        width: '48vw',
        height: '76.5vw',
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
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardHortaMd: {
        margin: '0 auto',
        width: '93vw',
        height: '100vw',
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

export default function HortaComunitaria() {

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

    const openPDCI = () => {
        let url = '/pdci';
        window.open(url, '_blank');
        let urlTwo = '/hortacomunitaria';
        window.location.href = urlTwo;
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
                                    className={classes.cardHortaMd}
                                    onMouseMove={({ clientX: x, clientY: y }) => setPropsChat({ xys: calc(x, y) })}
                                    onMouseLeave={() => setPropsChat({ xys: [0, 0, 1] })}
                                    style={{ transform: propsChat.xys.interpolate(trans) }}
                                />
                            </Hidden>
                            <Hidden xsDown>
                                <animated.div
                                    className={classes.cardHorta}
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
                                    title='Horta Comunitária'
                                    subheader='Economia'
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
                                        Desevolvimeto de Horta Comunitária
                                    </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        A LS Consultoria & Sistemas LTDA, presta consultoria ao Município para a criação de Hortas
                                        Comunitárias, disponibilizando a produção entre a entidade e o parceiro através de estudo
                                        viabilidade e criação de legislação(<Link to='/hortacomunitaria' onClick={openPDCI}>Plano Diretor de Cidade Inteligente</Link>) que permitirá ao poder público em parcerias com as
                                        escolas técnicas, faculdade, munícipes e/ou empresas parceiras possam desenvolver em terrenos
                                        sem utilização por parte da prefeitura e que tem gerado custo a entidade (geralmente são locais
                                        em que são descartados resíduos sólidos de forma indevida e inadequada.
                                      </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Vantagens para o município
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Envolve a comunidade;</li>
                                        <li>Auxilia na educação ambiental, estimulando a minimização na produção de resíduos, reciclagem e compostagem;</li>
                                        <li>Empoderar as pessoas e estimula a organização comunitária, pois envolve a tomada de decisões compartilhadas, a resolução de problemas, negociações, arrecadação e distribuição financeira, entre outras coisas;</li>
                                        <li>Valoriza o bairro e, consequentemente, o valor dos imóveis em toda a vizinhança;</li>
                                        <li>Serve como ponto de encontro e lazer, onde as pessoas podem se conhecer e compartilhar experiências.</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Vantagens para o cidadão
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Estimular hábitos alimentares saudáveis;</li>
                                        <li>Fortalecer o convívio comunitário;</li>
                                        <li>Exercitar a cooperação e o trabalho em equipe;</li>
                                        <li>Favorecer a aquisição de novos conhecimentos técnicos de plantio e manejo;</li>
                                        <li>Incentivar os participantes ao cultivo da horta.</li>
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
                                            backgroundColor: '#437894',
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