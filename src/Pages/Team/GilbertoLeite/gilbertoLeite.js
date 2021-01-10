import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Avatar,
    Backdrop,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    Divider,
    Grow,
    IconButton,
    Link,
    makeStyles,
    Modal,
    Typography
} from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import {
    Close,
    ExpandMore,
    Facebook,
    Instagram,
    LibraryBooksOutlined,
    LinkedIn
} from '@material-ui/icons';
import gilbertoleite from '../../../Files/Team/GilbertoLeite/01.jpeg';

const useStyles = makeStyles((theme) => ({
    content: {
        fontWeight: 100,
    },
    title: {
        fontWeight: 'bold',
    },
    card: {
        maxWidth: 1500,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    icon: {
        marginLeft: '5%',
        marginRight: 'auto',
    }
}))

export default function GilbertoLeite(props) {

    const { checked } = props;

    const classes = useStyles();

    const [expandedGL, setExpandedGL] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleExpandClickGL = () => {
        setExpandedGL(!expandedGL);
    };

    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
    });

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        ValidarChecked(checked);
        function ValidarChecked(value) {
            if (value) {
                setOpen(true);
            } else {
                setOpen(false);
            };
        };
    }, [checked]);

    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={
                    {
                        timeout: 1500,
                    }
                }
            >
                <animated.div
                    style={style}
                >
                    <Grow
                        in={open}
                    >
                        <Card
                            className={classes.card}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar
                                        variant='circular'
                                        src={gilbertoleite}
                                    />
                                }
                                title='Gilberto Leite'
                                subheader='Tecnologia, Suporte & Inovação'
                            />
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expandedGL,
                                    })}
                                    aria-expanded={expandedGL}
                                    onClick={handleExpandClickGL}
                                >
                                    <ExpandMore />
                                </IconButton>
                                <IconButton
                                    onClick={handleClose}
                                >
                                    <Close />
                                </IconButton>
                            </CardActions>
                            <Collapse
                                in={expandedGL}
                                timeout="auto"
                                unmountOnExit
                            >
                                <CardContent>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        align='center'
                                        variant='body1'
                                        className={classes.title}
                                    >
                                        E-Mail
                            </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        gleite@lsconsultorias.srv.br
                            </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        align='center'
                                        variant='body1'
                                        className={classes.title}
                                    >
                                        Sobre
                            </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        Nove anos atuando e aprendendo a Gestão Pública, iniciando em 2012 como colaborador de uma grande
                                        empresa atuante no setor de desenvolvimento e suporte de sistemas para gestão pública
                                    <Link to='http://www.freire.com.br/'> Freire Informática</Link> onde por alguns anos foi a minha escola,
                                    faculdade e a prática na área de Gestão Pública.
                            </Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        Identificando a necessidade de trilhar outros caminhos, imergindo em outro projeto e em 2017, cinco anos depois,
                                        iniciou junto a um grande amigo da adolescência Diego Sabino, iniciando um protótipo de Software para Gestão Tributária.
                                        Sistema que esteve presente em 10(dez) municípios de pequeno e médio porte.
                            </Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        Em 2019 pulsante os anseios por inovação, crescimento e evolução, juntou-se com grandes amigos Gilberto Batista e Diego Felipe
                                        para então iniciar importação na Bahia o desenvolvimento de Cidades Inteligentes e com anseios de adentrar em todo Nordeste,
                                        vislumbrando como empreendedor e cidadão ofertar aos nossos, inclusão social e uma "cidade mais acessível".
                            </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <CardActions disableSpacing>
                                        <IconButton
                                            className={classes.icon}
                                            onClick={() => window.open('https://www.facebook.com/lsconsultorias.srv.br/', '_blank')}
                                        >
                                            <Facebook />
                                        </IconButton>
                                        <IconButton
                                            className={classes.icon}
                                            onClick={() => window.open('https://br.linkedin.com/in/gsleite', '_blank')}
                                        >
                                            <LinkedIn />
                                        </IconButton>
                                        <IconButton
                                            className={classes.icon}
                                            onClick={() => window.open('https://www.instagram.com/lsconsultoriasesistemas/', '_blank')}
                                        >
                                            <Instagram />
                                        </IconButton>
                                        <IconButton
                                            className={classes.icon}
                                            onClick={() => window.open('http://lattes.cnpq.br/6910555505391950', '_blank')}
                                        >
                                            < LibraryBooksOutlined />
                                        </IconButton>
                                    </CardActions>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grow>
                </animated.div>
            </Modal>
        </React.Fragment>
    );
};

GilbertoLeite.propTypes = {
    checked: PropTypes.bool.isRequired,
}