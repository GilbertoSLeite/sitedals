import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ls from '../../../Files/iconspng.png'

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    tipografiaTitle: {
        fontWeight: 800,
        alignContent: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Avatar
                variant='circular'
                src={ls}
            />
            <Typography
                variant="h6"
                align='center'
                className={classes.tipografiaTitle}
            >
                {children}
            </Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        fontWeight: 400,
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))(MuiDialogActions);

export default function ArvoreDigital() {

    const handleClose = () => {
        let url = '/projetos';
        window.location.href = url;
    };

    const AbrirArvoreImagens = () => {
        let url = '/arvoredigitalimages';
        window.location.href = url;
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={true}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Árvore Digital
                </DialogTitle>
                <DialogContent dividers>
                    <Typography paragraph></Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        A Árvore Digital, desenvolvida baseada nos indicadores da NBR ISO 37120 de Tecnologia,
                        Sustentabilidade e Inovação. Tem sindo um projeto que vem mudando a história da inclusão social e
                        sustentabilidade na Bahia, disponibilizando aos munícipes funcionalidades através dos seguintes itens:
                        </Typography>
                    <Typography
                        paragraph
                        variant='body1'
                        align='justify'
                    >
                        <li>Ponto de Carga/Recarga para Dispositivos Eletroeletrônico;</li>
                        <li>Hotspot para distribuição de internet via Wi-fi com disponibilidade para mais 200 acessos simultâneos em 2GHz e/ou 5GHz;</li>
                        <li>Geração de Energia Elétrica por meio Sustentável através de Energia Limpa Solar;</li>
                        <li>Descontos através do excedente gerado pelas placas solares da Árvore Digital em conta contrato referente ao local escolhido para instalação;</li>
                        <li>Geração de Receita própria através de espaços de 1m² para publicidades ou em dois televisores com programação digital informativo da prefeitura e também publicidades;</li>
                        <li>Iluminação Noturna Personalizável;</li>
                        <li>Câmeras de Monitoramento web;</li>
                        <li>Banco para descanso e socialização.</li>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={AbrirArvoreImagens}
                        color="primary"
                    >
                        Ver Imagens
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
