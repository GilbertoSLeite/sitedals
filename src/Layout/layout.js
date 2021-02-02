import React from 'react';
import {
    CssBaseline
} from '@material-ui/core';
import {
    Switch,
    Route,
} from "react-router-dom";
import rotas from '../rotas';
import { BackToTop, StyledProvider } from 'components-extra';
import AppBarSite from '../Components/AppBar/appBar';
import FooterSite from '../Components/Footer/Footer';
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();
const pathname = hist.location.pathname;

function FilterRoutes(value) {
    if (pathname === value.path) {
        return value
    }
};

const rota = rotas.map(x => x).filter(FilterRoutes);

const Main = (
    <Switch>
        {rota.map((dados, chaves) => {
            return (
                <Route
                    path={dados.path}
                    children={<dados.children />}
                    key={chaves}
                />
            );
        })}
    </Switch>
);

export default function Layout() {

    return (
        <React.Fragment >
            <StyledProvider injectFirst>
                <AppBarSite />
                <CssBaseline />
                {Main}
                <BackToTop size="small" />
            </StyledProvider>
            <FooterSite />
        </React.Fragment>

    );
};