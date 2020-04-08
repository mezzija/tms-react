import React from 'react';

// component
import Content from './Content.jsx';
import SortButton from "./SortButton.jsx";
import  CurrencyButton from "./CurrencyButton.jsx";



import '../styles/components/Main.css'

const  Main=(props)=>{
        return(
            <main className="products container">
                <div className="products__header">
                    <h3>Electronics</h3>
                    <CurrencyButton currencyProduct={props.currencyProduct} />
                    <SortButton products={props.products} sortContent={props.sortContent}/>
                </div>
                {props.products.map(item=>(
                    <Content key={item.id} product={item} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket}/>
                ))}
            </main>
        )
};

export default Main;