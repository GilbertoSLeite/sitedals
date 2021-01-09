import React from "react";
import clsx from 'clsx';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    Divider,
    Grow,
    IconButton,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import sky from '../../Files/background_sky_star_nigth.jpg';
import lua from '../../Files/lua.png';
import gilbertoleite from '../../Files/Team/GilbertoLeite/01.jpeg'
import gilbertobatista from '../../Files/Team/GilbertoBatista/01.jpeg'
import { Link } from "react-router-dom";
import { ExpandMore, Facebook, Instagram, LibraryBooksOutlined, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${sky})`,
        backgroundSize: 'cover',
        backgroundPosition: '60%',
    },
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
}));

export default function TeamLS() {

    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);
    const [expandedGL, setExpandedGL] = React.useState(false);
    const [expandedGB, setExpandedGB] = React.useState(false);

    const { transform, opacity } = useSpring({
        reverse: false,
        from: {
            transform: "translateZ(0) rotate(0deg)",
            "-moz-transform": "translateZ(0) rotate(0deg)"
        },
        to: async (next) => {
            while (1) {
                await next({
                    transform: "translateZ(0) rotate(360deg)",
                    "-moz-transform": "translateZ(0) rotate(0deg)"
                });
            }
        },
        config: { duration: 20000 },
        reset: true
    });

    function GrowGL() {

        const classes = useStyles();

        return (
            <Grow in={checked}>
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
                    </CardActions>
                    {expandedGL ?
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
                                        <LibraryBooksOutlined />
                                    </IconButton>
                                </CardActions>
                            </CardContent>
                        </Collapse>
                        :
                        null}
                </Card>
            </Grow>
        );
    };

    function GrowGB() {

        const classes = useStyles();

        return (
            <Grow in={checked}>
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
                    </CardActions>
                    {expandedGB ?
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
                                        <LibraryBooksOutlined />
                                    </IconButton>
                                </CardActions>
                            </CardContent>
                        </Collapse>
                        :
                        null}
                </Card>
            </Grow>
        );
    };

    const handleExpandClickGL = () => {
        setExpandedGL(!expandedGL);
        setExpandedGB(expandedGL ? setExpandedGB(false) : false);
    };

    const handleExpandClickGB = () => {
        setExpandedGB(!expandedGB);
        setExpandedGL(expandedGB ? setExpandedGL(false) : false);
    }

    const handleChange = () => {
        setChecked((prev) => !prev);
        setExpandedGB(!checked ? false : expandedGB);
        setExpandedGL(!checked ? false : expandedGL);
    };

    return (
        <React.Fragment>
            <div
                className={classes.root}>
                {!expandedGB ? <GrowGB /> : null}
                <animated.div
                    style={{
                        transform,
                        opacity,
                        width: '150px',
                        height: '150px',
                        backgroundImage: `url(${lua})`,
                        backgroundSize: 'cover',
                        boxShadow: '0 0 40px 0px #fff',
                        alignItems: 'center',
                        justifyItems: 'center',
                        borderRadius: '50%'
                    }}
                    onClick={handleChange}
                />
                {!expandedGL ? <GrowGL /> : null}
                {expandedGB ? <GrowGB /> : (expandedGL ? <GrowGL /> : null)}
            </div>
        </React.Fragment>
    );
};
