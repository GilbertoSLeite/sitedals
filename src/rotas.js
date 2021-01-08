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
import GavelOutlined from '@material-ui/icons/GavelOutlined';
import PDCI from './Pages/Projetos/PDCI/pdci';
import HortaComunitaria from './Pages/Projetos/HortaComunitaria/hortaComunitaria';
import SoftHortaComunitaria from './Pages/Projetos/SoftHorta/softHorta';
import HealingOutlined from '@material-ui/icons/HealingOutlined';
import CDCI from './Pages/Projetos/CDIC/cdic';
import AirplayOutlined from '@material-ui/icons/AirplayOutlined';
import RealidadeVirtual from './Pages/Projetos/RealidadeVirtual/rv';
import WbSunny from '@material-ui/icons/WbSunny';
import EnergiaSolar from './Pages/Projetos/EnergiaSolar/energiaSolar';

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
    {
        path: '/pdci',
        name: 'PDCI',
        icon: GavelOutlined,
        children: PDCI,
        layout: '/',
    },
    {
        path: '/hortacomunitaria',
        name: 'Horta Comunitária',
        icon: NatureOutlined,
        children: HortaComunitaria,
        layout: '/',
    },
    {
        path: '/softwarehortacomunitaria',
        name: 'Software para Gestão de Horta Comunitária',
        icon: NatureOutlined,
        children: SoftHortaComunitaria,
        layout: '/',
    },
    {
        path: '/cdci',
        name: 'Software de Combate a Doenças Infectocontagiosa',
        icon: HealingOutlined,
        children: CDCI,
        layout: '/',
    },
    {
        path: '/rv',
        name: 'Realidade Virtual',
        icon: AirplayOutlined,
        children: RealidadeVirtual,
        layout: '/',
    },
    {
        path: '/energiasolar',
        name: 'Energia Solar',
        icon: WbSunny,
        children: EnergiaSolar,
        layout: '/',
    },
];

export default rotas;