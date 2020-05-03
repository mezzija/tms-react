import React from 'react'
import ClassNames from 'classnames'
import '../styles/components/Loader.css'

//HOCs
import WithDisplay from '../HOCs/withDisplay.jsx'

const Loader=()=>{

        return(
            <div className="position">
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


};

export default WithDisplay(Loader);

