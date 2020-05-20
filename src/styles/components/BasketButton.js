import {createUseStyles} from 'react-jss';
const BasketButtonStyle=({palette})=>({
    button:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.primary.main,
        borderRadius: '5px',
        color: palette.common.white,
        minWidth: '270px',
        height: '35px',
    },
    active:{
        backgroundColor:palette.secondary.main,
    }
});
export default createUseStyles(BasketButtonStyle);