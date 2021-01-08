import React from 'react';
import { CardHeader, makeStyles } from '@material-ui/core';
import Slider from './Slider';
import data from './data';

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 500,
        alignContent: 'center',
        justifyContent: 'center',
    },
    sliderInternal: {
        width: '100%',
        height: '100%',
        padding: '1rem',
    },
    sliderImages: {
        width: '100%',
        borderRadius: '20px',
        height: '85%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center',
    },
    cardHeader: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: 800,
    }
}));

export default function Parceiros() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Slider
                    items={data}
                    width={450}
                    visible={3}
                >
                    {({
                        css,
                        title,
                        subtitle,
                        marginleft,
                        altura,
                        largura,
                        borderradius
                    }, i) => (
                        <div className={classes.sliderInternal}>
                            <CardHeader
                                title={title}
                                subheader={subtitle}
                                className={classes.cardHeader}
                            />
                            <div
                                style={{
                                    backgroundImage: css,
                                    marginLeft: marginleft,
                                    height: altura,
                                    width: largura,
                                    borderRadius: borderradius,
                                }}
                                className={classes.sliderImages} />
                        </div>
                    )}
                </Slider>
            </div>
        </React.Fragment>
    )
}