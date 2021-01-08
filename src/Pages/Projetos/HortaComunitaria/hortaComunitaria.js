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
import { Link } from 'react-router-dom';

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

export default function HortaComunitaria() {

    const classes = useStyles();

    const handleClose = () => {
        let url = '/projetos';
        window.location.href = url;
    };

    const openPDCI = () => {
        let url = '/pdci';
        window.open(url, '_blank');
        let urlTwo = '/hortacomunitaria';
        window.location.href = urlTwo;
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
                        Horta Comunitária
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
                        className={classes.tipografiaTitle}
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
                        className={classes.tipografiaTitle}
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