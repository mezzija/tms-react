import React, {useState,useEffect} from 'react';
//action
import {changeCurrency} from "../actions";
//HOCs
import {connect} from 'react-redux';
//style
import useStyles from '../styles/components/CurrencyButton';

const CurrencyButton=(props)=>{
    const classes = useStyles();
    const [active, setActive] = useState({status: true, loader: false});

    useEffect(()=>{
        if(active.loader){
            if(!active.status) props.changeCurrency('BYN');
            else props.changeCurrency('USD');
        }
    },[active])

    const handleClick = (event) => {
        event.preventDefault();
        setActive(prevState => ({status: !prevState.status, loader: true}))

    }

    let currency=!active.status?'USD':'BYN';
    return(
        <a onClick={handleClick} href="#" className={classes.CurrencyButton}>{currency}</a>
    );


}
const mapDispatchToProps={
    changeCurrency,
}
export default connect(null,mapDispatchToProps)(CurrencyButton);