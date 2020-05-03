import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {compose} from "redux";
import { connect } from 'react-redux';
//HOCs
import {withRouter} from 'react-router'



import Search from './Search.jsx'
import Basket from "./Basket.jsx";
import Modal from "./Modal.jsx";

import '../styles/components/Headers.css';
import BasketCart from "./BasketCart.jsx";

class Header extends Component{
        constructor(props) {
                super(props);
                this.state={
                        display:false,
                };
                this.handleClick=this.handleClick.bind(this);
                this.openModal=this.openModal.bind(this);
                this.closeModal=this.closeModal.bind(this);
        }

        handleClick(event){
                event.preventDefault();
                this.props.history.push('/');
        }
        openModal(){
                this.setState({display:true});
        }
        closeModal(){
                this.setState({display:false});
        }

        render(){
                let {count,amount,productsID} = this.props.basket;
                const basketProduct =this.props.products.filter(item=>productsID.includes(item.id));
                return(
                    <div className='header'>
                            <div className='container header__container row'>
                                    <div ><a href="#"  onClick={this.handleClick} className='header__logo'>The Best Shop</a></div>
                                    <Search/>
                                    <Basket onClick={this.openModal} count={count} amount={amount} />

                                    <Modal onClick={this.closeModal} display={this.state.display}>
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
}
Header.propTypes={
        basket: PropTypes.shape({
                count:PropTypes.number,
                amount:PropTypes.number,
                productsID:PropTypes.array,

        })
};
const  mapStateToProps=(state)=>({
        basket:state.basket,
        products:state.products,
});
export default compose(
    withRouter,
    connect(mapStateToProps)
)(Header);