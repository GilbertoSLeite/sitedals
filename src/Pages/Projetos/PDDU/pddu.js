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
    cardPDDU: {
        margin: '0 auto',
        width: '48vw',
        height: '58.7vw',
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
        color: '#ffff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardPDDUMd: {
        margin: '0 auto',
        width: '93vw',
        height: '100vw',
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

export default function PDDU() {

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
                                    className={classes.cardPDDUMd}
                                    onMouseMove={({ clientX: x, clientY: y }) => setPropsChat({ xys: calc(x, y) })}
                                    onMouseLeave={() => setPropsChat({ xys: [0, 0, 1] })}
                                    style={{ transform: propsChat.xys.interpolate(trans) }}
                                />
                            </Hidden>
                            <Hidden xsDown>
                                <animated.div
                                    className={classes.cardPDDU}
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
                                    title='PDDU'
                                    subheader='Governança'
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
                                        Plano Diretor de Desenvolvimento Urbano
                                    </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        Política urbana instituído, sendo descrito como “instrumento básico da política de desenvolvimento e
                                        de expansão urbana.”, e é pelo Estatuto da Cidade, pelo Código Florestal e pela Lei de Parcelamento do
                                        Solo Urbano.
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        Através do plano diretor, é possível definir a função social da propriedade e ainda a delimitação e
                                        fiscalização das áreas subutilizadas, sujeitando-as ao parcelamento ou edificação compulsórios, ou
                                        ainda, à desapropriação com pagamento de títulos e cobrança de IPTU progressivo no tempo.
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        É obrigatório a criação de plano diretor:
                                        <li>Para cidades com mais de vinte mil habitantes;</li>
                                        <li>Cidades integrantes de regiões metropolitanas e aglomerações urbanas (de acordo com o disposto também no Art. 182 da Constituição);</li>
                                        <li>Cidades em áreas de especial interesse turístico ou inseridas na área de influência de empreendimentos com significativo impacto ambiental.</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body1'
                                        align='justify'
                                    >
                                        Em paralelo a LS Consultoria & Sistemas LTDA dispõe do trabalho de georeferenciameno, recadastramento imobiliário, mapas e outros.
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