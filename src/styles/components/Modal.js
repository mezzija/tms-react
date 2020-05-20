import {createUseStyles} from 'react-jss';
const ModalStyle={
    modal_background: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    },
    modal_root :{
        backgroundColor:' #d8d8d8',
        position: 'absolute',
        padding: '20px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '10',
        borderRadius: '5px',
    },
    modal_rootText :{
        color: '#000000',
        fontSize:' 30px',
        textAlign: 'center',
    }
}
export default createUseStyles(ModalStyle);