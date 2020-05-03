import React from 'react'


const withDisplay=(WrapperComponents)=>{
    return({display,...props})=> {
        if (display) {
            return <WrapperComponents {...props}/>
        }
        return null;
    }
};
export default withDisplay;