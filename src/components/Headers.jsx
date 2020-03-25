import React,{ Component } from 'react';

import Search from './Search.jsx'
import Basket from "./Basket.jsx";

import '../styles/components/Headers.css';

export default class Header extends Component{
    render() {
        return(
            <div className='header'>
                <div className='container header__container row'>
                        <div className='header__logo'>The Best Shop</div>
                        <Search/>
                        <Basket/>
                </div>
            </div>

        )
    }

}