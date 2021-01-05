import React from 'react';
import { CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        margin: '0',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    tipografia: {
        color: '#ffff',
        fontWeight: 800
    },
    grid: {
        width: "100%",
        alignItems: 'center',
    },
}));

export default function Texto() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <Grid
                    id="GridLine1"
                    spacing={3}
                    alignItems="center"
                    justify="center"
                    container
                    className={classes.grid}
                >
                    <Grid
                        item
                        xs={12}
                        sm={10}
                    >
                        <Typography paragraph></Typography>
                        <Typography
                            variant='h6'
                            align='center'
                        >
                            Quem Somos?
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                        >
                            A LS Consultoria & Sistemas LTDA, é a primeira empresa a desenvolver o projeto de Cidade Inteligente(Smart City) no Estado da Bahia.
                        </Typography>
                        <Typography paragraph></Typography>
                        <Typography
                            variant='h6'
                            align='center'
                        >
                            O Que Fazemos?
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                        >
                            Através da experiência e conhecimento adquirido através de sua equipe com o mais alto nível de capacitação, apoia aos municípios através do desenvolvimento de Plano Diretores, Decretos, Projetos, Consultorias e etc. no desenvolvimento do município como Cidade Inteligente(Smart City).
                        </Typography>
                        <Typography paragraph></Typography>
                        <Typography
                            variant='h6'
                            align='center'
                        >
                            Em Que Ano Começamos?
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                            paragraph
                        >
                            Em 2017 com ousadia e um projeto robusto, visão de modernização e especialização. Tendo como base o que há de melhor em tecnologia no Brasil e no mundo, iniciou sua atuação em softwares para Gestão Tributária, facilitando e contribuindo ao bom funcionamento da Gestão Pública Municipal.
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                            paragraph
                        >
                            Identificando que ainda era muito pouco e com anseio em voos mais altos, a LS Consultoria & Sistemas iniciou o estudo e a implementação do que há de mais avançado em Gestão Municipal e urbanismo, as Smart Cities, ou seja, as cidades inteligentes.
                        </Typography>
                        <Typography paragraph></Typography>
                        <Typography
                            variant='h6'
                            align='center'
                        >
                            Como Fazemos?
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                            paragraph
                        >
                            Através da ISO 37122:2019 que define os indicadores para desenvolvimento de Cidades Inteligentes(Smart Cities). Desenvolvemos projetos específicos utilizando um conjunto de metodologias para cidades inteligentes. Focando na aceleração das melhorias dos serviços do município e na qualidade de vida do cidadão.
                        </Typography>
                        <Typography paragraph></Typography>
                        <Typography
                            variant='h6'
                            align='center'
                        >
                            Quais São os Indicadores?
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                            paragraph
                        >
                            Os indicadores usados para mensurar uma Cidade Inteligente são:
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                        >
                            <li>Governança;</li>
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                        >
                            <li>Segurança;</li>
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                        >
                            <li>Tecnologia e Inovação;</li>
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                        >
                            <li>Mobilidade;</li>
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                        >
                            <li>Economia(Empreendedorismo);</li>
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                        >
                            <li>Educação;</li>
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                        >
                            <li>Sustentabilidade.</li>
                        </Typography>
                        <Typography paragraph></Typography>
                        <Typography
                            variant='h6'
                            align='center'
                        >
                            Qual Objetivo da LS Consultoria & Sistemas LTDA?
                        </Typography>
                        <Typography
                            variant='body2'
                            align='justify'
                            paragraph
                        >
                            Através do nosso trabalho e conhecimento oferecer à Bahia e ao nosso querido Nordeste a visibilidade e os avanços que merece.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};
