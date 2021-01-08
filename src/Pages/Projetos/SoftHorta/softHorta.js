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

export default function SoftHortaComunitaria() {

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
                        Software para Gestão de Hortas Comunitárias
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
                        A LS Consultoria & Sistemas LTDA, desenvolveu um software para apoiar o projeto de Horta Comunitária,
                        onde o mesmo gerencia de forma efetiva a Gestão das Hortas no município, segue abaixo algumas
                        de suas funcionalidades:
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='center'
                        className={classes.tipografiaTitle}
                    >
                        Gestão dos Dados
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Gráficos dos Dados Cadastrados;</li>
                        <li>Cadastro dos Bairro por Condição Social;</li>
                        <li>Cadastro de Condição Social;</li>
                        <li>Cadastro de Pessoa;</li>
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='center'
                        className={classes.tipografiaTitle}
                    >
                        Gestão das Hortas
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Cadastro de Unidade Massa(Kg, G e etc.);</li>
                        <li>Cadastro de Cultivos(Alface, Abacate e etc.);</li>
                        <li>Cadastro de Espaçamento por Cultivo(Entre Linhas ou Entre Plantas);</li>
                        <li>Cadastro do Ciclo por Cultivo(Planejamento do tempo da plantação a colheita);</li>
                        <li>Produção do Cultivo(Dados referente a produção do Cultivo).</li>
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='center'
                        className={classes.tipografiaTitle}
                    >
                        Execução das Hortas
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Definição da Pessoa Responsável pela Horta;</li>
                        <li>Gestão de Transferência de Responsável pela Horta;</li>
                        <li>Quantidade Produzida por Horta;</li>
                        <li>Tamanho da Horta por Pessoa.</li>
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