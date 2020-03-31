import React, {Component} from 'react';

import Content from './Content.jsx'



import '../styles/components/Main.css'

const  Main=(props)=>{
        return(
            <main className="products container">
                <div className="products__header">
                    <h3>Electronics</h3>
                    <div>Sort by price: <a id="sort" href="#" className="products__sort">Asc</a></div>
                </div>
                {props.products.map(item=>(
                    <Content key={item.id} product={item} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket}/>
                ))}
            </main>
        )
};
export default Main;