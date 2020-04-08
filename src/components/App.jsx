import React,{ Component } from 'react';
import { hot } from 'react-hot-loader/root';


//component
import Header from './Header.jsx';
import Main from "./Main.jsx";
import Loader from "./Loader.jsx"

//style
import '../styles/components/App.css';

//helpers
import sortArray from '../helpers/sortArray';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            products:[],
            basket:{
                count:0,
                amount:0
            },
            loading:true,
            valueBYN: [],
            valueUSD:[],
        };

        this.sortContent=this.sortContent.bind(this);
        this.addToBasket=this.addToBasket.bind(this);
        this.removeFromBasket=this.removeFromBasket.bind(this);
        this.currencyProduct=this.currencyProduct.bind(this);
    }
    componentDidMount() {
        fetch('/api/products')
            .then(response=>response.json())
            .then(products=>{
                this.setState({
                    valueBYN:sortArray(products,'desc'),
                    valueUSD:sortArray(products,'desc'),
                    products:sortArray(products,'desc'),
                    loading:false,

                })
            }).catch(err=>console.log(err));
        fetch('https://www.nbrb.by/api/exrates/rates/840?parammode=1')
            .then(response=>response.json())
            .then(currency=>this.setState(prevState=>(
                {
                    valueBYN:prevState.valueBYN.forEach(item=>{
                        item.price.value*=currency.Cur_OfficialRate;
                        item.price.currency='BYN';
                    })
                }
            )))
            .catch(err=>console.log(err));
    }
    currencyProduct(active){
        if(active){
            this.setState(prevState=>({products:prevState.valueBYN}));
        }else {
            this.setState(prevState=>({products:prevState.valueUSD}));
        }
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
            <>
                <Loader active={this.state.loading}/>
                <Header basket={this.state.basket} />
                <Main
                    products={this.state.products}

                    addToBasket={this.addToBasket}
                    removeFromBasket={this.removeFromBasket}
                    sortContent={this.sortContent}
                    currencyProduct={this.currencyProduct}

                />
            </>
        )
    }
}

export default hot(App);