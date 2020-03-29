import React,{ Component } from 'react';

import Search from './Search.jsx'
import Basket from "./Basket.jsx";

import '../styles/components/Headers.css';

export default class Header extends Component{
    render() {
        let {count,amount} = this.props.basket;
        console.log(count);
        return(
            <div className='header'>
                <div className='container header__container row'>
                        <div className='header__logo'>The Best Shop</div>
                        <Search/>
                        <Basket  count={count} amount={amount} />
                </div>
            </div>

        )
    }

}