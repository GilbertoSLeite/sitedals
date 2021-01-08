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

export default function CDCI() {

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
                        Software de Combate a Doenças Infectoconntagiosa
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
                        A LS Consultoria & Sistemas LTDA, desenvolveu um sistema sob a plataforma que é a tendência mundial,
                        conhecida como ReactJS, biblioteca JavaScript criado pelo grupo do Facebook e usado em seus
                        ambientes:
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Instagram;</li>
                        <li>Facebook;</li>
                        <li>Twitter;</li>
                        <li>Americanas;</li>
                        <li>Netflix;</li>
                        <li>Boticário.</li>
                        <li>Buscapé.</li>
                        <li>Catho;</li>
                        <li>C6 Bank;</li>
                        <li>Ifood.</li>
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        Além de utilizar uma Arquitetura de Software inovadora, a LS Consultoria & Sistemas LTDA dispõe de
                        servidores da AWS(Amazon) evitando que o sistema fique fora do ar, mantendo fulltime o seu
                        funcionamento. Segue as funcionalidades encontradas no Software de Combate a Doenças Infectocontagiosa:
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='center'
                        className={classes.tipografiaTitle}
                    >
                        Gestão de Dados
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Gráficos do Município;</li>
                        <li>Dashboard Mundial;</li>
                        <li>Dados da Entidade;</li>
                        <li>Dados Cadastrais do Município;</li>
                        <li>Hospitais Covid-19.</li>
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='center'
                        className={classes.tipografiaTitle}
                    >
                        Gráficos do Município
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Monitoramento automatizado dos casos do Município;</li>
                        <li>Ambiente gráfico dos casos do Município;</li>
                        <li>Gráficos por Região (Casos e Óbitos);</li>
                        <li>Gráfico por Município (Confirmados e Óbitos);</li>
                        <li>Lista de Casos dos Municípios da Bahia.</li>
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='center'
                        className={classes.tipografiaTitle}
                    >
                        Dashboard
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Gráfico em Radar (Confirmados, Mortes e Recuperados) com Escolha de País e Filtro de Data;</li>
                        <li>Ambiente gráfico dos casos do país escolhido;</li>
                        <li>Ambiente gráfico dos casos por estado;</li>
                        <li>Painel Geral dos casos a nível mundial e do país escolhido no filtro.</li>
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='center'
                        className={classes.tipografiaTitle}
                    >
                        Dados da Entidade
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Dados cadastrais do município.</li>
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='center'
                        className={classes.tipografiaTitle}
                    >
                        Dados Técnicos
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Dados de Monitoramento, Suspeitos, Descartados, Confirmados, Aguardando Resultado, Mortes e Recuperados;</li>
                        <li>Dados das Leis Publicadas no Município referente ao Codiv-19.</li>
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='center'
                        className={classes.tipografiaTitle}
                    >
                        Hospitais Covid-19
                    </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Campo de busca de hospitais voltado ao combate da Covid-19 filtrado pelo Município e sua Microrregião.</li>
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