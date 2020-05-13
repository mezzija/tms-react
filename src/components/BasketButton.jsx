import React, {useState, useEffect} from 'react'
import {object} from 'prop-types';
import ClassNames from 'classnames'

//HOCs
import {connect} from 'react-redux';
//action
import {
    addToBasket,
    removeFromBasket,
} from "../actions";

// style
import '../styles/components/BasketButton.css'



const BasketButton = ({
  product,
  basket,
  addToBasket,
  removeFromBasket,
}) => {

    const [active, stateActive] = useState({status:true,loader:false});
    useEffect(() => {
        if (basket.productsID.find(item => item === product.id)) {
            stateActive({status: true,loader: false});
        } else {
            stateActive({status: false,loader: false});
        }

    }, []);
    useEffect(()=>{
        if(active.loader){
            if (active.status) {
                addToBasket({productsID: product.id, priceValue: product.price.value});
            } else {
                removeFromBasket({productsID: product.id, priceValue: product.price.value});
            }
        }
    },[active]);

    const handleClick = (event) => {
        event.preventDefault();
        stateActive(prevState => ({status:!prevState.status,loader: true}));
    }

    let text = active.status ? "Remove from Basket" : "Add to Basket";
    return (
        <a onClick={handleClick} className={ClassNames('button', {'active': active.status})} href="#">{text}</a>
    )

}

BasketButton.displayName='BasketButton';

const mapStateToProps = (state) => ({
    basket: state.basket,
});
const mapDispatchToProps = {
    addToBasket,
    removeFromBasket,
};
BasketButton.propTypes = {
    basket: object.isRequired,
    product:object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BasketButton);