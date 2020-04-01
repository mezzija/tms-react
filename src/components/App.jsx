import React,{ Component } from 'react';
import { hot } from 'react-hot-loader/root';


//component
import Header from './Header.jsx';
import Main from "./Main.jsx";
//constants
import data from '../constants/catalogData';
//style
import '../styles/components/App.css';

//helpers
import sortArray from '../helpers/sortArray';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:sortArray([...data],'desc'),
            basket:{
                count:0,
                amount:0
            }
        };

        this.sortContent=this.sortContent.bind(this);
        this.addToBasket=this.addToBasket.bind(this);
        this.removeFromBasket=this.removeFromBasket.bind(this);
    }
    sortContent (active){
        if (active){
            this.setState(prevState=>({products:sortArray(prevState.products,'asc')}));
        }else {
            this.setState(prevState=>({products:sortArray(prevState.products,'desc')}));
        }
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
                <Header basket={this.state.basket} />
                <Main products={this.state.products} addToBasket={this.addToBasket} removeFromBasket={this.removeFromBasket} sortContent={this.sortContent}/>
            </React.Fragment>
        )
    }
}

export default hot(App);