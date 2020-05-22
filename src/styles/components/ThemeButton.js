import {createUseStyles} from 'react-jss';

const ThemeButtonStyle = {
    theme:{
        color: "#ffffff",
    },
    icon:{
        paddingTop: '5px',
        position: 'absolute',
        width: '1.2em',
        height: '1.2em',
        fill: 'currentColor',

    }

}
export default createUseStyles(ThemeButtonStyle,{name:'ThemeButton',index:302});