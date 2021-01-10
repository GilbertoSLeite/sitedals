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
import gilbertobatista from '../../../Files/Team/GilbertoBatista/01.jpeg';

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

export default function GilbertoBatista(props) {

    const { checked } = props;

    const classes = useStyles();

    const [expandedGB, setExpandedGB] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleExpandClickGB = () => {
        setExpandedGB(!expandedGB);
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
                                subheader='Jurídico & Inovação'
                            />
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expandedGB,
                                    })}
                                    aria-expanded={expandedGB}
                                    onClick={handleExpandClickGB}
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
                                in={expandedGB}
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
                                        gbatista@lsconsultorias.srv.br
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
                                        <li>Bacharel em Direito pela Universidade do Estado da Bahia - UNEB;</li>
                                        <li>Mestre em Tecnologia Aplicada a Educação pela Universidade do Estado da Bahia - UNEB;</li>
                                        <li>Graduando em História pela Universidade do Estado da Bahia- UNEB;</li>
                                        <li>Graduando em Sistemas de Informação - pela Estácio - FIB.</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        Professor Universitário. É pesquisador nos Grupos de estudo Propriedade Intelectual e
                                        Economia Criativa na Universidade do Estado da Bahia- GREPRINTECU e CriaAtivos:
                                        criando um novo mundo. É Assistente Jurídico da Incubadora Tecnológica de Economia
                                        Solidária e Criativa - CriaAtiva S3 - Apoio UNEB/CNPq.
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        Sócio Fundador da Empresa LS Desenvolvimento & Consultoria LTDA. Advogado atuante na
                                        área de Propriedade Intelectual, atua como Consultor Jurídico no Centro de Desenvolvimento e Humanidades - CRDH.
                                        Experiência é oriunda dos estudos desde a Universidade, tendo participado, por duas vezes, do Projeto de Extensão:
                                   <li>Educação Jurídica Popular em Direitos Humanos Construindo Redes de Educação Cidadã - UNEB;</li>
                                        <li>Monitor do Grupo de Estudos Interdisciplinares sobre Direitos Humanos e Legislação Contemporânea;</li>
                                        <li>Bolsista FAPESB no projeto de pesquisa intitulado Políticas Públicas de Ciência, Tecnologia e Inovação: Limites e Desafios;</li>
                                        <li>Bolsista do PROFORTE/UNEB no projeto de pesquisa na área de Direito Ambiental: Análise do Sistema Municipal de Meio Ambiente de Camaçari.</li>
                                   Ministrou oficinas de Educação Jurídica Popular no Projeto de Educação Ambiental e Mobilização Social em Saneamento (PEAMSS),
                                   projeto oriundo de parceria entre a Fundação Juazeirense para o Desenvolvimento Científico, Tecnológico, Econômico,
                                   Sociocultural e Ambiental (FUNDESF) ligada a Universidade do Estado da Bahia (UNEB) e a Secretaria de Desenvolvimento
                                   Urbano/Empresa Baiana de Águas e Saneamento (SEDUR/EMBASA). Atuou ainda na Defensoria Pública do Estado da Bahia
                                   assessorando os Defensores da Comarca de Camaçari.
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

GilbertoBatista.propTypes = {
    checked: PropTypes.bool.isRequired,
}