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
    appbar: {
        backgroundColor: '#ffff'
    },
    toolbar: {
        backgroundColor: '#ffff',
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
            <AppBar position="static" className={classes.appBar}>
                <Toolbar variant="dense" className={classes.toolbar}>
                    <IconButton onClick={openHome}>
                        <HomeOutlined />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};