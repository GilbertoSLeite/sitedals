import HomeSite from './Pages/Home/home';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import PagePrincipal from './Pages/Principal/pagePrincipal';
import PlayCircleFilledWhite from '@material-ui/icons/PlayCircleFilledWhite';
import AccountTree from '@material-ui/icons/AccountTree';
import PageProjects from './Pages/Projetos/pageProjects';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import AboutUs from './Pages/About/aboutUs';
import NewHome from './Pages/Home/newHome';

const rotas = [
    {
        path: '/home',
        name: 'Home',
        icon: HomeOutlined,
        children: HomeSite,
        layout: '/',
    },
    {
        path: '/newhome',
        name: 'New Home',
        icon: HomeOutlined,
        children: NewHome,
        layout: '/',
    },
    {
        path: '/principal',
        name: 'Início',
        icon: PlayCircleFilledWhite,
        children: PagePrincipal,
        layout: '/',
    },
    {
        path: '/projetos',
        name: 'Início',
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
    }
];

export default rotas;