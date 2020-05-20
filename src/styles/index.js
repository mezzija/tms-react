import {createUseStyles} from 'react-jss';
import './fonts.css';
import GlobalStyles from "./global";

const RootStyle = theme=> ({
    ...GlobalStyles(theme),
})

export default createUseStyles(RootStyle);