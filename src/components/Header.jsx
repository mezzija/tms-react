import React, { useState } from 'react';
import {shape,array,number} from 'prop-types';

import {compose} from "redux";
import {connect} from 'react-redux';
//HOOKs
import { useHistory } from "react-router-dom";
//components
import Search from './Search.jsx'
import Basket from "./Basket.jsx";
import Modal from "./Modal.jsx";
import BasketCart from "./BasketCart.jsx";
import ThemeButton from "./ThemeButton.jsx";
//style
import useStyle from '../styles/components/Headers'


const Header = ({products,basket}) => {
    const classes= useStyle();
    const [modalActive,setModalActive]=useState(false);
    const  history=useHistory();

    const handleClick=(event)=>{
        event.preventDefault();
        history.push('/');
    }
    const openModal=()=> {
        setModalActive(true);
    }
    const closeModal=()=> {
        setModalActive(false);
    }


    let {count, amount, productsID} = basket;
    const basketProduct = products.filter(item => productsID.includes(item.id));
    return (
        <div className={classes.header}>
            <div className='container row'>
                <div><a href="#" onClick={handleClick} className={classes.header__logo}>The Best Shop</a></div>
                <Search/>
                <ThemeButton/>
                <Basket onClick={openModal} count={count} amount={amount}/>
                <Modal onClick={closeModal} display={modalActive}>
                    {basketProduct.map(item => (
                        <BasketCart
                            key={basketProduct.id}
                            product={item}
                        />
                    ))
                    }
                </Modal>
            </div>
        </div>
    )


}
Header.displayName="Header";

Header.propTypes = {
    basket: shape({
        count: number.isRequired,
        amount: number.isRequired,
        productsID: array.isRequired,

    }),
    products:array.isRequired,
};
const mapStateToProps = (state) => ({
    basket: state.basket,
    products: state.products.current,
});

export default compose(
    connect(mapStateToProps)
)(Header);