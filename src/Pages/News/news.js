import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import data from './data';
import { Hidden } from '@material-ui/core';
import CodigoTributario from './CodigoTributario/codigoTributario';
import ArtigoGilbertoBatista01 from './ArtigosPublicados/artigoPublicoGB01';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        marginLeft: 10
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    listSubheader: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const ano2019 = data.map(x => x).filter(ano2019Projetos);
const ano2020 = data.map(x => x).filter(ano2020Projetos);

function ano2019Projetos(value) {
    if (value.ano === 2019) {
        return value
    } else {
        return null
    };
};

function ano2020Projetos(values) {
    if (values.ano === 2020) {
        return values
    } else {
        return null
    };
};

function Grid2019() {

    const classes = useStyles();

    const [openCT, setOpenCT] = React.useState(false);
    const [openArt01, setOpenArt01] = React.useState(false);

    return (
        <React.Fragment>
            <Hidden smDown>
                <div className={classes.root}>
                    <GridList
                        cellHeight={540}
                        className={classes.gridList}
                        cols={2}
                        spacing={3}
                    >
                        <GridListTile
                            key="Subheader"
                            cols={2}
                            style={{
                                height: 'auto'
                            }}>
                            <ListSubheader
                                component="div"
                                color='primary'
                                className={classes.listSubheader}
                            >
                                Projetos - 2019
                        </ListSubheader>
                        </GridListTile>
                        {ano2019.map((tile) => (
                            <GridListTile
                                key={tile.id}
                            >
                                <img
                                    src={tile.imagem}
                                    alt={tile.titulo} />
                                <GridListTileBar
                                    title={tile.titulo}
                                    subtitle={<span>por: {tile.autor}</span>}
                                    actionIcon={
                                        <IconButton
                                            aria-label={`info about ${tile.titulo}`}
                                            className={classes.icon}
                                            onClick={() => (tile.titulo === 'Código Tributário' ? setOpenCT(openCT ? false : true) : (((tile.titulo === 'Publicação de Artigo Acadêmico') && (tile.ano === 2019)) ? setOpenArt01(openArt01 ? false : true) : window.open(tile.about, '_blank')))}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div className={classes.root}>
                    <GridList
                        cellHeight={540}
                        className={classes.gridList}
                        cols={1}
                        spacing={3}
                    >
                        <GridListTile
                            key="Subheader"
                            cols={1}
                            style={{
                                height: 'auto'
                            }}>
                            <ListSubheader
                                component="div"
                                color='primary'
                                className={classes.listSubheader}
                            >
                                Projetos - 2019
                        </ListSubheader>
                        </GridListTile>
                        {ano2019.map((tile) => (
                            <GridListTile
                                key={tile.id}
                            >
                                <img
                                    src={tile.imagem}
                                    alt={tile.titulo} />
                                <GridListTileBar
                                    title={tile.titulo}
                                    subtitle={<span>por: {tile.autor}</span>}
                                    actionIcon={
                                        <IconButton
                                            aria-label={`info about ${tile.titulo}`}
                                            className={classes.icon}
                                            onClick={() => (tile.titulo === 'Código Tributário' ? setOpenCT(openCT ? false : true) : window.open(tile.about, '_blank'))}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Hidden>
            <CodigoTributario checked={openCT} />
            <ArtigoGilbertoBatista01 checked={openArt01} />
        </React.Fragment>
    );
};

function Grid2020() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Hidden smDown>
                <div className={classes.root}>
                    <GridList
                        cellHeight={540}
                        className={classes.gridList}
                        cols={3}
                        spacing={2}
                    >
                        <GridListTile
                            key="Subheader"
                            cols={3}
                            style={{
                                height: 'auto'
                            }}>
                            <ListSubheader
                                component="div"
                                color='primary'
                                className={classes.listSubheader}
                            >
                                Projetos - 2020
                        </ListSubheader>
                        </GridListTile>
                        {ano2020.map((tile) => (
                            <GridListTile
                                key={tile.id}
                            >
                                <img
                                    src={tile.imagem}
                                    alt={tile.titulo} />
                                <GridListTileBar
                                    title={tile.titulo}
                                    subtitle={<span>por: {tile.autor}</span>}
                                    actionIcon={
                                        <IconButton
                                            aria-label={`info about ${tile.titulo}`}
                                            className={classes.icon}
                                            onClick={() => window.open(tile.about, '_blank')}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div >
            </Hidden>
            <Hidden mdUp>
                <div className={classes.root}>
                    <GridList
                        cellHeight={540}
                        className={classes.gridList}
                        cols={1}
                        spacing={2}
                    >
                        <GridListTile
                            key="Subheader"
                            cols={1}
                            style={{
                                height: 'auto'
                            }}>
                            <ListSubheader
                                component="div"
                                color='primary'
                                className={classes.listSubheader}
                            >
                                Projetos - 2020
                        </ListSubheader>
                        </GridListTile>
                        {ano2020.map((tile) => (
                            <GridListTile
                                key={tile.id}
                            >
                                <img
                                    src={tile.imagem}
                                    alt={tile.titulo} />
                                <GridListTileBar
                                    title={tile.titulo}
                                    subtitle={<span>por: {tile.autor}</span>}
                                    actionIcon={
                                        <IconButton
                                            aria-label={`info about ${tile.titulo}`}
                                            className={classes.icon}
                                            onClick={() => window.open(tile.about, '_blank')}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div >
            </Hidden>
        </React.Fragment>
    );
}



export default function News() {
    return (
        <React.Fragment>
            <Grid2019 />
            <Grid2020 />
        </React.Fragment>

    );
}
