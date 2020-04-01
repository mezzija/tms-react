import React, {Component} from 'react';
import PropTypes from 'prop-types';

// component
import Content from './Content.jsx'
import SortButton from "./SortButton.jsx";


import '../styles/components/Main.css'

const  Main=(props)=>{
        return(
            <main className="products container">
                <div className="products__header">
                    <h3>Electronics</h3>
                    <SortButton products={props.products} sortContent={props.sortContent}/>
                </div>
                {props.products.map(item=>(
                    <Content key={item.id} product={item} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket}/>
                ))}
            </main>
        )
};
Main.propTypes={
        products:PropTypes.array,
        addToBasket: PropTypes.func,
        removeFromBasket:PropTypes.func,
};
export default Main;