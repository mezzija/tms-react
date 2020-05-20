import React, {useState,useEffect} from 'react';
import {useSelector} from "react-redux";
//action
import {currencyProducts} from "../actions";
//HOCs
import {connect} from 'react-redux';
//style
import useStyles from '../styles/components/CurrencyButton';

const CurrencyButton=(props)=>{
    const classes = useStyles();
    const [active, setActive] = useState({status: true, loader: false});
    const currencyBYN = useSelector(state=>state.valueBYN)
    useEffect(()=>{
        if(!active.status) props.currencyProducts(currencyBYN);
        else props.currencyProducts();
    },[active]);
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
    currencyProducts
}
export default connect(null,mapDispatchToProps)(CurrencyButton);