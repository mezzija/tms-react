import {createUseStyles} from 'react-jss';
const HeadersStyle=({palette})=>({
    header:{
        backgroundColor: palette.background.header,
        color: '#f5f5f7',
        '& .container ':{
            padding:'18px 0 10px 0',
        }
    },
    header__logo:{
        color: '#ffffff',
    },
});
export default createUseStyles(HeadersStyle);