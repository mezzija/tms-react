import {createUseStyles} from 'react-jss';

const App =({palette})=>({
    root:{
        backgroundColor: palette.background.default,
        height:'110vh',
        //backgroundSize:'100%',

    }

});
export default createUseStyles(App);