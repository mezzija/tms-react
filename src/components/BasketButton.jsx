import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ClassNames from 'classnames'

//HOCs
import { connect } from 'react-redux';
//action
import {
    addToBasket,
    removeFromBasket,
} from "../actions";

// style
import '../styles/components/BasketButton.css'



class BasketButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            active:false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        if(this.props.basket.productsID.find(item=>item===this.props.product.id)){
            this.setState({active:true});
        }else {
            this.setState({active:false});
        }
    }

    handleClick(event){
        event.preventDefault();
        this.setState(prevState=>({active: !prevState.active}),()=>
            this.state.active?
                this.props.addToBasket({productsID:this.props.product.id,priceValue:this.props.product.price.value})
                :this.props.removeFromBasket({productsID:this.props.product.id,priceValue:this.props.product.price.value}));
    }

    render() {
        let text =this.state.active?"Remove from Basket":"Add to Basket";
         return(
            <a  onClick={this.handleClick} className={ClassNames('button',{'active':this.state.active})} href="#">{text}</a>
        )
    }
}

const mapStateToProps=(state)=>({
   basket:state.basket,
});
const mapDispatchToProps={
    addToBasket,
    removeFromBasket,
};
BasketButton.propTypes={
    activeButton:PropTypes.func,
    basket:PropTypes.object.isRequired,
};
export default connect(mapStateToProps,mapDispatchToProps)(BasketButton);