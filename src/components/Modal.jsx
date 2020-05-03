import React, {Component} from 'react'

//style
import '../styles/components/Modal.css'

//HOCs
import WithDisplay from '../HOCs/withDisplay.jsx'

const Modal = (props) => {
    return (
        <>
            <div onClick={props.onClick} className='modal-background'/>
            <div className='modal-root'>
                <p className='modat-root-text'>Basket</p>
                {props.children}
            </div>
        </>
    );
}
export default WithDisplay(Modal);