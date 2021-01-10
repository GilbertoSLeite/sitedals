import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
}));

const urlNews = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'

export default function News() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Parallax pages={3}>
                    <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80)`, backgroundSize: 'cover' }} />
                    <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                        <img alt='News' src={urlNews} />
                    </ParallaxLayer>
                </Parallax>
            </div>
        </React.Fragment>
    )
}