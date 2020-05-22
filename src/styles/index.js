import {createUseStyles} from 'react-jss';
import './fonts.css';


const RootStyle = ({typography,palette})=> ({
    '@global': {
        '*':{
            margin:0,
            fontFamily:typography.fontFamily,
            fontWeight:typography.fontWeightBold,
        },
        body: {
            fontSize: typography.fontSize,
            color: palette.text.primary,
        },
        a: {
            textDecoration: 'none',
            color: palette.text.primary,
        },
        '.container':{
            maxWidth:'900px',
            margin: '0 auto',
        },
        '.row':{
            display:'flex',
            justifyContent:'space-between',

        },
        img:{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
        },
        h3 :{
            fontWeight: 'normal',
        },
        input:{
            outline: 'none',
            width: '400px',
            height: '24px',
            border: 'none',
            borderRadius: '5px',
        },

    }
})

export default createUseStyles(RootStyle,{name:'Root',index:100});