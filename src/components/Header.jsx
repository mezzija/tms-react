import React,{ Component } from 'react';

import Search from './Search.jsx'
import Basket from "./Basket.jsx";

import '../styles/components/Headers.css';

const  Header=(props)=> {

        let {count,amount} = props.basket;
        return(
            <div className='header'>
                <div className='container header__container row'>
                        <div className='header__logo'>The Best Shop</div>
                        <Search/>
                        <Basket  count={count} amount={amount} />
                </div>
            </div>

        )


};
export default Header;