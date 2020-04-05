import React from 'react'
import ClassNames from 'classnames'
import '../styles/components/Loader.css'


const Loader=(props)=>{
    if(props.active){
        return(
            <div className={ClassNames('position',{'active':!props.active})}>
                <div className="windows8">
                    <div className="wBall" id="wBall_1">
                        <div className="wInnerBall"/>
                    </div>
                    <div className="wBall" id="wBall_2">
                        <div className="wInnerBall"/>
                    </div>
                    <div className="wBall" id="wBall_3">
                        <div className="wInnerBall"/>
                    </div>
                    <div className="wBall" id="wBall_4">
                        <div className="wInnerBall"/>
                    </div>
                    <div className="wBall" id="wBall_5">
                        <div className="wInnerBall"/>
                    </div>
                </div>
            </div>

        )
    }else return null;

};

export default Loader;

