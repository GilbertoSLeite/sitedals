import React from 'react';
import {
    AppBar,
    IconButton,
    makeStyles,
    Toolbar
} from '@material-ui/core';
import HomeOutlined from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const openHome = () => {
    let url = '/home';
    window.location.href = url;
};

export default function AppBarSite() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color='transparent' >
                <Toolbar>
                    <IconButton onClick={openHome}>
                        <HomeOutlined />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};