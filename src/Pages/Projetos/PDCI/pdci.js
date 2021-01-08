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
import ls from '../../../Files/iconspng.png'
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
    }
}))

export default function PDCI() {

    const classes = useStyles();

    const handleClose = () => {
        let url = '/projetos';
        window.location.href = url;
    };

    const abrirPDCIAma = () => {
        let url = 'https://leismunicipais.com.br/a/ba/a/amargosa/lei-ordinaria/2020/59/582/lei-ordinaria-n-582-2020-estabelece-normas-gerais-e-criterios-basicos-para-a-promocao-e-incentivos-a?-inovacao-objetivando-ambientes-produtivos-e-regras-para-implementacao-da-cidade-inteligente-smart-city-no-ambito-do-municipio-de-amargosa-e-da-outras-providencias=';
        window.open(url, '_blank');
        setTimeout(() => {
            let url = '/projetos';
            window.location.href = url;
        }, 1500);
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
                        Plano Diretor de Cidade Inteligente
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
                        O Futuro dos municípios neste e nos próximos anos, serão de estar cada vez mais conectado, automatizado, sustentável,
                        transparente, resiliente e etc. A função social de um Plano Diretor é de ser um mecanismo legal norteador e criador de
                        condições para desenvolvimento de uma cidade inteligente; estabelecendo, igualmente, normas e critérios básicos para a
                        promoção de um ambiente inovador, promovendo pesquisas cientifícas ou agentes envolvidos em pesquisas cientifícas, ambiente
                        tecnológico e inovador, com responsabilidade social, ambiental e a legislação.
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        A promoção e fomento das atividades inovadoras incentivada através do Plano Diretor de Cidade inteligente
                        tratará de condutas estratégicas para desenvolvimento socioeconômico do município. O Plano Diretor de Cidade Inteligente
                        é o agente básico da política de desenvolvimento de expansão urbana.
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        A LS Consultoria & Sistemas LTDA, tem o deleite de ter sido mentora do desenvolvimento do primeiro Plano Diretor de
                        Cidade Inteligente da Bahia em 2019, através do Município Parceiro <Link to='/projetos' onClick={abrirPDCIAma}>Amargosa.</Link>
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