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

export default function EnergiaSolar() {

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
                        Energia Solar
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
                        A LS Consultoria & Sistemas LTDA, vem trazendo projetos inovadores e um dos quais tem sido mais ousado
                        tem sido os projetos voltado a Energia Sustentável Solar.
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        Através de sua equipe de  Engenheiros a LS Consultoria & Sistemas LTDa, trás um estudo e planejamento a fim
                        de trocar paulatinamente o uso da energia convencional, para energia sustentável e limpa solar nos prédios, hospitais,
                        escolas e outros.
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        Sempre visando o desenvolvimento de Cidades Inteligentes, o projeto é desenvolvido sempre buscando uma forma em que os valores
                        a serem pagos durante implementação do projeto sejam igual ou menor aos pagos no uso da energia convencional. Gerenda receita,
                        através da economia em pagamento do uso da energia convencional, como também a longo prazo, pois, a energia solar é de propriedade da
                        entidade.
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