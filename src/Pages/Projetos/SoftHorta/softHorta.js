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

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    media: {
        height: 450,
    },
    cardSoftHorta: {
        margin: '0 auto',
        width: '48vw',
        height: '66.8vw',
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
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardSoftHortaMd: {
        margin: '0 auto',
        width: '93vw',
        height: '100vw',
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

export default function SoftHortaComunitaria() {

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
                                    className={classes.cardSoftHortaMd}
                                    onMouseMove={({ clientX: x, clientY: y }) => setPropsChat({ xys: calc(x, y) })}
                                    onMouseLeave={() => setPropsChat({ xys: [0, 0, 1] })}
                                    style={{ transform: propsChat.xys.interpolate(trans) }}
                                />
                            </Hidden>
                            <Hidden xsDown>
                                <animated.div
                                    className={classes.cardSoftHorta}
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
                                    title='GHC'
                                    subheader='Governança'
                                />
                                <Divider variant="middle" />
                                <CardContent>
                                    <Typography paragraph></Typography>
                                    <Typography
                                        variant='h6'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Software para Gestão de Hortas Comunitárias
                                    </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        A LS Consultoria & Sistemas LTDA, desenvolveu um software para apoiar o projeto de Horta Comunitária,
                                        onde o mesmo gerencia de forma efetiva a Gestão das Hortas no município, segue abaixo algumas
                                        de suas funcionalidades:
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Gestão dos Dados
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Gráficos dos Dados Cadastrados;</li>
                                        <li>Cadastro dos Bairro por Condição Social;</li>
                                        <li>Cadastro de Condição Social;</li>
                                        <li>Cadastro de Pessoa;</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Gestão das Hortas
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Cadastro de Unidade Massa(Kg, G e etc.);</li>
                                        <li>Cadastro de Cultivos(Alface, Abacate e etc.);</li>
                                        <li>Cadastro de Espaçamento por Cultivo(Entre Linhas ou Entre Plantas);</li>
                                        <li>Cadastro do Ciclo por Cultivo(Planejamento do tempo da plantação a colheita);</li>
                                        <li>Produção do Cultivo(Dados referente a produção do Cultivo).</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='center'
                                        className={classes.title}
                                    >
                                        Execução das Hortas
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        <li>Definição da Pessoa Responsável pela Horta;</li>
                                        <li>Gestão de Transferência de Responsável pela Horta;</li>
                                        <li>Quantidade Produzida por Horta;</li>
                                        <li>Tamanho da Horta por Pessoa.</li>
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