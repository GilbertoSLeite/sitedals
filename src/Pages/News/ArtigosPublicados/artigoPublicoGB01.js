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
import gilbertobatista from '../../../Files/Team/GilbertoBatista/01.jpeg'

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

export default function ArtigoGilbertoBatista01(props) {

    const { checked } = props;

    const classes = useStyles();

    const [expanded, setexpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleExpandClick = () => {
        setexpanded(!expanded);
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
                                        src={gilbertobatista}
                                    />
                                }
                                title='Gilberto Batista'
                                subheader='Publicação de Artigo Acadêmico'
                            />
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    aria-expanded={expanded}
                                    onClick={handleExpandClick}
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
                                in={expanded}
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
                                        DIREITO CONTEMPORÂNEO, PROPRIEDADE INTELECTUAL E O NOVO MARCO LEGAL PARA A CIÊNCIA, TECNOLOGIA E INOVAÇÃO
                                    </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        É com imenso regozijo que felicitamos nosso Professor Gilberto Batista, responsável
                                        pelo Jurídico e Inovação da LS Consultoria & Sistemas, pela publicação do artigo na
                                        Revista de Propriedade Intelectual - Direito Contemporâneo e Constituição.
                                        Em seu artigo, abrange conteúdos vibrantes à nossa missão, valores e conduta; versando sobre
                                        Políticas Públicas, Desenvolvimento Sustentável e Cidadania; atendo-se a projetos como os de
                                        Instituições de Ciência Tecnologia e Inovação (ICT), temas imprescindíveis para o projeto adotado
                                        por nossa instituição, as Cidade Inteligente - também conhecidas como Smart Cities - que serão o
                                        divisor de águas nas cidades da Bahia, e nós já começamos a fazer essa história.
                                        Convidamos vocês a navegar por vinte páginas de estudo, pesquisa, amor e paixão.
                                    </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        "Sempre acreditei que o amor não tinha forma específica nem métrica definida, achava que ele era
                                        dadaísta, futurista, impressionista e surreal ao mesmo tempo."
                                        </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        Gilberto Batista
                                    </Typography>
                                    <Divider variant="middle" />
                                    <Typography paragraph></Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        Jurídico & Inovação
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
                                            onClick={() => window.open('https://www.linkedin.com/in/gilberto-batista-2b32466b/?originalSubdomain=br', '_blank')}
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
                                            onClick={() => window.open('http://lattes.cnpq.br/9305475948235770', '_blank')}
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

ArtigoGilbertoBatista01.propTypes = {
    checked: PropTypes.bool.isRequired,
}