import React from 'react';
import {
    AppBar,
    IconButton,
    makeStyles,
    Toolbar,
    Tooltip
} from '@material-ui/core';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import PlayCircleOutlineOutlined from '@material-ui/icons/PlayCircleOutlineOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const openHome = () => {
    let url = '/home';
    window.location.href = url;
};

const openPrincipal = () => {
    let url = '/principal';
    window.location.href = url;
}

export default function AppBarSite() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color='transparent' >
                <Toolbar>
                    <Tooltip
                        arrow
                        title='Página Inicial'
                    >
                        <IconButton onClick={openHome}>
                            <HomeOutlined />
                        </IconButton>
                    </Tooltip>
                    <Tooltip
                        arrow
                        title='Página Principal - Apresentação Geral'
                    >
                        <IconButton onClick={openPrincipal}>
                            <PlayCircleOutlineOutlined />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    );
};