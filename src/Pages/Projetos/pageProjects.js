import React from 'react';
import {
    makeStyles
} from '@material-ui/core';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import tree from '../../Files/Projetos/ArvoreDigital/tree01.jpeg';

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        width: '100%',
        height: 500
    },
    button: {
        color: '#ffff'
    }
}));


const openPricipal = () => {
    let url = '/principal';
    window.location.href = url;
};

export default function PageProjects() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    return (
        <div className={classes.root}>
            <AutoRotatingCarousel
                label='Início'
                open={open}
                onClose={() => setOpen(false)}
                onStart={() => setOpen(false)}
                interval={15000}
                ButtonProps={{ size: 'small', onClick: openPricipal }}
                mobile
                autoplay={true}
                style={{ position: 'absolute' }}
            >
                <Slide
                    media={<img alt='Tree' src={tree} />}
                    mediaBackgroundStyle={{ backgroundColor: '#1ca0b3' }}
                    style={{ backgroundColor: '#d2703b' }}
                    title='Árvore Digital'
                    subtitle='A Árvore Digital, conceito já disseminado em outros locais, contudo, esta é a primeira a ser desenvolvida no Estado da Bahia e por uma equipe 100% formado por baianos, trás inovações mais ousadas e que avançam diariamente a um conceito ainda não vislumbrado. Disponível em várias versões, podendo ter televisão com grade de publicidade e informações aos munícipes, monitoramento em 360° no local onde instalada, distribuição de internet, disponibilização de estrutura para carregamento de aparelhos eletroeletrônico, geração própria de energia solar sustentável e com banco para incentivo da interação social.'
                />
                <Slide
                    media={<img alt='Lawer' src='https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />}
                    mediaBackgroundStyle={{ backgroundColor: '#1ca0b3' }}
                    style={{ backgroundColor: '#d2703b' }}
                    title='Plano Diretor de Cidade Inteligente'
                    subtitle='O Plano Diretor de Cidade Inteligente é mecanismo legal que visa orientar o desenvolvimento de Cidade Inteligente(Smart City), tomando como base interesses coletivos em desenvolvimento de cidades sustentáveis, tecnologicamente inclusivas e viabilizando a inclusão social da sociedade local.'
                />
                <Slide
                    media={<img alt='Horta' src='https://images.unsplash.com/photo-1592419391068-9bd09dd58510?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />}
                    mediaBackgroundStyle={{ backgroundColor: '#1ca0b3' }}
                    style={{ backgroundColor: '#d2703b' }}
                    title='Horta Comunitária'
                    subtitle='Desenvolvimento de hortas comunitárias, disponibilizando a produção entre a entidade e o parceiro através de estudo viabilidade e criação de legislação que permitirá que o poder público em parcerias com as escolas técnicas, faculdade, munícipes e/ou empresas parceiras possam desenvolver em terrenos sem utilização por parte da prefeitura e que tem gerado custo a entidade, pois, geralmente são locais em que são descartados resíduos sólidos de forma indevida e inadequada.'
                />
                <Slide
                    media={<img alt='System Horta' src='https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />}
                    mediaBackgroundStyle={{ backgroundColor: '#1ca0b3' }}
                    style={{ backgroundColor: '#d2703b' }}
                    title='Software par Gestão de Horta Comunitária'
                    subtitle='A LS Consultoria & Sistemas LTDA, desenvolveu para entidades que desenvolvem através da sua consultoria o projeto da Horta Comunitária, um Software que gerencia as hortas, definindo tamanho das hortas, forma de espaçamento para plantação, tempo do ciclo do culvito e os responsáveis pela Horta Comunitária.'
                />
                <Slide
                    media={<img alt='Energia Solar' src='https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80' />}
                    mediaBackgroundStyle={{ backgroundColor: '#1ca0b3' }}
                    style={{ backgroundColor: '#d2703b' }}
                    title='Energia Solar'
                    subtitle='A LS Consultoria & Sistemas LTDA, desenvolveu um projeto a fim de mudar a história da Gestão Pública na Bahia. Analisando que a Bahia é um Estado que no decorrer do ano a incidência de dias ensolarados são alto, sendo assim, desenvolvemos um projeto em que planejamento junto a Gestão pontos estratégicos para trocar da energia convencional, para energia solar sustentável. Importante salientar que a trocar citada é efetuado planejando o valor inferior ao pago mensal a concessionária de energia local, não onerando, pelo contrário, gerando receita.'
                />
                <Slide
                    media={<img alt='CDIC' src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />}
                    mediaBackgroundStyle={{ backgroundColor: '#1ca0b3' }}
                    style={{ backgroundColor: '#d2703b' }}
                    title='Software de Combate a Doenças Infectocontagiosa'
                    subtitle='A LS Consultoria & Sistemas LTDA, antes aos desafios gerado pela pandemia de 2020, desenvolveu um software com intuíto de trazer transparência a população do Município ao qual presta consultoria, informando sobre os dados das doenças infectocontagiosa, não restrigindo somente a COVID-19, mas gerando informação desde a Dengue, Zika e Chikungunya.'
                />
                <Slide
                    media={<img alt='TourVirtual' src='https://images.unsplash.com/photo-1554474054-1258273559a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />}
                    mediaBackgroundStyle={{ backgroundColor: '#1ca0b3' }}
                    style={{ backgroundColor: '#d2703b' }}
                    title='Projetos com Realidade Virtual'
                    subtitle='A LS Consultoria & Sistemas LTDA, junto com seus parceiros decidiu ampliar o uso da Realidade Virtual para além de jogos e disponibilizar a população através do Turismo Virtual, principalmente com o advento da pandemia, um setor que sofreu grande impacto, a LS Consultoria & Sistemas LTDA estimula o desenvolvimento do turismo local com o uso da Realidade Virtual. Com um governança transparente que é um dos pilares de uma Cidade Inteligente, desenvolvemos projetos com a realidade virtual das construções prontas que ainda serão entregues ou as que estão em andamento, para população já poder usufruir antes mesmo da inauguração.'
                />
            </AutoRotatingCarousel>
        </div>

    )
};
