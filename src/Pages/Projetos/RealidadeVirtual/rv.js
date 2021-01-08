import React from 'react';
import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles,
    Typography
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import ls from '../../../Files/iconspng.png';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    content: {
        padding: theme.spacing(2),
        fontWeight: 400,
    },
    action: {
        margin: 0,
        padding: theme.spacing(1),
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        background: 'transparent',
        color: '#fff'
    },
    tipografiaTitle: {
        fontWeight: 800
    }
}))

export default function RealidadeVirtual() {

    const classes = useStyles();

    const handleClose = () => {
        let url = '/projetos';
        window.location.href = url;
    };

    return (
        <React.Fragment>
            <Dialog
                onClose={handleClose}
                open={true}
            >
                <DialogTitle
                    disableTypography
                    className={classes.root}
                >
                    <Avatar
                        variant='circular'
                        src={ls}
                    />
                    <Typography
                        variant='h6'
                        align='center'
                    >
                        Realidade Virtual
                </Typography>
                    <IconButton
                        className={classes.closeButton}
                        onClick={handleClose}
                    >
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent
                    dividers
                    className={classes.content}
                >
                    <Typography paragraph></Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        Realidade virtual é uma tecnologia de interface entre um usuário e um sistema através de recursos gráficos 3D ou
                        imagens 360º cujo objetivo é criar a sensação de presença no ambiente.
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        A LS Consultoria & Sistemas LTDA, na esteira da inovação e desenvolvimento de Cidade Inteligente(Smart City)
                        utilizando de tecnologia de drones/vants aplicado a projetos de engenharia, controle ambiente, turismo municipal virtuais, jogos educativos
                        para incentivo a educação com tecnologia, museu municipal virtual, desenvolvimento de tour virtual 360° de construção
                        que ainda não foram desenvolvida através de modelagem 3D e, também, tour virtual 360° para construções prontas e ainda
                        não entregue para visita da população.
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        Toda a equipe atende aos requisitos legais vigentes. Os pilotos possuem autorização da ANAC e são
                        cadastros no sistema SARPAS, os drones/vants são cadastro e homologados pela ANATEL, cadastros na
                        ANAC, no Sistema SARPAS e possuem seguro com cobertura de dados a terceiros, de acordo com o
                        Regulamento Brasileiro de Aviação Civil Especial - RBAC-E número 94 da ANAC.
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        O projeto é desenvolvido por engenheiros com especialização direcionada para o desenvolvimento do
                        projeto com toda segurança e garantia.
                    </Typography>
                </DialogContent>
                <DialogActions
                    className={classes.action}
                >
                    <Button
                        autoFocus
                        className={classes.button}
                    >
                        Surprise
                    </Button>

                </DialogActions>
            </Dialog>

        </React.Fragment>
    );
};