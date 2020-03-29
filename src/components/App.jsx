import React,{ Component } from 'react';
import { hot } from 'react-hot-loader/root';
//component
import Header from './Header.jsx';
import Main from "./Main.jsx";
//constants
import data from '../constants/catalogData';
//style
import '../styles/components/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            basket:{
                count:0,
                amount:0
            }
        };
        this.addToBasket=this.addToBasket.bind(this);
        this.removeFromBasket=this.removeFromBasket.bind(this);
    }
    addToBasket(product){
        this.setState(prevState=>({
            basket: {
                count: prevState.basket.count+1,
                amount: prevState.basket.amount+product.price.value,
            }
        }))
    }
    removeFromBasket(product){
        this.setState(prevState=>({
            basket: {
                count: prevState.basket.count-1,
                amount: prevState.basket.amount-product.price.value,
            }
        }))
    }
    render() {
        return(
            <React.Fragment>
                <Header basket={this.state.basket}/>
                <Main products={data} addToBasket={this.addToBasket} removeFromBasket={this.removeFromBasket}/>
            </React.Fragment>
        )
    }
}

export default hot(App);