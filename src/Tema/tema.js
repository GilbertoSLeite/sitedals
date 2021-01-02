import { createMuiTheme } from '@material-ui/core';

const tema = createMuiTheme({
    palette: {
        common: {
            black: '#666666',
            white: '#fff'
        },
        primary: {
            main: '#fff',
            light: 'rgba(74, 128, 153, 1)',
            dark: 'rgba(74, 128, 153, 1)',
            contrastText: '#000000'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        text: {
            primary: '#000000',
            secondary: 'rgba(0, 0, 0, 1)',
            disabled: 'rgba(0, 0, 0, 1)',
            hint: 'rgba(0, 0, 0, 1)',
            icon: 'rgba(0, 0, 0, 1)',
            fontWeight: 'bold'
        },
        divider: 'rgba(105, 104, 109, 1)',
        background: {
            paper: '#f2efef',
            default: '#f2efef'
        },
        action: {
            hover: '#58a06d',
            active: '#58a06d',
            hoverOpacity: 0.08,
            selected: '#497c96',
            selectedOpacity: 0.16,
            disabled: '#ff0018',
            disabledBackground: 'rgba(255, 255, 255, 1)',
            disabledOpacity: 0.38,
            focus: 'rgba(255, 255, 255, 1)',
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
            fontWeight: 'bold'
        },
        links: '#000000',
        inlineCode: '#000000'
    },
});

export default tema;