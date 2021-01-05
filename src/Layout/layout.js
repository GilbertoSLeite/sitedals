import React from 'react';
import {
    CssBaseline
} from '@material-ui/core';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import rotas from '../rotas';
import { BackToTop, StyledProvider } from 'components-extra';
import AppBarSite from '../Components/AppBar/appBar';
import FooterSite from '../Components/Footer/Footer';

const Main = (
    <Switch>
        {rotas.map((dados, chaves) => {
            return (
                <Route
                    path={dados.path}
                    children={<dados.children />}
                    key={chaves}
                />
            );
        })}
        <Redirect from="/" to="/home" />
    </Switch>
);

export default function Layout() {

    return (
        <React.Fragment>
            <StyledProvider injectFirst>
                <CssBaseline />
                <AppBarSite />
                {Main}
                <BackToTop size="small" />
            </StyledProvider>
            <FooterSite />
        </React.Fragment>
    )
}