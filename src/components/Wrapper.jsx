import React from 'react';
import {ThemeProvider} from 'react-jss';
import {useSelector} from "react-redux";
//components
import App from './App.jsx';
//theme
import Themes from '../styles/themes'
import useStyles from '../styles/index'
const Wrapper=(props)=>{
    const theme=useSelector(state=>state.app.lightTheme)
    const currentTheme=theme? 'light':'dark';

    return (
        <ThemeProvider theme={Themes[currentTheme]}>
            <App/>
        </ThemeProvider>
    );
}
Wrapper.displayName='Wrapper';

export default Wrapper;