import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router'


import Search from './Search.jsx'
import Basket from "./Basket.jsx";

import '../styles/components/Headers.css';

const  Header=(props)=> {
        const handleClick=(event)=>{
                event.preventDefault();
                props.history.push('/');
        }
        let {count,amount} = props.basket;
        return(
            <div className='header'>
                <div className='container header__container row'>
                        <div ><a href="#"  onClick={handleClick} className='header__logo'>The Best Shop</a></div>
                        <Search/>
                        <Basket  count={count} amount={amount} />
                </div>
            </div>

        )

};
Header.propTypes={
        basket: PropTypes.shape({
                count:PropTypes.number,
                amount:PropTypes.number,
        })
};
export default withRouter(Header);