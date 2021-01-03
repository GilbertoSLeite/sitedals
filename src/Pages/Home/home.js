import { Typography } from '@material-ui/core';
import React from 'react';
import HomeImage from './Imagens/homeImage';
import HomePages from './Pages/homePages';

export default function HomeSite() {
    return (
        <React.Fragment>
            <Typography paragraph></Typography>
            <HomePages />
            <HomeImage />
        </React.Fragment>
    );
};