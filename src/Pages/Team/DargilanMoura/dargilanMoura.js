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
import dargilanmoura from '../../../Files/Team/DargilanMoura/01.jpeg';

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

export default function DargilanMoura(props) {

    const { checked } = props;

    const classes = useStyles();

    const [expandedDM, setExpandedDM] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleExpandClickDF = () => {
        setExpandedDM(!expandedDM);
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
                                        src={dargilanmoura}
                                    />
                                }
                                title='Dargilan Moura'
                                subheader='Comercial'
                            />
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expandedDM,
                                    })}
                                    aria-expanded={expandedDM}
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
                                in={expandedDM}
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
                                        comercial@lsconsultorias.srv.br
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
                                        Responsável pelo comercial da LS Consultoria & Sistemas LTDA, com vasta experiência
                                        na área de Gestão Comercial e tem sido um norteador para crescimento e expansão da LS Consultoria & Sistemas LTDA
                                        na Gestão Pública e expandindo o projeto de Cidades Inteligentes na Bahia.
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

DargilanMoura.propTypes = {
    checked: PropTypes.bool.isRequired,
}
