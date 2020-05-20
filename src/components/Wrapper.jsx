import React from 'react';
import {ThemeProvider} from 'react-jss';
//components
import App from './App.jsx';
//theme
import mainTheme from '../styles/themes/main';
const Wrapper=(props)=>{

    return (
        <ThemeProvider theme={mainTheme}>
            <App/>
        </ThemeProvider>
    );
}
Wrapper.displayName='Wrapper';

export default Wrapper;