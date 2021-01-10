import React from "react";
import {
    Avatar,
    Badge,
    IconButton,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import sky from '../../Files/background_sky_star_nigth.jpg';
import lua from '../../Files/lua.png';
import GilbertoLeite from './GilbertoLeite/gilbertoLeite';
import GilbertoBatista from './GilbertoBatista/gilbertoBatista';
import gb from '../../Files/Team/GilbertoBatista/01.jpeg';
import gl from '../../Files/Team/GilbertoLeite/01.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${sky})`,
        backgroundSize: 'cover',
        backgroundPosition: '100%',
    },
    avatar: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(10),
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    tipografiaAvar: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        top: 0
    }
}));

export default function TeamLS() {

    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);
    const [openGL, setOpenGL] = React.useState(false);
    const [openGB, setOpenGB] = React.useState(false);

    const { transform, opacity } = useSpring({
        reverse: false,
        from: {
            transform: "translateZ(0) rotate(0deg)",
            "-moz-transform": "translateZ(0) rotate(0deg)"
        },
        to: async (next) => {
            while (1) {
                await next({
                    transform: "translateZ(0) rotate(360deg)",
                    "-moz-transform": "translateZ(0) rotate(0deg)"
                });
            }
        },
        config: { duration: 20000 },
        reset: true
    });

    function AvatarGilbertoLeite() {
        return (
            <React.Fragment>
                <IconButton
                    onClick={() => setOpenGL(true)}
                >
                    <div className={classes.avatar}>
                        <Badge
                            overlap="rectangle"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            badgeContent={<Typography
                                paragraph
                                gutterBottom
                                display='initial'
                                variant='body2'
                                align='center'
                                className={classes.tipografiaAvar}
                            >
                                Gilberto Leite
                        </Typography>}
                        >
                            <Avatar
                                alt='Gilberto Leite'
                                src={gl}
                                className={classes.large}
                            />
                        </Badge>

                    </div>
                </IconButton>
            </React.Fragment>
        );
    };

    function AvatarGilbertoBatista() {
        return (
            <React.Fragment>
                <IconButton
                    onClick={() => setOpenGB(true)}
                >
                    <div className={classes.avatar}>
                        <Badge
                            overlap="rectangle"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            badgeContent={
                                <Typography
                                    paragraph
                                    gutterBottom
                                    display='initial'
                                    variant='body1'
                                    align='center'
                                    className={classes.tipografiaAvar}
                                >
                                    Gilberto Batista
                                </Typography>}
                        >
                            <Avatar
                                alt='Gilberto Batista'
                                src={gb}
                                className={classes.large}
                            />
                        </Badge>
                    </div>
                </IconButton>
            </React.Fragment>
        );
    };

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <React.Fragment>
            <div
                className={classes.root}>
                {checked ? <AvatarGilbertoBatista /> : null}
                <animated.div
                    style={{
                        transform,
                        opacity,
                        width: '150px',
                        height: '150px',
                        backgroundImage: `url(${lua})`,
                        backgroundSize: 'cover',
                        boxShadow: '0 0 40px 0px #fff',
                        alignItems: 'center',
                        justifyItems: 'center',
                        borderRadius: '50%'
                    }}
                    onClick={handleChange}
                />
                < GilbertoLeite checked={openGL} />
                < GilbertoBatista checked={openGB} />
                {checked ? <AvatarGilbertoLeite /> : null}
            </div>
        </React.Fragment>
    );
};
