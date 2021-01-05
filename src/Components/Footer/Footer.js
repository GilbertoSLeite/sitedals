import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {
    Facebook,
    Instagram,
    AccountCircle,
    Email,
} from '@material-ui/icons';
import { StyledProvider, Footer } from 'components-extra';
import ls from '../../Files/iconspng.png';

const tema = createMuiTheme({
    palette: {
        common: {
            black: '#666666',
            white: '#fff'
        },
        type: 'dark',
        primary: {
            main: '#fff',
            light: 'rgba(74, 128, 153, 1)',
            dark: 'rgba(74, 128, 153, 1)',
            contrastText: '#000201'
        },
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.text.primary,
    },
    imagem: {
        backgroundImage: `url(${ls})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent', //,theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: '18%',
        backgroundPosition: 'center',
        color: 'transparent',
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: 'flex',
    },
    iconsWrapper: {
        height: 120,
    },
    icons: {
        display: 'flex',
    },
    icon: {
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.warning.main,
        marginRight: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.warning.dark,
        },
    },
    colorIcon: {
        color: "#199e48",
    },
    list: {
        margin: 0,
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
    },
    language: {
        marginTop: theme.spacing(1),
        width: 150,
    },
    footer: {
        color: "#FFFFF"
    }
}));

export default function FooterSite() {

    const classes = useStyles();

    const newTabInst = () => {
        const url = 'https://www.instagram.com/lsconsultoriasesistemas/';
        window.open(url, '_blank');
    };

    const newTabFace = () => {
        const url = 'https://www.facebook.com/lsconsultorias.srv.br';
        window.open(url, '_blank');
    };

    const newTabLS = () => {
        const url = 'https://www.lsconsultorias.srv.br/';
        window.open(url, '_blank');
    };

    return (
        <StyledProvider theme={tema} injectFirst>
            <Footer className={classes.imagem}>
                <Footer.Column>
                    <Footer.Item >
                        LS Consultoria & Sistemas LTDA
                    </Footer.Item>
                    <Footer.Item
                        icon={<AccountCircle className={classes.footer} />}
                        className={classes.footer} onClick={newTabLS}>
                        Institucional
                    </Footer.Item>
                    <Footer.Item
                        icon={<Instagram />}
                        onClick={newTabInst}>
                        Instagram
                    </Footer.Item>
                    <Footer.Item
                        icon={<Facebook />}
                        onClick={newTabFace}>
                        Facebook
                    </Footer.Item>
                    <Footer.Item
                        icon={<Email />}>
                        E-mail
                    </Footer.Item>
                </Footer.Column>
            </Footer>
        </StyledProvider>
    );
};