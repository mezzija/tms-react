import {createUseStyles} from 'react-jss';
const CartStyle=({palette})=>({
    content:{
        backgroundColor: palette.background.cart,
        borderRadius: '7px',
        padding: '15px',
        margin: '20px 0 20px 0',

    },
    title:{
        color:palette.text.primary,
    },
    img:{
        height: '120px',
        width: '175px',
        objectFit:' contain',
    },
    textWidth:{
        paddingTop: '10px',
        width: '377px',
    },
    characteristic:{
        paddingTop: '20px',
        fontSize: '12px',
        color:palette.common.black ,
    },
    contentPrice:{
        display: 'flex',
        flexDirection:' column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        color: palette.common.black,
    },
});
export default createUseStyles(CartStyle,{name:'Cart',index:201});