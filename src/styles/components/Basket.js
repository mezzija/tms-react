import {createUseStyles} from 'react-jss';

const BasketStyle=({palette})=>({
    basket:{
        cursor: 'pointer',
    },
    basket__amount :{
        fontSize: '9px',
    },
    basket__count: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent:' center',
        fontSize: '9px',
        minWidth: '14px',
        height: '14px',
        backgroundColor:palette.primary.main ,
        borderRadius:' 50%',
        transform: 'translateY(-8px)',
    },
});
export default createUseStyles(BasketStyle);