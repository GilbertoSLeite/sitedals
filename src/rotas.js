import HomeSite from './Pages/Home/home';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import PagePrincipal from './Pages/Principal/pagePrincipal';
import PlayCircleFilledWhite from '@material-ui/icons/PlayCircleFilledWhite';
import AccountTree from '@material-ui/icons/AccountTree';
import PageProjects from './Pages/Projetos/pageProjects';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import AboutUs from './Pages/About/aboutUs';
import PeopleOutlined from '@material-ui/icons/PeopleOutlined';
import TeamLS from './Pages/Team/team';
import Parceiros from './Pages/Parceiros/parceiros';
import NatureOutlined from '@material-ui/icons/NatureOutlined';
import ArvoreDigital from './Pages/Projetos/ArvoreDigital/arvoreDigital';
import ArvoreImagens from './Pages/Projetos/ArvoreDigital/Imagens/arvoreImagens';

const rotas = [
    {
        path: '/home',
        name: 'Home',
        icon: HomeOutlined,
        children: HomeSite,
        layout: '/',
    },
    {
        path: '/principal',
        name: 'Principal',
        icon: PlayCircleFilledWhite,
        children: PagePrincipal,
        layout: '/',
    },
    {
        path: '/projetos',
        name: 'Projetos',
        icon: AccountTree,
        children: PageProjects,
        layout: '/',
    },
    {
        path: '/sobrenos',
        name: 'Sobre Nós',
        icon: InfoOutlined,
        children: AboutUs,
        layout: '/',
    },
    {
        path: '/equipe',
        name: 'Nossa Equipe',
        icon: PeopleOutlined,
        children: TeamLS,
        layout: '/',
    },
    {
        path: '/parceiros',
        name: 'Nossos Parceiros',
        icon: PeopleOutlined,
        children: Parceiros,
        layout: '/',
    },
    {
        path: '/arvoredigital',
        name: 'Árvore Digital',
        icon: NatureOutlined,
        children: ArvoreDigital,
        layout: '/',
    },
    {
        path: '/arvoredigitalimages',
        name: 'Árvore Digital',
        icon: NatureOutlined,
        children: ArvoreImagens,
        layout: '/',
    },
];

export default rotas;