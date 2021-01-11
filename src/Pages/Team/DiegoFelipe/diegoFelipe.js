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
    LinkedIn
} from '@material-ui/icons';
import diegofelipe from '../../../Files/Team/DiegoFelipe/01.png';

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

export default function DiegoFelipe(props) {

    const { checked } = props;

    const classes = useStyles();

    const [expandedDF, setexpandedDF] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleExpandClickDF = () => {
        setexpandedDF(!expandedDF);
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
                                        src={diegofelipe}
                                    />
                                }
                                title='Diego Felipe'
                                subheader='Jurídico, Engenharia & Inovação'
                            />
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expandedDF,
                                    })}
                                    aria-expanded={expandedDF}
                                    onClick={handleExpandClickDF}
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
                                in={expandedDF}
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
                                        dfelipe@lsconsultorias.srv.br
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
                                        <li>Graduando em Engenharia Elétrica - UFBA;</li>
                                    </Typography>
                                    <Typography
                                        paragraph
                                        variant='body2'
                                        align='center'
                                        className={classes.content}
                                    >
                                        Em 2017 juntamento com amigos de longas datas Diego Felipe inicia uma sociedade que vem a
                                        se desenvolver na atual LS Consultoria & Sistemas LTDA, responsável pelo
                                        setor de Engenharia e como um atuante da área jurídica, envolve-se também no que tange os
                                        assuntos do direito, dando suporte ao Gilberto Batista.
                                        Sempre amante da área de exatas decidiu mergulahr na Engenharia Elétrica e expandindo os horizontes
                                        da LS Consultoria & Sistemas LTDA. Que vem sempre focando em inovação e Cidade Inteligentes e acessivéis.
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
                                            onClick={() => window.open('https://br.linkedin.com/company/ls-consultoria-sistemas?trk=public_profile_topcard-current-company', '_blank')}
                                        >
                                            <LinkedIn />
                                        </IconButton>
                                        <IconButton
                                            className={classes.icon}
                                            onClick={() => window.open('https://www.instagram.com/lsconsultoriasesistemas/', '_blank')}
                                        >
                                            <Instagram />
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

DiegoFelipe.propTypes = {
    checked: PropTypes.bool.isRequired,
}