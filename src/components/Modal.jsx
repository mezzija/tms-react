import React, {Component} from 'react'

//style
import useStyles from '../styles/components/Modal';

//HOCs
import WithDisplay from '../HOCs/withDisplay.jsx'

const Modal = (props) => {
    const classes=useStyles();
    return (
        <>
            <div onClick={props.onClick} className={classes.modal_background}/>
            <div className={classes.modal_root}>
                <p className={classes.modal_rootText}>Basket</p>
                {props.children}
            </div>
        </>
    );
}
export default WithDisplay(Modal);